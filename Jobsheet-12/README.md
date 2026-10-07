# Jobsheet 11 — Keamanan Web Dasar

Sub-CPMK: Menerapkan prinsip keamanan web dasar.

## Perubahan dari Jobsheet 10
- Tambah `includes/helpers.php` (`e()` untuk `htmlspecialchars`) dan `includes/csrf.php` (`csrf_token()`, `csrf_field()`, `csrf_verify()`), keduanya di-`require_once` dari `includes/header.php`.
- **XSS**: seluruh output data dari database/`$_GET` (judul, pengarang, nama, alamat, no_hp, nilai pencarian, nama petugas di navbar) dibungkus `e()`.
- **CSRF**: token tersembunyi ditambahkan ke semua form POST (Tambah/Edit/Hapus Buku & Anggota, Login, Register); setiap `proses_*.php` dan `hapus.php` memanggil `csrf_verify()` sebelum menyentuh database.
- **Session fixation**: `session_regenerate_id(true)` dipanggil di `auth/proses_login.php` setelah login berhasil.
- **SQL Injection**: diaudit ulang (tidak ada perubahan kode — sejak Jobsheet 8 semua query sudah prepared statement).
- Tambah `docs/security-checklist.md` — dokumen audit lengkap dengan bukti before/after per kerentanan.

## Penambahan File Baru
### Tambah includes/helpers.php
```
<?php

function e($value)
{
    return htmlspecialchars((string) ($value ?? ''), ENT_QUOTES, 'UTF-8');
}
```

### Tambah csrf.php
```
<?php

function csrf_token()
{
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

function csrf_field()
{
    return '<input type="hidden" name="csrf_token" value="' . csrf_token() . '">';
}

function csrf_verify()
{
    $token = $_POST['csrf_token'] ?? '';
    if ($token === '' || !hash_equals($_SESSION['csrf_token'] ?? '', $token)) {
        http_response_code(403);
        die('Permintaan ditolak: token CSRF tidak valid atau kedaluwarsa.');
    }
}
```

### Tambah security_checklist.md
Berisi file audit keamanan yang telah diubah

## Struktur Folder
```
Jobsheet-11
├── anggota
│   ├── edit.php
│   ├── hapus.php
│   ├── list.php
│   ├── proses_edit.php
│   ├── proses_tambah.php
│   └── tambah.php
├── assets
│   ├── css
│   │   └── style.css
│   └── js
│       └── app.js
├── auth
│   ├── login.php
│   ├── logout.php
│   ├── proses_login.php
│   ├── proses_register.php
│   └── register.php
├── buku
│   ├── edit.php
│   ├── hapus.php
│   ├── list.php
│   ├── proses_edit.php
│   ├── proses_tambah.php
│   └── tambah.php
├── docs
│   ├── security-checklist.md
│   └── wireframe.md
├── includes
│   ├── auth.php
│   ├── csrf.php
│   ├── footer.php
│   ├── header.php
│   ├── helpers.php
│   └── konseksi.php
├── index.php
├── README.md
└── sql
    ├── 01_buku_anggota.sql
    └── 02_users.sql
```