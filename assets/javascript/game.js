var artistList = ["ti","lilbaby","youngjeezy","2chainz","migos","lilyahty","outcast","kcamp"];
var  namelength =0;
var chosenArtist = "";
var item = "";
var blanks = [];
var usedKeys = [];
var correct = 0;
var j = 10;

document.getElementById("rem").innerHTML = "you have "+ j + " guesses remaining";

var item = artistList[Math.floor(Math.random()*artistList.length)];

chosenArtist = item.split("");
namelength = chosenArtist.length;
console.log(chosenArtist);




for (var i = 0; i < namelength; i++) {
      blanks.push("_");
      
     
      }
      console.log(blanks);
      document.getElementById("question").innerHTML = blanks.join(" ");
     


document.onkeyup = function(event) {
     
    var keypressed =String.fromCharCode(event.keyCode).toLowerCase()
    usedKeys.push(keypressed);

      document.getElementById("myList").innerHTML = usedKeys.join(" ");;
   
     
    console.log(keypressed);

    var keyguess = false;
    if (item[i] !== correct){
      youWon();
    }
    





      for (var i = 0; i < blanks.length; i++) {
            if (item[i] == keypressed){
                  keyguess = true;
                  blanks[i] = keypressed;
                  correct++
                  document.getElementById("question").innerHTML = blanks.join(" ");
                  console.log(correct);

            }
            

}


};




function wrongkey(){
     

   j--
      document.getElementById("rem").innerHTML = "you have "+ j + " guesses remaining";
   if (j==0){
        document.write("Game Over");
   }
      
     
};

function youWon(){
     
       document.write("You win");
};


youWon();



//    return a * b;                // Function returns the product of a and b

 //item.toString();
//var n = item.replace("item", "_");
//alert(n);

    //document.onkeyup = function(event) {
           //var userGuess = event.key.toLowerCase();}

           //console.log("Hiiiriri");