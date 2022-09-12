var btn_start = document.getElementById('start');
var tit = document.getElementById('tit');
var callToAction = document.getElementById('callToAction');
var btn_start = document.getElementById('start');
var yamete = new Audio("yamete_completo.mp3");
var container = document.getElementById('container');
var ahegao = document.getElementById('ahegao');

btn_start.onclick = function(){
    yamete.loop = "true";
    yamete.play();
    ahegao.style.display = "block";
    container.style.display = "none";
}