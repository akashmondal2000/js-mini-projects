const fullDerkMode = document.getElementById("full-derk-mode");

const containerDarkMode = document.getElementById("contained-derk-mode");

const Container = document.querySelector(".container");

fullDerkMode.addEventListener("change", () => {
  if (fullDerkMode.checked) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  // hare i chake both chaek box if first one is chacked second box also is chacked
  containerDarkMode.checked = fullDerkMode.checked;
  changeContainerDarkMode();
});

const changeContainerDarkMode = () => {
  if (containerDarkMode.checked) {
    Container.classList.add("dark");
  } else {
    Container.classList.remove("dark");
  }
};

containerDarkMode.addEventListener("change", changeContainerDarkMode);
