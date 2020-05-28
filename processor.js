let gsmInput, widthInput, outP

const calcLength = (gsm, width) => 1000/(gsm * width)

const onChange = () => {
    let length = calcLength(gsmInput.value, widthInput.value) + ""
    if (length === 'Infinity') length = '0'
    if (length.includes('.')) {
        let dotIndex = length.indexOf('.')
        length = length.substr(0, dotIndex+3)
    }

    outP.innerHTML = length + " meters"
}


window.onload = () => {
    console.log("Hello");
    gsmInput = document.getElementById("gsm")
    widthInput = document.getElementById("width")
    outP = document.getElementById("output")
}