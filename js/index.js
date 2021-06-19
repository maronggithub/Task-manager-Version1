// You Need to implement
// 输入内容作为数组传入，每个元素的数据类型是对象
const tasks = [
  {
    id:1,
    name:'learning JavaScript',
    description:'Finish all the homework of JS study,and Finish all the homework of JS study',
    deadline:'2021/02/01',
    status:'Active',
  },
  {
    id:2,
    name:'learning JavaScript',
    description:'Finish all the homework of JS study,and Finish all the homework of JS study',
    deadline:'2021/02/01',
    status:'Padding',
  },
  {
    id:3,
    name:'learning JavaScript',
    description:'Finish all the homework of JS study,and Finish all the homework of JS study',
    deadline:'2021/02/01',
    status:'Closed',
  },
]
function showTasks() {
  // 定位到需要添加内容的地方
  let taskBody = document.getElementById("taskbody");
  // 将其内容先先设置为空，然后添加元素
  taskBody.innerHTML="";
  // 创建添加task的函数(当内容不为空的时候添加)
  if (tasks && tasks.length > 0) {
    tasks.forEach((task,index) => {
    // 在主要的元素显示块中添加li的元素
    let li = generateTaskElement(task,index + 1);
    // 给ol里面添加创建好的li元素
    taskBody.appendChild(li);
  });

  }
  
}

function generateTaskElement(task,index) {
  // 先创建一个li元素
  let li = document.createElement('li');
  // 与此同时把li元素的属性一同设置，从而显示到页面上
  li.classList.add('task-item');
  // 创建任务编号的元素span
  let indexElement =document.createElement('span');
  // 同时给这一元素设置属性
  indexElement.classList.add('task-num');
  // 给span元素添加文本内容
  indexElement.textContent= index;
  // 再在li里面放入span
  li.appendChild(indexElement);

  
  // 创建任务名称的元素span
  let nameElement =document.createElement('span');
  // 同时给这一元素设置属性
  nameElement.classList.add('task-name');
  // 给span元素添加文本内容
  indexElement.textContent= task.name;
  // 再在li里面放入span
  li.appendChild(nameElement);

  // 创建任务描述的元素span
  let desElement =document.createElement('span');
  // 同时给这一元素设置属性
  desElement.classList.add('task-description');
  // 给span元素添加文本内容
  indexElement.textContent= task.description;
  // 再在li里面放入span
  li.appendChild(desElement);

  // 创建任务期限的元素span
  let deadlineElement =document.createElement('span');
  // 同时给这一元素设置属性
  deadlineElement.classList.add('task-deadline');
  // 给span元素添加文本内容
  indexElement.textContent= task.deadline;
  // 再在li里面放入span
  li.appendChild(deadlineElement);

  // 创建任务状态的元素span
  let statusElement =document.createElement('span');
  statusElement.classList.add('task-status');
  // 利用switch 条件判断句，根据‘状态’的刷入内容，决定显示哪一个（因为字体颜色不同）
  switch (task.status) {
    case 'Active':
      // 如果状态是Active则属性变为active状态对应的属性（不同状态，字体颜色不同）
      statusElement.classList.add('active');
      break;
    case 'Padding':
      statusElement.classList.add('padding');
      break;
    case 'Closed':
      statusElement.classList.add('closed');
      break;
    default:
  }
  // 给span元素添加文本内容
  statusElement.textContent = task.status;
  // 再在li里面放入span
  li.appendChild(statusElement);

  // 创建删除任务和修改任务的元素span
  let operatorElement = document.createElement('span');
  // 同时给这一元素设置属性
  deadlineElement.classList.add('task-operation');
  // 再在这个span元素里面添加两个按钮
  let deleteBtn = document.createElement('button');
  deleteBtn.classList.add('btn-icon');
  deleteBtn.setAttribute('onclick', 'deleteTask()');
  // 再在按钮的部分添加图片
  let deleteIcon = document.createElement('img');
  // 设置图片属性
  deleteIcon.setAttribute('src', './images/delete.svg');
  // 把img添加到button元素里面去
  deleteBtn.appendChild(deleteIcon);
  // 把Button元素添加到span元素里面去
  operatorElement.appendChild(deleteBtn);
  
  // 创建修改任务的按钮
  let updateBtn = document.createElement('button');
  updateBtn.classList.add('btn-icon');
  // 再在按钮的部分添加图片
  let uopdateIcon = document.createElement('img');
  // 设置图片属性
  uopdateIcon.setAttribute('src', './images/update.svg');
  // 把img添加到button元素里面去
  updateBtn.appendChild(uopdateIcon);
  // 把Button元素添加到span元素里面去
  operatorElement.appendChild(updateBtn);
  // 最后把operator元素添加到li中
  li.appendChild(operatorElement);
  // 函数返回li元素
  return li;

}




