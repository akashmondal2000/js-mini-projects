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
  changeTheam(fullDerkMode,document.body,'fullDerkMode');
  // hare i chake both chaek box if first one is chacked second box also is chacked
  // containerDarkMode.checked = fullDerkMode.checked;
};

const changeContainerDarkMode = () => {
  changeTheam(containerDarkMode,Container,'containerDarkMode');
};

const changeTheam = (checkbox,element,localStorageKey)=>{
  if (checkbox.checked) {
    element.classList.add("dark");
    localStorage.setItem(localStorageKey, true);
  } else {
    element.classList.remove("dark");
    localStorage.setItem(localStorageKey, false);
  }
}

containerDarkMode.addEventListener("change", changeContainerDarkMode);
