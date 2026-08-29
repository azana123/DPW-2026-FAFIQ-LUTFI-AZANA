## LAPORAN JOBSHEET 1 - SEMANTIC TAG
Semantic Tag adalah Tag HTML yang mendeskripsikan dengan jelas makna dan fungsi dari tag tersebut. Misalnya pada praktikum jobsheet 1 terdapat tag ```<header>```, ```<main>```, dan ```<footer>``` yang mendeskripsikan bagian dari halaman web.
### 📁STRUKTUR FOLDER
```
Jobsheet-1
   │   index.html
   │   README.md
   │   
   ├───Anggota
   │       list.html
   │       tambah.html
   │       
   └───Buku
           list.html
           tambah.html
```

### 🌐SEMANTIC SKELETON
Pada praktikum jobsheet-1, project yang dibuat bernama "SIMPUS-Mini" (sistem informasi perpustakaan mini). SIMPUS-Mini menerapkan semantic tag untuk memisahkan section pada halaman web.
```
html
└── body
    ├── header
    │   └── navigation
    │
    ├── main
    │   └── main content
    │
    └── footer
```

### LATIHAN REFLEKTIF
1. Kenapa field "Alamat" dan "No. HP" tidak diberi `required`, sedangkan
   "Nama" dan "No. Anggota" diberi?
        
        Karena field Alamat dan No. HP bersifat opsional karena data nama dan No. HP sudah cukup.

2. Apa yang akan terjadi (di browser) kalau kamu klik tombol "Simpan"
   tanpa mengisi field "Nama"? Coba buka filenya di browser dan praktikkan.

        Akan muncul peringatan untuk mengisi field nama karena field nama memiliki atribut 'required'.

3. Form ini juga **belum punya `action`** pada tag `<form>`-nya — apa
   dampaknya saat tombol "Simpan" ditekan?
        
        Ketika ditekan, halaman web akan di-reload oleh browser tanpa mengirim data apapun