// 添加搜索功能的函数
function searchTask() {
  // 获取输入栏的文本信息
  let searchText=document.getElementById('searchText').value;
  // 如果输入的内容不为空，则对所有任务进行过滤并显示目标任务(注意使用trim()函数去掉文本前后的空格)
  // filter()函数是在名为task的数组array中去搜索关键字
  if (searchText.trim()) {
    // 通过用filter函数来提取文本的关键字,includes()函数用来查找给定的数组中是否有指定的值
    let　filteredTask = task.filter((task) => task.name.includes(searchText.trim()));
    // filter返回的是一个新的数组有index 和对应的值
     showTasks(filteredTask);
  };
   
}
// 同时按enter键也可以进行查询
function search(event) {
  if (event.keyCode === 13) {
    searchTask()
  };
}


// 创建状态栏的函数
funtion filterTasksByStatus(status) {
  switch (status) {
    //点击全部任务的时候，则会调用显示全部任务的函数
    case 'All':
    default:
      showAllTasks();
      break;
    case 'Active':
    case 'Padding':
    case 'Closed':
      //当点击不同状态的任务的时候，则会按照状态显示任务
      showTasks(tasks.filter((task) => task.status === status));
      break;
  }
}

//展示所有任务函数
function showAllTasks() {
  showStatisticesCards();
  showTasks(tasks);
}

function showStatisticesCards() {
  //tasks是数组，计算数组的长度，也就是计算有多少tasks，textContent 属性设置或者返回指定节点的文本内容。
  //如果你设置了 textContent 属性, 任何的子节点会被移除及被指定的字符串的文本节点替换。
  let allTasksCount = tasks.length;
  //给allTasksCount添加文本内容
  document.getElementById('allTasksCount').textContent = allTasksCount;
  //得到状态是active任务的数量
  let activeTasksCount = tasks.filter((task) => task.status === 'Active')
    .length;
  document.getElementById('activeTasksCount').textContent = activeTasksCount;
  //计算active任务的百分比
  //round() 方法可把一个数字舍入为最接近的整数：
  let activeTasksProportion =
    allTasksCount > 0
      ? Math.round((activeTasksCount / allTasksCount) * 100) + '%'
      : '0%';
  document.getElementById(
    'activeTasksProportion'
  ).textContent = activeTasksProportion;
  //得到状态是padding任务的数量
  let paddingTasksCount = tasks.filter((task) => task.status === 'Padding')
    .length;
  document.getElementById('paddingTasksCount').textContent = paddingTasksCount;
  //计算padding任务的百分比
  let paddingTasksProportion =
    allTasksCount > 0
      ? Math.round((paddingTasksCount / allTasksCount) * 100) + '%'
      : '0%';
  document.getElementById(
    'paddingTasksProportion'
  ).textContent = paddingTasksProportion;
  let closedTasksCount = tasks.filter((task) => task.status === 'Closed')
    .length;
  document.getElementById('closedTasksCount').textContent = closedTasksCount;
  let closedTasksProportion =
    allTasksCount > 0
      ? Math.round((closedTasksCount / allTasksCount) * 100) + '%'
      : '0%';
  document.getElementById(
    'closedTasksProportion'
  ).textContent = closedTasksProportion;

}







