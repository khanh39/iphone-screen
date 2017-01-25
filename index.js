





var num =0;

  function slideButton(){


    var img = document.getElementById('img');
     var theSwitch = document.getElementsByClassName('switch')[0];
     var wify = document.getElementById('wify');
      var date = document.getElementById('data');

    if(num === 0){

       img.src='http://www.iconsdb.com/icons/download/white/circle-512.png';
       img.style.transition = ' padding 1s';
       theSwitch.style.background='#35cc4e';
       theSwitch.style.border ='1px solid white';
       img.style.paddingLeft='60%';
       wify.src='http://www.free-icons-download.net/images/airplane-mode-on-icon-61147.png';
       data.style.visibility='hidden';





       num++;

    }

     else if(num == 1){

    img.style.transition = ' padding 1s';
    theSwitch.style.background='#f7faff';
    img.style.paddingLeft='5%';
    theSwitch.style.border ='1px solid #C0C0C0';
    img.src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/2000px-Circle_-_black_simple.svg.png';
    data.style.visibility='visible';
    wify.src='http://www.freeiconspng.com/uploads/blue-wifi-icon-3.png';


       num=0;
    }

}



//Setting

function home(){


    var modal = document.getElementsByClassName('modal')[0];
     modal.style.display='none';
     var home = document.getElementsByClassName('home')[0];
     home.style.display='block';
      document.body.style.backgroundImage=" url('http://iphonewalls.net/wp-content/uploads/2016/09/iOS%209%20Colorful%20Surf%20Wave%20iPhone%206+%20HD%20Wallpaper.jpg')";
      document.body.style.backgroundSize ='350px 600px';
      document.body.style.backgroundRepeat ='no-repeat';

}


function setting(){


    var modal = document.getElementsByClassName('modal')[0];
     modal.style.display='block';
     var home = document.getElementsByClassName('home')[0];
     home.style.display='none';
     modal.style.background='white';
     document.body.style.background='white';
     modal.style.marginTop='0';

}


//setting end




//Maps
var x = document.getElementById("coords");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var x = document.getElementById("coords");
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
    var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
    zoom:18,
    mapTypeId:google.maps.MapTypeId.HYBRID
  };
  var map = new google.maps.Map(mapCanvas,mapOptions);
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred.";
            break;
    }


}




//end maps




//apple news


function news(){


    var appleNews = document.getElementsByClassName('apple_news')[0];
     appleNews.style.display='block';
     appleNews.style.background='white';
     document.body.style.background='white';
     appleNews.style.marginTop='0';
     var home = document.getElementsByClassName('home')[0];
     home.style.display='none';


}



function home_news(){


    var appleNews = document.getElementsByClassName('apple_news')[0];
     appleNews.style.display='none';
     appleNews.style.background='white';
     document.body.style.background='white';
     appleNews.style.marginTop='0';
     var home = document.getElementsByClassName('home')[0];
     home.style.display='block';
     document.body.style.backgroundImage=" url('http://iphonewalls.net/wp-content/uploads/2016/09/iOS%209%20Colorful%20Surf%20Wave%20iPhone%206+%20HD%20Wallpaper.jpg')";
      document.body.style.backgroundSize ='350px 600px';
      document.body.style.backgroundRepeat ='no-repeat';



}









