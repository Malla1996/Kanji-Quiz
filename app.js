//H1 WHERE TEXT IS DISPLAYED
const kanji = document.querySelector('.kanji');
//INPUT WHERE USER ENTERS ROMAJI
const input = document.getElementById('input');
//BUTTON USERS CLICKS AFTER ENTERING GUESS
const check = document.getElementById('check');

//KANJI OBJECT:KEYS=ROMAJI & VALUE=KANJI

const kanjiObj = {
  jin: '人',
  shin: '新',
  eki: '駅',
  den: '電'
}
//ARRAY  OF KANNJI CHARACTERS
const kanjiValue = Object.values(kanjiObj);
//ARRAY OF ROMAJI
const kanjiKey = Object.keys(kanjiObj);

//COUNTER CHANGES
let counter = 0;

let nowKanji = kanjiValue[counter];
let nowRomaji = kanjiKey[counter];


//ALWAYS LISTENING FOR A CLICK ON THE BUTTON WITH CHECK ID
check.addEventListener('click', function(){
  if (input.value===nowRomaji){
display();
correct();
  }else{
incorrect();
  }
});
function display (){
  if(counter<kanjiValue.length){
    counter=counter+1;
    nowKanji = kanjiValue[counter];
    nowRomaji=kanjiKey[counter];
    kanji.innerHTML=nowKanji;
    input.value='';
  }else{
    kanji.innerHTML="GOOD Job!Keep Studying!N1 Soon"
  }
 
}
function incorrect(){
  kanji.style.color='blue';
kanji.innerHTML='incorrect,Try Again';
input.value='';
setTimeout(function(){
  kanji.innerHTML=nowKanji;
},2000);
}
function correct(){
  if(counter===kanjiValue.length){
    kanji.innerHTML="GOOD Job!Keep Studying!N1 Soon"
  }else{
  kanji.style.color='green';
  kanji.innerHTML='correct';
  input.value='';
  setTimeout(function(){
    kanji.style.color='black';
    kanji.innerHTML=nowKanji;
  
  },2000);
}
} 