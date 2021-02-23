
let events = {
    startOpen: false, 
    start: document.querySelector(`#start`),
    
    notepadOpen: false,
    notepad: document.querySelector(`#notepad`)
}

class applet {
    constructor(doc, app, trigger) {
        if (!doc || !app || !trigger) {
            console.error(`Applet missing arguments!`)
            return
        }

        this.open = false
        this.applet = doc.querySelector(`#` + app)

        doc.querySelector(`#` + trigger).addEventListener(`click`, () => {
            if (this.open) {
                this.open = false
                this.applet.style.opacity = 0
                setTimeout(() => this.applet.style.display = `none`, 250)
            } else {
                this.open = true
                this.applet.style.display = `block`
                setTimeout(() => this.applet.style.opacity = 1, 10)
            }
        })
    }
}

new applet(document, `start`, `taskbar-start`)
new applet(document, `notepad`, `taskbar-notepad`)


