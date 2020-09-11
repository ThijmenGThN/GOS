
let taskbar = {
  active: false
};

// EVENTS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

$('#taskbar-start').click((e) => {
  if (taskbar.active) {
    $('.taskbar-startMenu').css({
      'left':'-200px'
    })
    $('.taskbar-startMenu ul').css({
      'bottom':'-280px'
    })
  } else {
    $('.taskbar-startMenu').css({
      'left':'0px'
    })
    $('.taskbar-startMenu ul').css({
      'bottom':'10px'
    })
  }
  taskbar.active = !taskbar.active;
})

$('#desktop').click((e) => {
  if ($(e.target)[0].id == 'desktop') {
  taskbar.active = false;
    $('.taskbar-startMenu').css({
      'left':'-200px'
    })
    $('.taskbar-startMenu ul').css({
      'bottom':'-280px'
    })
  }
})

updateDate()
setInterval(() => {
  updateDate()
}, 10 * 1000)

// FUNCTIONS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function updateDate() {
  let date = new Date();
  $('.taskbar-date').text(date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
}
