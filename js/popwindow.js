// 点击+显示模态框
// document.getElementById("titleBtnAdd").addEventListener("click",appear);
// function appearpopup() {
//   document.querySelector(".popup-modal").style.display ='flex';

// };
let addclick = document.getElementById("titleBtnAdd");
addclick.onclick = appearpopup;
function appearpopup() {
  // document.getElementById("popupModal").style.display ='flex'
  document.querySelector(".popup-modal").style.display ="flex";

};

// 点击×则模态框关闭
// document.getElementById("modalCloseBtn").addEventListener("click", closepopup);
// function closepopup() {
//   document.querySelector(".popup-modal").style.display ='none';

// };
let closeclick = document.getElementById("modalCloseBtn");
closeclick.onclick = closepopup;
function closepopup() {
  // document.getElementById("popupModal").style.display ='none'
  document.querySelector(".popup-modal").style.display ="none";

};
// 点击取消按钮则模态框关闭
// document.getElementById("mdoalBtnCancle").addEventListener("click", canclepopup);
// function canclepopup() {
//   document.querySelector(".popup-modal").style.display ='none';

// };
let cancleclick = document.getElementById("mdoalBtnCancle");
cancleclick.onclick = canclepopup;
function canclepopup() {
  // document.getElementById("popupModal").style.display ='none'
  document.querySelector(".popup-modal").style.display ="none";

};

