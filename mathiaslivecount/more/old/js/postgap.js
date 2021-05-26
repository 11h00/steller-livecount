const CULER = new XMLHttpRequest();
const VS = new XMLHttpRequest();
var incre = 5000;
var newcount = 0;
var oldcount = 0;
var folo = 0;
var updatecount = 500
var useuname1 = "mathias77710_posts";
var useuname2 = "tpjdog";
console.log("retry")
var UPsound = new Audio("lesonn/up.mp3");
var UPsound2 = new Audio("lesonn/up.mp3");
var UPsound3 = new Audio("lesonn/up.mp3");
var DOWNsound = new Audio("lesonn/down.mp3");
var DOWNsound2 = new Audio("lesonn/down.mp3");
var DOWNsound3 = new Audio("lesonn/down.mp3");
var vsresult = 0;
var post1 = 0;
var soundname = 1;
var sonHD = false;
var post2 = 0;
var downsoundname = 1;
var repon = new Audio("lesonn/reponser.mp3");
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
   window.open("https://www.instagram.com/" + useuname1)
  }
})
}
 function contact(){
	window.open("contact.html")
}
function gotoprofile2(){
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
   window.open("https://www.instagram.com/" + useuname2)
  }
})
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

 function sonsetting(){
if (sonHD == true){
	document.getElementById("soundstting").style.background  = "#FF0000"
	document.getElementById("soundstting").innerText = "sound : OFF"
	sonHD = false
}else{
    document.getElementById("soundstting").style.background  = "#00FF00"
	document.getElementById("soundstting").innerText = "sound : ON"
	sonHD = true
}
 }
 function conmapere(){
	 if (post1 < post2){
		vsresult = post2 - post1
		odometer1.innerHTML = vsresult;
		document.getElementById("lecomba").innerText = "before " + useuname1 + " beat " + useuname2
		document.getElementById("name2lol").innerText = useuname2
		document.getElementById("name1").innerText = useuname1 
			if (sonHD == true) {
				testcount();
			}
	 }else{
		vsresult = post1 - post2
	 odometer1.innerHTML = vsresult;
			document.getElementById("lecomba").innerText = "before " + useuname2 + " beat " + useuname1
			document.getElementById("name1").innerText = useuname1
			document.getElementById("name2lol").innerText = useuname2
			if (sonHD == true) {
				testcount();
			}
	 }
 }

function testcount(){
	if (vsresult > oldcount){
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
		soundname = 1
		break
		}
	}
	if (vsresult < oldcount){
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
		downsoundname = 1
		break
		}
	}
}
	
	
var i = 1;                 

function tg() {        
   setTimeout(function () {  
   nah = CULER.open('GET', "https://www.instagram.com/" + useuname1 + "/guides/?__a=1");
   CULER.send(null);//persone 1
   //----------------------------------
   
CULER.onreadystatechange = function(event) {
    // XMLHttpRequest.DONZ === 4

    if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {
			degar = JSON.parse(CULER.responseText); //gen 1
			post1 = degar.graphql.user.edge_owner_to_timeline_media.count;
			prifle = degar.graphql.user.profile_pic_url_hd;
			document.getElementById('pfp').src=prifle;
        }

    }
};  
   contre = VS.open('GET', "https://www.instagram.com/" + useuname2 + "/guides/?__a=1");
   VS.send(null); //personne 2
VS.onreadystatechange = function(event) {
    // XMLHttpRequest.DONZ === 4

    if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {
			degar2 = JSON.parse(VS.responseText); //gen 2
            post2 = degar2.graphql.user.edge_owner_to_timeline_media.count;
			prifle2 = degar2.graphql.user.profile_pic_url_hd;
			document.getElementById('pfp3').src=prifle2;
			oldcount = vsresult
			conmapere()   
			odometer3.innerHTML = post2;
			odometer2.innerHTML = post1;

		
        }

    }
};    
      i++;                    
      if (i < 500000000) {          
         tg();             
      }                        
   }, updatecount)
}

tg();  
