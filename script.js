$("#menuBtn")
  .addEventListener(
    "click",
    () =>
      $("#sidebar")
        .classList.toggle(
          "open"
        )
  );


/* الوضع الليلي */

$("#themeBtn")
  .addEventListener(
    "click",
    () => {

      document.body
        .classList.toggle(
          "dark"
        );


      localStorage.setItem(
        "basata_dark",

        document.body
          .classList.contains("dark")
          ? "1"
          : "0"
      );

    }
  );


/* تسجيل الخروج */

$("#logoutBtn")
  .addEventListener(
    "click",
    () => {

      localStorage.removeItem(
        "basata_user"
      );


      $("#app")
        .classList.add(
          "hidden"
        );


      $("#loginPage")
        .classList.remove(
          "hidden"
        );


      $("#loginForm").reset();

    }
  );


/* غلق نافذة الدرس */

$("#closeModal")
  .addEventListener(
    "click",
    closeLesson
  );


$("#lessonModal")
  .addEventListener(
    "click",
    event => {

      if(
        event.target.id ===
        "lessonModal"
      ){

        closeLesson();

      }

    }
  );


/* إكمال الدرس */

$("#completeBtn")
  .addEventListener(
    "click",
    () => {

      if(!currentLesson)
        return;


      if(
        !completed.includes(
          currentLesson.id
        )
      ){

        completed.push(
          currentLesson.id
        );

      }


      saveCompleted();


      closeLesson();


      renderLessons(
        "homeLessons",
        3
      );


      renderLessons(
        "allLessons"
      );


      updateProgress();

    }
  );


/* حفظ الوضع الليلي */

if(
  localStorage.getItem(
    "basata_dark"
  ) === "1"
){

  document.body
    .classList.add(
      "dark"
    );

}


/* الدخول التلقائي */

const savedUser =
  getUser();


if(savedUser){

  enterPlatform(
    savedUser
  );

}
