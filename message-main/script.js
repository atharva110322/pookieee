const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

function NoButton() {
  yesBtn.style.display = 'none';
  noBtn.style.display = 'none';
}

yesBtn.addEventListener("click", () => {
  question.innerHTML = "YEEEEEEEE LEZGOOOOOOOOOO!";
  gif.src =
    "https://media.giphy.com/media/t3sZxY5zS5B0z5zMIz/giphy-downsized-large.gif";
  NoButton();
  
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});