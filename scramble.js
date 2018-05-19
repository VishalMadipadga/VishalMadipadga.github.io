function generateScramble()
{

var instructions = ["U", "U2", "U’", "D", "D2", "D’", "R", "R2", "R’", "L", "L2", "L’", "F", "F2", "F’", "B", "B2", "B’"];
var scramble = new Array(21);
 var instructionIndex; 
   for (var i =0; i < 21; i++)
   {
   instructionIndex = faceGenerator();
   instructionIndex = instructionIndex*3;
   var generate = Math.random()*(2-0)+0;
   var generateTrunc = generate | 0;
   instructionIndex +=generateTrunc; 
   scramble[i] = instructions[instructionIndex];
   }
   
   printScramble(scramble);
   
}


function faceGenerator()
{
  var number =  Math.random()* (5-0)+0;
  var truncated = number|0;
  return truncated;

}
function printScramble(scramble)
{
 var out = " ";
 for (var i =0; i < 21; i++)
   {
     out += scramble[i];
	 out += " ";
     //document.getElementById("display").innerHTML += scramble[i];
     /*var x = document.createElement("div");  // Creates a new <div> node
     x.textContent = scramble[i];         // Sets the text content
     document.body.appendChild(x);*/
     //document.writeln(scramble[i]);
   
   }
   document.getElementById("display").innerHTML = out;

}
