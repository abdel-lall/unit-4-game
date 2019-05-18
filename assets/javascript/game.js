
$( document ).ready(function() {

var caracter;
var picked = true;
var enemy;
var defenderarea = true;
var att=0;
var ctrAtt=0;
var healthcaracter=0;
var healthenemy =0;
var play =true;
var fighter1Att = 8;
var fighter2Att = 5;
var fighter3Att = 20;
var fighter4Att = 25;


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

 
$("#attack").click(function() {
    if (defenderarea == false && play){
    $('#messages').html("")
   healthcaracter = parseInt($('.choosenone').find('#health').html());
   healthenemy = parseInt($('.defender').find('#health').html());
    var idcaracter = $(".choosenone").attr("id");
    var idenemy = $(".defender").attr("id");
    if (idcaracter == "fighter1"){
        att = att + fighter1Att;
    }
    if (idcaracter == "fighter2"){
        att = att + fighter2Att;
    }
    if (idcaracter == "fighter3"){
        att = att + fighter3Att;
    }
    if (idcaracter == "fighter4"){
        att = att + fighter4Att;
    }
    if (idenemy == "fighter1"){
        ctrAtt= fighter1Att;
    }
    if (idenemy == "fighter2"){
        ctrAtt= fighter2Att;
    }
    if (idenemy == "fighter3"){
        ctrAtt= fighter3Att;
    }
    if (idenemy == "fighter4"){
        ctrAtt= fighter4Att;
    }
    healthenemy = healthenemy - att;
    healthcaracter = healthcaracter - ctrAtt;
    $('.choosenone').find('#health').html(healthcaracter);
    $('.defender').find('#health').html(healthenemy);
    $('#messages').html("You Attacked "+$('.defender').find('#name').html()+"for "+att+" damage and he attacked back for "+ ctrAtt+" damage");
    if (healthenemy <= 0){
        $('.defender').remove();
        defenderarea= true;
        $('#messages').html("pick an other Enemy");
    }
    if (healthcaracter <= 0){
        $('#messages').html("  You lost");
        play = false;
        $("#messages").prepend("<button>restart</button>");
        $('#messages').find('button').attr("class","btn btn-success");
        $('#messages').find('button').click(function(){
            window.location.reload();
        });

    }
  
  
    
    console.log(healthcaracter);
   console.log(healthenemy);
   console.log(ctrAtt);
   console.log(att);
}
if(defenderarea){
    $('#messages').html("No Enemies To Attack")
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