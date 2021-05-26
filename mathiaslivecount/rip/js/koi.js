const CULER = new XMLHttpRequest();
var incre = 1000;
var newcount = 0;
var oldcount = 0;
var folo = 0;
var updatecount = 500
var useuname = "mathias_memories";
var prifle = "";
var wownon = "";
var sonHD = false;
var high2;
var UPsound = new Audio("lesonn/up.mp3");
var UPsound2 = new Audio("lesonn/up.mp3");
var UPsound3 = new Audio("lesonn/up.mp3");
var UPsound4 = new Audio("lesonn/up.mp3");
var oldfollwoing = null;
var followingsoundup = 1;
var downfollowing = new Audio('lesonn/downfollowing.mp3');
var downfollowing2 = new Audio('lesonn/downfollowing.mp3');
var downfollowing3 = new Audio('lesonn/downfollowing.mp3');
var downfollowing4 = new Audio('lesonn/downfollowing.mp3');
var downfollowing5 = new Audio('lesonn/downfollowing.mp3');
var downfollowing6 = new Audio('lesonn/downfollowing.mp3');
var downfollowing7 = new Audio('lesonn/downfollowing.mp3');
var followingup = new Audio("lesonn/followingup.mp3");
var followingup2 = new Audio("lesonn/followingup.mp3");
var followingup3 = new Audio("lesonn/followingup.mp3");
var followingup4 = new Audio("lesonn/followingup.mp3");
var followingup5 = new Audio("lesonn/followingup.mp3");
var followingsounddown = 1;
var followingup6 = new Audio("lesonn/followingup.mp3");
var followingup7 = new Audio("lesonn/followingup.mp3");
var UPsound5 = new Audio("lesonn/up.mp3");
var UPsound6 = new Audio("lesonn/up.mp3");
var UPsound7 = new Audio("lesonn/up.mp3");
var UPsoundfollo = new Audio("lesonn/upfollower.mp3");
var UPsoundfollo2 = new Audio("lesonn/upfollower.mp3");
var UPsoundfollo3 = new Audio("lesonn/upfollower.mp3");
var UPsoundfollo4 = new Audio("lesonn/upfollower.mp3");
var UPsoundfollo5 = new Audio("lesonn/upfollower.mp3");
var UPsoundfollo6 = new Audio("lesonn/upfollower.mp3");
var UPsoundfollo7 = new Audio("lesonn/upfollower.mp3");
var DOWNsound = new Audio("lesonn/down.mp3");
var DOWNsound2 = new Audio("lesonn/down.mp3");
var DOWNsound3 = new Audio("lesonn/down.mp3");
var DOWNsound4 = new Audio("lesonn/down.mp3");
var DOWNsound5 = new Audio("lesonn/down.mp3");
var DOWNsound6 = new Audio("lesonn/down.mp3");
var DOWNsound7 = new Audio("lesonn/down.mp3");
var repon = new Audio("lesonn/reponser.mp3");
var DONZ = new Audio("lesonn/DONZ.mp3");
var checkcount = false;
var followers = 0;
var ID;
var sond = 1;
var lanui = false;
var getdayornoght = getCookie("night");
var sonounon = getCookie("son");
var lastuser = getCookie("lastuser")
var soundname = 1;
var downsoundname = 1;
var soundname3 = 1;

if (lastuser == "null" || NaN){
	useuname = "santourianmathias"
}else{
	useuname = lastuser
}

