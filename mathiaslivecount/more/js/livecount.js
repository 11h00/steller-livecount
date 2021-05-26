const CULER = new XMLHttpRequest();
var newcount1;
var newcount2;var oldcount = 0;var folo = 0;
var totallike;
var updatecount = 0
var milestonz
var wew = false
// var sad = new Audio('lesonn/sad.mp3')
// sad.loop = true
var useuname = "51.6m";
var prifle = "";
var pnz = false
var paused = false;
var methoddemerde = 0;var wownon = "";var high2;var sonHD = true;var putindemerde = false;
var oldpostcount = 0;
var oldfollwoing = null;
//sounds
var UPsound = new Audio("lesonn/up.mp3");
var DOWNsound = new Audio("lesonn/down.mp3");
var downfollowing = new Audio('lesonn/downfollowing.mp3');
var followingup = new Audio("lesonn/followingup.mp3");
var postup = new Audio('lesonn/uppost.mp3');
var postdown = new Audio('lesonn/downpost.mp3')
var UPsoundfollo = new Audio("lesonn/up2.mp3");
//end of sounds

var DOWNsoundfollo = new Audio("lesonn/followdown.mp3");
var checkcount = false;
var followers = 0;
var ID;
var sond = 1;
var lanui = false;
var getdayornoght = getCookie("night");
var sonounon = getCookie("son");
var lastuser = getCookie("lastuser")
if (lastuser == "null" || NaN){
	useuname = "51.6m"
}else{
	useuname = lastuser
}

if (useuname.length == 0){
	useuname = "51.6m"
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


function gotoprofile(){
	Swal.fire({
  title: 'do you want to go to this profile ?',
  type: 'question',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'yes',
  cancelButtonText: 'nah rener'
}).then((result) => {
  if (result.value) {
   window.open("https://mathias777.com/instagram/" + useuname)
  }
})
}

function milestonztest(){
	switch(folo.toString().length){
case 1:
	var milestonz = folo
	milestonz += 1
break;
case 2:
	var milestonz = parseInt((Math.floor(folo / 10)) + "0")
	milestonz += 10
break;
case 3:
	var milestonz = parseInt((Math.floor(folo / 100)) + "00")
	milestonz += 100
break;
case 4:
	var milestonz = parseInt((Math.floor(folo / 1000)) + "000")
	milestonz += 1000
break;
case 5:
	var milestonz = parseInt((Math.floor(folo / 10000)) + "0000")
	milestonz += 10000
break;
case 6:
	var milestonz = parseInt((Math.floor(folo / 100000)) + "00000")
	milestonz += 100000
break;
case 7:
	var milestonz = parseInt((Math.floor(folo / 1000000)) + "000000")
	milestonz += 1000000
break;
case 8:
	var milestonz = parseInt((Math.floor(folo / 10000000)) + "0000000")
	milestonz += 10000000
break;
case 9:
	var milestonz = parseInt((Math.floor(folo / 100000000)) + "00000000")
	milestonz += 100000000
break;
	}
	
	if (milestonz == 100000000){
document.getElementById('milestona').innerHTML = 'before ' + milestonz + " ONG"
	}else{
document.getElementById('milestona').innerHTML = 'before ' + milestonz;
	}
odometer5.innerHTML = milestonz - folo
}

function testcount(){
	if (folo > oldcount){
		UPsound.cloneNode(true).play();
	}
	if (folo < oldcount){
		DOWNsound.cloneNode(true).play();
	}
	if (high2 > oldpostcount){
		postup.cloneNode(true).play();
	}
	if (high2 < oldpostcount){
		postdown.cloneNode(true).play();
	}
	if (oldfollwoing > followin){
		downfollowing.cloneNode(true).play();
	}
	if (oldfollwoing < followin){
		followingup.cloneNode(true).play();
	}
	if (followers > oldcount2){
		UPsoundfollo.cloneNode(true).play();
	}
	if (followers < oldcount2){
		DOWNsoundfollo.cloneNode(true).play();
	}
}

function tg() {        
   setTimeout(function () {   
		CULER.open('GET', "https://www.instagram.com/" + useuname + "/reels/?__a=1");
		CULER.send(null);
		CULER.onreadystatechange = function(event) {
    if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {
			degar = JSON.parse(CULER.responseText);
			oldcount2 = followers
			oldcount = folo
			oldpostcount = high2
			oldfollwoing = followin
			switch(useuname){
				case 'mathias_santourian':
				case 'shibe_santoutou_':
				case 'mathias77710':
				case 'mathias77710_':
				case 'mathias77710__':
				case '51.6m':
				case 'mathias77710_posts':
				case 'steve_le_destructeur':
					$('#pfp').css('border-radius', '0');
					$("#pfp").css("animation", "");
					$("#pfp").css("animation", "mathias infinite .5s alternate-reverse");
				break;
				default:
					$("#pfp").css("animation", "");
					$('#pfp').css('border-radius', '0');
					document.getElementById('pfp').style.border = 'solid';
				break;
			}
			folo = degar.graphql.user.edge_felix_video_timeline.count;
			high2 = degar.graphql.user.highlight_reel_count;
			followin = degar.graphql.user.edge_follow.count;
			followers = degar.graphql.user.edge_followed_by.count;
			wownon = degar.graphql.user.full_name;
			if (wownon.length == 0){
				wownon = useuname
			}
			ID = degar.graphql.user.id;
			prifle = degar.graphql.user.profile_pic_url_hd;
			document.getElementById('pfp').src=prifle;
			odometer.innerHTML = folo;
			odometer2.innerHTML = followers;
			odometer3.innerHTML = followin;
		
			// milestonztest()
			odometer4.innerHTML = high2;
			// odometer6.innerHTML = totallike;
			document.getElementById("coconu").innerHTML = wownon + " ID : (" + ID + ")";
				testcount()
        }
		switch(this.status){
			case 404:
			if (!Swal.isVisible()){
			
			swal.fire({
			allowEscapeKey: false,
			title:"444: account no found",
			text: useuname + " was no found please try again with a other instagram username:",
			input: 'text'
			}).then((result) => {
			useuname = result.value
			if (useuname == undefined || useuname == null || useuname == ""){
				useuname = "mathias_santourian";
			}
			document.cookie = "lastuser=" + useuname + ";expires=Thu, 25 Feb 4444 07:24:41 GMT";
			CULER.open('GET', "https://www.instagram.com/" + useuname + "/reels/?__a=1");
			CULER.send(null);
			swal.fire({
			title: "new instagram username set:",
			text: useuname,
			toast: true,
			icon: "success",
			animation: null,
			position: 'top',
			allowEscapeKey: false,
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true})
			sad.pause()
			})
		}
			break
			case 429:
			swal.fire({
			title:"429: rate limit",
			text:"please try again later.",
			})
			break
			case 500:
			swal.fire({
			title:"500: internal server error",
			text:"instagram have a internal server error and maybe instagram is down please try later.",
			})
			break
		}
    }
};                 
         tg();     
		 if (pnz == false){
		updatecount = 500
		pnz = true
		 }           
   }, updatecount)
}

tg();  