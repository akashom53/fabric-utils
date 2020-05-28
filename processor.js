let gsmInput, widthInput, outP

const calcLength = (gsm, width) => 1000/(gsm * width)

const onChange = () => {
    const length = calcLength(gsmInput.value, widthInput.value)
    outP.innerHTML = (Math.round(length * 100) / 100).toFixed(2) + " meters"
}


window.onload = () => {
    console.log("Hello");
    gsmInput = document.getElementById("gsm")
    widthInput = document.getElementById("width")
    outP = document.getElementById("output")
}