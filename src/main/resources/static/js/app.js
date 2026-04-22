const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

loginBtn.onclick = () => {
    alert("Logged in!");
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
};

logoutBtn.onclick = () => {
    alert("Logged out!");
    logoutBtn.style.display = "none";
    loginBtn.style.display = "inline-block";
};