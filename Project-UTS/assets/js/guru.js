async function muatDaftarGuru() {
    const tbody = document.querySelector(".table-responsive table tbody");
    const loading = document.getElementById("loading-indicator");
    if (!tbody) return;

    loading.style.display = "block";
    tbody.innerHTML = "";

    try {
        await new Promise((resolve) => setTimeout(resolve, 600));

        const res = await fetch("../data/guru.json");
        if (!res.ok) {
            throw new Error("Gagal mengambil data (status " + res.status + ")");
        }
        const daftarGuru = await res.json();

        daftarGuru.forEach(function (guru) {
            const tr = document.createElement("tr");
            tr.innerHTML =
                "<td>" + guru.nama + "</td>" +
                "<td>" + guru.nip + "</td>" +
                "<td>" + guru.jk + "</td>" +
                "<td>" + guru.usia + "</td>" +
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

refresh.addEventListener("click", muatDaftarGuru);

document.addEventListener("DOMContentLoaded", muatDaftarGuru);