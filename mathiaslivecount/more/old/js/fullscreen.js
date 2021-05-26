const CULER = new XMLHttpRequest();
var incre = 1000;
var folo = 0;
var updatecount = 10000
var useuname
var UPsound = new Audio("lesonn/up2.mp3");
console.log("voici some cpommand !")
console.log("/////////killer por fer et eepaer toiu le proe q ! ()()()()())ry ijnstayzui donc ! zeocbo miuer de la aoijk ! r())()(()())514594MO()((()(")
oldcount = 0;

var lastuser = getCookie("lastuser")
var sounHD = getCookie("son")

if (lastuser == "null" || NaN){
	useuname = "mathias_santourian"
}else{
	useuname = lastuser
}

if (useuname.length == 0){
	useuname = "mathias_santourian"
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function checkcookie(){

	nah = CULER.open('GET', "https://www.instagram.com/" + useuname + "/?__a=1");
   CULER.send(null);
CULER.onreadystatechange = function(event) {
    // XMLHttpRequest.DONZ === 4

    if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {

			degar = JSON.parse(CULER.responseText);
				if (sounHD == 'true'){
		if (folo > oldcount){
		UPsound.play();
	}
	oldcount = folo
	}
			folo = degar.graphql.user.edge_followed_by.count;
			wownon = degar.graphql.user.full_name;
			if (wownon.length == 0){
				wownon = useuname
			}
			odometer.innerHTML = folo;
			document.getElementById("coconu").innerHTML = wownon;
        }
    }
   }
}
	
var i = 1;                 

function tg() {        
   setTimeout(function () {   
          
	nah = CULER.open('GET', "https://www.instagram.com/" + useuname + "/?__a=1");
   CULER.send(null);
CULER.onreadystatechange = function(event) {
    // XMLHttpRequest.DONZ === 4

    if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {

			degar = JSON.parse(CULER.responseText);
			folo = degar.graphql.user.edge_followed_by.count;
			wownon = degar.graphql.user.full_name;
						if (sounHD == 'true'){
		if (folo > oldcount){
		UPsound.play();
	}
	oldcount = folo
	}
			
			if (wownon.length == 0){
				wownon = useuname
			}
			odometer.innerHTML = folo;
			document.getElementById("coconu").innerHTML = wownon;
        }
    }
   }
		  
      i++;                    
      if (i < 50000000) {          
         tg();             
      }                        
   }, updatecount)
}

tg();  
