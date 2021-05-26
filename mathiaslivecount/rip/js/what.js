const CULER = new XMLHttpRequest();
let pgp;
let folo = 0;
const updatecount = 500
let useuname = "51.6m";
let mileston = 0
let normaltheme = false;
let addtest = 0
const UPsound = new Audio("lesonn/up2.mp3");
const madown1 = new Audio("lesonn/down_malamute.mp3");
const maup1 = new Audio("lesonn/up_malamute.mp3");
let badtheme = false;
const _4_4_4_1 = new Audio("lesonn/up_444.mp3");
const _5_4_4_1 = new Audio("lesonn/down_444.mp3");
const _4_4_4_1_10m = new Audio("lesonn/up_444_10m.mp3");
const _5_4_4_1_10m = new Audio("lesonn/down_444_10m.mp3");
const _4_4_4_1_15m = new Audio("lesonn/up_444_15m.mp3");
const _5_4_4_1_15m = new Audio("lesonn/down_444_15m.mp3");
const _4_4_4_1_20m = new Audio("lesonn/up_444_20m.mp3");
const _5_4_4_1_20m = new Audio("lesonn/down_444_20m.mp3");
const _4_4_4_1_25m = new Audio("lesonn/up_444_25m.mp3");
const _5_4_4_1_25m = new Audio("lesonn/down_444_25m.mp3");
const _4_4_4_1_30m = new Audio("lesonn/up_444_30m.mp3");
const _5_4_4_1_30m = new Audio("lesonn/down_444_30m.mp3");
let ripthe = false
const santourianmathiasup = new Audio("lesonn/santourianup.mp3");
const santourianmathiasdown = new Audio("lesonn/santouriandown.mp3");
const tpjup = new Audio("lesonn/tpjdogup.mp3");
const tpjdown = new Audio("lesonn/tpjdogdown.mp3");

const downsound = new Audio("lesonn/followdown.mp3");
oldcount = 0;
const up12m = new Audio("lesonn/test/12m.mp3");
const up16m = new Audio("lesonn/test/16m.mp3");
const up17m = new Audio("lesonn/test/17m.mp3");
const up18m = new Audio("lesonn/test/18m.mp3");
const up19m = new Audio("lesonn/test/19m.mp3");
const up20m = new Audio("lesonn/test/20m.mp3");
const up26m = new Audio("lesonn/test/26m.mp3");
const up27m = new Audio("lesonn/test/27m.mp3");
const up28m = new Audio("lesonn/test/28m.mp3");
const up29m = new Audio("lesonn/test/29m.mp3");
const up30m = new Audio("lesonn/test/30m.mp3");
const up31m = new Audio("lesonn/test/31m.mp3");
const up32m = new Audio("lesonn/test/32m.mp3");
const up33m = new Audio("lesonn/test/33m.mp3");
const up34m = new Audio("lesonn/test/34m.mp3");
const up35m = new Audio("lesonn/test/35m.mp3");
const up36m = new Audio("lesonn/test/36m.mp3");
const up37m = new Audio("lesonn/test/37m.mp3");
const up38m = new Audio("lesonn/test/38m.mp3");
const up39m = new Audio("lesonn/test/39m.mp3");

