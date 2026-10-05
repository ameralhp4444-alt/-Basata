function showScreen(id) {
  document.querySelectorAll(".screen").forEach(function(screen) {
    screen.classList.remove("active");
  });

  var target = document.getElementById(id);

  if (target) {
    target.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

var signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function(e) {
    e.preventDefault();

    var msg = document.getElementById("signupMessage");

    msg.textContent =
      "تم استلام بيانات التسجيل بنجاح ✅ سنربط الحساب بقاعدة البيانات في الخطوة التالية.";

    msg.style.display = "block";
  });
}

var loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    var msg = document.getElementById("loginMessage");

    msg.textContent =
      "تم إرسال طلب تسجيل الدخول ✅ سنربطه بقاعدة البيانات في الخطوة التالية.";

    msg.style.display = "block";
  });
}