if (useuname.length == 0){
	useuname = "santourianmathias"
}
function deletecookies() {
		Swal.fire({
  title: 'delete saved data ?',
  type: 'question',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'yes',
  cancelButtonText: 'no'
}).then((result) => {
  if (result.value) {
   document.cookie = "night=;expires=Thu, 18 Dec 2011 12:00:00 UTC";
   document.cookie = "son=;expires=Thu, 18 Dec 2011 12:00:00 UTC";
   document.cookie = "lastuser=;expires=Thu, 18 Dec 2011 12:00:00 UTC";
  }
})
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
	if (sonounon == "true"){
		sonHD = false
		sonsetting()
	}
	if (getdayornoght == "true"){
		document.getElementById("wewcor").style.background = "black"
		document.getElementById("pfp").style.border = "solid white"
		document.getElementById("followin").style.border = "solid 2px #bdbdbd22"
		document.getElementById("followin").style.background = "#77777722"
		document.getElementById("follower").style.border = "solid 2px #bdbdbd22"
		document.getElementById("follower").style.background = "#77777722"
		document.getElementById("autre").style.border = "solid 2px #bdbdbd22"
		document.getElementById("autre").style.background = "#77777722"
		document.getElementById("post-text").style.border = "solid 2px #bdbdbd22"
		document.getElementById("post-text").style.background = "#77777722"
		document.getElementById("autre3").style.color = "white"
		document.getElementById("bouto9").style.background = "#424242"
		document.getElementById("bouto8").style.background = "#424242"
		document.getElementById("bouto7").style.background = "#424242"
		document.getElementById("bouto6").style.background = "#424242"
		document.getElementById("bouto6").style.color = "white"
		document.getElementById("bouto5").style.background = "#424242"
		document.getElementById("bouto4").style.background = "#424242" //chercher
		document.getElementById("bouto3").style.background = "#424242"
		document.getElementById("bouto2").style.background = "#424242"
		document.getElementById("bouto1").style.background = "#424242"
		document.getElementById("soundstting").style.background = "#424242"
		document.getElementById("sole").src = "img/lue.png"
		lanui = true;
   CULER.open('GET', "https://www.instagram.com/" + useuname + "/?__a=1");
   CULER.send(null);
CULER.onreadystatechange = function(event) {
    // XMLHttpRequest.DONZ === 4

    if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status == 302) {
            Swal.fire('warnin sa marche pa en plu C ! de la merde');
        }
		if (this.status === 200) {

			degar = JSON.parse(CULER.responseText);
			oldcount = folo
			folo = degar.graphql.user.edge_owner_to_timeline_media.count;
            followers = degar.graphql.user.edge_followed_by.count;
			followin = degar.graphql.user.edge_follow.count;
			high2 = degar.graphql.user.highlight_reel_count;
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
			odometer4.innerHTML = high2;
			document.getElementById("coconu").innerHTML = wownon + " ID : (" + ID + ")";
			if (sonHD == true) {
				testcount()
			}
        }

		if (this.status === 423) {
            Swal.fire('ONG LILIT !');
        }
		if (this.status === 404) {
            Swal.fire('DOMA ! pa trouver :(');
        }
		if (this.status === 500) {
            Swal.fire('instgram: aller voçu faire envculef ! jai un nbyuyter v!');
        }
    }
}
	}else{
		      
              nah = CULER.open('GET', "https://www.instagram.com/" + useuname + "/?__a=1");
   CULER.send(null);
CULER.onreadystatechange = function(event) {
    if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {

			degar = JSON.parse(CULER.responseText);
			oldcount = folo
			folo = degar.graphql.user.edge_owner_to_timeline_media.count;
            followers = degar.graphql.user.edge_followed_by.count;
			followin = degar.graphql.user.edge_follow.count;
			high2 = degar.graphql.user.highlight_reel_count;
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
			odometer4.innerHTML = high2;
			document.getElementById("coconu").innerHTML = wownon + " ID : (" + ID + ")";
			if (sonHD == true) {
				testcount()
			}
        }
		if (this.status === 404) {
            Swal.fire('DOMA ! pa trouver :(');
			useuname = "mathias_santourian";
        }
		if (this.status === 500) {
            Swal.fire('instgram: aller voçu faire envculef ! jai un nbyuyter v!');
        }
    }
}
	}
}
function nightmode(){
	if (lanui == false){
		//foutre le nu ?!
		document.cookie = "night=true;expires=Thu, 18 Dec 2019 12:00:00 UTC";
		document.getElementById("wewcor").style.background = "black"
		document.getElementById("pfp").style.border = "solid white"
		document.getElementById("followin").style.border = "solid 2px #bdbdbd22"
		document.getElementById("followin").style.background = "#77777722"
		document.getElementById("follower").style.border = "solid 2px #bdbdbd22"
		document.getElementById("follower").style.background = "#77777722"
		document.getElementById("autre").style.border = "solid 2px #bdbdbd22"
		document.getElementById("autre").style.background = "#77777722"
		document.getElementById("post-text").style.border = "solid 2px #bdbdbd22"
		document.getElementById("post-text").style.background = "#77777722"
		document.getElementById("autre3").style.color = "white"
		document.getElementById("bouto9").style.background = "#424242"
		document.getElementById("bouto8").style.background = "#424242"
		document.getElementById("bouto7").style.background = "#424242"
		document.getElementById("bouto6").style.background = "#424242"
		document.getElementById("bouto6").style.color = "white"
		document.getElementById("bouto5").style.background = "#424242"
		document.getElementById("bouto4").style.background = "#424242" //chercher
		document.getElementById("bouto3").style.background = "#424242"
		document.getElementById("bouto2").style.background = "#424242"
		document.getElementById("bouto1").style.background = "#424242"
		document.getElementById("soundstting").style.background = "#424242"
		document.getElementById("sole").src = "img/lue.png"
		lanui = true;
	}else{
		//foutre le joue !
		document.cookie = "night=false;expires=Thu, 18 Dec 2019 12:00:00 UTC"
		document.getElementById("wewcor").style.background = "linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) ),linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) ),    linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) )"
		document.getElementById("pfp").style.border = "solid"
		document.getElementById("followin").style.border = "solid 2px #11111122"
		document.getElementById("followin").style.background = "#11111122"
		document.getElementById("follower").style.border = "solid 2px #11111122"
		document.getElementById("follower").style.background = "#11111122"
		document.getElementById("autre").style.border = "solid 2px #11111122"
		document.getElementById("autre").style.background = "#11111122"
		document.getElementById("post-text").style.border = "solid 2px #11111122"
		document.getElementById("post-text").style.background = "#11111122"
		document.getElementById("autre3").style.color = "white"
		document.getElementById("bouto9").style.background = "#00ffad"
		document.getElementById("bouto8").style.background = "#2200ff"
		document.getElementById("bouto7").style.background = "#00ffad"
		document.getElementById("bouto6").style.background = "#ffa7a7"
		document.getElementById("bouto6").style.color = "#f50000"
		document.getElementById("bouto5").style.background = "#99a04f"
		document.getElementById("bouto4").style.background = "#5610ff" //chercher
		document.getElementById("bouto3").style.background = "#99a04f"
		document.getElementById("bouto2").style.background = "#99a04f"
		document.getElementById("bouto1").style.background = "#99a04f"
		if (sonHD == true){
	    document.getElementById("soundstting").style.background = "#00FF00"
		}else{
		document.getElementById("soundstting").style.background = "#FF0000"	
		}
		document.getElementById("sole").src = "img/sole.png"
		lanui = false;
	}
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
   window.open("https://www.instagram.com/" + useuname)
  }
})
}

