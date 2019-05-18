
$( document ).ready(function() {

var caracter;
var picked = true;
var enemy;
var defenderarea = true;


$("#fighter1").click(function() {
        caracter = "fighter1"; 
        pickCaracter(caracter, picked);
        picked = false;
        if (($(".choosenone").attr("id")) !== "fighter1" && defenderarea){
            enemy= $("#fighter1");
            pickEnemy(enemy);
            defenderarea = false;

        }
});
$("#fighter2").click(function() {
    caracter = "fighter2";
        pickCaracter(caracter, picked);
        picked = false;
        if (($(".choosenone").attr("id")) !== "fighter2" && defenderarea){
            enemy= $("#fighter2");
            pickEnemy(enemy);
            defenderarea = false;

        }
        
});
$("#fighter3").click(function() {
    caracter = "fighter3";
        pickCaracter(caracter, picked);
        picked = false;
        if (($(".choosenone").attr("id")) !== "fighter3" && defenderarea){
            enemy= $("#fighter3");
            pickEnemy(enemy);
            defenderarea = false;

        }
});
$("#fighter4").click(function() {
    caracter = "fighter4";
        pickCaracter(caracter, picked);
        picked = false;
        if (($(".choosenone").attr("id")) !== "fighter4" && defenderarea){
            enemy= $("#fighter4");
            pickEnemy(enemy);
            defenderarea = false;

        }
});



function pickCaracter(c , p){
if (p){
 if(c == "fighter1" ){
    $("#thirdrow").after($("#fighter1"));
    $("#fighter1").attr("class","col-md-auto choosenone");
    $("#fifthrow").append($("#fighter2"));
    $("#fighter2").attr("class","col-md-auto enemiesToFight");
    $("#fifthrow").append($("#fighter3"));
    $("#fighter3").attr("class","col-md-auto enemiesToFight");
    $("#fifthrow").append($("#fighter4"));
    $("#fighter4").attr("class","col-md-auto enemiesToFight");
    $("#firstrow").empty();
    p = false;
 }
 if(c == "fighter2" ){
    $("#thirdrow").after($("#fighter2"))
    $("#fighter2").attr("class","col-md-auto choosenone");
    $("#fifthrow").append($("#fighter1"));
    $("#fighter1").attr("class","enemiesToFight col-md-auto ");
    $("#fifthrow").append($("#fighter3"));
    $("#fighter3").attr("class","enemiesToFight col-md-auto ");
    $("#fifthrow").append($("#fighter4"));
    $("#fighter4").attr("class","enemiesToFight col-md-auto ");
    $("#firstrow").empty();
    p = false;
 }
 if(c == "fighter3" ){
    $("#thirdrow").after($("#fighter3"))
    $("#fighter3").attr("class","col-md-auto choosenone");
    $("#fifthrow").append($("#fighter1"));
    $("#fighter1").attr("class","col-md-auto enemiesToFight");
    $("#fifthrow").append($("#fighter2"));
    $("#fighter2").attr("class","col-md-auto enemiesToFight");
    $("#fifthrow").append($("#fighter4"));
    $("#fighter4").attr("class","col-md-auto enemiesToFight");
    $("#firstrow").empty();
    p = false;
 }
 if(c == "fighter4"){
    $("#thirdrow").after($("#fighter4"))
    $("#fighter4").attr("class","col-md-auto choosenone");
    $("#fifthrow").append($("#fighter1"));
    $("#fighter1").attr("class","col-md-auto enemiesToFight");
    $("#fifthrow").append($("#fighter2"));
    $("#fighter2").attr("class","col-md-auto enemiesToFight");
    $("#fifthrow").append($("#fighter3"));
    $("#fighter3").attr("class","col-md-auto enemiesToFight");
    $("#firstrow").empty();
    p = false;
 }
}
}

function pickEnemy(e){
    $("#ninethrow").append(e);
    e.attr("class","col-md-auto defender");

}


});