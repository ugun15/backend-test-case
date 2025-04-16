# Library Management System

Sistem manajemen perpustakaan yang memungkinkan anggota untuk meminjam dan mengembalikan buku dengan aturan tertentu.

## Fitur

- Manajemen anggota (CRUD)
- Manajemen buku (CRUD)
- Peminjaman buku dengan aturan:
  - Anggota tidak dapat meminjam lebih dari 2 buku
  - Buku yang dipinjam tidak dapat dipinjam oleh anggota lain
  - Anggota yang sedang dihukum tidak dapat meminjam buku
- Pengembalian buku dengan aturan:
  - Buku yang dikembalikan harus buku yang dipinjam oleh anggota tersebut
  - Jika buku dikembalikan lebih dari 7 hari, anggota akan dihukum selama 3 hari
- Pengecekan buku:
  - Menampilkan semua buku yang ada dan jumlahnya
  - Buku yang sedang dipinjam tidak dihitung dalam stok
- Pengecekan anggota:
  - Menampilkan semua anggota yang ada
  - Menampilkan jumlah buku yang sedang dipinjam oleh setiap anggota

## Teknologi yang Digunakan

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Prisma ORM
- Swagger UI untuk dokumentasi API

## Persyaratan Sistem

- Node.js (v14 atau lebih baru)
- PostgreSQL (v12 atau lebih baru)
- npm atau yarn

## Instalasi

1. Clone repositori:
```bash
git clone https://github.com/yourusername/library-management-system.git
cd library-management-system
```

2. Install dependensi:
```bash
npm install
```

3. Konfigurasi database:
- Buat database PostgreSQL baru
- Salin file `.env.example` menjadi `.env`
- Sesuaikan konfigurasi database di file `.env`

4. Jalankan migrasi database:
```bash
npx prisma migrate dev
```

5. Jalankan aplikasi:
```bash
# Development
npm run dev

# Production
npm run build
npm start
```

## Dokumentasi API

Dokumentasi API tersedia di endpoint `/api-docs` setelah aplikasi dijalankan.

## Unit Testing

Untuk menjalankan unit testing:
```bash
npm test
```

## Lisensi

MIT 