function sonsetting(){
if (sonHD == true){
	if (lanui == false){
	document.getElementById("soundstting").style.background  = "#FF0000"
	}
	document.getElementById("soundstting").innerText = "sound : OFF"
	document.cookie = "son=false;expires=Thu, 18 Dec 2019 12:00:00 UTC"
	sonHD = false
}else{
	if (lanui == false){
    document.getElementById("soundstting").style.background  = "#00FF00"
	}
	document.getElementById("soundstting").innerText = "sound : ON"
	document.cookie = "son=true;expires=Thu, 18 Dec 2019 12:00:00 UTC"
	sonHD = true
}

}
function blocked(){
	repon.play()
Swal.fire({
  title: 'the livecount is stuck',
  text: "there is a few reason why the livecount stopped working",
  type: 'question',
  showCancelButton: false,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'continue'
}).then((result) => {
  if (result.value) {
Swal.fire({
  title: 'network problem',
  text: "the livecount need to receve FULL json responce of instagram. if you lose connection or connetion signal is poor, we cant parse the full reponce bc instagram API will give up and end the request",
  type: 'question',
  showCancelButton: false,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'continue'
}).then((result) => {
  if (result.value) {
Swal.fire({
  title: 'solution',
  text: "just use the livecount at your home or something where the connextion is better",
  type: 'success',
  showCancelButton: false,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'continue'
}).then((result) => {
  if (result.value) {
Swal.fire({
  title: 'unsupport browers',
  text: "yes there is sadly browers who dont support the method how i need to get the json or the JSON parser.",
  type: 'question',
  showCancelButton: false,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'continue'
}).then((result) => {
  if (result.value) {
Swal.fire({
  title: 'solution',
  text: "i recommend people who use these unsuported browers to download 'google crome' or 'mozilla firefox' for best compability with livecount",
  type: 'success',
  showCancelButton: false,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'continue'
}).then((result) => {
  if (result.value) {
Swal.fire({
  title: 'shitty/slow device',
  text: "this is maybe not the liveount but just your device who cant support the odometer transition or cant request properly",
  type: 'question',
  showCancelButton: false,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'continue'
}).then((result) => {
  if (result.value) {
Swal.fire({
  title: 'solution',
  text: "be sure your phone/computer is up to date and latest app update... if its still dont work after this ... throw you pc/phone by the window",
  type: 'success',
  showCancelButton: false,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'continue'
}).then((result) => {
  if (result.value) {
Swal.fire({
  title: 'instagram BLOCK',
  text: "well .. instagram is blocking on this too :( they block the json request after a while of using...",
  type: 'error',
  showCancelButton: false,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'continue'
}).then((result) => {
  if (result.value) {
Swal.fire({
  title: 'solution',
  text: "you can use a vpn or a proxy for bypass this limit, i recommend hola vpn who is free and for androind users touch vpn who work perfectly too, this is just your IP who got flagged for a short time so you can use vpn or proxy for continue using my livecount :)",
  type: 'success',
  showCancelButton: false,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'continue'
}).then((result) => {
  if (result.value) {
Swal.fire({
  title: 'still no working ?',
  text: "if all these solution didnt worked you can contact me with the blue button.",
  type: 'warning',
  showCancelButton: false,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'thanks, DONZ !'
}).then((result) => {
  if (result.value) {
//
  }
})
  }
})
  }
})
  }
})
  }
})
  }
})
  }
})
  }
})
  }
})
  }
})
}

