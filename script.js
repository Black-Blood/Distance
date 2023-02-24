import { calculateEuclid, calculateManhattan, calculateChebyshev } from "./metric-calculator.js"

window.addEventListener("load", () => {
    setServiceWorker()

    document.forms["calculator"].addEventListener("submit", (e) => {
        e.preventDefault()

        let isValidSummary = true
        for (let j = 0; j < 2; j++) {
            for (let i = 1; i < 4; i++) {
                const input = document.forms["calculator"][(j === 0 ? "x" : "y") + i]
                isValidSummary = isValid(input) && isValidSummary
            }
        }
        if (isValidSummary) {
            calculate()
            document.getElementById("calculatorError").close()
            return
        }

        document.getElementById("calculatorError").show()
    })

    setValidationOnInput()
})

function setServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register("sw.js").catch((e) => { console.log(e) })
    }
}

function setValidationOnInput() {
    for (let j = 0; j < 2; j++) {
        for (let i = 1; i < 4; i++) {
            document.forms["calculator"][(j === 0 ? "x" : "y") + i].addEventListener("input", (e) => {
                isValid(e.currentTarget)
            })
        }
    }
}

function isValid(input) {
    if (input.checkValidity()) {
        input.setAttribute("aria-invalid", "false")
        return true;
    }

    input.setAttribute("aria-invalid", "true")
    return false
}

function calculate() {
    const vector1 = [
        Number(document.forms["calculator"]["x1"].value),
        Number(document.forms["calculator"]["x2"].value),
        Number(document.forms["calculator"]["x3"].value),
    ]

    const vector2 = [
        Number(document.forms["calculator"]["y1"].value),
        Number(document.forms["calculator"]["y2"].value),
        Number(document.forms["calculator"]["y3"].value),
    ]

    // Вихідні поля для метрик
    document.forms["calculator"]["euclid"].value = calculateEuclid(vector1, vector2)
    document.forms["calculator"]["manhattan"].value = calculateManhattan(vector1, vector2)
    document.forms["calculator"]["chebyshev"].value = calculateChebyshev(vector1, vector2)
}
