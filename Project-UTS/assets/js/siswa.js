async function muatDaftarSiswa() {
    const tbody = document.querySelector(".table-responsive table tbody");
    const loading = document.getElementById("loading-indicator");
    if (!tbody) return;

    loading.style.display = "block";
    tbody.innerHTML = "";

    try {
        await new Promise((resolve) => setTimeout(resolve, 600));

        const res = await fetch("../data/siswa.json");
        if (!res.ok) {
            throw new Error("Gagal mengambil data (status " + res.status + ")");
        }
        const daftarSiswa = await res.json();

        daftarSiswa.forEach(function (siswa) {
            const tr = document.createElement("tr");
            tr.innerHTML =
                "<td>" + siswa.nama + "</td>" +
                "<td>" + siswa.nisn + "</td>" +
                "<td>" + siswa.jk + "</td>" +
                "<td>" + siswa.usia + "</td>" +
                "<td>" +
                "<button type=\"button\">Edit</button> " +
                "<button type=\"button\" class=\"btn-hapus\">Hapus</button>" +
                "</td>";
            tbody.appendChild(tr);
        });
    } catch (err) {
        tbody.innerHTML =
            "<tr><td colspan=\"5\">Gagal memuat data: " + err.message + "</td></tr>";
    } finally {
        loading.style.display = "none";
    }
}

const refresh = document.querySelector(".refresh");

refresh.addEventListener("click", muatDaftarSiswa);

document.addEventListener("DOMContentLoaded", muatDaftarSiswa);