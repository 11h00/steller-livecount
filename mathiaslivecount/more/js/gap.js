const CULER = new XMLHttpRequest();
const VS = new XMLHttpRequest();
var oldcount = 0;
var methoddemerde = 0;
var folo = 0;
var updatecount = 200
var mode1 = 3;
var mode2 = 3;
var useuname1 = "51.6m";
var useuname2 = "benc4n";
var UPsound = new Audio("lesonn/up.mp3");
var DOWNsound = new Audio("lesonn/down.mp3");
var vsresult = 0;
var post1 = 0;
var sonHD = false;
var post2 = 0;
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
	VS.onreadystatechange = function(event) {
    if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {
			degar2 = JSON.parse(VS.responseText); //gen 2
			switch(mode2){
			case 1:
			post2 = degar2.graphql.user.edge_owner_to_timeline_media.count;	
			break;
			case 2:
			switch(useuname2){
					case "51.6m":
					case "51.6m_v3":
					case "shibe_santoutou_":
						post2 = degar2.graphql.user.edge_felix_video_timeline.count
					break;
					default:
						post2 = degar2.graphql.user.highlight_reel_count
					break;
				}
			break;
			case 3:
			post2 = degar2.graphql.user.edge_followed_by.count;	
			break;
			case 4:
			post2 = degar2.graphql.user.edge_follow.count;	
			break;
			}
			prifle2 = degar2.graphql.user.profile_pic_url_hd;
			document.getElementById('pfp3').src = prifle2;
			oldcount = vsresult
			conmapere()
			//checkuser()
			odometer3.innerHTML = post2;
			odometer2.innerHTML = post1;
        }
    }
};
CULER.onreadystatechange = function(event) {
    if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {
			degar = JSON.parse(CULER.responseText); //gen 1
			switch(mode1){
			case 1:
			post1 = degar.graphql.user.edge_owner_to_timeline_media.count;	
			break;
			case 2:
				switch(useuname1){
					case "51.6m":
					case "51.6m_v3":
					case "shibe_santoutou_":
						post1 = degar.graphql.user.edge_felix_video_timeline.count
					break;
					default:
						post1 = degar.graphql.user.highlight_reel_count
					break;
				}
			
			break;
			case 3:
			post1 = degar.graphql.user.edge_followed_by.count;	
			break;
			case 4:
			post1 = degar.graphql.user.edge_follow.count;	
			break;
			}
			prifle = degar.graphql.user.profile_pic_url_hd;
			document.getElementById('pfp').src=prifle;
        }
		if (methoddemerde == 1){
			VS.open('GET', "https://www.instagram.com/" + useuname2 + "/?__a=1");
		}else{
			VS.open('GET', "https://www.instagram.com/" + useuname2 + "/reels/?__a=1");		
		}
   		VS.send(null);
    }
};
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
		if (useuname1 != 'mathias_love_dogs?'){
		document.getElementById("lecomba").innerText = "before " + useuname1 + " beat " + useuname2
		document.getElementById("name2lol").innerText = useuname2
		document.getElementById("name1").innerText = useuname1 
		}
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
		UPsound.cloneNode(true).play();
	}
	if (vsresult < oldcount){
		DOWNsound.cloneNode(true).play();
	}
}

function tg() {
   setTimeout(function () {  
			if (methoddemerde == 1){
				CULER.open('GET', "https://www.instagram.com/" + useuname1 + "/?__a=1");
			}else{
				CULER.open('GET', "https://www.instagram.com/" + useuname1 + "/reels/?__a=1");		
			}
   CULER.send(null);
			updatecount = 500;
         tg();                  		 
   }, updatecount)
}

tg();  