function contact(){
	window.open("contact.html")
}

function testfollowing(){
if (sonHD == true){
	if (oldfollwoing > followin){
		switch(followingsounddown){
	    case 1:
		downfollowing.play();
		followingsounddown += 1
		break
		case 2:
		downfollowing2.play();
		followingsounddown += 1
		break
		case 3:
		downfollowing3.play();
		followingsounddown += 1
		break
		case 4:
		downfollowing4.play();
		followingsounddown += 1
		break
		case 5:
		downfollowing5.play();
		followingsounddown += 1
		break
		case 6:
		downfollowing6.play();
		followingsounddown += 1
		break
		case 7:
		downfollowing7.play();
		followingsounddown = 1
		break
		}
	}
	if (oldfollwoing < followin){
		switch(followingsoundup){
	    case 1:
		followingup.play();
		followingsoundup += 1
		break
		case 2:
		followingup2.play();
		followingsoundup += 1
		break
		case 3:
		followingup3.play();
		followingsoundup += 1
		break
		case 4:
		followingup4.play();
		followingsoundup += 1
		break
		case 5:
		followingup5.play();
		followingsoundup += 1
		break
		case 6:
		followingup6.play();
		followingsoundup += 1
		break
		case 7:
		followingup7.play();
		followingsoundup = 1
		break
		}
	}
}
}

function testfolo(){
	if (followers > oldcount2){
		switch(soundname3){
	    case 1:
		UPsoundfollo.play();
		soundname3 += 1
		break
		case 2:
		UPsoundfollo2.play();
		soundname3 += 1
		break
		case 3:
		UPsoundfollo3.play();
		soundname3 += 1
		break
		case 4:
		UPsoundfollo4.play();
		soundname3 += 1
		break
		case 5:
		UPsoundfollo5.play();
		soundname3 += 1
		break
		case 6:
		UPsoundfollo6.play();
		soundname3 += 1
		break
		case 7:
		UPsoundfollo7.play();
		soundname3 = 1
		break
		}
	}
}

function testcount(){
	if (folo > oldcount){
		switch(soundname){
	    case 1:
		UPsound.play();
		soundname += 1
		break
		case 2:
		UPsound2.play();
		soundname += 1
		break
		case 3:
		UPsound3.play();
		soundname += 1
		break
		case 4:
		UPsound4.play();
		soundname += 1
		break
		case 5:
		UPsound5.play();
		soundname += 1
		break
		case 6:
		UPsound6.play();
		soundname += 1
		break
		case 7:
		UPsound7.play();
		soundname = 1
		break
		}
	}
	if (folo < oldcount){
		switch(downsoundname){
	    case 1:
		DOWNsound.play();
		downsoundname += 1
		break
		case 2:
		DOWNsound2.play();
		downsoundname += 1
		break
		case 3:
		DOWNsound3.play();
		downsoundname += 1
		break
		case 4:
		DOWNsound4.play();
		downsoundname += 1
		break
		case 5:
		DOWNsound5.play();
		downsoundname += 1
		break
		case 6:
		DOWNsound6.play();
		downsoundname += 1
		break
		case 7:
		DOWNsound7.play();
		downsoundname = 1
		break
		}
	}
}             

function tg() {        
   setTimeout(function () {   
   CULER.open('GET', "https://www.instagram.com/" + useuname + "/?__a=1");
   CULER.send(null);
CULER.onreadystatechange = function(event) {
    if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {

			degar = JSON.parse(CULER.responseText);
			oldcount2 = followers
			oldcount = folo
			oldfollwoing = followin
			folo = degar.graphql.user.edge_owner_to_timeline_media.count;
            followers = degar.graphql.user.edge_followed_by.count;
			followin = degar.graphql.user.edge_follow.count;
			high2 = degar.graphql.user.highlight_reel_count;
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
			odometer4.innerHTML = high2;
			document.getElementById("coconu").innerHTML = wownon + " ID : (" + ID + ")";
			if (sonHD == true) {
				testcount()
				testfolo()
				testfollowing()
			}
        }
		if (this.status === 404) {
            Swal.fire('404 : no found ! :( DOMA BTW !');
			useuname = "santourianmathias";
        }
		if (this.status === 500) {
            Swal.fire('500: instgram: aller voçu faire envculef ! jai un nbyuyter v!');
        }
    }
};           
         tg();                                
   }, updatecount)
}

tg();  
