$('.btn').click(function(){
  $(".leftblock").fadeToggle(100);
  alert("So, this is my story on 14th February for you.I hope you'll like this:) Hint: it would be better if you start from upper left rectangle");
});  
$('.block').click(function(){
    let age = Number(prompt('Сколько тебе лет? Небольшой hint, убедись, что у тебя стоит русская раскладка'));
    if (age === 19) { 
  $(".span").fadeToggle(0);  
  $(".inside").fadeToggle(100);}
  else {alert("чот не угадала((1(1")}
 
});  
$('.block1').click(function(){
    let que = prompt('Чего общего между Лепсом и ЗАГСом? Обучение: Калякать можно и нужно с пробелами, там, где они нужны, а еще я писал все с маленьких букв, кроме имен.');
    if (que == "квартира"){
  $(".span1").fadeToggle(0);  
  $(".inside1").fadeToggle(100);}
   else if(que == "старая квартира"){
  $(".span1").fadeToggle(0);  
  $(".inside1").fadeToggle(100);}
  else {alert("ну тут чисто или не угадала, или я не предусмотрел этот вариант ответа, перебирай еще:3")}
});  
$('.block2').click(function(){
 let que = prompt('Что ты написала на машине пальцем?(уууууу, помню-осуждаю)');
    if (que == "Гриша лох"){
  $(".span2").fadeToggle(0);  
  $(".inside2").fadeToggle(100);}
  else {alert("ну тут чисто или не угадала, или я не предусмотрел этот вариант ответа, перебирай еще:3")}
});  
$('.block3').click(function(){
 let que = Number(prompt('2*(2+2)'));
    if (que === 8){
  $(".span3").fadeToggle(0);  
  $(".inside3").fadeToggle(100);}
  else {alert("шо не мотимотик")}
});  
$('.block4').click(function(){
 let que = prompt('Любимый мемный напиток');
    if (que == "пиво"){
  $(".span4").fadeToggle(0);  
  $(".inside4").fadeToggle(100);}
  else {alert("ну тут чисто или не угадала, или я не предусмотрел этот вариант ответа, перебирай еще:3")}
});  
$('.block5').click(function(){
 let que = prompt('Как называлась игра, в которую мы играли на днюхе у Жени');
    if (que == "бэнг"){
  $(".span5").fadeToggle(0);  
  $(".inside5").fadeToggle(100);}
  else {alert("Шо сложного в слове бэнг?")}
});  
$('.block6').click(function(){
 let que = prompt('Какой фильм мы смотрели с твоим любимым актером?');
    if (que == "брачная история"){
  $(".span6").fadeToggle(0);  
  $(".inside6").fadeToggle(100);}
  else {alert("ну тут чисто или не угадала, или я не предусмотрел этот вариант ответа, перебирай еще:3")}
});  
$('.block7').click(function(){
 let que = prompt('В чем ты была, когда мы ходили в кинотеарт(верхняя одежда)');
    if (que == "шуба"){
  $(".span7").fadeToggle(0);  
  $(".inside7").fadeToggle(100);}
  else {alert("ну тут чисто или не угадала, или я не предусмотрел этот вариант ответа, перебирай еще:3")}
});  
$('.block8').click(function(){
 let que = prompt('Твой наставник хотел смотреть это по телику');
    if (que == "порно"){
  $(".span8").fadeToggle(0);  
  $(".inside8").fadeToggle(100);}
  else {alert("ну тут чисто или не угадала, или я не предусмотрел этот вариант ответа, перебирай еще:3")}
});  
$('.block9').click(function(){
 let que = prompt('Шо мы готовили?');
    if (que == "пиццу"){
  $(".span9").fadeToggle(0);  
  $(".inside9").fadeToggle(100);}
  else {alert("ну тут чисто или не угадала, или я не предусмотрел этот вариант ответа, перебирай еще:3")}
});  
$('.block10').click(function(){
 let que = prompt('Как дела?))))))');
  alert("У Марго дела "+ que);  
  $(".span10").fadeToggle(0);  
  $(".inside10").fadeToggle(100);
});  
$('.block11').click(function(){
 let que = prompt('Когда мы первый раз поцеловались за нами наблюдал твой....');
    if (que == "папа"){
  $(".span11").fadeToggle(0);  
  $(".inside11").fadeToggle(100);}
  else if(que == "отец"){
  $(".span11").fadeToggle(0);  
  $(".inside11").fadeToggle(100);}
  else if(que == "батя"){
  $(".span11").fadeToggle(0);  
  $(".inside11").fadeToggle(100);}
  else {alert("ну тут чисто или не угадала, или я не предусмотрел этот вариант ответа, перебирай еще:3")}
});  