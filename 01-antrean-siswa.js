const antreanSiswa = ["Andi", "Budi", "Citra"];

console.log("Antrean awal:", antreanSiswa);
console.log("Jumlah siswa:", antreanSiswa.length);

antreanSiswa.push("Deni");~
console.log("Setelah push:", antreanSiswa);

antreanSiswa.unshift("Eka");
console.log("Setelah unshift:", antreanSiswa);

let pertama = antreanSiswa.shift();
console.log("Siswa dihapus:", pertama);
console.log("Antrean sekarang:", antreanSiswa);

let terakhir = antreanSiswa.pop();
console.log("Siswa dihapus:", terakhir);
console.log("Antrean akhir:", antreanSiswa);

console.log("Jumlah siswa akhir:", antreanSiswa.length);