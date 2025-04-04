## 📰 Portal Berita - UTS Pemrograman Web 122140086  

🚀 **Portal Berita** adalah aplikasi berbasis web yang menampilkan berita terbaru menggunakan **React** dan **Vite**. Aplikasi ini mengambil data berita dari **Mediastack API** dan memungkinkan pengguna mencari berita berdasarkan kata kunci.  

Proyek ini merupakan portal berita sederhana yang dibangun menggunakan React, React Router, dan Bootstrap (melalui React-Bootstrap) untuk styling. Aplikasi memungkinkan pengguna melihat daftar berita dan detail masing-masing berita melalui navigasi dinamis yang diatur oleh react-router-dom. Pengambilan data dilakukan secara real-time dari API menggunakan fetch di dalam hook useEffect, sementara state dikelola secara lokal dengan useState untuk kebutuhan seperti pencarian dan penyimpanan data berita. Struktur proyek pun dibangun secara modular dengan memisahkan komponen-komponen utama seperti Navigation dan halaman-halaman untuk daftar serta detail berita.

Dalam hal state management, proyek ini memilih pendekatan sederhana menggunakan useState dan useEffect karena kebutuhan data masih terbatas dan hanya digunakan di dalam komponen-komponen tertentu. Pendekatan ini sudah sesuai untuk skala aplikasi saat ini, sehingga belum memerlukan implementasi global state seperti Context API, useReducer, atau Redux Toolkit. 

### ✨ Fitur Utama  
- 🔍 Pencarian berita berdasarkan kata kunci  
- 📰 Menampilkan berita terbaru dalam format kartu  
- 🎨 Antarmuka responsif menggunakan Bootstrap  

### 📌 Teknologi yang Digunakan  
- **React.js** (UI Library)  
- **Vite** (Bundler untuk React)  
- **React Bootstrap** (UI Components)  
- **Mediastack API** (Sumber berita)  
- **Vercel** (Hosting aplikasi)  

### 📥 Cara Menjalankan  
1. Clone repositori ini  
   ```bash
   git clone https://github.com/ceceyeolie/uts_pemrograman_web_122140086.git
   ```
2. Masuk ke direktori proyek  
   ```bash
   cd uts_pemrograman_web_122140086
   ```
3. Install dependencies  
   ```bash
   npm install
   ```
4. Buat file `.env.local` dan tambahkan API key:  
   ```
   VITE_MEDIASTACK_API_KEY=your_api_key_here
   ```
5. Jalankan aplikasi  
   ```bash
   npm run dev
   ```
6. Buka di browser: `http://localhost:5173`  

### 🚀 Deploy di Vercel  
> **Link Demo:** https://portal-berita-terbaru.vercel.app/


