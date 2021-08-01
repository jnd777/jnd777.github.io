function escaped(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#x27;")
         .replace(/a1/g, "ā")
         .replace(/a2/g, "á")
         .replace(/a3/g, "ǎ")
         .replace(/a4/g, "à")
         .replace(/e1/g, "ē")
         .replace(/e2/g, "é")
         .replace(/e3/g, "ě")
         .replace(/e4/g, "è")
         .replace(/i1/g, "ī")
         .replace(/i2/g, "í")
         .replace(/i3/g, "ǐ")
         .replace(/i4/g, "ì")
         .replace(/o1/g, "ō")
         .replace(/o2/g, "ó")
         .replace(/o3/g, "ǒ")
         .replace(/o4/g, "ò")
         .replace(/u1/g, "ū")
         .replace(/u2/g, "ú")
         .replace(/u3/g, "ǔ")
         .replace(/u4/g, "ù")
         .replace(/v1/g, "ǖ")
         .replace(/v2/g, "ǘ")
         .replace(/v3/g, "ǚ")
         .replace(/v4/g, "ǜ")
         ;
 }

function practiceTest(difficulty,lessonsTested){
    //Get value from "difficulty"
    let diffLevel = document.getElementById(difficulty);
    const testLevel = diffLevel.options[diffLevel.selectedIndex].value;
    //Get value from "lessonsTested"
    let testLessons = document.getElementById(lessonsTested);
    const testVocab = testLessons.options[testLessons.selectedIndex].value;
    //console.log(`Difficulty level ${testLevel} including up to lesson ${testVocab}`);

function printTest(data){
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let rightEntries = [];
    let wrongEntries = [];
    let review = [];
    if(testLevel==1){
        for(let i=0; i<data.length; i++){
            if(data[i].lesson<=testVocab){
                let answer1 = data[i].pinyin;
                let answer2 = data[i].pinyin2;
                let userEntry = window.prompt(`Please enter the pinyin for "${data[i].spanishTranslation}"`);
                let userAttempt = this.escaped(userEntry);
                if(userAttempt == answer1){
                    correctAnswers++;
                    window.alert(`"${answer1}" is correct`);
                    rightEntries.push(answer1);
                } else if(userAttempt == answer2){
                    correctAnswers++;
                    window.alert(`"${answer2}" is correct`);
                    rightEntries.push(answer2);
                } else if(userAttempt == ""){
                    break;
                } else {
                    incorrectAnswers++;
                    window.alert(`Your answer is incorrect. The correct answer is "${answer2}".`);
                    wrongEntries.push(answer2);
                    review.push(`\n* ${data[i].spanishTranslation}:${answer2}`);
                }
            } else {
                continue;
            }
        }
        
    } else if(testLevel==2){
        for(let i=0; i<data.length; i++){
            if(data[i].lesson<=testVocab){
                let answer1 = data[i].pinyin;
                let userEntry = window.prompt(`Please enter the pinyin for "${data[i].spanishTranslation}"`);
                let userAttempt = this.escaped(userEntry);
                if(userAttempt == answer1){
                    correctAnswers++;
                    window.alert(`"${answer1}" was correct`);
                    rightEntries.push(answer1);
                } else if(userAttempt == ""){
                    break;
                } else {
                    incorrectAnswers++;
                    window.alert(`Your answer is incorrect. The correct answer is "${answer1}."`);
                    wrongEntries.push(answer1);
                    review.push(`\n* ${data[i].spanishTranslation}:${answer1}`);
                }
            } else {
                continue;
            }
        }
        
    } else if(testLevel==3){
        for(let i=0; i<data.length; i++){
            if(data[i].lesson<=testVocab){
                let answer1 = data[i].word;
                let userEntry = window.prompt(`Please enter the character for "${data[i].spanishTranslation}"`);
                let userAttempt = this.escaped(userEntry);
                if(userAttempt == answer1){
                    correctAnswers++;
                    window.alert(`"${answer1}" was correct`);
                    rightEntries.push(answer1);
                } else if(userAttempt == ""){
                    break;
                } else {
                    incorrectAnswers++;
                    window.alert(`Your answer is incorrect. The correct answer is "${answer1}".`);
                    wrongEntries.push(answer1);
                    review.push(`\n* ${data[i].spanishTranslation}:${answer1}`);
                }
            } else {
                continue;
            }
        }
        
    } else if(testLevel==4){
        for(let i=0; i<data.length; i++){
            if(data[i].lesson<=testVocab){
                let answer1 = data[i].pinyin;
                let answer2 = data[i].pinyin2;
                let userEntry = window.prompt(`Please enter the pinyin for "${data[i].word}"`);
                let userAttempt = this.escaped(userEntry);
                if(userAttempt == answer1){
                    correctAnswers++;
                    window.alert(`"${answer1}" is correct`);
                    rightEntries.push(answer1);
                } else if(userAttempt == answer2){
                    correctAnswers++;
                    window.alert(`"${answer2}" is correct`);
                    rightEntries.push(answer2);
                } else if(userAttempt == ""){
                    break;
                } else {
                    incorrectAnswers++;
                    window.alert(`Your answer is incorrect. The correct answer is "${answer2}".`);
                    wrongEntries.push(answer2);
                    review.push(`\n* ${data[i].word}:${answer2}`);
                }
            } else {
                continue;
            }
        }
        
    }


    document.getElementById("result").innerText = 
    `You got ${correctAnswers} correct and ${incorrectAnswers} incorrect.
    
    Correct: ${rightEntries}
    
    Incorrect:${wrongEntries}
    
    Review:${review}`;

}

printTest(chiVoc2);


}