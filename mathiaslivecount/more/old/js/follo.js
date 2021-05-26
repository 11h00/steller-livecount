const CULER = new XMLHttpRequest();
var incre = 1000;
var folo = 0;
var updatecount = 10000



	
	
var i = 1;                 

function tg() {        
   setTimeout(function () {   
          
	nah = CULER.open('GET', "https://www.instagram.com/graphql/query/?query_hash=e6306cc3dbe69d6a82ef8b5f8654c50b&variables=%7B%22id%22%3A%2218131021366%22%7D");
   CULER.send(null);
CULER.onreadystatechange = function(event) {
    // XMLHttpRequest.DONZ === 4

    if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {

			degar = JSON.parse(CULER.responseText);
			folo = degar.data.user.edge_following_hashtag.count;
			wownon = "mathias777 hashtag follow";
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
