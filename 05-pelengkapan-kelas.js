const namaSiswa = [
    "Andi",
    "Budi",
    "Citra",
    "Dewi",
    "Eko"
];

const nilaiSiswa = [80, 75, 90, 85, 70];

// 1. Menampilkan jumlah siswa
console.log("Jumlah siswa:", namaSiswa.length);

// 2. Menampilkan nama dan nilai siswa pertama
console.log("Siswa pertama:", namaSiswa[0]);
console.log("Nilai siswa pertama:", nilaiSiswa[0]);

// 3. Menampilkan nama dan nilai siswa terakhir
console.log("Siswa terakhir:", namaSiswa[namaSiswa.length - 1]);
console.log("Nilai siswa terakhir:", nilaiSiswa[nilaiSiswa.length - 1]);

// 4. Memperbarui nilai Budi
nilaiSiswa[1] = 88;

// 5. Memperbarui nilai Eko
nilaiSiswa[4] = 82;

// 6. Menampilkan nama dan nilai siswa ketiga
console.log("Siswa ketiga:", namaSiswa[2]);
console.log("Nilai siswa ketiga:", nilaiSiswa[2]);

// 7. Menampilkan seluruh isi kedua Array
console.log("Daftar nama siswa:", namaSiswa);
console.log("Daftar nilai siswa:", nilaiSiswa);