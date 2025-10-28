// DOM Elements
const profileImage = document.getElementById('profileImage');
const fileInput = document.getElementById('fileInput');
const profilePictureContainer = document.querySelector('.profile-picture');
const editBtn = document.getElementById('editBtn');
const saveBtn = document.getElementById('saveBtn');
const profileForm = document.getElementById('profileForm');
const successModal = document.getElementById('successModal');
const closeModal = document.getElementById('closeModal');

// Make form fields editable
let isEditing = false;

// Add event listeners
profilePictureContainer.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            profileImage.src = e.target.result;
        }

        reader.readAsDataURL(e.target.files[0]);
    }
});

editBtn.addEventListener('click', () => {
    if (!isEditing) {
        enableEditing();
    }
});

// Resume file selection preview
document.getElementById('resumeUpload').addEventListener('change', function (e) {
    const fileName = e.target.files.length > 0
        ? e.target.files[0].name
        : 'No file selected';
    document.getElementById('resumeFileName').textContent = fileName;
});

profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isEditing) {
        // In a real app, this would send data to the server
        showSuccessModal();
        disableEditing();
    }
});

closeModal.addEventListener('click', () => {
    successModal.style.display = 'none';
});

// Functions
function enableEditing() {
    isEditing = true;
    editBtn.textContent = 'Cancel';
    saveBtn.style.display = 'block';

    // Make fields editable
    document.querySelectorAll('.form-control:not([readonly])').forEach(field => {
        field.disabled = false;
    });

    // Enable file input
    fileInput.disabled = false;
}

function disableEditing() {
    isEditing = false;
    editBtn.textContent = 'Edit';
    saveBtn.style.display = 'none';

    // Make fields read-only
    document.querySelectorAll('.form-control:not([readonly])').forEach(field => {
        field.disabled = true;
    });

    // Disable file input
    fileInput.disabled = true;
}

function showSuccessModal() {
    successModal.style.display = 'flex';
}

// Initialize form state
disableEditing();


let edit = document.getElementById("editBtn");
let resumeUpload = document.getElementById('upload');
let profile = document.getElementById('profile');
let save = document.getElementById('saveBtn');


resumeUpload.style.display = "none";
profile.style.display = "none";

edit.addEventListener("click", () => {
    console.log("edit is clicked...");
    resumeUpload.style.display = "block";
    profile.style.display = "block";
})

save.addEventListener("click", () => {
    console.log("save is clicked...");
    resumeUpload.style.display = "none";
    profile.style.display = "none";
});
