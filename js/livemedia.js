const CULER = new XMLHttpRequest();
var user_pref = window.localStorage;
var oldcount = 0, updatecount = 0, milestone = 0, view, isvideo;
var sonHD = true;
var UPsound = new Audio("lesonn/up.mp3");
var DOWNsound = new Audio("lesonn/down.mp3");
var videoID = "64297076";
var lanui = false;
var getdayornoght = Boolean(parseInt(user_pref.is_night_mode))
var sonounon = Boolean(parseInt(user_pref.have_sound))
var lastvideo = user_pref.last_media;

function sonsetting(){
	if (sonHD == true){
		if (lanui == false){
			document.getElementById("soundstting").style.background  = "#FF0000";
		}
		document.getElementById("soundstting").innerText = "sound : OFF";
		user_pref.setItem("have_sound", 0);
		sonHD = false;
	}else{
		if (lanui == false){
	    	document.getElementById("soundstting").style.background  = "#00FF00";
		}
		document.getElementById("soundstting").innerText = "sound : ON";
		user_pref.setItem("have_sound", 1);
		sonHD = true;
	}
}

if (lastvideo == undefined){
	videoID = "64297076"
	user_pref.setItem("last_media", "64297076");
}else{
	videoID = lastvideo
}

if (videoID.length == 0){
	videoID = "64297076"
}

function checkcookie(){
	if (sonounon == true){
		sonHD = false
		sonsetting()
	}
	if (getdayornoght == true){
		user_pref.setItem("is_night_mode", 1)
		document.getElementById("sole").src = "img/lue.png"
		lanui = true;
	}
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

  function prifi() {
  Swal.fire({
  title: 'do you want to go to this profile ?',
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'yes'
}).then((result) => {
  if (result.value) {
    window.open("https://www.instagram.com/" + namer)
  }
})
  }

function testcount(){
	if (view > oldcount){
		UPsound.play();
	}
	if (view < oldcount){
		DOWNsound.play();
	}
}
CULER.onreadystatechange = function(event) {
    if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {

			degar = JSON.parse(CULER.responseText);
			oldcount = view
			view = 0;
            comment = degar.comment_count;
			like = degar.likes.count;
			ima = degar.user.avatar_image_url;
			ima2 = degar.cover_src;
			namer = degar.user.username;
			isvideo = false;
			document.getElementById('pfp').src = ima2;
			document.getElementById('pfp2').src = ima;
			if (isvideo == true){
			document.getElementById('coconu').innerHTML = namer + " video"
		}else{
			document.getElementById('coconu').innerHTML = namer + " photo"
		}
			if (isvideo == true){
			odometer.innerHTML = view;
			document.getElementById("post-text").style.display = "block"
			}else{
			odometer.innerHTML = 0;			
			document.getElementById("post-text").style.display = "none"
			}
			odometer2.innerHTML = like;
			odometer3.innerHTML = comment;
			if (sonHD == true) {
				testcount()

			}
        }
    }
};
function tg() {        
   setTimeout(function () {   
		CULER.open('GET', 'https://steller.co/story?downloadPath=stories%2F2112549916663350888');
		CULER.send(null);
         tg();	 
   }, updatecount)
}

tg();  
updatecount = 5000	