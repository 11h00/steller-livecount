const CULER = new XMLHttpRequest();
var pgp;
var folo = 0;
var updatecount = 500
var useuname = "comments";
var mileston = 0
oldcount = 0;
var normaltheme = false;

var UPsound = new Audio("lesonn/up_comment.mp3");
var badtheme = false;
// var santourianmathiasup = new Audio("lesonn/up2.mp3");
// var santourianmathiasdown = new Audio("lesonn/followdown.mp3");
// var downsound = new Audio("lesonn/followdown.mp3");

// let up1m = new Audio("lesonn/test/1m.mp3");
// let up2m = new Audio("lesonn/test/2m.mp3");
// let up3m = new Audio("lesonn/up2.mp3");
// let up4m = new Audio("lesonn/test/4m.mp3");
// let up5m = new Audio("lesonn/test/5m.mp3");
// let up6m = new Audio("lesonn/test/6m.mp3");
// let up7m = new Audio("lesonn/test/7m.mp3");
// let up8m = new Audio("lesonn/test/8m.mp3");
// let up9m = new Audio("lesonn/test/9.0m.mp3");
// let up9_5m = new Audio("lesonn/test/9.5m.mp3");
// let up10m = new Audio("lesonn/test/10m.mp3");
// let up11m = new Audio("lesonn/test/11m.mp3");

// let up26m = new Audio("lesonn/test/26m.mp3");
// let up27m = new Audio("lesonn/test/27m.mp3");
// let up28m = new Audio("lesonn/test/28m.mp3");
// let up29m = new Audio("lesonn/test/29m.mp3");
// let up30m = new Audio("lesonn/test/30m.mp3");
// let up31m = new Audio("lesonn/test/31m.mp3");
// let up32m = new Audio("lesonn/test/32m.mp3");
// let up33m = new Audio("lesonn/test/33m.mp3");
// let up34m = new Audio("lesonn/test/34m.mp3");
// let up35m = new Audio("lesonn/test/35m.mp3");
// let up36m = new Audio("lesonn/test/36m.mp3");
// let up37m = new Audio("lesonn/test/37m.mp3");
// let up38m = new Audio("lesonn/test/38m.mp3");
// let up39m = new Audio("lesonn/test/39m.mp3");
// let up47m = new Audio("lesonn/test/47m.mp3");
// let up48m = new Audio("lesonn/test/48m.mp3");
// let up51m = new Audio("lesonn/test/51m.mp3");
// let up52m = new Audio("lesonn/test/52m.mp3");
// let up53m = new Audio("lesonn/test/53m.mp3");
// let up54m = new Audio("lesonn/test/54m.mp3");
// let up55m = new Audio("lesonn/test/55m.mp3");
// let up56m = new Audio("lesonn/test/56m.mp3");
// let up57m = new Audio("lesonn/test/57m.mp3");
// let up58m = new Audio("lesonn/test/58m.mp3");
// let up59m = new Audio("lesonn/test/59m.mp3");
// let up60m = new Audio("lesonn/test/60m.mp3");
// let up61m = new Audio("lesonn/test/61m.mp3");
// let up62m = new Audio("lesonn/test/62m.mp3");
// let up63m = new Audio("lesonn/test/63m.mp3");
// let up64m = new Audio("lesonn/test/64m.mp3");
// let up65m = new Audio("lesonn/test/65m.mp3");
// let up66m = new Audio("lesonn/test/66m.mp3");
// let up67m = new Audio("lesonn/test/67m.mp3");
// let up68m = new Audio("lesonn/test/68m.mp3");
// let up69m = new Audio("lesonn/test/69m.mp3");
// let up70m = new Audio("lesonn/test/70m.mp3");
// let up71m = new Audio("lesonn/test/71m.mp3");
// let up72m = new Audio("lesonn/test/72m.mp3");
// let up73m = new Audio("lesonn/test/73m.mp3");
// let up74m = new Audio("lesonn/test/74m.mp3");
// let up75m = new Audio("lesonn/test/75m.mp3");
// let up76m = new Audio("lesonn/test/76m.mp3");
// let up77m = new Audio("lesonn/test/77m.mp3");
// let up78m = new Audio("lesonn/test/78m.mp3");
// let up79m = new Audio("lesonn/test/79m.mp3");
// let up80m = new Audio("lesonn/test/80m.mp3");
// let up81m = new Audio("lesonn/test/81m.mp3");

