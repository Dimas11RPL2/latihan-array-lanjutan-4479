const pesertaLomba = [
    "Alya",
    "Bintang",
    "Citra",
    "Daffa",
    "Nabila"
];

const namaDicari = "Citra";

console.log("=== PENCARIAN PESERTA LOMBA ===");

if (pesertaLomba.includes(namaDicari)) {
    let indeks = pesertaLomba.indexOf(namaDicari);

    console.log("Nama:", namaDicari);
    console.log("Status: Terdaftar");
    console.log("Indeks:", indeks);
    console.log("Nomor urut:", indeks + 1);
} else {
    console.log("Siswa belum terdaftar");
}