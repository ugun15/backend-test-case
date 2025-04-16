Repository ini berisi implementasi algoritma untuk test case dan sistem manajemen perpustakaan.

## Struktur Repository

Repository ini terdiri dari dua project utama:

### 1. Backend Algorithm Test

Implementasi algoritma untuk test case.

#### Algoritma yang Diimplementasikan

1. **Membalik String dengan Angka Tetap di Akhir**
   - Membalik string dengan angka tetap di akhir kata.
   - Contoh: "NEGIE1" → "EIGEN1"

2. **Mencari Kata Terpanjang dalam Kalimat**
   - Mencari kata terpanjang dari kalimat tersebut.
   - Contoh: "Saya sangat senang mengerjakan soal algoritma" → "mengerjakan"

3. **Menghitung Frekuensi Kata dalam Array**
   - Menentukan berapa kali kata dalam QUERY terdapat pada array INPUT.
   - Contoh: ['xc', 'dz', 'bbb', 'dz'] dan ['bbb', 'ac', 'dz'] → [1, 0, 2]

4. **Menghitung Selisih Diagonal Matriks**
   - Mencari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN.
   - Contoh: [[1, 2, 0], [4, 5, 6], [7, 8, 9]] → 3

### 2. Library Management System

Sistem manajemen perpustakaan yang memungkinkan pengguna untuk mengelola buku, anggota, dan peminjaman.

## Teknologi yang Digunakan

- TypeScript
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL

## Cara Menjalankan

### Backend Algorithm Test

1. Install dependensi:
   ```bash
   cd backend-algo-test
   npm install
   ```

2. Build project:
   ```bash
   npm run build
   ```

3. Jalankan project:
   ```bash
   npm start
   ```

Atau jalankan langsung dengan ts-node:
```bash
npm run dev
```

### Library Management System

1. Install dependensi:
   ```bash
   cd library-management-system
   npm install
   ```

2. Setup database:
   ```bash
   npx prisma migrate dev
   ```

3. Jalankan project:
   ```bash
   npm start
   ```

## Kontribusi

Silakan berkontribusi dengan membuat pull request atau melaporkan issues.

## Lisensi

MIT
