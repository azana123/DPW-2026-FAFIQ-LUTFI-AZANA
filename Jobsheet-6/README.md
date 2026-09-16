# Jobsheet 6 — Fetch API & JSON

## Perubahan dari Jobsheet 5
- Tambah `data/buku.json` (10 objek) dan `data/anggota.json` (4 objek) sebagai pengganti sementara API sungguhan.
- `buku/list.html` & `anggota/list.html`: `<tbody>` dikosongkan, baris kini dirender dinamis oleh `assets/js/buku.js` / `assets/js/anggota.js` menggunakan `fetch` + `async/await`.
- Loading indicator (`#loading-indicator`) tampil selama proses fetch (disimulasikan dengan delay 600ms).
- Penanganan error (`try/catch`) menampilkan pesan di dalam tabel bila fetch gagal.
- `app.js`: `initHapusConfirm` diubah ke **event delegation** (`document.addEventListener("click", ...)`) karena tombol Hapus sekarang berada di baris yang dibuat setelah halaman selesai dimuat.

## Struktur Folder
```
Jobsheet6
├── anggota
│   ├── list.html
│   └── tambah.html
├── assets
│   ├── css
│   │   └── style.css
│   └── js
│       ├── anggota.js
│       ├── app.js
│       └── buku.js
├── buku
│   ├── list.html
│   └── tambah.html
├── data
│   ├── anggota.json
│   └── buku.json
├── docs
│   └── wireframe.md
├── index.html
└── README.md
```

## Catatan
- Uji error handling dengan mengganti sementara nama file di `fetch(...)` menjadi nama yang salah.
- Pola `fetch` + `async/await` di sini akan dipakai ulang untuk memanggil endpoint PHP sungguhan mulai Jobsheet 9 (setelah back-end PostgreSQL siap di Jobsheet 8), meskipun mulai Jobsheet 7 rendering utama berpindah ke server-side PHP.

## Penambahan tombol refresh
Menambahkan tombol refresh untuk memuat ulang data dengan cara memanggil method muatDaftarAnggota ketika tombol refresh diklik. Method tersebut aman untuk dipanggil berkali kali karena tbody di-set ="" atau kosong, jadi data tidak akan ter-display 2 kali.