$(function(){


     var home = document.getElementsByClassName('home')[0];




    //time
    setInterval(function(){

    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();

    mins = ((mins<10) ?  '0'+mins : mins);

    document.getElementById('time').innerHTML = hours+":"+mins;

    },1000);

    //end

   //fb

   $('#fb').click(function(){

      window.open("https://www.facebook.com");

   });



   //end


   //instagram
   $('#insta').click(function(){

      window.open("https://www.instagram.com");

   });

   //end

    //Maps
    var map = document.getElementsByClassName('map')[0];

    $('#maps').click(function(){

     map.style.display='block';
     map.style.background='white';
     document.body.style.background='white';
     map.style.marginTop='0';

     home.style.display='none';





    });


    $('#home_map').click(function(){

      map.style.display='none';
      home.style.display='block';
      document.body.style.backgroundImage=" url('http://iphonewalls.net/wp-content/uploads/2016/09/iOS%209%20Colorful%20Surf%20Wave%20iPhone%206+%20HD%20Wallpaper.jpg')";
      document.body.style.backgroundSize ='350px 600px';
      document.body.style.backgroundRepeat ='no-repeat';



    });

    //end



    //Musics

     var music = document.getElementsByClassName('apple_music')[0];


    $('#music_apple').click(function(){


     music.style.display='none';
     music.style.background='white';
     document.body.style.background='white';
     music.style.marginTop='0';
     home.style.display='block';
     document.body.style.backgroundImage=" url('http://iphonewalls.net/wp-content/uploads/2016/09/iOS%209%20Colorful%20Surf%20Wave%20iPhone%206+%20HD%20Wallpaper.jpg')";
      document.body.style.backgroundSize ='350px 600px';
      document.body.style.backgroundRepeat ='no-repeat';



    });



    $('#2').click(function(){


     music.style.display='block';
     music.style.background='white';
     document.body.style.background='white';
     music.style.marginTop='0';
     home.style.display='none';


    });




    //end


   var currentFile = ['http://www.sololearn.com/uploads/audio.mp3','http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.mp4','http://www.w3schools.com/html/horse.ogg','http://apm.ircam.fr/media/resources/audio/StreicherKreis_BASCHET_extract.ogg','http://www.elated.com/res/File/articles/authoring/html/html5-audio/WhiteChristmas.mp3','https://archive.org/download/mythium/JLS_ATI.mp3','https://archive.org/download/mythium/SSB06_06_03_ME.mp3','https://archive.org/download/mythium/BSFM_TF.mp3'];

   var images = ['http://www.teamjimmyjoe.com/wp-content/uploads/2013/07/Worst-Album-Covers-Eddie-Mack.jpg','http://www.lovethispic.com/uploaded_images/254889-Fuzzy-Bunny.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0eCYiehhQILOaYhXIoMBhVrlZb9nttlm2yke64P0n7KnESXWa','https://i1.sndcdn.com/artworks-000174004108-fa1tfw-t500x500.jpg','http://www.imgion.com/images/01/naked-santa-baby.jpg','http://www.toonpool.com/user/111730/files/bruce_willis_2357425.jpg','http://www.mommyish.com/wp-content/uploads/2014/04/shutterstock_87949297.jpg','https://userscontent2.emaze.com/images/76be6f65-d4f6-464f-911d-ea12270836e8/19bf4b49ccb941fa06e11292e6a4abeb.jpg'];

   var names =['Symphony No. 9','Death Becomes Fur ','Neigh','Violins Harambe','Christmas','Action No.102','Madd!!','Before rock'];
   var artists =['Ludwig van Beethoven','Bucky Bunny','Bojack Horseman ','Harambe','Naked Santa','Bad Bruce','Bad Baby','evolution'];

   var num = 0;

   $('#play').click(function(){

                    var oAudio = document.getElementById('myaudio');
					var btn = document.getElementById('play');
					var name = document.getElementById('name');
					var artist = document.getElementById('artist');


					// Tests the paused attribute and set state.
					if (oAudio.paused) {
					   oAudio .src = currentFile[num];
					   image.src = images[num];
					   name.innerHTML = names[num];
					   artist.innerHTML=artists[num];

						oAudio.play();
						 btn.src='http://www.freeiconspng.com/uploads/pause-button-png-11.png';
						 image.style.transition='width .65s ';
						image.style.width='65%';
						image.style.boxShadow= '10px 10px 5px #888888 ';

					}

					else {
						 oAudio.src = currentFile[num];
						 image.src = images[num];
						 name.innerHTML = names[num];
						 artist.innerHTML=artists[num];

						oAudio.pause();
						btn.src='https://cdn1.iconfinder.com/data/icons/glyphie-1/40/button_play_triangle_music_video_audio_arrow_next-512.png';
						image.style.transition='width .65s ';
						image.style.width='55%';
						 image.style.boxShadow= 'none ';
					}


   });


   $('#previous').click(function(){

                       var image = document.getElementById('image');
	                   var oAudio = document.getElementById('myaudio');
	                    var name = document.getElementById('name');
	                   var artist = document.getElementById('artist');

	             num++;

	           if(num >= currentFile.length && images.length){
		         num =0;
	            }

	              oAudio.src = currentFile[num];
	              image.src = images[num];
	              name.innerHTML = names[num];
	              artist.innerHTML=artists[num];
	              oAudio.play();


   });


   $('#next').click(function(){

                      var image = document.getElementById('image');
	 var oAudio = document.getElementById('myaudio');
	 var name = document.getElementById('name');
	 var artist = document.getElementById('artist');

	 num--;

	 if(num < 0) {
	   num = currentFile.length-1;
	  num = images.length-1;
	  num = names.length-1;
	  num = artists.length-1;

	 }

   oAudio.src = currentFile[num];
   image.src = images[num];
   name.innerHTML = names[num];
   artist.innerHTML=artists[num];

   	oAudio.play();


   });


});
