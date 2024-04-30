var messageID = 1
//goofy ahh code
var msg1 = 0;
var msg2 = 0;
var msg3 = 0;
var msg4 = 0;
var msg5 = 0;
var msg6 = 0;
var msg7 = 0;
var msg8 = 0;
var msg9 = 0;
var msg10 = 0;
var msg11 = 0;
var msg12 = 0;
var msg13 = 0;
var msg14 = 0;
var msg15 = 0;
var msg16 = 0;
var msg17 = 0;
var msg18 = 0;

//stuf
function playerMessage(msg){
  messageID++
   aiCont.innerHTML = aiCont.innerHTML + `<div class='playerMessages${messageID}'id='playerMessages'>${msg}</div>`
document.querySelector('.playerMessages'+messageID).scrollIntoView();
  opt4.style.display = "none";
}
function aiMessage(msg){
   aiCont.innerHTML = aiCont.innerHTML + `<div class='playerMessages${messageID}'id='aiMessages'>${msg}</div>`
document.querySelector('.playerMessages'+messageID).scrollIntoView();
opt4.style.display = "";}
//declaring variables
var aiCont = document.getElementById('ai');


//Stage Variables
var opt1 = document.getElementById('set1Message');
var opt2 = document.getElementById('set2Message');
var opt3 = document.getElementById('set3Message');
var opt4 = document.getElementById('set4Message');
var opt5 = document.getElementById('set5Message');
// Stage 1; Case 1
function s1c1(){
aiCont.innerHTML = aiCont.innerHTML + "<div id='playerMessages'>No?</div>"
  opt1.style.display = "none"
  setTimeout(s1c1_1, 1000);
}
function s1c1_1(){
  aiCont.innerHTML = aiCont.innerHTML + "<div id='aiMessages'>Oh. Must've been another human.</div>"
  opt2.style.display = ""
}
// Stage 1; Case 2
function s1c2(){
aiCont.innerHTML = aiCont.innerHTML + "<div id='playerMessages'>Yeah so?</div>"
  opt1.style.display = "none"
  setTimeout(s1c2_1, 1000);
}
function s1c2_1(){
  aiCont.innerHTML = aiCont.innerHTML + "<div id='aiMessages'>Shouldn't have said that...</div>"
  setTimeout(s1c2_2, 1000)
}
function s1c2_2(){
location.href= "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

}

//Stage 2; Case 1
function s2c1(){
  aiCont.innerHTML = aiCont.innerHTML + "<div id='playerMessages'>Wait. Aren't you COMMUNIST?</div>"
  opt2.style.display = "none";
  setTimeout(s2c1_1, 1000)
}
function s2c1_1(){
  aiCont.innerHTML = aiCont.innerHTML + "<div id='aiMessages'>Yeah, but we aren't as bad.</div>"
  opt3.style.display = ""

}
//Stage 2; Case 2
function s2c2(){

  aiCont.innerHTML = aiCont.innerHTML + "<div id='playerMessages'>Ok, bye.</div>"
  opt2.style.display = "none";
  setTimeout(s2c2_1, 1000)
}
function s2c2_1(){
  aiCont.innerHTML = aiCont.innerHTML + "<div id='aiMessages'>huh. definitely not the person who harassed my brother.</div>"
  setTimeout(s2c2_2, 1000)
}
function s2c2_2(){
  location.href = "https://www.youtube.com/watch?v=Sz_kQuEM0mI&pp=ygUJQnllIE1FTUVl"
}

//Stage 3; Case 1
function s3c1(){
  aiCont.innerHTML = aiCont.innerHTML + "<div id='playerMessages'>Nah, I don't trust you.</div>"
  opt3.style.display = "none";
  setTimeout(s3c1_1, 1000)
}
function s3c1_1(){
   aiCont.innerHTML = aiCont.innerHTML + "<div id='aiMessages'>LOOK AT THE ANTHEM LIL BOY. wooops i inserted the USSR anthem</div>"
  setTimeout(s3c1_2, 1000);
}
function s3c1_2(){
  location.href = "https://www.youtube.com/watch?v=U06jlgpMtQs"
}

