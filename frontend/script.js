const API_CRUD = "http://localhost:5000/api/items";
const frm = document.getElementById("crud-form");
const nm = document.getElementById("name");
const em = document.getElementById("email");
const ph = document.getElementById("phN");
const subBtn = document.getElementById("sBtn");
const Dis = document.getElementById("display");

const editModal = document.getElementById("edit-modal");
const editForm = document.getElementById("edit-form");
const editId = document.getElementById("edit-id");
const editNm = document.getElementById("edit-name");
const editEm = document.getElementById("edit-email");
const editPh = document.getElementById("edit-phone");
const editSubBtn = document.getElementById("edit-sBtn");

const deleteModal = document.getElementById("delete-modal");
const deleteIdInput = document.getElementById("delete-id");

// Regex Patterns
const nameRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\s\.])[A-Za-z\s\.]{2,40}$/;
const emailRegex = /^[\w\.%-]+@[a-z]+\.[a-z]{2,50}$/;
const phoneRegex = /^[0-9]\d{9,10}$/;


window.onload =() =>{
    displayUsers();
}

// Display Users
async function displayUsers() {
    Dis.innerHTML = "";
    try {
        const res = await fetch(API_CRUD);
        const users = await res.json();
        console.log("Fetched users:", users); // check in console

        if (users.length > 0) {
            users.forEach((user, i) => {
                Dis.innerHTML += `
                <div class="user-card">
                    <div class="user-info">
                        <div class="user-name">${user.name}</div>
                        <div class="user-detail">
                            <span class="material-symbols-outlined icon">mail</span>
                            <span>${user.email}</span>
                        </div>
                        <div class="user-detail">
                            <span class="material-symbols-outlined icon">phone</span>
                            <span>${user.phone}</span>
                        </div>
                    </div>
                    <div class="user-actions">
                        <button class="action-btn edit-btn" onclick="editUser('${user._id}', '${user.name}', '${user.email}', '${user.phone}')" title="Edit">
                            <span class="material-symbols-outlined">edit</span>
                        </button>
                        <button class="action-btn delete-btn" onclick="deleteUser('${user._id}')" title="Delete">
                            <span class="material-symbols-outlined">delete</span>
                        </button>
                    </div>
                </div>`;
            });
        } else {
            Dis.innerHTML = `<div class="no-users-msg">No Users Found. Add one above!</div>`;
        }
    } catch (err) {
        console.error("Error fetching users:", err);
        Dis.innerHTML = `<div class="no-users-msg" style="color: #ef4444;">Error fetching users! Is the backend running?</div>`;
    }
}

// Validate Inputs
function validateInputs(name, email, phone) {

    let nameErr= emailErr= phoneErr= true;

    if (!name || !email || !phone) {
        alert("Please fill in all fields!");
        return false;
    }

    if (nameRegex.test(name)=== true) {
        nameErr = false;
    }else{
        alert("Invalid Name");
    }

    if (emailRegex.test(email)=== true) {
        emailErr = false;
    }else{
        alert("Inval Email");
    }

    if (phoneRegex.test(phone)=== true) {
        phoneErr = false;
    }else{
        alert("Invalid Phone Number");
    }

    if ((nameErr || emailErr || phoneErr)=== true) {
        return false;
    }
    return true;
}

// Add User
async function addUsers(e) {
    e.preventDefault();

    const name = nm.value.trim();
    const email = em.value.trim();
    const phone = ph.value.trim();

    const isValid = validateInputs(name, email, phone);
    if (!isValid) {
        console.warn("❌ Validation failed, submission blocked.");
        return; 
    }

    if (!name || !email || !phone) {
        alert("Please fill all fields!");
        return;
    }

    try {
        const url = API_CRUD;
        const method = "POST";

        const res = await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone }),
        });

        let data = null;
        try {
            data = await res.json();
        } catch (err) {
            console.warn("Response body empty or invalid JSON");
        }

        if (!res.ok) {
            console.error("Server returned error:", data);
            alert("Error adding/updating user!");
            return;
        }

        // Clear form
        nm.value = "";
        em.value = "";
        ph.value = "";
        checkFormValidity();

        location.reload();
        await displayUsers();

    } catch (err) {
        console.error("Fetch error:", err);
        alert("Error adding/updating user!");
    }
}


