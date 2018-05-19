var instructions = [U, U2, U’, D, D2, D’, R, R2, R’, L, L2, L’, F, F2, F’, B, B2, B’];
var scramble = [21];
 var instructionIndex;
function hello()
{
	
	document.writeln("hello");
}
function generateScramble()
{
   
   for (int i =0; i < 21; i++)
   {
   instructionIndex = faceGenerator();
   instructionIndex = instructionIndex*3;
   var generate = Math.random()*(2-0)+0;
   instructionIndex +=generate; 
   scramble[i] = instructions[instructionIndex];
   }
   
}


function faceGenerator()
{
  return Math.random()* (5-0)+0;


}
function printScramble()
{
 for (int i =0; i < 21; i++)
   {
     
   document.writeln(scramble[i]);
   
   }

}