// Array penampung data catatan (Mockup data awal)
let notes = [
    {
        id: 1,
        title: "Tugas minggu ini",
        content: "Jobsheet 7 dan 8 DPW, Unit 3 Bahasa Inggris 2, Soal latihan Metode Numerik, Jobsheet 5 Object Oriented Programming, Jobsheet 5 Basis Data Lanjut, jobsheet 3 Manajemen Proyek"
    },
    {
        id: 2,
        title: "Reminder",
        content: "Jangan lupa beli galon nanti sore!"
    },
    {
        id: 3,
        title: "Resolusi besok",
        content: "Bangun pagi dan olahraga, mengerjakan tugas OOP, belajar basis data lanjut, latihan band, menyicil DPW dan PBL"
    }
];

const popupOverlay = document.getElementById('popupOverlay');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const noteForm = document.getElementById('noteForm');
const notesGrid = document.getElementById('notesGrid');

function renderNotes() {
    if (!notesGrid) return;

    notesGrid.innerHTML = '';

    if (notes.length === 0) {
        notesGrid.innerHTML = '<p style="color: #888; grid-column: 1 / -1; text-align: center;">Belum ada catatan.</p>';
        return;
    }

    notes.forEach(note => {
        const card = document.createElement('div');
        card.classList.add('note-card');

        const titleEl = document.createElement('h3');
        titleEl.textContent = note.title;

        const contentEl = document.createElement('p');
        contentEl.textContent = note.content;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn-delete');
        deleteBtn.textContent = 'Hapus';
        deleteBtn.onclick = function() {
            deleteNote(note.id);
        };

        card.appendChild(titleEl);
        card.appendChild(contentEl);
        card.appendChild(deleteBtn);

        notesGrid.appendChild(card);
    });
}

function handleAddNote(event) {
    event.preventDefault();

    const titleInput = document.getElementById('noteTitle');
    const contentInput = document.getElementById('noteContent');

    const newNote = {
        id: Date.now(), 
        title: titleInput.value.trim(),
        content: contentInput.value.trim()
    };

    notes.unshift(newNote);
    renderNotes();

    noteForm.reset();
    closePopupFunc();
}

function deleteNote(id) {
    const isConfirmed = confirm("Yakin ingin menghapus catatan?");

    if (isConfirmed) {
        notes = notes.filter(note => note.id !== id);
        renderNotes();
    }
}

function openPopupFunc() {
    if (popupOverlay) popupOverlay.style.display = 'block';
}

function closePopupFunc() {
    if (popupOverlay) popupOverlay.style.display = 'none';
}

function initEventListeners() {
    if (openBtn) openBtn.addEventListener('click', openPopupFunc);
    if (closeBtn) closeBtn.addEventListener('click', closePopupFunc);

    if (popupOverlay) {
        window.addEventListener('click', function(event) {
            if (event.target === popupOverlay) {
                closePopupFunc();
            }
        });
    }

    if (noteForm) {
        noteForm.addEventListener('submit', handleAddNote);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    initEventListeners();
    renderNotes();
});