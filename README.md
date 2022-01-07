Level Database : 
1. [] Schema table
2. [] Menggunakan Sequelize + PostgreSQL sebagai ORM dan DBMS
3. [] Memiliki 1 entitas wajib yaitu Users
4. [] Terdapat column password untuk User
5. [] Memiliki minimal 3 entitas tambahan tergantung tema yang diambil
6. [] Memiliki setidaknya asosisasi 1-to-Many

Level Aplikasi :
1. [] Menggunakan Fitur Search atau Sort yang dapat di manipulasi dari depan
2. [] Menggunakan Validasi dari Sequelize 
3. [] Melakukan enkripsi dengan BcryptJs kedalam aplikasi
4. [] Menggunakan Hooks 
5. [] Menggunakan Static Instance method pada sequelize 
6. [] Menggunakan Custom Instance atau getter setter pada Sequielize
7. [] Mengimplementasi Session kedalam applikasi
8. [] Menggunakan Helper 

Routes : 
1. [] Minimal terdapat 1 dynamic route params
2. [] Minimal terdapat 2 route get dan 1 route post

Pages : 
1. [] Landing Page (menggambarkan project)
2. [] Login Page dengan menggunakan form dengan email & password 
3. [] Halaman yang mengimplementasikan CRUD actions
4. [] Logout (tombol dan route)
5. [] Memiliki 1 halaman view yang menampilkan data gabungan dari >= 2 table 

Explore (a.ka Pembelajaran Mandiri :>) : 
1. [] Menggunakan minimal 1 package tambahan yang dijadikan penambahan featre dalam web-app
2. [] Melakukan explor







- bagaimana idea app nya ?

- appnya mau dibuat seperti apa ?
ada tampilan register
ada tampilan login
ada home page -> isi product/ barang dagangan


- kelebihannya dari app tersebut apa ?
ada filter product dan search product

- feature apa yang diunggulkan dari app nya  ?
memiliki fitur kategori untuk setiap barang dan ada fitur search barang

- bagaimana struktur ERD nya ?
users: - users pembeli -> hanya bisa melakukan pembelian barang*
       - users penjual -> bisa membeli barang dan menjual barang
       - users admin -> atur kategori barang

categoryProduct -> seperti makanan, pakaian, elektronik dll

product -> - nama barang
	   - deskripsi barang
	   - harga barang
       - stok barang


- Package apa yang akan digunakan dalam aplikasinya ?
pg, sequelize, express, ejs, bcrypt, middle ware: express-session, heroku

pengerjaan hari-1
1. membuat database -> create table -> seeding data
2. setup server
3. membuat register
4. membuat login
5. home Page

# Kelompok-4-Ecommerce-Toko-BelanjaId