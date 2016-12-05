			gamelength=30;
			timerID=null;
			var playing=false;
			var numholes=6*10;
			var currentpos=-1;


			function clrholes() {
				for(var k=0;k<60;k++)
				document.getElementById(k).checked=false;
			}


			function showtime(remtime) {
				document.getElementById("timeleft").value=remtime;
				if(playing) {
					if(remtime==0) {
						alert('Game Over!');
						location.reload();
					}
					else {
						temp=remtime-1;
						setTimeout("showtime(temp)",1000);
					}
				}
			}


			function play() {

				playing=true;
				clrholes();
				totalhits=0;
				document.getElementById("score").value=totalhits;
				launch();
				showtime(gamelength);
			}


			function launch() {
				var launched=false;

				while(!launched) {

					mynum=random();

					if(mynum!=currentpos) {
						document.getElementById(mynum).checked=true;
						currentpos=mynum;
						launched=true;
					}
				}
			}


			function hithead(id) {

				if(currentpos!=id) {
					totalhits+=-1;
					document.getElementById("score").value=totalhits;
					document.getElementById(id).checked=false;
				}
				else {
					totalhits+=1;
					document.getElementById("score").value=totalhits;
					launch();
					document.getElementById(id).checked=false;
				}
			}

			function random() {
				return(Math.floor(Math.random()*100%numholes));
			}
