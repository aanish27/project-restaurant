export function addContentToDiv(div,img) {
    let bgImg = document.createElement("img")
    bgImg.src = img
    let introText = document.createElement("p")
    let openText = document.createElement("p")
    introText.innerHTML = "we are the best in the west"
    openText.innerHTML = "we are oben from 7am to 9pm, come visit sheck out us"
    return div.append(bgImg,introText,openText)

}
