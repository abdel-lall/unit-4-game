var caracter;



$("#fighter1").click(function() {
    caracter = 1;
    pickCaracter(caracter);
    // console.log($("#fighter1").attr('id'));
});
$("#fighter2").click(function() {
    caracter = 2;
    pickCaracter(caracter);
});
$("#fighter3").click(function() {
    caracter = 3;
    pickCaracter(caracter);
});
$("#fighter4").click(function() {
    caracter = 4;
    pickCaracter(caracter);
});



function pickCaracter(c){
 if(c == 1 ){
    $("#thirdrow").after($("#fighter1"));
    $("#fifthrow").append($("#fighter2"));
    $("#fighter2").attr("class","col-md-auto enemiesToFight");
    $("#fifthrow").append($("#fighter3"));
    $("#fighter3").attr("class","col-md-auto enemiesToFight");
    $("#fifthrow").append($("#fighter4"));
    $("#fighter4").attr("class","col-md-auto enemiesToFight");
    $("#firstrow").empty();
 }
 if(c == 2 ){
    $("#thirdrow").after($("#fighter2"))
    $("#fifthrow").append($("#fighter1"));
    $("#fighter1").attr("class","col-md-auto enemiesToFight");
    $("#fifthrow").append($("#fighter3"));
    $("#fighter3").attr("class","col-md-auto enemiesToFight");
    $("#fifthrow").append($("#fighter4"));
    $("#fighter4").attr("class","col-md-auto enemiesToFight");
    $("#firstrow").empty();
 }
 if(c == 3 ){
    $("#thirdrow").after($("#fighter3"))
    $("#fifthrow").append($("#fighter1"));
    $("#fighter1").attr("class","col-md-auto enemiesToFight");
    $("#fifthrow").append($("#fighter2"));
    $("#fighter2").attr("class","col-md-auto enemiesToFight");
    $("#fifthrow").append($("#fighter4"));
    $("#fighter4").attr("class","col-md-auto enemiesToFight");
    $("#firstrow").empty();
 }
 if(c == 4 ){
    $("#thirdrow").after($("#fighter4"))
    $("#fifthrow").append($("#fighter1"));
    $("#fighter1").attr("class","col-md-auto enemiesToFight");
    $("#fifthrow").append($("#fighter2"));
    $("#fighter2").attr("class","col-md-auto enemiesToFight");
    $("#fifthrow").append($("#fighter3"));
    $("#fighter3").attr("class","col-md-auto enemiesToFight");
    $("#firstrow").empty();
 }
}

function pickEnemy(){

}

