# Jobsheet 5 — JavaScript DOM & Event

## Perubahan dari Jobsheet 4
- Tambah `assets/js/app.js`.
- Hamburger menu: checkbox hack (CSS) diganti tombol + JS (`nav.classList.toggle("nav-open")`).
- Form Tambah Buku & Tambah Anggota: validasi client-side (`initValidasiForm`) — field wajib, rentang tahun, stok non-negatif — pesan error tampil inline via manipulasi DOM (`insertAdjacentElement`).
- Tabel Daftar Buku & Daftar Anggota: kolom pencarian real-time (`initTableFilter`) yang menyaring baris via `keyup`.
- Tombol Hapus (`.btn-hapus`): menampilkan `confirm()` lalu menghapus baris dari tampilan (masih front-end saja, belum ke server).

## Struktur Folder
```
Jobsheet-5
├── anggota
│   ├── list.html
│   └── tambah.html
├── assets
│   ├── css
│   │   └── style.css
│   └── js
│       └── app.js
├── buku
│   ├── list.html
│   └── tambah.html
├── docs
│   └── wireframe.md
├── index.html
└── README.md
```
