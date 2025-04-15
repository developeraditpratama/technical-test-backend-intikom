# Aplikasi Backend Produk dengan Express.js dan MySQL

Dokumen ini menjelaskan cara menjalankan dan menggunakan aplikasi backend sederhana yang dibuat dengan Node.js, Express.js, dan MySQL untuk mengelola data produk.

## Prasyarat

Sebelum memulai, pastikan Anda telah menginstal perangkat lunak berikut di sistem Anda:

* **Node.js:**
* **npm** atau **yarn:**
* **MySQL Server:**
* **Postman**

## Instalasi

1.  **Clone Repository (jika ada) atau buat direktori proyek baru:**

    ```bash
    git clone https://github.com/developeraditpratama/technical-test-backend-intikom.git
    ```

2.  **Instal Dependencies:**

    ```bash
    npm install express mysql2 sequelize cors body-parser
    ```

    * `express`: Framework web Node.js yang minimal dan fleksibel.
    * `mysql2`: Driver MySQL untuk Node.js.
    * `sequelize`: ORM (Object-Relational Mapper) untuk Node.js yang mendukung berbagai database, termasuk MySQL.

## Konfigurasi Database MySQL

1.  **Buat Database:**
    * Pastikan server MySQL Anda berjalan.
    
    ```sql
    CREATE DATABASE IF NOT EXISTS `technical-test-intikom`;
    ```

2.  **Buat Tabel `products`:**

    ```sql
    USE `technical-test-intikom`;

    CREATE TABLE IF NOT EXISTS `products` (
        `id` INT AUTO_INCREMENT PRIMARY KEY,
        `name` VARCHAR(255) NOT NULL,
        `price` DECIMAL(10, 2) NOT NULL
    );
    ```