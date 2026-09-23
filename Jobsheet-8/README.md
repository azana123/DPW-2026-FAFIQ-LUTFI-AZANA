# Jobsheet 8 — Koneksi PostgreSQL

## Perubahan dari Jobsheet 7
- Tambah `sql/01_buku_anggota.sql` — DDL tabel `buku` dan `anggota` (ERD dasar).
- Tambah `includes/koneksi.php` — koneksi `PDO` driver `pgsql`.
- `buku/proses_tambah.php` & `anggota/proses_tambah.php`: `$_SESSION['buku'][] = ...` (Jobsheet 7) diganti `INSERT ... RETURNING id` via prepared statement.
- `buku/list.php` & `anggota/list.php`: sumber data diganti dari `$_SESSION` menjadi `SELECT * FROM ... ORDER BY id DESC`.
- `index.php`: kartu statistik Total Buku/Anggota kini `SELECT COUNT(*)` dari database (bukan dummy/session lagi).

## Persiapan database
1. Melakukan instalasi dan setup postgresql18 di dalam void linux
2. Menggunakan server bawaan php. Sebelum menjalankan web harus menjalankan `php -S localhost:8000` 
3. Untuk mengetes perlu membuka `http:localhost:8000/index.php` (http tanpa s)

## Struktur Folder
```
Jobsheet-8
├── anggota
│   ├── list.php
│   ├── proses_tambah.php
│   └── tambah.php
├── assets
│   ├── css
│   │   └── style.css
│   └── js
│       └── app.js
├── buku
│   ├── list.php
│   ├── proses_tambah.php
│   └── tambah.php
├── docs
│   └── wireframe.md
├── includes
│   ├── footer.php
│   ├── header.php
│   └── koneksi.php
├── index.php
├── README.md
└── sql
    └── 01_buku_anggota.sql
```