//BAS LES COUILE V2
function playsound2(videocount){
	if (videocount < 10000000){
		_4_4_4_1.cloneNode(true).play();
	}else if(videocount >= 10000000 && videocount < 15000000){
		_4_4_4_1_10m.cloneNode(true).play();
	}else if(videocount >= 15000000 && videocount < 20000000){
		_4_4_4_1_15m.cloneNode(true).play();
	}else if(videocount >= 20000000 && videocount < 25000000){
		_4_4_4_1_20m.cloneNode(true).play();
	}else if(videocount >= 25000000 && videocount < 30000000){
		_4_4_4_1_25m.cloneNode(true).play();
	}else if(videocount >= 30000000 && videocount < 35000000){
		_4_4_4_1_30m.cloneNode(true).play();
	}
}
function downplaysound2(videocount){
	if (videocount < 10000000){
		_5_4_4_1.cloneNode(true).play();
	}else if(videocount > 10000000 && videocount < 15000000){
		_5_4_4_1_10m.cloneNode(true).play();
	}else if(videocount > 15000000 && videocount < 20000000){
		_5_4_4_1_15m.cloneNode(true).play();
	}else if(videocount >= 20000000 && videocount < 25000000){
		_5_4_4_1_20m.cloneNode(true).play();
	}else if(videocount >= 25000000 && videocount < 30000000){
		_5_4_4_1_25m.cloneNode(true).play();
	}else if(videocount >= 30000000 && videocount < 35000000){
		_5_4_4_1_30m.cloneNode(true).play();
	}
}
//BAS LES COUILE V2
function playsound(videocount){
	if (videocount > 0 && videocount < 1000000){
		santourianmathiasup.cloneNode(true).play();
	}else if(videocount >= 12000000 && videocount < 13000000){
		up12m.cloneNode(true).play();
	}else if(videocount >= 16000000 && videocount < 17000000){
		up16m.cloneNode(true).play();
	}else if(videocount >= 17000000 && videocount < 18000000){
		up17m.cloneNode(true).play();
	}else if(videocount >= 18000000 && videocount < 19000000){
		up18m.cloneNode(true).play();
	}else if(videocount >= 18000000 && videocount < 19000000){
		up18m.cloneNode(true).play();
	}else if(videocount >= 19000000 && videocount < 20000000){
		up19m.cloneNode(true).play();
	}else if(videocount >= 20000000 && videocount < 21000000){
		up20m.cloneNode(true).play();
	}else if(videocount >= 26000000 && videocount < 27000000){
		up26m.cloneNode(true).play();
	}else if(videocount >= 27000000 && videocount < 28000000){
		up27m.cloneNode(true).play();
	}else if(videocount >= 28000000 && videocount < 29000000){
		up28m.cloneNode(true).play();
	}else if(videocount >= 29000000 && videocount < 30000000){
		up29m.cloneNode(true).play();
	}else if(videocount >= 30000000 && videocount < 31000000){
		up30m.cloneNode(true).play();
	}else if(videocount >= 31000000 && videocount < 32000000){
		up31m.cloneNode(true).play();
	}else if(videocount >= 32000000 && videocount < 33000000){
		up32m.cloneNode(true).play();
	}else if(videocount >= 33000000 && videocount < 34000000){
		up33m.cloneNode(true).play();
	}else if(videocount >= 34000000 && videocount < 35000000){
		up34m.cloneNode(true).play();
	}else if(videocount >= 35000000 && videocount < 36000000){
		up35m.cloneNode(true).play();
	}else if(videocount >= 36000000 && videocount < 37000000){
		up36m.cloneNode(true).play();
	}else if(videocount >= 37000000 && videocount < 38000000){
		up37m.cloneNode(true).play();
	}else if(videocount >= 38000000 && videocount < 38848524){
		up38m.cloneNode(true).play();
	}else if(videocount >= 38848524 && videocount < 40000000){
		up39m.cloneNode(true).play();
	}
}
function bad_theme(){
	if (badtheme == false) {
        if (normaltheme == true) {
			$('#bad1').css({'-webkit-transform': 'rotate(33deg)'})
			$('#grantpj').css({"-webkit-transform":""})
			$('#bad1').css('background', 'red')
			$('#odometer').css('color', 'black')
            $('div').css({'-webkit-transform': 'rotate(15deg)'})
			$('p').css({'-webkit-transform': 'rotate(-66deg)'})
			$('h1').css({'-webkit-transform': 'rotate(17deg)'})
			$('h1').css('color', 'black')
			document.getElementById('noni').style.position = ""
			document.getElementById('noni').style.display = 'contents'
			badtheme = true
			normaltheme = false
		}
	}
}
function check_other(){
	bad = false;
		if (normaltheme == true) {
			$('.odometer').css('color', 'white')
		}else{
			$('.odometer').css('color', 'black')
		}
}
function normal_theme(){
	if (normaltheme != true) {
		$('#bad1').css({'-webkit-transform': 'rotate(0deg)'})
		$('#grantpj').css({"-webkit-transform":""})
		$('#bad1').css('background', 'black')
		$('#odometer').css('color', 'white')
		$('div').css({'-webkit-transform': 'rotate(0deg)'})
		$('p').css({'-webkit-transform': 'rotate(0deg)'})
		$('h1').css({'-webkit-transform': 'rotate(0deg)'})
		$('h1').css('color', 'white')
		document.getElementById('noni').style.position = ""
		document.getElementById('noni').style.display = 'contents'
		normaltheme = true
		badtheme = false
	}
}
function riptheme(){
	if (ripthe != true) {
		$('#odometer').css('color', 'darkgray')
		$('#grantpj').css({"-webkit-transform":"rotate(5deg) translate(6px, 13px)"})
		$('h1').css('color', 'purple')
		document.getElementById('noni').style.position = ""
		document.getElementById('noni').style.display = 'contents'
		ripthe = true
		normaltheme = false
	}
}
function tg() {
    setTimeout(function() {
        nah = CULER.open('GET', "https://www.instagram.com/" + useuname + "/reels/?__a=1");
        CULER.send(null);
        CULER.onreadystatechange = function(event) {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    degar = JSON.parse(CULER.responseText);
                    if (mileston == 0) {
						if (useuname == "mathias_santourian"){
							folo = degar.graphql.user.edge_owner_to_timeline_media.edges[0].node.video_view_count + addtest;
						}else if (useuname == "51.6m"){
							folo = degar.graphql.user.highlight_reel_count + addtest;
						}else{
							folo = degar.graphql.user.edge_felix_video_timeline.count + addtest;
						}
                        wownon = degar.graphql.user.full_name;
                    } else {
						if (useuname == "mathias_santourian"){
							folo = mileston - (degar.graphql.user.edge_owner_to_timeline_media.edges[0].node.video_view_count + addtest)
						}else if (useuname == "51.6m"){
							folo = mileston - (degar.graphql.user.highlight_reel_count + addtest);
						}else{
							folo = mileston - (degar.graphql.user.edge_felix_video_timeline.count + addtest);
						}
                        wownon = degar.graphql.user.full_name;
                    }
                    wownon = degar.graphql.user.full_name;
                    pgp = degar.graphql.user.profile_pic_url_hd
                    document.getElementById('xddd').src = pgp
                    if (folo > oldcount) {
                        if (useuname == 'bas_les_couille_du_13_v2') {
                            $('.odometer').css('color', 'red')
							playsound(folo)
                        } else if (useuname == "51.6m" || useuname == "mathias_santourian") {
							if (folo >= 38000000 && folo < 38848524){
								$('.odometer').css('color', 'red')
							}else{
								$('.odometer').css('color', 'white')
							}
							normal_theme()
							playsound(folo)
                        } else if (useuname == '51.6m_v3') {
							badtheme()
                            maup1.cloneNode(true).play();
                        } else if (useuname == 'tpjdog' || useuname == 'mathias77710_posts') {
                            tpjup.cloneNode(true).play();
							riptheme()
                        } else {
                            check_other()
                            UPsound.cloneNode(true).play();
                        }
                    }
                    if (folo < oldcount) {
                        if (useuname == 'bas_les_couille_du_13_v2') {
                            $('.odometer').css('color', 'red')
                            downplaysound2(folo)
                        } else if (useuname == '51.6m' || useuname == "mathias_santourian") {
							if (folo >= 38000000 && folo < 38848524){
								$('.odometer').css('color', 'red')
							}else{
								$('.odometer').css('color', 'white')
							}
							normal_theme()
                            santourianmathiasdown.cloneNode(true).play();//downplaysound2(folo)
                        } else if (useuname == '51.6m_v3') {
							badtheme()
                            madown1.cloneNode(true).play();
                        }else if (useuname == 'tpjdog' || useuname == 'mathias77710_posts') {
                            tpjdown.cloneNode(true).play();
							riptheme()
                        }else {
							check_other()
                            downsound.cloneNode(true).play();
                        }
                    }
                    oldcount = folo
                    if (wownon.length == 0) {
                        wownon = useuname
                    }
                    odometer.innerHTML = folo;
                    if (mileston == 0) {
                        document.getElementById("coconu").innerHTML = wownon;
                    } else {
                        document.getElementById("coconu").innerHTML = wownon + ' to ' + mileston;
                    }
                }
            }
        }
        tg();
    }, updatecount)
}

tg();