// random value generated
var playername=localStorage.getItem("user_name");
var y= Math.floor(Math.random() *10+1);
var guess=1;
function submit(){
    var x =document.getElementById("guessField").value;
    if(x == y){
        alert("Congratulaions!!! " +playername+ "You Guessed It Right In " +guess+ "Guess");
        guess=1;
    }
    else if(x > y){
        guess++;
        alert("OOPS Sorry!! Try A Smaller Number");
    }
    else{
        guess++;
        alert("OOPS Sorry!! Try A Greater Number");
    }
}




function playagain(){
    y= Math.floor(Math.random() *10+1);
}


  
// counting the number of guesses
// made for correct Guess

  
// function for number guessed by user     
