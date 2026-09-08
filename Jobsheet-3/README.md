# Jobsheet 3 — Responsive Design

Sub-CPMK: Membangun tampilan responsif.

## Perubahan dari Jobsheet 2
- Tambah `<meta name="viewport">` di semua halaman.
- Navbar: hamburger menu memakai teknik **checkbox hack** murni CSS (`input[type=checkbox] + label`), aktif di layar ≤480px.
- Tabel dibungkus `<div class="table-responsive">` agar bisa di-scroll horizontal di layar sempit.
- Tambah media query di `style.css`: grid kartu statistik 3 → 2 → 1 kolom mengikuti breakpoint tablet/mobile.


## Struktur Folder
```
Jobsheet-3
├── anggota
│   ├── list.html
│   └── tambah.html
├── assets
│   └── css
│       └── style.css
├── buku
│   ├── list.html
│   └── tambah.html
├── index.html
└── README.md
```
