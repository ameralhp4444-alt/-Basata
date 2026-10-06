$("paymentMessage").textContent =
    "بوابة الدفع الحقيقية سيتم ربطها بالسيرفر وبوابة دفع آمنة.";

};

/* فتح لوحة الطالب */

function openStudent() {

  if (currentUser) {

    $("studentName").textContent =
      أهلاً ${currentUser.name} 👋;

  } else {

    $("studentName").textContent =
      "أهلاً بيك 👋";

  }

  showPage("studentPage");
}

/* دخول الكورس */

$("startCourseBtn").onclick = () => {

  $("lessonArea").classList.remove("hidden");

  $("startCourseBtn").textContent =
    "الكورس مفتوح ✓";

  $("lessonArea").scrollIntoView({
    behavior: "smooth"
  });

};
