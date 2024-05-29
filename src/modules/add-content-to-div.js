export { homeContent , aboutContent , contactContent };


function homeContent(div,img) {
    let bgImg = document.createElement("img")
    bgImg.src = img
    bgImg.style.width = '600px'
    bgImg.style.height = '600px'
    let introText = document.createElement("p")
    let openText = document.createElement("p")
    introText.innerHTML = "we are the best in the west"
    openText.innerHTML = "we are oben from 7am to 9pm, come visit sheck out us"
    return div.append(bgImg,introText,openText)

}


function aboutContent(div,img) {
    let bgImg = document.createElement("img")
    bgImg.src = img
    bgImg.style.width = '600px'
    bgImg.style.height = '600px'
    let introText = document.createElement("p")
    let openText = document.createElement("p")
    introText.innerHTML = "the story"
    openText.innerHTML = "i dont even know"
    return div.append(bgImg,introText,openText)

}

function contactContent(div,img) {
    let bgImg = document.createElement("img")
    bgImg.src = img
    bgImg.style.width = '600px'
    bgImg.style.height = '600px'
    let introText = document.createElement("p")
    let openText = document.createElement("p")
    introText.innerHTML = "contact"
    openText.innerHTML = "+94100023003"
    return div.append(bgImg,introText,openText)

}
