console.log("webpack Working")
import img from "./assets/img.jpg"
import { contactContent,aboutContent,homeContent } from "./modules/add-content-to-div";

const content = document.querySelector("#content")


const about = document.querySelector('.about')
const home = document.querySelector('.home')
const contact = document.querySelector('.contact')

about.addEventListener('click' , () => {
    if (content.firstChild) {
        content.querySelectorAll("*").forEach(e => e.remove());
    }
    aboutContent(content,img)
})
home.addEventListener('click' , () => {
    if (content.firstChild) {
        content.querySelectorAll("*").forEach(e => e.remove());
    }
    homeContent(content,img)
})

contact.addEventListener('click' , () => {
    if (content.firstChild) {
        content.querySelectorAll("*").forEach(e => e.remove());
    }
    contactContent(content,img)
})




