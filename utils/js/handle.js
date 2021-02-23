
// Update time
let taskbarTime = document.querySelector(`#taskbar-time`)
const handleFetchDate = () => {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    const ampm = hours >= 12 ? `PM` : `AM`
  
    hours %= 12;
    hours = hours || 12;    
    minutes = minutes < 10 ? `0${minutes}` : minutes;
  
    taskbarTime.textContent = `${hours}:${minutes} ${ampm}`;
}









