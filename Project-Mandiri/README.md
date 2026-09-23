# Project Mandiri
Project ini adalah project mandiri dengan tema "catatan". Website ini menampilkan catatan, membuat catatan, dan menghapus catatan.

## Struktur Folder Project
```
Project-Mandiri \
├── assets \
│   ├── css \
│   │   └── style.css
│   └── js \
│       └── script.js
├── index.html
└── README.md
```

## Penjelasan folder dan file
- `Project-Mandiri` adalah folder root dari project notes ini
- `assets` adalah folder berisi aset yang digunakan oleh website
- `index.html` adalah file halaman html yang akan otomatis dibuka oleh browser
- `READMME.md` adalah file tempat dokumentasi ini
- `css` adalah folder aset css yang berfungsi untuk menambahkan style ke halaman html. Dibuat folder sendiri untuk dikembangkan di kemudian hari
- `js` adalah folder aset javascript yang berfungsi untuk memberikan logika mekanisme web.
- `style.css` adalah file tempat style ditulis. Dihubungkan dengan halaman html melalui `<link rel="stylesheet" href="assets/css/style.css">`
- `script.js` adalah file tempat logika utama ditulis. Untuk saat ini, logika belum perlu dipisahkan karena masih berupa web client-side. Fitur yang ada juga belum banyak.