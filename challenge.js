// timer function
function incrementSeconds(){
  let counter = parseInt(document.getElementById('counter').innerText,10);
  counter+=1;
  document.getElementById('counter').innerText = counter;
  };

let timer = setInterval(incrementSeconds, 1000);

// plus and minus counter
document.getElementById('-').addEventListener('click',function(){
  let counter = parseInt(document.getElementById('counter').innerText,10);
  counter-=1;
  document.getElementById('counter').innerText = counter;
});

document.getElementById('+').addEventListener('click',function(){
  let counter = parseInt(document.getElementById('counter').innerText,10);
  counter+=1;
  document.getElementById('counter').innerText = counter;
});

// pause function
function disableButtons(){
  document.getElementById('-').disabled=true;
  document.getElementById('+').disabled=true;
  document.getElementById('<3').disabled=true;
};

function enableButtons(){
  document.getElementById('-').disabled=false;
  document.getElementById('+').disabled=false;
  document.getElementById('<3').disabled=false;
};

function stopTimer(){
  clearInterval(timer)
}

function resumeTimer(){
  timer = setInterval(incrementSeconds, 1000)
}

function switchText(){
  let toggle = document.getElementById('pause');
  if (toggle.innerText == "pause"){
    toggle.innerText = "resume"
  } else{
    toggle.innerText = "pause"
  }
};

document.getElementById('pause').addEventListener('click',function(){
  if(document.getElementById('-').disabled==true){
    enableButtons();
    resumeTimer();
    switchText();
  }
  else{
    disableButtons();
    clearInterval(timer);
    switchText();
  }
});

// Adding comments feature
document.getElementById('comment-form').addEventListener('submit',function(event){
  if (!document.getElementById('submitted-comments')){
    let submissions = document.createElement('ul')
    document.body.appendChild(submissions)
    let comment = document.querySelector('input').value
    submissions.innerHTML += `<li>${comment}</li>`
  }else{
    let submissions = document.querySelector('ul')
    let comment = document.querySelector('input').value
    submissions.innerHTML += `<li>${comment}</li>`
  }
  event.preventDefault();
});


// Adding like feature
let dict = {};

document.getElementById('<3').addEventListener('click',function(event){
  let key = document.getElementById('counter').innerText
  if (!dict[key]){
    dict[key]=1
  } else{
    dict[key]+=1
  }
  alert(`${key} has been liked ${dict[key]} time(s)!`)
})
