const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  //   console.log(panel);
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("activated");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("activated");
  });
}
