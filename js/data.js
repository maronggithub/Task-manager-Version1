function saveAllTasks(allTasks) {
  localStorage.setItem('tasks', JSON.stringify(allTasks));
}
//JSON 通常用于与服务端交换数据,使用 JSON.parse() 方法将数据转换为 JavaScript 对象。
function getAllTasks() {
  return JSON.parse(localStorage.getItem('tasks'));
}
//ilter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
function removeTask(id) {
  let leftTasks = getAllTasks().filter((task) => task.id !== id);
  saveAllTasks(leftTasks);
}
//find() 方法返回通过测试（函数内判断）的数组的第一个元素的值。当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数。
function findTask(id) {
  return getAllTasks().find((task) => task.id === id);
}
//includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。
function findTasksByName(name) {
  return getAllTasks().filter((task) => task.name.includes(name));
}

function findTasksByStatus(status) {
  return getAllTasks().filter((task) => task.status === status);
}



const tasks = [
  {
    id: 1,
    name: 'Learing Javascript',
    description: 'From now, you will learn Javascript. About 3 hours a week.',
    deadline: '2020-12-03',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Learing React',
    description:
      'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
    deadline: '2020-09-03',
    status: 'Padding',
  },
  {
    id: 3,
    name: 'Learing Node',
    description:
      'The API reference documentation provides detailed information about a function or object in Node.js. This documentation indicates what arguments a method accepts, the return value of that method, and what errors may be related to that method. It  also indicates which methods are available for different versions of Node.js.',
    deadline: '2020-03-03',
    status: 'Closed',
  },
  {
    id: 4,
    name: 'Learing Javascript',
    description: 'From now, you will learn Javascript. About 3 hours a week.',
    deadline: '2020-12-03',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Learing React',
    description:
      'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
    deadline: '2020-09-03',
    status: 'Padding',
  },
  {
    id: 6,
    name: 'Learing Node',
    description:
      'The API reference documentation provides detailed information about a function or object in Node.js. This documentation indicates what arguments a method accepts, the return value of that method, and what errors may be related to that method. It  also indicates which methods are available for different versions of Node.js.',
    deadline: '2020-03-03',
    status: 'Closed',
  },
];


