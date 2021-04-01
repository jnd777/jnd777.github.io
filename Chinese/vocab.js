function buildVocabTable(data){
    var table = document.getElementById('myTable');
    for (var i=0; i<data.length; i++) {
        var row = `<tr>
            <td>${data[i].word}</td>
            <td>${data[i].pinyin}</td>
            <td>${data[i].spanishTranslation}</td>
            <td>${data[i].example}</td>
            </tr>`
        table.innerHTML +=row;
    }
}

buildVocabTable(chineseVocabulary);

//<td>${data[i].englishTranslation}</td>
