var btnTranslate = document.querySelector("#btn-translate");
var txtInput= document.querySelector("#txt-input");
var outputDiv= document.querySelector("#output")
var serverURL= "https://api.funtranslations.com/translate/shakespeare.json"

function getTranslationURL(text) {
    return serverURL+"?"+"text="+text
}
    
function clickHandler(){ 
    
    txtInput.value;
    fetch(getTranslationURL(txtInput.value))
    .then(response => response.json())
    .then(json => console.log(json.contents.translated;))

    console.log("output",outputDiv.innerText="ajajaja "+ txtInput.value)
}
btnTranslate.addEventListener("click", clickHandler)