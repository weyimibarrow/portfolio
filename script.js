// === SIMPLE LOGIN LOGIC ===
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login-btn");
  const passwordInput = document.getElementById("password");

  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const password = passwordInput.value.trim();

      if (password) {
        // Redirect to main desktop page.
        // Use a relative path here so the redirect works both when opening files directly (file://)
        // and when serving the folder over HTTP (http://).
        window.location.href = "../index.html/index.html";
      } else {
        alert("Please type something!");
      }
    });
  }
});
console.log("Script loaded!");
