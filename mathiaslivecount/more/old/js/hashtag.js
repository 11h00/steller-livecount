const CULER = new XMLHttpRequest();
var incre = 1000;
var folo = 0;
var updatecount = 10000
var hashtag
var photo
console.log("voici some cpommand !")
console.log("/////////killer por fer et eepaer toiu le proe q ! ()()()()())ry ijnstayzui donc ! zeocbo miuer de la aoijk ! r())()(()())514594MO()((()(")

var lasthashtag = getCookie("lasthashtag")

if (lasthashtag == "null" || NaN){
	hashtag = "mathias777"
}else{
	hashtag = lasthashtag
}

if (hashtag.length == 0){
	hashtag = "mathias777"
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

	nah = CULER.open('GET', "https://www.instagram.com/explore/tags/" + hashtag + "/?__a=1");
   CULER.send(null);
CULER.onreadystatechange = function(event) {
    // XMLHttpRequest.DONZ === 4

    if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {

			degar = JSON.parse(CULER.responseText);
			photo = degar.graphql.hashtag.edge_hashtag_to_media.count;
			prifile = degar.graphql.hashtag.profile_pic_url;
			document.getElementById('pfp').src=prifile;
			odometer.innerHTML = photo;
			document.getElementById("coconu").innerHTML = "#" + hashtag;
        }
    }
   }
}

	
	
var i = 1;                 

function tg() {        
   setTimeout(function () {   
          
	nah = CULER.open('GET', "https://www.instagram.com/explore/tags/" + hashtag + "/?__a=1");
   CULER.send(null);
CULER.onreadystatechange = function(event) {
    // XMLHttpRequest.DONZ === 4

    if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {

			degar = JSON.parse(CULER.responseText);
			photo = degar.graphql.hashtag.edge_hashtag_to_media.count;
			prifile = degar.graphql.hashtag.profile_pic_url;
			document.getElementById('pfp').src=prifile;
			odometer.innerHTML = photo;
			document.getElementById("coconu").innerHTML = "#" + hashtag;
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
