const allQuestionEl = document.querySelectorAll(".question");

allQuestionEl.forEach(function (ask) {
  ask.addEventListener("click", function () {
    const faqEl = ask.parentElement;
    faqEl.classList.toggle("open");
  });
});
