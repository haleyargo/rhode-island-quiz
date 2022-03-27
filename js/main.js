

const sections = document.querySelectorAll('section');
const radios = document.querySelectorAll('input[type=radio]');
//const header = document.querySelector('header');
const btns = document.querySelectorAll('button');
const forms = document.querySelectorAll('form');
const submit = document.querySelector('.submit');
const greet = document.querySelector('.greeting');
const message = document.querySelector('.message');

const anchor1Off = document.querySelector('.anchor1off');
const anchor1On = document.querySelector('.anchor1on');

const anchor2Off = document.querySelector('.anchor2off');
const anchor2On = document.querySelector('.anchor2on');

const anchor3Off = document.querySelector('.anchor3off');
const anchor3On = document.querySelector('.anchor3on');

const anchor4Off = document.querySelector('.anchor4off');
const anchor4On = document.querySelector('.anchor4on');

let count = 0;

function enableButtons(){
	radios.forEach(function(r){
		r.addEventListener('click',function(){
			r.parentElement.parentElement.querySelector('button').disabled=false;

		})
	})
}

//*   initiate quiz  *//

//////// HEADER ////////

//////// HEADER ////////

function initQuiz(){

	count = 0;

//reset forms

	forms.forEach(function (f) {
		f.reset();
	})

//hide all sections except the first
	sections.forEach(function(s,i){
		if(i!==0){
			s.classList.add('hide');
			//header.classList.add('hide');
		}
	})

//disable all buttons except first and last
	btns.forEach(function(b,i){
		if(i!==0 && i!==btns.length-1){
		b.disabled=true;
		}
	})

enableButtons();

}

initQuiz();


btns.forEach(function(b,i){

	b.addEventListener('click',function(e){
		e.preventDefault();
		//header.classList.remove('hide');
		if(i===0){
			sections.item(0).classList.add('hide');
			sections.item(1).classList.remove('hide');
		} else if (i===1){
			anchor1Off.classList.add('hide');
			anchor1On.classList.remove('hide');
			b.parentElement.parentElement.parentElement.classList.add('hide');
			b.parentElement.parentElement.parentElement.nextElementSibling.classList.remove('hide');
			checkAnswer(i);
		} else if (i===2){
			anchor2Off.classList.add('hide');
			anchor2On.classList.remove('hide');
			b.parentElement.parentElement.parentElement.classList.add('hide');
			b.parentElement.parentElement.parentElement.nextElementSibling.classList.remove('hide');
			checkAnswer(i);
		} else if (i===3){
			anchor3Off.classList.add('hide');
			anchor3On.classList.remove('hide');
			b.parentElement.parentElement.parentElement.classList.add('hide');
			b.parentElement.parentElement.parentElement.nextElementSibling.classList.remove('hide');
			checkAnswer(i);
		}

		else if(i===btns.length-1){
			sections.item(btns.length-1).classList.add('hide');
			sections.item(0).classList.remove('hide');
		}

		else {
			b.parentElement.parentElement.parentElement.classList.add('hide');
			b.parentElement.parentElement.parentElement.nextElementSibling.classList.remove('hide');
			checkAnswer(i);
			anchor4Off.classList.add('hide');
			anchor4On.classList.remove('hide');
			if(i===btns.length-2){
				console.log('submitted');
				calculateScore();
				forms.forEach(function (f) {
				f.reset();
			})
			}
		}
	})
})

function checkAnswer(i){
	  const answer = sections.item(i).dataset.key;
	  const sectionRadios = sections.item(i).querySelectorAll('input[type=radio]');
	  if(sectionRadios.item(answer).checked){
	  	//a dd 1 to the tally of correct answers
	  	count++;
	  }
	  console.log(count);
}

function calculateScore(){
	const num = document.querySelector('.result');
	const greet = document.querySelector('.greeting');
	const message = document.querySelector('.message');

	num.textContent = count + " / 4";

	if(count === 4){
		greet.textContent = "Amazing!";
		message.textContent = "You are a true Rhode Island Native.";
	} else if(count === 3){
		greet.textContent = "Congrats";
		message.textContent = "You did ok.";
	} else if(count === 2){
		greet.textContent = "Getting there...";
		message.textContent = "Not great but not terrible.";
	} else if(count === 1){
		greet.textContent = "Awkward";
		message.textContent = "This is pretty bad but you clearly tried.";
	} else {
		greet.textContent = "Horrible";
		message.textContent = "You did bad on this quiz and bring shame to the entire state.";
	}
}


///// reset count at end of quiz /////

const resetBtn = document.querySelector('.resetquiz');

resetBtn.addEventListener('click',function(){
	count = 0;
	console.log('hello');
	anchor1Off.classList.remove('hide');
	anchor1On.classList.add('hide');
	anchor2Off.classList.remove('hide');
	anchor2On.classList.add('hide');
	anchor3Off.classList.remove('hide');
	anchor3On.classList.add('hide');
	anchor4Off.classList.remove('hide');
	anchor4On.classList.add('hide');
})


initQuiz();