// let up89m = new Audio("lesonn/test/89m.mp3");
// let up90m = new Audio("lesonn/test/90m.mp3");
// let up91m = new Audio("lesonn/test/91m.mp3");

// let up_c_en_d = new Audio("lesonn/up_444.mp3");
// let down_c_en_d = new Audio("lesonn/down_444.mp3");

function playsound(video) {
	if (video >= 0 && video < 1000000) {
		santourianmathiasup.cloneNode(true).play();
	} else if (video >= 1000000 && video < 2000000) {
		up1m.cloneNode(true).play();
	} else if (video >= 2000000 && video < 3000000) {
		up2m.cloneNode(true).play();
	} else if (video >= 3000000 && video < 4000000) {
		up3m.cloneNode(true).play();
	} else if (video >= 4000000 && video < 5000000) {
		up4m.cloneNode(true).play();
	} else if (video >= 5000000 && video < 6000000) {
		up5m.cloneNode(true).play();
	} else if (video >= 6000000 && video < 7000000) {
		up6m.cloneNode(true).play();
	} else if (video >= 7000000 && video < 8000000) {
		up7m.cloneNode(true).play();
	} else if (video >= 8000000 && video < 9000000) {
		up8m.cloneNode(true).play();
	} else if (video >= 9000000 && video < 9500000) {
		up9m.cloneNode(true).play();
	} else if (video >= 9500000 && video < 10000000) {
		up9_5m.cloneNode(true).play();
	} else if (video >= 10000000 && video < 11000000) {
		up10m.cloneNode(true).play();
	} else if (video >= 11000000 && video < 12000000) {
		up11m.cloneNode(true).play();
	} else if (video >= 26000000 && video < 27000000) {
		up26m.cloneNode(true).play();
	} else if (video >= 27000000 && video < 28000000) {
		up27m.cloneNode(true).play();
	} else if (video >= 28000000 && video < 29000000) {
		up28m.cloneNode(true).play();
	} else if (video >= 29000000 && video < 30000000) {
		up29m.cloneNode(true).play();
	} else if (video >= 30000000 && video < 31000000) {
		up30m.cloneNode(true).play();
	} else if (video >= 31000000 && video < 32000000) {
		up31m.cloneNode(true).play();
	} else if (video >= 32000000 && video < 33000000) {
		up32m.cloneNode(true).play();
	} else if (video >= 33000000 && video < 34000000) {
		up33m.cloneNode(true).play();
	} else if (video >= 34000000 && video < 35000000) {
		up34m.cloneNode(true).play();
	} else if (video >= 35000000 && video < 36000000) {
		up35m.cloneNode(true).play();
	} else if (video >= 36000000 && video < 37000000) {
		up36m.cloneNode(true).play();
	} else if (video >= 37000000 && video < 38000000) {
		up37m.cloneNode(true).play();
	} else if (video >= 38000000 && video < 39000000) {
		up38m.cloneNode(true).play();
	} else if (video >= 39000000 && video < 40000000) {
		up39m.cloneNode(true).play();
	} else if (video >= 47000000 && video < 48000000) {
		up47m.cloneNode(true).play();
	} else if (video >= 48000000 && video < 49000000) {
		up48m.cloneNode(true).play();
	} else if (video >= 51000000 && video < 52000000) {
		up51m.cloneNode(true).play();
	} else if (video >= 52000000 && video < 53000000) {
		up52m.cloneNode(true).play();
	} else if (video >= 53000000 && video < 54000000) {
		up53m.cloneNode(true).play();
	} else if (video >= 54000000 && video < 55000000) {
		up54m.cloneNode(true).play();
	} else if (video >= 55000000 && video < 56000000) {
		up55m.cloneNode(true).play();
	} else if (video >= 56000000 && video < 57000000) {
		up56m.cloneNode(true).play();
	} else if (video >= 57000000 && video < 58000000) {
		up57m.cloneNode(true).play();
	} else if (video >= 58000000 && video < 59000000) {
		up58m.cloneNode(true).play();
	} else if (video >= 59000000 && video < 60000000) {
		up59m.cloneNode(true).play();
	} else if (video >= 60000000 && video < 61000000) {
		up60m.cloneNode(true).play();
	} else if (video >= 61000000 && video < 62000000) {
		up61m.cloneNode(true).play();
	} else if (video >= 62000000 && video < 63000000) {
		up62m.cloneNode(true).play();
	} else if (video >= 63000000 && video < 64000000) {
		up63m.cloneNode(true).play();
	} else if (video >= 64000000 && video < 65000000) {
		up64m.cloneNode(true).play();
	} else if (video >= 65000000 && video < 66000000) {
		up65m.cloneNode(true).play();
	} else if (video >= 66000000 && video < 67000000) {
		up66m.cloneNode(true).play();
	} else if (video >= 67000000 && video < 68000000) {
		up67m.cloneNode(true).play();
	} else if (video >= 68000000 && video < 69000000) {
		up68m.cloneNode(true).play();
	} else if (video >= 69000000 && video < 70000000) {
		up69m.cloneNode(true).play();
	} else if (video >= 70000000 && video < 71000000) {
		up70m.cloneNode(true).play();
	} else if (video >= 71000000 && video < 72000000) {
		up71m.cloneNode(true).play();
	} else if (video >= 72000000 && video < 73000000) {
		up72m.cloneNode(true).play();
	} else if (video >= 73000000 && video < 74000000) {
		up73m.cloneNode(true).play();
	} else if (video >= 74000000 && video < 75000000) {
		up74m.cloneNode(true).play();
	} else if (video >= 75000000 && video < 76000000) {
		up75m.cloneNode(true).play();
	} else if (video >= 76000000 && video < 77000000) {
		up76m.cloneNode(true).play();
	} else if (video >= 77000000 && video < 78000000) {
		up77m.cloneNode(true).play();
	} else if (video >= 78000000 && video < 79000000) {
		up78m.cloneNode(true).play();
	} else if (video >= 79000000 && video < 80000000) {
		up79m.cloneNode(true).play();
	} else if (video >= 80000000 && video < 81000000) {
		up80m.cloneNode(true).play();
	} else if (video >= 81000000 && video < 82000000) {
		up81m.cloneNode(true).play();
	} else if (video >= 89000000 && video < 90000000) {
		up89m.cloneNode(true).play();
	} else if (video >= 90000000 && video < 91000000) {
		up90m.cloneNode(true).play();
	} else if (video >= 91000000 && video < 92000000) {
		up91m.cloneNode(true).play();
	} else {
		santourianmathiasup.cloneNode(true).play();
	}
}
function normalthemechange() {
	if (normaltheme != true) {
		$('#bad1').css({ '-webkit-transform': 'rotate(0deg)' })
		$('#bad1').css('background', 'black')
		$('#odometer').css('color', 'white')
		$('div').css({ '-webkit-transform': 'rotate(0deg)' })
		$('p').css({ '-webkit-transform': 'rotate(0deg)' })
		$('h1').css({ '-webkit-transform': 'rotate(0deg)' })
		$('h1').css('color', 'white')
		document.getElementById('noni').style.position = ""
		document.getElementById('noni').style.display = 'contents'
		normaltheme = true
	}
}
function tg() {
	setTimeout(function () {
		CULER.open('GET', 'https://steller.co/story?downloadPath=stories%2F2109697155722642938');
		CULER.send(null);
		CULER.onreadystatechange = function (event) {
			
			if (this.readyState === XMLHttpRequest.DONE) {
				if (this.status === 200) {
					degar = JSON.parse(CULER.responseText);
					if (mileston == 0) {
						folo = degar.comment_count;
					} else {
						folo = mileston - degar.comment_count;
					}
					wownon = "mathias comment";
					if (folo > oldcount) {
						// normalthemechange();
						UPsound.cloneNode(true).play()
					}
					if (folo < oldcount) {
						
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
