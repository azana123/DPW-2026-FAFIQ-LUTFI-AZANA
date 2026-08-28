## NAMA     : FAFIQ LUTFI AZANA
## KELAS    : TI-2F
## NIM      : 254107020058

## 📌LAPORAN JOBSHEET 1
### - 1.1 STRUKTUR FOLDER📌
```
Jobsheet-1
    ├───index.html
    │   
    ├───Anggota
    │       ├───list.html
    │       ├───tambah.html
    │       
    ├───Buku
    │       ├───list.html
    │       ├───tambah.html
    │       
    └───Dokumentasi
            ├───Laporan-Jobsheet-1.md
```
Struktur folder diatas dibagi menjadi 4 bagian:
#### 1.1.1 index.html
File ```index.html``` adalah file yang pertama kali dibuka atau dibaca oleh web browser ketika seseorang membuka suatu alamat website. File ini berisi halaman home-page atau tampilan depan dari suatu website. Oleh karena itu, file ```index.html``` harus berada tepat satu level dibawah folder project.

#### 1.1.2 Anggota
Folder ```Anggota``` adalah folder yang menyimpan file halaman web untuk fitur yang berkaitan dengan anggota. Penamaan folder biasanya mengacu pada suatu objek yang berkaitan dengan fungsi website itu sendiri. Pada kasus ini, folder ```Anggota``` menyimpan file ```list.html``` dan ```tambah.html``` dimana ```list.html``` adalah halaman yang menampilkan daftar anggota dan ```tambah.html``` adalah halaman folmulir untuk menambah anggota.
#### 1.1.3 Buku
Folder ```Buku``` adalah folder yang menyimpan file halaman yang berkaitan dengan objek buku. Di dalamnya ada file ```list.html``` yang berisi halaman yang menampilkan daftar buku dan informasi terkait buku seperti judul, pengarang, tahun terbit, stok dll. Sedangkan file ```tambah.html``` adalah file halaman yang berisi formulir untuk menambah koleksi buku yang ada di perpustakaan.
#### 1.1.4 Dokumentasi
Folder ini berisi laporan jobsheet ini. Pada project nyata, folder dokumentasi biasanya berisi tentang detail dari project itu sendiri, seperti struktur folder, flowchart, pseudocode, diagram, dll.
### - 1.2 RANGKUMAN📌
#### - 1.2.1 HTML
HTML adalah singkatan dari "hyper text mark-up language". HTML merupakan file mark-up standar untuk halaman web. HTML pertamakali diciptakan oleh Tim Berners-Lee pada tahun 1991. HTML adalah kerangka dari sebuah halaman web yang mengatur elemen yang ingin ditampilkan dan layout nya. Sampai hari ini, HTML sampai pada versi HTML5 yang dirilis pada tahun 2014 yang mulai menerapkan SEMANTIC TAG.
#### - 1.2.2 TAG HTML
Halaman HTML ditulis di dalam tag ```<html></html>```. ```<html>``` adalah tag pembuka dan ```</html>``` adalah tag penutup dimana seluruh kode halaman HTML ditulis diantara tag pembuka dan tag penutup. Beberapa tag HTML tidak memiliki tag penutup seperti ```<img>```.
#### - 1.2.3 ELEMEN HTML
Elemen HTML adalah suatu struktur yang terdiri dari tag pembuka, isi konten, dan tag penutup. Elemen HTML dapat dibagi menjadi dua:
##### - BLOCK-LEVEL ELEMENTS
Adalah jenis elemen HTML yang selalu mengambil seluruh lebar halaman sehingga selalu memulai di baris baru seperti ```<p>```, ```<div>```, dan ```<h1>``` hingga ```<h6>```.
##### - INLINE ELEMENTS
Adalah jenis elemen HTML yang hanya mengambil ruang secukupnya sesuai ukuran kontennya sehingga tidak selalu membuat baris baru. Contohnya adalah ```<span>``` dan  ```<a>```.
#### - 1.2.4 SEMANTIC TAG
Semantic Tag adalah tag HTML yang menggambarkan makna dan fungsi dari isi konten yang ada di dalamnya baik kepada browser maupun developer. Semantic tag ditambahkan pada versi HTML5 yang dirilis pada tahun 2014. Contoh penggunaan semantic tag ada pada struktur HTML yang digunakan pada jobsheet 1:
```
<!DOCTYPE html>
<html lang="id">
<head>
    
</head>
<body>
    <header>
        INI HEADER
    </header>

    <main>
        INI KONTEN UTAMA
    </main>

    <footer>
        INI FOOTER
    </footer>
</body>
</html>
```
Di dalam tag ```<body>``` pada struktur HTML diatas, terdapat tiga tag yang merepresentasikan makna dari isi konten di dalamnya. Tag ```<Head>``` berisi header dari halaman web, tag ```<main>``` berisi konten utama dari halaman web, dan tag ```<footer>``` berisi footer dari halaman web. Ketiga tag tersebut disebut merepresentasikan makna dan fungsi dari isi konten didalamnya, dimana sebelum adanya semantic tag, developer menggunakan tag yang tidak memiliki konteks seperti ```<div>``` dan ```<span>```.