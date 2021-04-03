function jumpToLesson(a){
    //Get value from "selectedLesson"
    let lesson = document.getElementById(a);
    let lessonNumber = lesson.options[lesson.selectedIndex].value;
    //console.log(`Lesson is: ${lessonNumber}`);
    //Change href in "jumpButton"
    let anchor = `#class${lessonNumber}`;
    //console.log(`The anchor now is: ${anchor}`);
    jumpButton.href = anchor;
}