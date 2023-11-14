document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-button");

    const users = [
        { username: "bu atik", password: "sayaguru", role: "guru" },
        { username: "gilar", password: "absen2", role: "siswa" },
        { username: "nabil", password: "absen20", role: "siswa" },
        { username: "nadia", password: "absen22", role: "siswa" },
        { username: "suci", password: "absen35", role: "siswa" },
    ];

    loginButton.addEventListener("click", function (e) {
        e.preventDefault();

        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Periksa apakah data login sesuai dengan data contoh
        const user = users.find((user) => user.username === username && user.password === password);

        if (user) {
            // Login sukses, arahkan ke halaman yang sesuai berdasarkan peran (role)
            if (user.role === "siswa") {
                window.location.href = "dahboard.html";
            } else if (user.role === "guru") {
                window.location.href = "dahboard.html";
            }
        } else {
            // Login gagal, tampilkan pesan kesalahan
            alert("Username atau password salah. Silakan coba lagi.");
        }
    });

    // Referensi ke elemen tbody untuk absensi guru
    var absensiListGuru = document.getElementById("absensi-list-guru");

    // Referensi ke node "absensi_guru" di Firebase
    var absensiGuruRef = firebase.database().ref("absensi_guru");

    // Fungsi untuk menampilkan data absensi guru dalam tabel
    function displayAbsensiGuru() {
        absensiGuruRef.on("value", function(snapshot) {
            absensiListGuru.innerHTML = ""; 

            snapshot.forEach(function(childSnapshot) {
                var absensi = childSnapshot.val();
                var row = absensiListGuru.insertRow();

                // Isi data ke dalam sel-sel tabel
                var cellNamaGuru = row.insertCell(0);
                var cellStatus = row.insertCell(1);
                var cellTanggal = row.insertCell(2);

                cellNamaGuru.innerHTML = absensi.namaGuru;
                cellStatus.innerHTML = absensi.status;
                cellTanggal.innerHTML = absensi.tanggal;
            });
        });
    }

    // Panggil fungsi untuk menampilkan data absensi guru
    displayAbsensiGuru();

    // Referensi ke elemen tbody untuk absensi siswa
    var absensiListSiswa = document.getElementById("absensi-list-siswa");

    // Referensi ke node "absensi_siswa" di Firebase
    var absensiSiswaRef = firebase.database().ref("absensi_siswa");

    // Fungsi untuk menampilkan data absensi siswa dalam tabel
    function displayAbsensiSiswa() {
        absensiSiswaRef.on("value", function(snapshot) {
            absensiListSiswa.innerHTML = ""; // Bersihkan tabel sebelum menampilkan data baru

            snapshot.forEach(function(childSnapshot) {
                var absensi = childSnapshot.val();
                var row = absensiListSiswa.insertRow();

                // Isi data ke dalam sel-sel tabel
                var cellNamaSiswa = row.insertCell(0);
                var cellStatus = row.insertCell(1);
                var cellTanggal = row.insertCell(2);

                cellNamaSiswa.innerHTML = absensi.namaSiswa;
                cellStatus.innerHTML = absensi.status;
                cellTanggal.innerHTML = absensi.tanggal;
            });
        });
    }

    // Panggil fungsi untuk menampilkan data absensi siswa
    displayAbsensiSiswa();
});
