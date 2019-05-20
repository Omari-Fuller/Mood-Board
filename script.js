var happyImgs=["https://images-na.ssl-images-amazon.com/images/I/51zLZbEVSTL._SX425_.jpg","https://i.pinimg.com/originals/33/bb/f1/33bbf1143c020216614fe382db94f72f.jpg"];
var goku="https://i.pinimg.com/originals/33/bb/f1/33bbf1143c020216614fe382db94f72f.jpg";
var homer="http://www.stickpng.com/assets/images/5a0c40a65a997e1c2cea116c.png";

var anger="https://media.giphy.com/media/11tTNkNy1SdXGg/giphy.gif";
var superSaiyan="https://media.tenor.com/images/1c821f49cdd748d82f77cae96766eb6e/tenor.gif";
var hades="https://i.giphy.com/media/12lV980pEpWM9i/giphy.webp";

var spookyMan="https://www.topgameplays.com/wp-content/uploads/2019/03/1552223637_maxresdefault.jpg";
var pumpkin="https://thumbs-prod.si-cdn.com/SNW_GLXNyE1mF4tA5sJQNxTbWlo=/800x600/filters:no_upscale()/htt://public-media.si-cdn.com/filer/74/fa/74fa908c-e9b6-4e15-8266-7fb8e97bbff7/file-20171023-1738-1w6q8qu.jpg";
var slenderMan="https://imgix.bustle.com/uploads/image/2018/8/8/d11f0ae1-559a-40e5-a4ab-738a62828ca8-maxresdefault.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70";

var cups="https://image.shutterstock.com/image-photo/turquoise-conceptual-dices-jealousy-260nw-556217527.jpg";
var people="https://www.newharbinger.com/sites/default/files/styles/article_image_main/public/article_assets/jealousy.png?itok=gmNpJgJG";

var boys="https://cdn.lifehack.org/wp-content/uploads/2013/11/8-Ways-You-Can-Learn-to-Deal-with-Jealousy.jpg";

$("button").click(function() {
    var input= $('input').val();
    $(".images").html("");
    if(input === "happy") {
     changeBackground("https://viveconstyle.com/wp-content/uploads/2018/04/Happy-days-.jpg");
     changeTextColor("blue");
     displayImage(happyImgs);
     displayImage(goku);
     displayImage(homer);
     }else if(input==="anger") {
    changeBackground("https://image.freepik.com/free-vector/elegant-red-background_1340-4770.jpg");
    changeTextColor("orange");
    displayImage(superSaiyan);
    displayImage(hades);
    displayImage(anger);
     }else if(input==="fear") {
    changeBackground("https://as2.ftcdn.net/jpg/01/28/45/15/500_F_128451542_pGbxputwSYtI4aCHbm2Uk8RHf2wFO5G4.jpg");   
    changeTextColor("white");
    displayImage(spookyMan);
    displayImage(pumpkin);
   displayImage(slenderMan);
    }else if(input==="jealousy") {
changeBackground("https://miro.medium.com/max/400/1*bNfxs62uJzISTfuPlOzOWQ.png"); changeTextColor("green"); 
    displayImage(cups);
    displayImage(people);
    displayImage(boys);
    }   

});

function Happy() {
changeBackground("https://viveconstyle.com/wp-content/uploads/2018/04/Happy-days-.jpg");
changeTextColor("blue");
displayImage(happyImgs);

}

function anger() {
 changeBackground("https://image.freepik.com/free-vector/elegant-red-background_1340-4770.jpg");
changeTextColor("orange");
displayImage("https://media.giphy.com/media/11tTNkNy1SdXGg/giphy.gif");
displayImage("https://media.tenor.com/images/1c821f49cdd748d82f77cae96766eb6e/tenor.gif");
displayImage("https://i.giphy.com/media/12lV980pEpWM9i/giphy.webp");
}


function fear() {
 changeBackground("https://as2.ftcdn.net/jpg/01/28/45/15/500_F_128451542_pGbxputwSYtI4aCHbm2Uk8RHf2wFO5G4.jpg");   
changeTextColor("white");
displayImage(spookyMan);
displayImage(pumpkin);
displayImage(slenderMan);
}


function jealousy() {
changeBackground("https://miro.medium.com/max/400/1*bNfxs62uJzISTfuPlOzOWQ.png");
changeTextColor("green");
displayImage(cups);
displayImage(people);
displayImage(boys);
}

function changeBackground(backgroundImage){
$('body').css('background-image', "url("+backgroundImage+")");
}
function changeTextColor(color){
    $('body').css('color', color);
    
}
function displayImage(image){
    $('.images').append('<img src ='+ image + '>');
    
}