var timers = document.getElementById("timer");
var start = document.getElementById("start");
var reseter = document.getElementById("reset");

var rubiksTimer = new timer(timers);

start.addEventListener("click", function()
{
	if(rubiksTimer.isOn)
	{
		rubiksTimer.stop();
		start.textContent = "Start";
		
	}
	else
	{
		rubiksTimer.start();
		start.textContent = "Stop";
	}
});

reseter.addEventListener("click", function()
{
	
	rubiksTimer.reset();
});
