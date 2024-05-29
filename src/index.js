console.log("webpack Working")
import img from "./assets/img.jpg"
import { addContentToDiv } from "./modules/add-content-to-div";

const content = document.querySelector("#content")




addContentToDiv(content,img)
