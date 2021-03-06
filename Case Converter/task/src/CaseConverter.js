//test js is connected to html
console.log("JS is connected.");

/*//textarea element
let textarea = document.getElementById("textarea");
*/

//UPPER CASE Button
document.getElementById("upper-case").addEventListener("click", function () {
    // console.log("UPPER CASE Button Pressed!");
    document.getElementById("textarea").value = document.getElementById("textarea").value.toUpperCase();
});

//lower case Button
document.getElementById("lower-case").addEventListener("click", function () {
    // console.log("lower case Button Pressed!");
    document.getElementById("textarea").value = document.getElementById("textarea").value.toLowerCase();
});

function toProperCase(text) {
    // 1. Find length of string
    // 2. For loop until length of string
    // nextLetterShouldBeUpperCase - true if character is not letter, false if else
    // 3. Check each character, if "nextLetterShouldBeUpperCase" is true, then convert to upper case and set "nextLetterShouldBeUpperCase" to false
    // If "nextLetterShouldBeUpperCase" is false, then convert to lower case.
    // 4. If it is a letter - we just do what we're doing. If it's not a letter, then set "nextLetterShouldBeUpperCase" to true
    let length = text.length
    let result = ""
    let nextLetterShouldBeUpperCase = true
    for (let i = 0; i < length; i++) {
        let char = text[i].charCodeAt(0)
        let isLetter = (char >= 65 && char < 91) || (char >= 97 && char < 123);

        if (isLetter) {
            // isLetter = true
            if (nextLetterShouldBeUpperCase) {
                result = result.concat(text[i].toUpperCase());
                nextLetterShouldBeUpperCase = false
            } else {
                result = result.concat(text[i].toLowerCase());
            }
        } else if (char === 32){
            // isLetter = false && character is "space"
            result = result.concat(text[i]);
            nextLetterShouldBeUpperCase = true
        } else if (char >= 48 && char < 57) {
            // isLetter = false && character is a number
            result = result.concat(text[i]);
            nextLetterShouldBeUpperCase = false
        } else {
            // isLetter = false character is not "'"
            result = result.concat(text[i]);

        }

    }

    return result;
}

//Proper Case Button
document.getElementById("proper-case").addEventListener("click", function () {
    // console.log("Proper Case Button Pressed!");
    let text = document.getElementById("textarea").value
    document.getElementById("textarea").value = toProperCase(text)
});

function toSentenceCase(text) {
    //1. find length of string
    //2. For Loop until length of string
    // nextLetterShouldBeUpperCase - true if character is a "." or "?" or "!" ("endOfSentence"), false otherwise
    //3. Check whether each character is a letter: yes then -> if "nextLetterShouldBeUpperCase" is true, then convert to upper case, append to "result" and set "nextLetterShouldBeUpperCase" to false
    //If "nextLetterShouldBeUpperCase" is false, then convert to lower case, append to "result".
    //4. If it is not a letter, just append to "result" and if it is "." or "?" or "!" then set  "nextLetterShouldBeUpperCase" to true
    //Summary: For loop (duration: length of string text), check whether each character is a letter. If yes, then check if "nextLetterShouldBeUpperCase".
    let length = text.length
    let result = ""
    let nextLetterShouldBeUpperCase = true

    for (let i = 0; i < length; i++) {
        let char = text[i].charCodeAt(0)
        let isLetter = (char >= 65 && char < 91) || (char >= 97 && char < 123);
        let endOfSentence = (char == "33") || (char == "46") || (char == "63");

        if (isLetter) {
            //isLetter is true
            if (nextLetterShouldBeUpperCase) {
                result = result.concat(text[i].toUpperCase());
                nextLetterShouldBeUpperCase = false
            } else {
                result = result.concat(text[i].toLowerCase());
            }
        }  else if (endOfSentence) {
            // isLetter = false && endOfSentence
            result = result.concat(text[i]);
            nextLetterShouldBeUpperCase = true
         }  else {
            // isLetter = false && != endOfSentence
            result = result.concat(text[i]);
        }

    }
    return result;
}

//Sentence case Button
document.getElementById("sentence-case").addEventListener("click", function () {
    // console.log("Sentence case Button Pressed!");
    let text = document.getElementById("textarea").value
    document.getElementById("textarea").value = toSentenceCase(text)
});

//Save Text File Function
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.


//Save Text File Button
document.getElementById("save-text-file").addEventListener("click", function () {
    download("text.txt", document.getElementById("textarea").value );
    console.log("Save Text File Button Pressed!");
    });
