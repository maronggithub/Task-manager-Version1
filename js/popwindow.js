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

function showDeleteModalPopover(id) {
  //当点击每个任务后面的删除按钮时，则激发此函数
  let modalDeleteIcon = document.getElementById('modalDeleteIcon');
  //给此节点添加属性
  modalDeleteIcon.setAttribute('src', './images/modal_delete_icon.svg');
  let deleteModalTitle = document.getElementById('deleteModalTitle');
  deleteModalTitle.textContent = 'Delete Task';
  let deleteModalContent = document.getElementById('deleteModalContent');
  deleteModalContent.innerHTML = '';
  let p = document.createElement('p');
  let taskName = tasks.find((task) => task.id === id).name;
  p.textContent = 'Do you confirm to delete task: "' + taskName + '" ?';
  deleteModalContent.appendChild(p);
  let deleteModalBtnConfirm = document.getElementById('deleteModalBtnConfirm');
  deleteModalBtnConfirm.setAttribute('onclick', 'deleteTask(' + id + ')');
  appearpopup();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  showAllTasks();
  closepopup();
}
