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
    .then(json=> outputDiv.innerText=json.contents.translated)

    
}
btnTranslate.addEventListener("click", clickHandler)