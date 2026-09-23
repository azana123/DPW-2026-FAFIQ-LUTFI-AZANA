# Jobsheet 7 — PHP Dasar & Form Handling

Sub-CPMK: Mengimplementasikan dasar PHP & pengolahan form.

## Perubahan dari Jobsheet 6
- Mengubah semua halaman HTML menjadi .php file
- Menambahkan folder includes yang berisi file template footer dan header yang dipanggil di semua html. Link menuju halaman lain juga otomatis menyesuaikan level file terhadap root tanpa perlu merubah secara manual
```
<?php
session_start();

$__jobsheetRoot = dirname(__DIR__);
$__scriptDir = dirname($_SERVER['SCRIPT_FILENAME']);
$__rel = ltrim(str_replace('\\', '/', substr($__scriptDir, strlen($__JobsheetRoot))), '/');
$base = $__rel === '' ? '' : str_repeat('../', substr_count($__rel, '/') + 1);
?>
```
- 

## Struktur Folder Jobsheet 7
```
Jobsheet-7
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
|   └── wireframe.md
├── includes
│   ├── footer.php
│   └── header.php
├── index.php
└── README.md
```