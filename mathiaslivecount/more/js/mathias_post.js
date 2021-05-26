const CULER = new XMLHttpRequest();
var user_pref = window.localStorage;
var folo = 0;
var updatecount = 6000
var useuname
var UPsound = new Audio("lesonn/down.mp3");
var oldcount = 0;

function tg() {        
   setTimeout(function () {   
		CULER.open('GET', "https://www.instagram.com/shibe_santoutou_/reels/?__a=1");
		CULER.send(null);
		CULER.onreadystatechange = function(event) {
    	if (this.readyState === XMLHttpRequest.DONE) {
			if (this.status === 200) {
				degar = JSON.parse(CULER.responseText);
				folo = 100000000 -  degar.graphql.user.edge_felix_video_timeline.count;
				wownon = degar.graphql.user.full_name;
				if (folo < oldcount){
					UPsound.cloneNode(true).play();
				}
				oldcount = folo
			if (wownon.length == 0){
				wownon = useuname
			}
			odometer.innerHTML = folo;
			document.getElementById("coconu").innerHTML = "goal :flushed:| videos :";
			}
		}
   }      
         tg();               
   }, 500)
}

tg();  
