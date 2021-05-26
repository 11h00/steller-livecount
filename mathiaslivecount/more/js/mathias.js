const CULER = new XMLHttpRequest();
var user_pref = window.localStorage;
var folo = 0;
var updatecount = 500
var useuname
var UPsound = new Audio("lesonn/beat_up.mp3");
var downsound = new Audio("lesonn/beat_down.mp3");
var oldcount = 0;
var gap = true
useuname = "shibe_santoutou_"
function change(){
	if (useuname == "shibe_santoutou_"){
		useuname = "51.6m";
	}else{
		useuname = "shibe_santoutou_"
	}
}
document.getElementById("coconu").onclick = change;
function tg() {        
   setTimeout(function () {   
		CULER.open('GET', "https://www.instagram.com/shibe_santoutou_/reels/?__a=1");
		CULER.send(null);
		CULER.onreadystatechange = function(event) {
    	if (this.readyState === XMLHttpRequest.DONE) {
			if (this.status === 200) {
				degar = JSON.parse(CULER.responseText);
				if (gap == true){
				folo = 38848523 - degar.graphql.user.edge_felix_video_timeline.count;
				}else{
				folo = degar.graphql.user.edge_felix_video_timeline.count;
				}
				wownon = degar.graphql.user.full_name;
				if (folo > oldcount){
					UPsound.cloneNode(true).play();
				}
				if (folo < oldcount){
					downsound.cloneNode(true).play();
				}
				oldcount = folo
			if (wownon.length == 0){
				wownon = useuname
			}
			odometer.innerHTML = folo;
			document.getElementById("coconu").innerHTML = "before i get my old post count :";
			}
		}
   }      
         tg();               
   }, updatecount)
}

tg();  
