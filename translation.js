function translateChinese(character) {
    var translation = "";

    for(let i=0; i<chineseVocabulary.length; i++){

        if(character==chineseVocabulary[i].word){
            return translation = `The translation for ${character} is ${chineseVocabulary[i].spanishTranslation}`;
        }
    }
    return translation = `The translation for ${character} is not available`;
}
    function getHelp(){
        let entry = prompt("Enter a character");
            if(entry!=null && entry!=""){
                alert(translateChinese(entry));
                console.log("Valid entry");
            }
            else {
                console.log("Entry invalid");
            }
            
    }
    
    
    //console.log(translateChinese(entry));