
let select = {
  start: {
    x: 0,
    y: 0
  },
  active: false
};

// EVENTS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

$('#desktop').mousedown((e) => {
  $('#select').css({'display':'block'})
  select.active = true;
  select.start.x = e.offsetX;
  select.start.y = e.offsetY;
})

$('#desktop').mouseup((e) => {
  $('#select').css({'display':'none', 'width':'0px', 'height':'0px', 'border':'none'})
  select.active = false;
})

$('#desktop').mousemove((e) => {
  if (select.active && $(e.target)[0].id == 'desktop') {
    if (e.offsetY > 565) e.offsetY = 565;
    if (e.offsetX > select.start.x && e.offsetY > select.start.y) {
      $('#select').css({
        'top':`${select.start.y}px`,
        'left':`${select.start.x}px`,
        'border':'solid 1.25px #2198bbba',
        'width':`${e.offsetX - select.start.x}px`,
        'height':`${e.offsetY - select.start.y}px`
      })
    } else if (e.offsetX < select.start.x && e.offsetY < select.start.y) {
      $('#select').css({
        'top':`${e.offsetY}px`,
        'left':`${e.offsetX}px`,
        'border':'solid 1.25px #2198bbba',
        'width':`${select.start.x - e.offsetX}px`,
        'height':`${select.start.y - e.offsetY}px`
      })
    } else if (e.offsetX > select.start.x && e.offsetY < select.start.y) {
      $('#select').css({
        'top':`${e.offsetY}px`,
        'left':`${select.start.x}px`,
        'border':'solid 1.25px #2198bbba',
        'width':`${e.offsetX - select.start.x}px`,
        'height':`${select.start.y - e.offsetY}px`
      })
    } else if (e.offsetX < select.start.x && e.offsetY > select.start.y) {
      $('#select').css({
        'top':`${select.start.y}px`,
        'left':`${e.offsetX}px`,
        'border':'solid 1.25px #2198bbba',
        'width':`${select.start.x - e.offsetX}px`,
        'height':`${e.offsetY - select.start.y}px`
      })
    }
  }
})
