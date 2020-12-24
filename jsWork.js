
   
    
	//var node = document.createTextNode("🎅");
   function insertSanta(){
		document.getElementById("body").style.backgroundColor = "yellow"; 
		document.getElementById("h1").innerHTML = "CatchMe!";
		//document.getElementById("score").innerHTML = "SCORE : ";
		document.querySelector(".gamepiece").innerHTML = "🎅";
   }
	
   
   
   //var stopId;
   function removeFront() {
		var BTN = document.getElementById("btn");
		BTN.remove();
		var myobj1 = document.getElementById("cpwrt");
		myobj1.remove();
		var infon = document.getElementById("info");
		infon.remove();
		var myobj2 = document.getElementById("h2");
		myobj2.remove();
		
   }
   //canvas.width = window.innerWidth;
           // canvas.height = window.innerHeight;
   function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}
   function randpos(){
		var x = document.querySelector("#santa");
		x.style.top =  Math.floor(Math.random() * (getHeight()-200) + 100 ) + "px";
		x.style.left =  Math.floor(Math.random() * (window.innerWidth)-200 ) + "px";
   }
   var flag = true;
   function stop() {
		flag = false;
	}
	function loop() {
    if (flag==false) return;
    randpos();
    setTimeout(loop, 500);
	}


	
   
  
   var fg=true;
   var  tm = 5;
   function stopTimer()
   {
		fg = false;
		// clearInterval(stopId);
   }
   //var stopId=setInterval(timer, 1000);
   function timer()
   {
		if(fg==false)
			return;
		if(tm==-1)
		{
			fail();
			return;
		}
		else{
		var strTM = tm.toString();
		strTM = "Last : " + strTM; 
		document.getElementById("timer").innerHTML = strTM;
		tm = tm-1;
		setTimeout(timer, 1000);
		}
   }
    function youWin(){
		stopTimer();
		stop();
        var inp = confirm("Hey, you wonnnnnnnn...!, Press OK to play again.");
		if (inp == true) {
			//var body=document.getElementById("body");
			flag = true;
			fg = true ;
			//loop();
			//insertSanta();
			tm = 5;
			//timer();
		}
		else
		{
			window.location.reload();
		}
		return;
    } 
   function fail()
   {
		stopTimer();
		stop();
		var inp = confirm("Hey, you lostttttttt...!, Press OK to play again.");
		if(inp == true)
		{
			//loop();
			//insertSanta();
			flag = true;
			fg = true ;
			tm = 5;
			timer();
			//var body=document.getElementById("body");
			//window.location.reload();
		}
		else
		{
			window.location.reload();
		}
		return;	
   }
  
  //&#63
  
  
  
  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("info");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  
  
  
  
  
