const button1 = document.querySelector("#button-1")
const button2= document.querySelector("#button-2")
const container = document.querySelector(".container")
if (button1) {
    button1.addEventListener("click", () => {
        if (container.style.opacity === "0") {
            container.style.opacity = "1"
            container.style.visibility = "visible"
        } else {
            container.style.opacity = "0"
            container.style.visibility = "hidden"
        }
    }) 
}
if (button2) {
    button2.addEventListener("click" , () => {
        container.style.opacity = "0"
        container.style.visibility = "hidden"
    })
}
if (window.innerWidth >= 768 ) {
    button2.style.display = "none"
}