// ! Setup Variables
const input = document.querySelector(".input");
const showBtn = document.querySelector(".btn");
const MsgHolder = document.querySelector(".showMsg");

//! showMsg function
const showMsg = () => {
  // simple validity
  if (input.value == "") alert("Pls write your message !");

  // Appear MsgHolder
  MsgHolder.style.display = "block";

  //show msg using createTextNode ()
  // let msg = document.createTextNode(input.value);
  // MsgHolder.appendChild(msg);

  //show msg using innerHtml
  //MsgHolder.innerHTML = input.value;

  //show msg using textContent
  MsgHolder.textContent = input.value;
  input.value = "";
};


showBtn.addEventListener("click", showMsg);


// display none when re-write
input.addEventListener("click", () => {
  MsgHolder.style.display = "none";
});
