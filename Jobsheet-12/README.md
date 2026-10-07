# Jobsheet 12 — Integrasi Modul Peminjaman

Sub-CPMK: Mengintegrasikan front-end dan back-end proyek secara utuh.

## Perubahan dari Jobsheet 11
- Tambah `sql/03_peminjaman.sql` — tabel `peminjaman` (relasi ke `buku` dan `anggota`), melengkapi ERD yang sudah dirancang di Jobsheet 8.
- Tambah modul **Peminjaman** (menghubungkan seluruh entitas yang sudah dibangun sejak Jobsheet 8-10 sekaligus):
  - `peminjaman/tambah.php` + `proses_tambah.php`: pilih anggota + buku (dropdown hanya `stok > 0`), simpan transaksi **dan** kurangi stok buku dalam satu **transaction** (`beginTransaction`/`commit`/`rollBack`) dengan `SELECT ... FOR UPDATE` untuk mencegah race condition stok.
  - `peminjaman/kembali.php` + `proses_kembali.php`: daftar transaksi aktif (`status = 'dipinjam'`), tombol Kembalikan menambah kembali stok buku dalam transaction serupa.
  - `peminjaman/riwayat.php`: histori peminjaman per anggota (JOIN `peminjaman` + `buku`).
- `includes/header.php`: navbar menambahkan menu Peminjaman Baru, Pengembalian, Riwayat (hanya saat login).
- `index.php`: kartu "Sedang Dipinjam" kini `COUNT(*) FROM peminjaman WHERE status = 'dipinjam'` (sebelumnya statis `0`).

## Menambahkan modul pemiinjaman
### peminjaman/kembali.php
```
<?php
require __DIR__ . '/../includes/auth.php';
$page_title = "Pengembalian Buku";
include __DIR__ . '/../includes/header.php';
require __DIR__ . '/../includes/koneksi.php';

$flash = $_SESSION['flash'] ?? null;
unset($_SESSION['flash']);

$keyword = trim($_GET['q'] ?? '');

$sqlDasar = "SELECT p.id, b.judul, a.nama, p.tanggal_pinjam
             FROM peminjaman p
             JOIN buku b ON b.id = p.buku_id
             JOIN anggota a ON a.id = p.anggota_id
             WHERE p.status = 'dipinjam'";

if ($keyword !== '') {
    $stmt = $pdo->prepare($sqlDasar . " AND (b.judul ILIKE :kw OR a.nama ILIKE :kw) ORDER BY p.tanggal_pinjam");
    $stmt->execute(['kw' => '%' . $keyword . '%']);
} else {
    $stmt = $pdo->query($sqlDasar . " ORDER BY p.tanggal_pinjam");
}
$daftarAktif = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
        <section>
            <h2>Pengembalian Buku</h2>

            <?php if ($flash): ?>
                <p class="flash flash-<?php echo $flash['type']; ?>"><?php echo e($flash['pesan']); ?></p>
            <?php endif; ?>

            <div class="search-box">
                <form method="get" action="kembali.php">
                    <span>
                        <label for="search-input">Cari anggota/buku</label><br>
                        <input type="text" id="search-input" name="q" value="<?php echo e($keyword); ?>" placeholder="Nama anggota atau judul buku...">
                    </span>
                    <button type="submit">Cari</button>
                </form>
            </div>

            <div class="table-responsive">
            <table>
                <thead>
                    <tr>
                        <th>Anggota</th>
                        <th>Buku</th>
                        <th>Tgl Pinjam</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <?php if (empty($daftarAktif)): ?>
                    <tr>
                        <td colspan="4">Tidak ada peminjaman aktif.</td>
                    </tr>
                    <?php else: ?>
                        <?php foreach ($daftarAktif as $trx): ?>
                        <tr>
                            <td><?php echo e($trx['nama']); ?></td>
                            <td><?php echo e($trx['judul']); ?></td>
                            <td><?php echo $trx['tanggal_pinjam']; ?></td>
                            <td>
                                <form method="post" action="proses_kembali.php">
                                    <?php echo csrf_field(); ?>
                                    <input type="hidden" name="id" value="<?php echo $trx['id']; ?>">
                                    <button type="submit">Kembalikan</button>
                                </form>
                            </td>
                        </tr>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </tbody>
            </table>
            </div>
        </section>
<?php include __DIR__ . '/../includes/footer.php'; ?>
```

