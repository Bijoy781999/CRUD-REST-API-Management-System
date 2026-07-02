const API_CRUD = "http://localhost:5000/api/items";
const frm = document.getElementById("crud-form");
const nm = document.getElementById("name");
const em = document.getElementById("email");
const ph = document.getElementById("phN");
const subBtn = document.getElementById("sBtn");
const Dis = document.getElementById("display");

// Updater
let upDate = "";

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
                Dis.innerHTML += `<div style="padding: 3px; margin-bottom; 5px; border-top: 1px solid black; border-bottom: 1px solid black; border-radius: 5px;">
                    <table class="Data">
                        <tr>
                            <th class="serial" colspan="2">${i + 1}</th>
                            <td class="info">
                                Name: ${user.name}<br/>
                                Email: <span style="font-style: oblique">${user.email}</span><br/>
                                Phone: ${user.phone}
                            </td>
                            <td class="action">
                                <button id="eBtn" onclick="editUser('${user._id}', '${user.name}', '${user.email}', '${user.phone}')"><span class="material-symbols-outlined">edit</span></button>
                                <button id="dBtn" onclick="deleteUser('${user._id}')"><span class="material-symbols-outlined">delete</span></button>
                            </td>
                        </tr>
                    </table>
                </div>`;
            });
        } else {
            Dis.innerHTML = `<p>No User Yet!</p>`;
        }
    } catch (err) {
        console.error("Error fetching users:", err);
        Dis.innerHTML = `<p style="color:red">Error fetching users!</p>`;
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
        const url = upDate ? `${API_CRUD}/${upDate}` : API_CRUD;
        const method = upDate ? "PUT" : "POST";

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

        upDate = "";
        location.reload();
        await displayUsers();

    } catch (err) {
        console.error("Fetch error:", err);
        alert("Error adding/updating user!");
    }
}


// Edit User
function editUser(id, name, email, phone){
    nm.value = name;
    em.value = email;
    ph.value = phone;
    upDate = id;
}

// Delete User
async function deleteUser(id){
    const confirmed = confirm("User will be parmanently deleted! Are you sure you want to delete this user?.");
    if (!confirmed) return;
    try {
        const res = await fetch(`${API_CRUD}/${id}`, { method: "DELETE" });
        if (res.ok) {
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

    nm.style.borderColor = nameValid || name === "" ? "initial" : "red";
    em.style.borderColor = emailValid || email === "" ? "initial" : "red";
    ph.style.borderColor = phoneValid || phone === "" ? "initial" : "red";

    // Enable button only if all valid
    subBtn.disabled = !(nameValid && emailValid && phoneValid);
}

[nm, em, ph].forEach((input) => {
    input.addEventListener("input", checkFormValidity);
});

// Initially disabled
subBtn.disabled = true;


// Form Submit Event
frm.addEventListener("submit", addUsers);