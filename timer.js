function timer(elem)
{
	var time = 0;
	var interval;
	var offset;
	
	
	function update()
	{
		if(this.isOn)
		{
		time += change();
		}
		var format = timeFormatter(time);
		elem.textContent = format;
		
	}
	
	function change()
	{
		var timeNow = Date.now();
		var elapsed = timeNow - offset;
		offset = timeNow; 
		return elapsed; 
	}
	
	function timeFormatter(times)
	{
		var timesFormat = new Date(times);
		var minutes = timesFormat.getMinutes().toString();
		var seconds = timesFormat.getSeconds().toString();
		var milliseconds = timesFormat.getMilliseconds().toString();
		
		if (minutes.length < 2)
		{
			minutes = "0" + minutes;
		}
		
		if (seconds.length < 2)
		{
			seconds = "0" + seconds;
		}
		
		if(milliseconds < 3)
		{
			milliseconds = "0" + milliseconds;
		}
		
		return minutes + " : " + seconds + " . " + milliseconds;
	}
	
	this.isOn = false;
	
	
	this.start = function()
	{
		if(!this.isOn)
		{
			interval = setInterval(update.bind(this), 10);
			offset = Date.now();
			this.isOn = true;
		}
		
	};
	
	this.stop = function()
	{
		
		if(this.isOn)
		{
			clearInterval(interval);
			interval = null;
			this.isOn = false; 
		}
		
	};
	
	this.reset = function()
	{
		time = 0;
		update();
	};
}


