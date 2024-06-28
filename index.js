//editing my textbox text in real time
const textbox = document.getElementById("text-box");
textbox.addEventListener("input", () => {
  textbox.classList.add("styled-textbox");
});

//setting username in welcome heading
const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get("username");
document.getElementById("user").innerHTML = userName;
//function to display fortune
