# HITOPIA - Problem Solving Test

## Penjelasan Untuk Soal No 2 (Balanced Brackets)
Baiklah, saya akan menjelaskan langkah demi langkah bagaimana kode pada soal no 2 bekerja, dari saat argumen diterima hingga menghasilkan output "YES" atau "NO".

### Langkah-langkah Eksekusi Kode
1. Menerima Input
- Fungsi `isBalanced(input)` menerima sebuah string `input` yang berisi karakter-karakter bracket (seperti `{`, `}`, `[`, `]`, `(`, dan `)`).

2. Inisialisasi Variabel
- Sebuah stack kosong (`stack = []`) dibuat untuk menyimpan bracket yang dibuka.
- Sebuah objek `bracketMap` didefinisikan untuk mengaitkan bracket pembuka dengan bracket penutup.

3. Iterasi Melakui Karakter
- Program melakukan iterasi (perulangan) melalui setiap karakter dalam string `input` menggunakan `for (let char of input)`.
- Pada setiap iterasi, karakter yang diperiksa disimpan dalam variabel `char`.

4. Pengecekan Karakter
- Mengabaikan Spasi : Jika karakter adalah spasi (atau tidak ada karakter), program akan melanjutkan ke iterasi berikutnya dengan `continue`.
- Bracket Pembuka : Jika karakter adalah salah satu dari bracket pembuka (`(`, `{`, `[`), program menambahkannya ke dalam stack dengan `stack.push(char)`.
- Bracket Penutup : Jika karakter adalah bracket penutup (`)`, `}`, `]`), program akan melakukan pengecekan: Pertama, jika stack kosong (`stack.length === 0`), berarti tidak ada bracket pembuka yang cocok, dan program akan mengembalikan "NO". dan Jika stack tidak kosong, program akan mengeluarkan (pop) bracket terakhir yang ada di stack dengan `stack.pop()` dan memeriksa apakah bracket tersebut cocok dengan bracket penutup yang ditemukan. Jika tidak cocok, program juga akan mengembalikan "NO".

5. Pengecekan Akhir
- Setelah iterasi selesai, program memeriksa apakah stack kosong (`stack.length === 0`) : Jika stack kosong, berarti semua bracket pembuka memiliki pasangan yang sesuai dan program mengembalikan "YES". Jika stack tidak kosong, berarti ada bracket pembuka yang tidak memiliki pasangan, jadi program mengembalikan "NO".

### Contoh Eksekusi
Mari kita lihat contoh dengan input `"{ [ ( ) ] }"`:
1. Iterasi 1: Karakter `{` Menambah ke stack: `stack = ['{']`
2. Iterasi 2: Karakter `[` Menambah ke stack: `stack = ['{', '[']`
3. Iterasi 3: Karakter `(` Menambah ke stack: `stack = ['{', '[', '(']`
4. Iterasi 4: Karakter `)` Mengeluarkan dari `stack: stack = ['{', '[']` (cocok dengan `(`)
5. Iterasi 5: Karakter `]` Mengeluarkan dari `stack: stack = ['{']` (cocok dengan `[`)
6. Iterasi 6: Karakter `}` Mengeluarkan dari `stack: stack = []` (cocok dengan `{`)
7. Pengecekan Akhir: Stack kosong, mengembalikan "YES".

Dengan cara ini, program dapat menentukan apakah string bracket seimbang atau tidak