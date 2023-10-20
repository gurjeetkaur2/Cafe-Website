//this function is for form validation
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const date = document.getElementById('date');
const time = document.getElementById('time');
const people = document.getElementById('people');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const dateValue = date.value.trim();
    const timeValue = time.value.trim();
    const peopleValue = people.value.trim();
    const messageValue = message.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(dateValue === '') {
        setError(date, 'date is required');
    } else {
        setSuccess(date);
    }

    if(timeValue === '') {
        setError(time, 'Please enter between cafe timings');
    }  else {
        setSuccess(time);
    }
    if(peopleValue === '') {
        setError(people, 'enter how many people');
    }  else {
        setSuccess(people);
    }
    if(messageValue === '') {
        setError(message, 'any special request');
    }  else {
        setSuccess(message);
    }
};


// this function is for image slider

var slides = document.querySelector('.slider-items').children;
var nextSlide = document.querySelector(".right-slide");
var prevSlide = document.querySelector(".left-slide");
var totalSlides = slides.length;
var index = 0;

nextSlide.onclick=function() {
    next("next");
}
prevSlide.onclick=function() {
  next("prev");
}
function next(direction){
  
  if(direction=="next"){
    index++;
    if(index==totalSlides){
      index=0;
    }
  }

  else{
    if(index==0){
      index=totalSlides-1;
    }
    else{
      index--;
    }
  }

  for(i=0;i<slides.length;i++){
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}