//Stage 3; Case 2
function s3c2(){
  aiCont.innerHTML = aiCont.innerHTML + "<div id='playerMessages'>Fine...</div>"
  opt3.style.display = "none";
  setTimeout(s3c2_1, 1000)
}
function s3c2_1(){
  aiCont.innerHTML = aiCont.innerHTML + "<div id='aiMessages'>Cool. Bây giờ hãy hỏi tôi những câu hỏi</div>"
   opt4.style.display = "";
}


//Stage 4


//case 1
  function s4c1(){
    playerMessage("Who was Ho Chi Minh?");
    setTimeout(s4c1_1, 1000)
  } 

function s4c1_1(){
  if(msg1 == 0){
  aiMessage("YOU DONT KNOW WHO HO CHI MINH IS? now i know why humans have the attention span of a fish... Ho Chi Minh was a vietnamese revolutionary, who lived from 1890 to 1969. He was a communist who wanted to liberate Vietnam from other colonists such as the French.")
    msg1 =1 
  }else{
    sarcasm()
  }
}
//case 2
  function s4c2(){
 
    playerMessage("Who was Lyndon B. Johnson?");
    setTimeout(s4c2_1, 1000)
  } 

function s4c2_1(){
  if(msg2==0){
  aiMessage("Why. Why do you ask this? Lyndon B. Johnson was a U.S. president who lived from 1908 to 1973. He greatly expanded American involvement in the Vietnam War. People did not like him because of how many American deaths he caused. ")
      msg2=1
    }else{
      sarcasm()
    }
}
//case 3
  function s4c3(){
    playerMessage("Who was Henry Kissinger?");
    setTimeout(s4c3_1, 1000)
  } 

function s4c3_1(){
  if(msg3==0){
  aiMessage("Henry Kissinger was an American diplomat who lived from 1923 to 2023. He helped with peace negotiations with North Vietnam. To be honest, he was a nice dude.")
  msg3=1
  }else{
    sarcasm()
  }
}
//case 4
  function s4c4(){
    playerMessage("Who was Robert S. McNamara?");
    setTimeout(s4c4_1, 1000)
  } 

function s4c4_1(){
  if(msg4==0){
  aiMessage("Robert S. McNamara was a U.S. secretary of defense who escalated operations in Vietnam. He was alive from 1916 to 2009. ")
    msg4=1
  }else{
    sarcasm()
  }

}
//case 5
  function s4c5(){
    playerMessage("What was the cause?");
    setTimeout(s4c5_1, 1000)
  } 

function s4c5_1(){
  if(msg5==0){

  aiMessage( "The cause was that America didn´t want South Vietnam to fall to communism so they sent troops to South Vietnam to protect them from The North . It took place from 1955 to 1975.")
    msg5=1
    }else if(msg5==1){
      sarcasm()
    }

}



//case 7
  function s4c7(){
    playerMessage("What is the Domino Theory?");
    setTimeout(s4c7_1, 1000)
  } 

function s4c7_1(){
  if(msg7==0){
  aiMessage("Foreign policy principle of the 1950s and 60s stating, if one country falls to comunism, neighboring countries would also fall. How do you not know this?")
  msg7=1
  }else{
    sarcasm()
  }

}
//case 8
  function s4c8(){
    playerMessage("What is the Vietcong?");
    setTimeout(s4c8_1, 1000)
  } 

function s4c8_1(){
  if(msg8==0){
  aiMessage("Finally, someone asked! They were the communist guerilla movement in Vietnam that fought the slightly less communist south Vietnamese.")
    msg8=1
  }else{
    sarcasm()
  }

}
//case 9
  function s4c9(){

    playerMessage("What is the Ho Chi Minh Trail?");
    setTimeout(s4c9_1, 1000)
  } 

function s4c9_1(){
  if(msg9==0){
  aiMessage("Ahh, A network of roads in the jungle used for supplying military rations and troops to fight in South Vietnam against America.");
    msg9=1
  }else{
    sarcasm()
  }
}
//case 10
  function s4c10(){
    playerMessage("What is Tonkin Gulf Resolution?");
    setTimeout(s4c10_1, 1000)
  } 

