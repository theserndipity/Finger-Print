let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
});

const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
    const searchTerm = searchInput.value.trim(); // Mengambil teks dari input dan menghapus spasi awal dan akhir
    if (searchTerm !== "") {
        // Lakukan sesuatu dengan 'searchTerm', seperti pengalihan ke hasil pencarian atau menampilkan hasil pencarian.
        alert(`Anda mencari: ${searchTerm}`);
    } else {
        alert("Masukkan kata kunci pencarian.");
    }
});

// Anda juga dapat menambahkan event listener lain, seperti ketika pengguna menekan tombol 'Enter' pada keyboard
searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        searchBtn.click(); // Simulasikan klik tombol pencarian saat Enter ditekan
    }
});