// Edit User Modal Functions
function editUser(id, name, email, phone){
    editId.value = id;
    editNm.value = name;
    editEm.value = email;
    editPh.value = phone;
    
    // Reset borders
    editNm.style.borderColor = "var(--input-border)";
    editEm.style.borderColor = "var(--input-border)";
    editPh.style.borderColor = "var(--input-border)";
    
    editModal.classList.add("active");
    checkEditFormValidity();
}

function closeEditModal() {
    editModal.classList.remove("active");
}

// Update User (Submit Edit Modal)
async function updateUser(e) {
    e.preventDefault();

    const id = editId.value;
    const name = editNm.value.trim();
    const email = editEm.value.trim();
    const phone = editPh.value.trim();

    const isValid = validateInputs(name, email, phone);
    if (!isValid) return;

    try {
        const res = await fetch(`${API_CRUD}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone }),
        });

        if (!res.ok) {
            alert("Error updating user!");
            return;
        }

        closeEditModal();
        location.reload();
        await displayUsers();
    } catch (err) {
        console.error("Fetch error:", err);
        alert("Error updating user!");
    }
}

// Delete User Modal Functions
function deleteUser(id){
    deleteIdInput.value = id;
    deleteModal.classList.add("active");
}

function closeDeleteModal() {
    deleteModal.classList.remove("active");
    deleteIdInput.value = "";
}

// Confirm Delete
async function confirmDelete(){
    const id = deleteIdInput.value;
    if (!id) return;

    try {
        const res = await fetch(`${API_CRUD}/${id}`, { method: "DELETE" });
        if (res.ok) {
            closeDeleteModal();
            alert("User deleted successfully!");
            displayUsers();
        } else {
            const err = await res.json();
            alert("Error deleting user: " + err.message);
        }
    } catch (error) {
        console.error("Delete error:", error);
        alert("Something went wrong while deleting!");
    }
}

// Real-time validation
ph.addEventListener("input", () => {

    ph.value = ph.value.replace(/\D/g, "").slice(0, 11);
});

function checkFormValidity() {
    const name = nm.value.trim();
    const email = em.value.trim();
    const phone = ph.value.trim();

    const nameValid = nameRegex.test(name);
    const emailValid = emailRegex.test(email);
    const phoneValid = phoneRegex.test(phone);

    nm.style.borderColor = nameValid || name === "" ? "var(--input-border)" : "var(--danger-color)";
    em.style.borderColor = emailValid || email === "" ? "var(--input-border)" : "var(--danger-color)";
    ph.style.borderColor = phoneValid || phone === "" ? "var(--input-border)" : "var(--danger-color)";

    // Enable button only if all valid
    subBtn.disabled = !(nameValid && emailValid && phoneValid);
}

[nm, em, ph].forEach((input) => {
    input.addEventListener("input", checkFormValidity);
});

function checkEditFormValidity() {
    const name = editNm.value.trim();
    const email = editEm.value.trim();
    const phone = editPh.value.trim();

    const nameValid = nameRegex.test(name);
    const emailValid = emailRegex.test(email);
    const phoneValid = phoneRegex.test(phone);

    editNm.style.borderColor = nameValid || name === "" ? "var(--input-border)" : "var(--danger-color)";
    editEm.style.borderColor = emailValid || email === "" ? "var(--input-border)" : "var(--danger-color)";
    editPh.style.borderColor = phoneValid || phone === "" ? "var(--input-border)" : "var(--danger-color)";

    editSubBtn.disabled = !(nameValid && emailValid && phoneValid);
}

[editNm, editEm, editPh].forEach((input) => {
    input.addEventListener("input", checkEditFormValidity);
});

// Initially disabled
subBtn.disabled = true;

// Form Submit Events
frm.addEventListener("submit", addUsers);
editForm.addEventListener("submit", updateUser);