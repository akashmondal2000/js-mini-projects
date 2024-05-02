const memeGenerateBtn = document.querySelector(".meme-generate-button");
const memeTitle = document.querySelector('.meme-title');
const memeImageUrl =  document.querySelector('.meme-img');
const memeAuther = document.querySelector('.auther');

const getMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
       const {author,title,url} = data ; // hare i distructure of responce data
       memeTitle.innerText = title;
       memeImageUrl.src = url;
       memeAuther.innerText = `Meme By :${author}`;
    //   console.log(author,title,url);
    });
};

getMeme();

memeGenerateBtn.addEventListener("click", ()=>{
    getMeme()
});
