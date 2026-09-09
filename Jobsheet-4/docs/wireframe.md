| Keterangan | Detail |
| :--- | :--- |
| **Nama** | Fafiq Lutfi Azana |
| **Kelas** | 2F/TI |
| **Absen** | 12 |
| **NIM** | 254107020058|

## Aktor
- **Tamu**: hanya bisa melihat katalog buku (Beranda, Daftar Buku) tanpa login.
- **Petugas**: login untuk mengakses seluruh fitur CRUD dan transaksi peminjaman.

## User Flow
### User Flow - Login
```
[Masuk halaman login] -> [Masukan username/email dan password] -> [Cek kredensial] ->
     (jika valid) -> [Arahkan ke dashboard]
     (jika tidak valid) -> [Tampilkan pesan password/username salah] -> [Kembali ke halaman login]
```

### User Flow - Registrasi Petugas
```
[Masuk ke halaman registrasi] -> [Mengisi formulir data] -> [Membuat password] ->
[Masukan ulang password] -> [Password sesuai?] -> 
    (Jika sesuai) -> [Tampilkan pesan registrasi berhasil] -> [Masuk halaman login] 
    (Jika salah) -> [Buat ulang password] 
```

### User Flow - Lupa Password
```
[Masuk ke halaman lupa password] -> [Mengisi email/username] -> [Tampilkan pesan kode verifikasi email telah dikirimkan] ->
[Masukan kode verifikasi] -> [Cek kesesuaian] ->
    (Jika sesuai) -> [Masukan password baru] -> [Masukan ulang password] -> 
        (jika sesuai) -> [Password berhasil diganti]
        (jika tidak sesuai -> [Tampilkan pesan password tidak sesuai] -> [Masukan ulang password baru]
    (Jika tidak sesuai) -> [Masukan ulang kode]
```

### User Flow — Peminjaman Buku
```
[Petugas login] -> [Dashboard] -> [Pilih menu "Peminjaman Baru"]
        -> [Pilih anggota] -> [Pilih buku (stok > 0)]
        -> [Simpan] -> [Stok buku berkurang 1] -> [Kembali ke dashboard]
```

### User Flow — Pengembalian Buku
```
[Dashboard] -> [Menu "Pengembalian"] -> [Cari transaksi aktif (anggota/buku)]
        -> [Tandai "Dikembalikan"] -> [Stok buku bertambah 1]
        -> [Kembali ke Dashboard]
```

## Wireframe
### Wiredrame Login
```
+-------------------------------------------------------+
|                                                       |
|                   [ SIMPUS-Mini ]                     |
|                                                       |
|                  Selamat Datang                       |
|                                                       |
|                                                       |
|  +-------------------------------------------------+  |
|  | Username / Email                                |  |
|  | [ masukkan username atau email...          ]    |  |
|  |                                                 |  |
|  | Password                                        |  |
|  | [ masukkan password...                     ]    |  |
|  |                                                 |  |
|  |                [ Lupa Password? ]               |  |
|  |                                                 |  |
|  | +---------------------------------------------+ |  |
|  | |                  Login                      | |  |
|  | +---------------------------------------------+ |  |
|  |                                                 |  |
|  |       Belum punya akun? [ Registrasi ]          |  |
|  +-------------------------------------------------+  |
|                                                       |
+-------------------------------------------------------+
```

### Wireframe Dashboard Petugas
```
+---------------------------------------------------------------------------------+
| SIMPUS-Mini      Beranda | Buku | Anggota | Peminjaman | (Nama Petugas) Logout  |
|---------------------------------------------------------------------------------|
|  [Total Buku]   [Total Anggota]   [Sedang Dipinjam]                             |
|                                                                                 |
|  Aksi Cepat:                                                                    |
|  [ + Peminjaman Baru ]   [ + Pengembalian ]                                     |
|                                                                                 |
|  Transaksi Terbaru                                                              |
|  -------------------------------------------------------------------------------|
|  Anggota | Buku | Tgl Pinjam | Status                                           |
+---------------------------------------------------------------------------------+
```

### Wireframe Form Peminjaman
```
+--------------------------------------+
|  Form Peminjaman Buku                |
|--------------------------------------|
|  Anggota : [ dropdown pilih anggota ]|
|  Buku    : [ dropdown, hanya stok>0 ]|
|  Tanggal Pinjam : [ auto: hari ini ] |
|                                      |
|          [  Simpan Peminjaman  ]     |
+--------------------------------------+
```

### Wireframe Form Pengembalian
```
+---------------------------------------------+
|  Pengembalian Buku                          |
|---------------------------------------------|
|  Cari transaksi aktif:                      |
|  [ nama anggota / judul buku ______ ]       |
|                                             |
|  Anggota | Buku | Tgl Pinjam | [Kembalikan] |
+---------------------------------------------+
```

### Wireframe Riwayat Peminjaman per Anggota
```
+--------------------------------------+
|  Riwayat Peminjaman — Siti Aminah                     |
|-------------------------------------------------------|
|  Buku              | Pinjam   | Kembali | Status      |
|  Laskar Pelangi    | 01/07    | 10/07   | Selesai     |
|  Bumi Manusia      | 15/07    | -       | Dipinjam    |
+-------------------------------------------------------+
```

### Wireframe Registrasi Petugas
```
+-----------------------------------------------------------------------+
|  [Logo Aplikasi/Brand]                                                |
|                                                                       |
|  ## Buat Akun Baru                                                    |
|  Sudah punya akun? [Masuk di sini]                                    |
|                                                                       |
|  -------------------------------------------------------------------  |
|                                                                       |
|  Nama Lengkap                                                         |
|  [ Input: Contoh: Budi Santoso                                      ] |
|                                                                       |
|  Alamat Email                                                         |
|  [ Input: name@email.com                                            ] |
|                                                                       |
|  Nomor Telepon / WhatsApp                                             |
|  [ +62 | Input: 81234567890                                         ] |
|                                                                       |
|  Kata Sandi                                                           |
|  [ Input: Minimal 8 karakter, kombinasi huruf & angka       ] [Show]  |
|                                                                       |
|  Konfirmasi Kata Sandi                                                |
|  [ Input: Ulangi kata sandi                                 ] [Show]  |
|                                                                       |
|  -------------------------------------------------------------------  |
|                                                                       |
|  [x] Saya menyetujui [Syarat & Ketentuan] serta [Kebijakan Privasi].  |
|                                                                       |
|  [                            DAFTAR                                ] |
|                                                                       |
+-----------------------------------------------------------------------+
```
