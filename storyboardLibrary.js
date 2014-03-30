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

	// updateDisplay(storyboard);

}

function updateDisplay(storyboard) {
	var element = document.getElementById("TestName");
	// element.innerHTML = JSON.stringify(storyboard);
	//var element = document.getElementById("TestName");
	//element.innerHTML = JSON.stringify(storyboard);
}


function createQuestion(storyboard,questionText) {
	question = new Object();
	question.text = questionText;
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
	var answer = {};
	answer.text = aText;
	answer.link = link;

	if (question.answers == null) {
		question.answers = new Array();
	};

	var numAnswers = question.answers.length;

	question.answers[numAnswers] = answer;
}

function addVideo(storyboard,videoLink) {

	var numChapters = storyboard.chapters.length;
	storyboard.chapters[numChapters-1].videoLink = videoLink;
	updateDisplay(storyboard);
}


function storeStoryboard(storyboard) {
	localStorage.setItem('gameStorage', JSON.stringify(storyboard));

	var retrievedObject = localStorage.getItem('gameStorage');
	var parsedObject = JSON.parse(retrievedObject);

	updateDisplay(storyboard);

}

function loadStoryboard(storyboard) {
	var retrievedObject = localStorage.getItem('gameStorage');
	var parsedObject = JSON.parse(retrievedObject);
	return parsedObject;
}

function getVideoFromStoryboard(storyboard,index) {
	return storyboard.chapters[index].videoLink;
}

function getQuestionFromStoryboard(storyboard,index) {
	return storyboard.chapters[index].question;
}

function getQuestionTextFromQuestion(question) {
	return question.text;
}
function getAnswersFromQuestion(question) {
	return question.answers;
}
function getAnswerTextFromAnswer(answer) {
	return answer.text;
}
function getAnswerLinkFromAnswer(answer) {
	return answer.link;
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