### peminjaman/proses_kembali.php
```
<?php
require __DIR__ . '/../includes/auth.php';
require __DIR__ . '/../includes/csrf.php';
require __DIR__ . '/../includes/koneksi.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: kembali.php');
    exit;
}

csrf_verify();

$id = $_POST['id'] ?? null;
if (!$id) {
    header('Location: kembali.php');
    exit;
}

try {
    $pdo->beginTransaction();

    $stmt = $pdo->prepare("SELECT buku_id, status FROM peminjaman WHERE id = :id FOR UPDATE");
    $stmt->execute(['id' => $id]);
    $trx = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$trx || $trx['status'] !== 'dipinjam') {
        throw new Exception('Transaksi tidak ditemukan atau sudah dikembalikan.');
    }

    $updatePeminjaman = $pdo->prepare(
        "UPDATE peminjaman SET status = 'dikembalikan', tanggal_kembali = CURRENT_DATE WHERE id = :id"
    );
    $updatePeminjaman->execute(['id' => $id]);

    $updateBuku = $pdo->prepare("UPDATE buku SET stok = stok + 1 WHERE id = :buku_id");
    $updateBuku->execute(['buku_id' => $trx['buku_id']]);

    $pdo->commit();
    $_SESSION['flash'] = ['type' => 'success', 'pesan' => 'Buku berhasil dikembalikan.'];
} catch (Exception $e) {
    $pdo->rollBack();
    $_SESSION['flash'] = ['type' => 'error', 'pesan' => 'Gagal memproses pengembalian: ' . $e->getMessage()];
}

header('Location: kembali.php');
exit;
```

### peminjaman/proses_tambah.php
```
<?php
require __DIR__ . '/../includes/auth.php';
require __DIR__ . '/../includes/csrf.php';
require __DIR__ . '/../includes/koneksi.php';

csrf_verify();

$anggotaId = $_POST['anggota_id'] ?? '';
$bukuId = $_POST['buku_id'] ?? '';

if ($anggotaId === '' || $bukuId === '') {
    $_SESSION['flash'] = ['type' => 'error', 'pesan' => 'Anggota dan buku wajib dipilih.'];
    header('Location: tambah.php');
    exit;
}

try {
    $pdo->beginTransaction();

    // Kunci baris buku (FOR UPDATE) agar stok tidak berubah oleh transaksi lain
    // di tengah proses ini — mencegah stok menjadi negatif akibat race condition.
    $cek = $pdo->prepare("SELECT stok FROM buku WHERE id = :id FOR UPDATE");
    $cek->execute(['id' => $bukuId]);
    $buku = $cek->fetch(PDO::FETCH_ASSOC);

    if (!$buku || $buku['stok'] < 1) {
        throw new Exception('Stok buku tidak tersedia.');
    }

    $insert = $pdo->prepare(
        "INSERT INTO peminjaman (buku_id, anggota_id, tanggal_pinjam, status)
         VALUES (:buku_id, :anggota_id, CURRENT_DATE, 'dipinjam')"
    );
    $insert->execute(['buku_id' => $bukuId, 'anggota_id' => $anggotaId]);

    $update = $pdo->prepare("UPDATE buku SET stok = stok - 1 WHERE id = :id");
    $update->execute(['id' => $bukuId]);

    $pdo->commit();

    $_SESSION['flash'] = ['type' => 'success', 'pesan' => 'Peminjaman berhasil dicatat.'];
    header('Location: ../index.php');
    exit;
} catch (Exception $e) {
    $pdo->rollBack();
    $_SESSION['flash'] = ['type' => 'error', 'pesan' => 'Gagal mencatat peminjaman: ' . $e->getMessage()];
    header('Location: tambah.php');
    exit;
}
```

