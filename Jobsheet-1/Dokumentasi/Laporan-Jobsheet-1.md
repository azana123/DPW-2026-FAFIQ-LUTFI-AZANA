## 📌Requirement
1. Code editor (bisa menggunakan Visual Studio Code, vim, Note pad, dll)
2. Extension Live Server (opsional)
3. Git
4. Web Browser

## 📌1.0 Pengenalan HTML
HTML (hyper text markup language) adalah bahasa markup yang dijadikan standar untuk menyusun struktur dasar halaman web yang pertama kali diciptakan oleh Tim Berners-Lee pada tahun 1991 dan terus berkembang hingga versi HTML5 (2014). Ciri penulisan HTML adalah menggunakan tag seperti `<head>`, `<body>`. Beberapa tag html memiliki tag penutup seperti `<h1>Ini header</h1>`. Tag `<h1>` merupakan tag pembuka yang mendeklarasikan tag HTLM. Teks "ini header" adalah isi dari tag `<h1>` yang akan ditampilkan dengan gaya bold ala header koran. Kemudian `</h1>` adalah tag penutup yang menandakan akhir dari tag.

## 📌1.1 Struktur Utama HTML
Umumnya, HTML memiliki struktur sebagai berikut:
```
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>SIMPUS-Mini | Beranda</title>
</head>
<body>
    
</body>
</html>
```

Kode di atas merupakan struktur dasar HTML yang dibagi mejadi 2 elemen utama, yaitu `<head>` dan `<body>`. Tag `<head>` adalah tag yang berisi elemen HTML yang tidak ditampilkan secara langsung pada halaman web seperti `<title>`, `<script>`, dan `<style>`. Sedangkan tag `<body>` adalah tag yang berisi elemen HTML yang ditampilkan pada halaman web. Bayangkan tag `<body>` seperti kerangka dari halaman web yang mengatur tata letak dan elemen-elemen yang ditampilkan.

## 📌1.2 Struktur Semantic HTML
Struktur Semantic HTML adalah penulisan kode nama tag yang memiliki makna yang jelas sehingga mudah dibaca oleh manusia. Contohnya pada kode index.html Jobsheet 1

```
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>SIMPUS-Mini | Beranda</title>
</head>
<body>
    <header>
        <h1>SIMPUS-Mini</h1>
        <nav>
            <ul>
                <li><a href="index.html">Beranda</a></li>
                <li><a href="Buku/list.html">Daftar Buku</a></li>
                <li><a href="Buku/tambah.html">Tambah Buku</a></li>
                <li><a href="Anggota/list.html">Daftar Anggota</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section>
            <h2>Selamat Datang di Sistem Perpustakaan Mini</h2>
            <p>Aplikasi sederhana untuk mengelola data buku dan anggota perpustakaan.</p>
        </section>

        <section>
            <h2>Ringkasan</h2>
            <article>
                <h3>Total Buku</h3>
                <p>140</p>
            </article>
            <article>
                <h3>Total Anggota</h3>
                <p>26</p>
            </article>
            <article>
                <h3>Sedang Dipinjam</h3>
                <p>37</p>
            </article>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 SIMPUS - Mini &mdash; Jobsheet 1</p>
    </footer>
</body>
</html>
```
Pada kode di atas, terutama pada tag `<body>`, kode dibagi menjadi tiga bagian utama, yaitu `<header>`, `<main>`, `<footer>`. Tag `<header>` berisi tag `<h1>` dan `<nav>`. Tag `<h1>` adalah tag header yang akan ditampilkan dengan gaya bold, lebih detailnya akan dijelaskan pada poin dibawah. Sedangkan tag `<nav>` inilah yang disebut struktur semantic dimana `<nav>` memiliki makna "navigation" yang digunakan untuk menempatkan elemen yang berguna untuk bernavigasi menuju halaman lain. Pada kode di atas, tag `<nav>` berisi link menuju halaman html lain yang ada pada folder jobsheet 1 (kalau di proyek nyata akan menuju ke halaman lain misalnya list.html dll).

## 📌1.3 Elemen Teks HTML
 ### 1. Elemen ```<p>```
 Elemen ```<p>``` adalah elemen teks. Nama "p" dipilih sebagai kependekan dari paragraf supaya mudah diingat. Elemen ```<p>``` adalah elemen yang memiliki tag penutup ```<p></p>``` dan menuliskan isi teks di antara tag pembuka dan tag penutup. Selain 
 ### 2. Elemen ```<h>```
 Elemen ```<h>``` adalah elemen header. Header biasanya ada pada headline koran yang bertujuan untuk memberikan spotlight pada informasi tertentu dan biasanya identik dengan berita hangat atau viral. Header adalah teks yang ditampilkan dengan gaya bold. Sama seperti elemen ```<p>```, elemen ```<h>``` juga memiliki tag penutup dan menuliskan isi diantara tag pembuka dan penutup. Elemen header ini dapat diatur ketebalannya dan ukurannya dengan cara menyertakan angka. Seperti ini contohnya
 ```
<h1>Ini isi header<h1>
<h2>Ini isi header</h2>
<h3>Ini isi header</h3>
<h4>Ini isi header</h4>
 ```
 Semakin kecil angkanya semakin tebal teks yang ditampilkan. Elemen header hanya bisa mengatur antara h1 hingga h6. Jika ditulis lebih dari h6 misalnya h7 maka web browser akan membacanya sebagai elemen teks seperti ```<p>``` atau ```<span>```.
 ### 3. ELemen ```<br>```
 Elemen ini adalah elemen yang digunakan untuk line break. Contoh penggunaannya ada pada file tambah.html di dalam tag ```<form>``` terdapat 2 elemen yaitu ```<label>``` yang berfungsi untuk memberi teks diatas kotak bar formulir dimana terdapat elemen ```<br>``` supaya elemen input ditampilkan dibawah teks.
 ```
 <form>
    <p>
        <label for="judul">Judul</label><br>
        <input type="text" id="judul" name="judul" required>
    </p>
 </form>
 ```

## 📌1.4 Elemen List
Elemen List adalah elemen HTML yang menampilkan list dari kumpulan objek. Misalnya list dari menu makanan atau list pekerjan. Elemen list ditulis dengan ```<ul>``` atau ```<ol>``` kemudian diikuti dengan elemen objek list nya dengan semua elemen list memiliki tag penutup.
 ### 1. Elemen ```<ul>```
Elemen ini adalah unordered-list yang secara default akan menampilkan list object dengan sebuah titik sebagai mark. Elemen ini merupakan elemen kontainer yang berperan sebagai wadah.
 ### 2. Elemen ```<ol>```
Elemen ini adalah ordered-list yang secara default akan menampilkan list object dengan sebuah angka sebagai mark nya. Elemen ini sama seperti ```<ul>``` yang merupakan elemen container/wadah.
 ### 3. Elemen ```<li>```
 Elemen ini merupakan elemen object yang disimpan di dalam elemen kontainer list. Elemen ini mendefinisikan object yang sedang di list. Satu elemen container bisa memiliki banyak elemen ```<li>```