let cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Sheikhpura', 'Kashmir', 'Shahkot']
let originalText = "I love my country Pakistan. <br> I like my city Faisalabad. <br> I love my Homeland."

// ..............................................................................................................

function lowercase() {
    let lowerText = originalText.toLowerCase()
    document.getElementById("output").innerHTML = lowerText
}

function uppercase() {
    let lowerText = originalText.toUpperCase()
    document.getElementById("output").innerHTML = lowerText
}

function capitalize() {
    document.getElementById("output").innerHTML = '<span style = "text-transform: capitalize">' + originalText + '</span>'
}

function formatting() {
    let inputText = document.getElementById("inputHere").value
    let lower = inputText.toLowerCase()
    document.getElementById("output").innerHTML = ""

    if (inputText == "") {
        alert("Please Enter any Text")
        return
    }
    else {
        document.getElementById("output").innerHTML = '<span style = "text-transform: capitalize">' + lower + '</span>'
    }
}

function allCities() {

    document.getElementById("output").innerHTML = ""
    for (let i = 0; i < cities.length; i++) {
        let num = i + 1;
        document.getElementById("output").innerHTML += num + ") " + cities[i] + "<br>"
    }
}

function addCity() {
    let names = document.getElementById("inputHere").value
    // let allCities = cities.slice()
    if (names != "") {
        document.getElementById("output").innerHTML = ""
        cities.push(names)
        for (let i = 0; i < cities.length; i++) {
            let num = i + 1;
            document.getElementById("output").innerHTML += num + ") " + cities[i] + "<br>"
        }
        document.getElementById("inputHere").value = ""
    }
    else {
        alert("Please Add Your City")
        return
    }
}

function checkCity() {
    let city = document.getElementById("inputHere").value

    if (!city) {
        alert('Please Enter Your City.')
        return
    }

    let firstLetter = city.charAt(0).toUpperCase()
    let allLetter = city.slice(1).toLowerCase()
    let allLetters = firstLetter + allLetter

    let cityFound = false

    for (let i = 0; i < cities.length; i++) {
        if (cities[i] == allLetters) {
            cityFound = true
            document.getElementById("output").innerHTML = allLetters + " Already Exist"
        }
    }

    if (cityFound == false) {
        cities.push(allLetters)
        document.getElementById("output").innerHTML = allLetters + " Added to your list"
    }

    document.getElementById("inputHere").value = ""
}

function findWord() {
    let userText = document.getElementById("inputHere").value
    let userText1 = userText.charAt(0).toUpperCase()
    let userText2 = userText.slice(1).toLowerCase()
    let finalText = userText1 + userText2

    if (!userText) {
        alert("Please Enter any Word")
        return
    }

    let findWord = cities.indexOf(finalText)

    if(findWord == -1){
        let noFind = "Your Word " + '<span style = "color: red; font-size: 18px">' + finalText+ '</span>'+ " is not Found in the List"
        document.getElementById("output").innerHTML = noFind
    }
    else{
        let find = "Your Word " + '<span style = "color: green; font-size: 18px">' + finalText+ '</span>'+ " is Found in the List at Index of " +findWord
        document.getElementById("output").innerHTML = find
    }
    document.getElementById("inputHere").value = ""

}

function replaceWord() {
    document.getElementById("output").innerHTML = " "
    let userText = document.getElementById("inputHere").value.toLowerCase()
    originalText = originalText.slice().toLowerCase()

    if (!userText) {
        alert("Please Enter any Word")
        return
    }

    let replaceWith = prompt("Enter Replace With Word").toLowerCase()

    if(!replaceWith){
        alert("Please Enter Replace With Value")
        return
    }

    // userText = new RegExp(userText, 'g')

    let replaceWord = originalText.replace(userText, replaceWith)
    let html = '<span style = "text-transform: capitalize">' + replaceWord + '</span>'
    document.getElementById("output").innerHTML = html
    document.getElementById("inputHere").value = ""

}

function clearbtn1() {
    document.getElementById("inputHere").value = ""
}


function clearOutput() {
    document.getElementById("output").innerHTML = " "
}