### peminjaman/riwayat.php
```
<?php
require __DIR__ . '/../includes/auth.php';
$page_title = "Riwayat Peminjaman";
include __DIR__ . '/../includes/header.php';
require __DIR__ . '/../includes/koneksi.php';

$anggotaId = $_GET['anggota_id'] ?? '';
$daftarAnggota = $pdo->query("SELECT * FROM anggota ORDER BY nama")->fetchAll(PDO::FETCH_ASSOC);

$riwayat = [];
$anggotaTerpilih = null;

if ($anggotaId !== '') {
    $stmtA = $pdo->prepare("SELECT * FROM anggota WHERE id = :id");
    $stmtA->execute(['id' => $anggotaId]);
    $anggotaTerpilih = $stmtA->fetch(PDO::FETCH_ASSOC);

    if ($anggotaTerpilih) {
        $stmt = $pdo->prepare(
            "SELECT b.judul, p.tanggal_pinjam, p.tanggal_kembali, p.status
             FROM peminjaman p
             JOIN buku b ON b.id = p.buku_id
             WHERE p.anggota_id = :id
             ORDER BY p.tanggal_pinjam DESC"
        );
        $stmt->execute(['id' => $anggotaId]);
        $riwayat = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
?>
        <section>
            <h2>Riwayat Peminjaman</h2>

            <form method="get" action="riwayat.php">
                <p>
                    <label for="anggota_id">Pilih Anggota</label><br>
                    <select id="anggota_id" name="anggota_id">
                        <option value="">-- Pilih Anggota --</option>
                        <?php foreach ($daftarAnggota as $anggota): ?>
                        <option value="<?php echo $anggota['id']; ?>" <?php echo (string) $anggotaId === (string) $anggota['id'] ? 'selected' : ''; ?>>
                            <?php echo e($anggota['nama']); ?>
                        </option>
                        <?php endforeach; ?>
                    </select>
                </p>
                <p>
                    <button type="submit">Tampilkan</button>
                </p>
            </form>

            <?php if ($anggotaTerpilih): ?>
            <h3>Riwayat &mdash; <?php echo e($anggotaTerpilih['nama']); ?></h3>
            <div class="table-responsive">
            <table>
                <thead>
                    <tr>
                        <th>Buku</th>
                        <th>Pinjam</th>
                        <th>Kembali</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <?php if (empty($riwayat)): ?>
                    <tr>
                        <td colspan="4">Belum ada riwayat peminjaman.</td>
                    </tr>
                    <?php else: ?>
                        <?php foreach ($riwayat as $r): ?>
                        <tr>
                            <td><?php echo e($r['judul']); ?></td>
                            <td><?php echo $r['tanggal_pinjam']; ?></td>
                            <td><?php echo $r['tanggal_kembali'] ?? '-'; ?></td>
                            <td><?php echo $r['status'] === 'dipinjam' ? 'Dipinjam' : 'Selesai'; ?></td>
                        </tr>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </tbody>
            </table>
            </div>
            <?php endif; ?>
        </section>
<?php include __DIR__ . '/../includes/footer.php'; ?>
```

### peminjaman/tambah.php
```
<?php
require __DIR__ . '/../includes/auth.php';
$page_title = "Peminjaman Baru";
include __DIR__ . '/../includes/header.php';
require __DIR__ . '/../includes/koneksi.php';

$flash = $_SESSION['flash'] ?? null;
unset($_SESSION['flash']);

$daftarAnggota = $pdo->query("SELECT * FROM anggota ORDER BY nama")->fetchAll(PDO::FETCH_ASSOC);
$daftarBukuTersedia = $pdo->query("SELECT * FROM buku WHERE stok > 0 ORDER BY judul")->fetchAll(PDO::FETCH_ASSOC);
?>
        <section>
            <h2>Peminjaman Buku Baru</h2>

            <?php if ($flash): ?>
                <p class="flash flash-<?php echo $flash['type']; ?>"><?php echo e($flash['pesan']); ?></p>
            <?php endif; ?>

            <?php if (empty($daftarAnggota)): ?>
                <p class="flash flash-error">Belum ada data anggota. Tambahkan anggota terlebih dahulu.</p>
            <?php elseif (empty($daftarBukuTersedia)): ?>
                <p class="flash flash-error">Tidak ada buku dengan stok tersedia saat ini.</p>
            <?php else: ?>
            <form method="post" action="proses_tambah.php">
                <?php echo csrf_field(); ?>
                <p>
                    <label for="anggota_id">Anggota</label><br>
                    <select id="anggota_id" name="anggota_id" required>
                        <option value="">-- Pilih Anggota --</option>
                        <?php foreach ($daftarAnggota as $anggota): ?>
                        <option value="<?php echo $anggota['id']; ?>">
                            <?php echo e($anggota['nama']); ?> (<?php echo e($anggota['no_anggota']); ?>)
                        </option>
                        <?php endforeach; ?>
                    </select>
                </p>
                <p>
                    <label for="buku_id">Buku (hanya yang stoknya tersedia)</label><br>
                    <select id="buku_id" name="buku_id" required>
                        <option value="">-- Pilih Buku --</option>
                        <?php foreach ($daftarBukuTersedia as $buku): ?>
                        <option value="<?php echo $buku['id']; ?>">
                            <?php echo e($buku['judul']); ?> (stok: <?php echo $buku['stok']; ?>)
                        </option>
                        <?php endforeach; ?>
                    </select>
                </p>
                <p>
                    <button type="submit">Simpan Peminjaman</button>
                </p>
            </form>
            <?php endif; ?>
        </section>
<?php include __DIR__ . '/../includes/footer.php'; ?>
```