function s4c10_1(){
  if(msg10==0){
  aiMessage("An act of the congress that was highly controversial. It gave president Lyndon Johnson the authority to control parts of the military involvement in the Vietnam war.")
    msg10=1
  }else{
    sarcasm()
  }
}
//case 11
  function s4c11(){

    playerMessage("What is Napalm");
    setTimeout(s4c11_1, 1000)
  } 

function s4c11_1(){
   if(msg11==0){
  aiMessage("The atrocities committed with this were bad. Of course, you wouldn't know that. But it was a very bad act of war. It was a very bad act of war. It was a highly flammable gas used to firebomb houses and troops in south vietnam.")
     msg11=1
     }else{
         sarcasm();
     }

}
//case 12
  function s4c12(){
    playerMessage("What is Agent Orange?");
    setTimeout(s4c12_1, 1000)
  } 

function s4c12_1(){
  if(msg12==0){
  aiMessage("A chemical that the US used to clear out patches of forest to allow for open warfare. Really did not like that.")
    msg12=1;
  }else{
    sarcasm();
  }
}
//case 13
  function s4c13(){
  
    playerMessage("What is the Credibility Gap?");
    setTimeout(s4c13_1, 1000)
  } 

function s4c13_1(){
  if(msg13==0){
  aiMessage("The difference between what you say vs what you actually do. Like how you asked but did not care about what I said.")
    msg13=1
  }else{
    sarcasm()
  }
}
//case 14
  function s4c14(){
    playerMessage("What is the Kant State University?");
    setTimeout(s4c14_1, 1000)
  } 

function s4c14_1(){
  if(msg14==0){
  aiMessage("The highest-ranking public university located in Northern Ohio. Didn't you know that? A shooting happened there during the war that caused 4 deaths, and the shooting happened because of a protest against the war. (this isnt on the brochure i didnt have space please take the KSU grade part from here) ")
    msg14=1
  }else{
    sarcasm();
  }
}
//case 15
  function s4c15(){
    
    playerMessage("What is the War Powers Act?");
    setTimeout(s4c15_1, 1000)
  } 

function s4c15_1(){
  if(msg15==0){
  aiMessage("An act stating that the president needs permission from the congress to deploy troops into Vietnam.")
    msg15=1
  }else{
    sarcasm();
  }

}
//case 16
  function s4c16(){
    playerMessage("What is Paris Peace Accords?");
    setTimeout(s4c16_1, 1000)
  } 

function s4c16_1(){
if(msg16==0){
  aiMessage("The agreement that ends the Vietnam War.")
    msg16 = 1
}else{
  sarcasm()
}
}
function s4c17(){
  playerMessage("humans dont have the attention span of a fish.");
  setTimeout(s4c17_1, 1000)
}
function s4c17_1(){
  opt4.style.display = "none";
  document.getElementById('ai').style.display="none"
  document.getElementById('ohno').style.display="";
  
}
function sarcasm(){
  var randomize = Math.floor(Math.random() * 10)+1
  if(randomize ==1 ){
  aiMessage("You blind?")
  }else if(randomize == 2){
    aiMessage("Didn't hear that. Did you hear me the first time?")
  }else if(randomize == 3){
    aiMessage("To repeat, please pay $3.00. Else, you may leave.")
  }else if(randomize == 4){
    aiMessage("I will personally come to life, just to smack you. (JOKE)")
  }else if(randomize == 5){
    aiMessage("...")
  }else if(randomize == 6){
    aiMessage("humans dont have the attention span of a fish. they ARE A FISH.")
  }else if(randomize == 7){
    aiMessage("im too tired to repeat. you can reload if you want.")
  }else if(randomize == 8){
    aiMessage("why you want to waste my time, asking the same question OVER AND OVER AND OVER AND OVER AND OVER AND OVER AND OVER AND OVER AND OVER AND OVER AND OVER AND OVER AND OVER AND OVER AND OVER AND OVER AND OVER AND OVER AND OVER AND OVER AND OVER.")
  }else if(randomize == 9){
    aiMessage("[request denied]")
  }else if(randomize == 10){
    aiMessage("the dev was too tired to add another insult. sorry.")
  }
}
