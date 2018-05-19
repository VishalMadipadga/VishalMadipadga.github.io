var timers = document.getElementById("timer");
var start = document.getElementById("start");
var reseter = document.getElementById("reset");

var rubiksTimer = new timer(timers);

start.addEventListener("click", function()
{
	if(rubiksTimer.isOn)
	{
		rubiksTimer.stop();
		
	}
	else
	{
		rubiksTimer.start();
	}
});

reseter.addEventListener("click", function()
{
	
	rubiksTimer.reset();
});
