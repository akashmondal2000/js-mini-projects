const fullDerkMode = document.getElementById("full-derk-mode");
const containerDarkMode = document.getElementById("contained-derk-mode");
const Container = document.querySelector(".container");

const isFullDarkMode = JSON.parse(localStorage.getItem('fullDerkMode'));
const isContainerDarkMode = JSON.parse(localStorage.getItem('containerDarkMode'));

if(isFullDarkMode){
  fullDerkMode.checked = true;
}
if(isContainerDarkMode){
  containerDarkMode.checked = true;
}
// changeFullDarkMode();
// changeContainerDarkMode();

fullDerkMode.addEventListener("change", () => {
  changeFullDarkMode();
  changeContainerDarkMode();
});

const changeFullDarkMode = () => {
  if (fullDerkMode.checked) {
    document.body.classList.add("dark");
    // use local storage for store full dark mode and containerDarkMode data
    localStorage.setItem("fullDerkMode", true);
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("fullDerkMode", false);
  }
  // hare i chake both chaek box if first one is chacked second box also is chacked
  containerDarkMode.checked = fullDerkMode.checked;
};

const changeContainerDarkMode = () => {
  if (containerDarkMode.checked) {
    Container.classList.add("dark");
    localStorage.setItem("containerDarkMode", true);
  } else {
    Container.classList.remove("dark");
    localStorage.setItem("containerDarkMode", false);
  }
};

containerDarkMode.addEventListener("change", changeContainerDarkMode);
