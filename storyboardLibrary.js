function test() {
	document.write('hellfao world');
}

function initialize() {
	var storyboard = new Object();
	storyboard.chapters = new Array();

	return storyboard;
}

function addChapter(storyboard) {
	var chapter = {};
	var numChapters = storyboard.chapters.length;
	storyboard.chapters[numChapters] = chapter;

	updateDisplay(storyboard);

}

function updateDisplay(storyboard) {
	var element = document.getElementById("TestName");
	element.innerHTML = JSON.stringify(storyboard);
}


function createQuestion(storyboard,questionText) {
	question = new Object();
	question.text = questionText;
	question.text = 'Question Text';
	question.answers = new Array();
	updateDisplay(storyboard);
	return question;
}

function addQuestion(storyboard,question) {
	var numChapters = storyboard.chapters.length;
	storyboard.chapters[numChapters-1].question = question;
	updateDisplay(storyboard);
}

function addAnswerToQuestion(question,aText,link) {
	var numChapters = storyboard.chapters.length;
	var answer = {};
	answer.text = aText;
	answer.text = 'Answer Text';
	answer.link = 'Answer Link';

	if (~question.answers) {
		question.answers = new Array();
	};

	//debugger;
	question.answers[numChapters-1] = answer;
}

function addVideo(storyboard,videoLink) {

	var numChapters = storyboard.chapters.length;
	storyboard.chapters[numChapters-1].video = videoLink;
	storyboard.chapters[numChapters-1].videoLink = 'Video Link';
	updateDisplay(storyboard);
}


function storeStoryboard(storyboard) {
	localStorage.setItem('gameStorage', JSON.stringify(storyboard));

	var retrievedObject = localStorage.getItem('gameStorage');
	var parsedObject = JSON.parse(retrievedObject);

	updateDisplay(storyboard);

}
function printStoryboard(storyboard) {
	document.write(JSON.stringify(storyboard));
	updateDisplay(storyboard);
	//Need to store storyboard
}
function returnStoryboard(storyboard) {
	updateDisplay(storyboard);
	return (JSON.stringify(storyboard));
	//Need to store storyboard
}



//Storyboard: <u><script type="text/javascript">document.write(returnStoryboard(storyboard));</script></u>

