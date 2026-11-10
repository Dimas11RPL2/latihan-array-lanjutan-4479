const daftarBuku = [
"HTML Dasar",
"CssDasar",
"JavaScript Dasar",
"PHP Dasar"

];

console.log("Daftar buku awal:", daftarBuku);

let cari = daftarBuku.indexOf("CSS Dasar");

if (cari !== -1) {
    daftarBuku.splice(cari, 1, "CSS Modern");
}

cari = daftarBuku.indexOf("JavaScript Dasar");

if (cari !== -1) {
    daftarBuku.splice(cari + 1, 0, "Git Dasar");
}

cari = daftarBuku.indexOf("PHP Dasar");

if (cari !== -1) {
    daftarBuku.splice(cari, 1);
}

console.log("Daftar buku akhir:", daftarBuku);
console.log("Jumlah buku:", daftarBuku.length);