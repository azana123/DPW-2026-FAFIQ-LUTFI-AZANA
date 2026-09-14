# Jobsheet 5 — JavaScript DOM & Event

## Perubahan dari Jobsheet 4
- Tambah `assets/js/app.js`.
- Hamburger menu: checkbox hack (CSS) diganti tombol + JS (`nav.classList.toggle("nav-open")`).
- Form Tambah Buku & Tambah Anggota: validasi client-side (`initValidasiForm`) — field wajib, rentang tahun, stok non-negatif — pesan error tampil inline via manipulasi DOM (`insertAdjacentElement`).
- Tabel Daftar Buku & Daftar Anggota: kolom pencarian real-time (`initTableFilter`) yang menyaring baris via `keyup`.
- Tombol Hapus (`.btn-hapus`): menampilkan `confirm()` lalu menghapus baris dari tampilan (masih front-end saja, belum ke server).
- Menambahkan Animasi untuk header nav supaya navbar muncul dengan halus
```
header nav {
    display: block;
    width: 100%;
    order: 3;
    margin-top: 0;
    
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    
    /* Transisi navbar mobile */
    transition: max-height 0.4s ease-in-out, 
                opacity 0.3s ease-in-out, 
                margin-top 0.4s ease-in-out;
    }

header nav.nav-open {
    max-height: 300px;
    opacity: 1;
    margin-top: 1rem;
}
```

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
