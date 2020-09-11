
let task = []

$('.tasks-launch-explorer').click((e) => {
  let newTask = task.length;
  task.push({
    id: newTask,
    x: Math.floor(Math.random() * 440),
    y: Math.floor(Math.random() * 308),
    parent: undefined,
    title: 'File Explorer'
  })

  $('#tasks').append(`<div id="task-${task[newTask].id}" class="task-explorer" style="top: ${task[newTask].y}px; left: ${task[newTask].x}px"><div class='task-titleBar'><p>${task[newTask].title}</p><img onclick="killTask('${task[newTask].id}')" src="asset/close.png"></div></div>`)
  task[newTask].parent = $(`#task-${task[newTask].id}`);
})

function killTask(id) {
  $(`#task-${id}`).css({'display':'none'})
}
