const nilaiUlangan = [78, 60, 95, 72, 88, 75];
const batasTuntas = 75;

let tuntas = 0;
let belumTuntas = 0;

console.log("=== DAFTAR NILAI ULANGAN ===");

for (let i = 0; i < nilaiUlangan.length; i++) {
    console.log("Siswa", i + 1, ":", nilaiUlangan[i]);
}

for (let nilai of nilaiUlangan) {
    if (nilai >= batasTuntas) {
        tuntas++;
    } else {
        belumTuntas++;
    }
}

console.log("=== REKAPITULASI ===");
console.log("Jumlah Siswa:", nilaiUlangan.length);
console.log("Jumlah Tuntas:", tuntas);
console.log("Jumlah Belum Tuntas:", belumTuntas);