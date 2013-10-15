
var imported1 = document.createElement('script');
imported1.src = 'js/jquery-1.9.1.min.js';
document.head.appendChild(imported1);

var imported2 = document.createElement('script');
imported2.src = 'js/modernizr-2.6.2.min.js';
document.head.appendChild(imported2);

var imported3 = document.createElement('script');
imported3.src = 'js/threesixty.js';
document.head.appendChild(imported3);

var imported4 = document.createElement('script');
imported4.src = 'js/jquery.tweet.js';
document.head.appendChild(imported4);

var imported5 = document.createElement('script');
imported5.src = 'js/jquery.cycle.lite.js';
document.head.appendChild(imported5);

var css1 = document.createElement('link');
css1.rel = 'stylesheet';
css1.href = 'css/360.css';
document.head.appendChild(css1);

var css2 = document.createElement('link');
css2.rel = 'stylesheet';
css2.href = 'css/main.css';
document.head.appendChild(css2);

var css3 = document.createElement('link');
css3.rel = 'stylesheet';
css3.href = 'css/style.css';
document.head.appendChild(css3);

var css4 = document.createElement('link');
css4.rel = 'stylesheet';
css4.href = 'css/prism.css';
document.head.appendChild(css4);


var videoSlot = null;

LinearAd = function() { 
 // The slot is the div element on the main page that the ad is supposed to occupy 
 this._slot = null; 
 // The video slot is the video object that the creative can use to render and video element it might have. 
 this._videoSlot = null; 
 }; 

LinearAd.prototype.initAd = function(width, height, viewMode, desiredBitrate, 
 creativeData, environmentVars) { 
	console.log("Initializing ad");
 	// slot and videoSlot are passed as part of the environmentVars 
 	this._slot = environmentVars.slot; 
 	this._videoSlot = environmentVars.videoSlot;
 	this.createAndAddDivs(this._slot);
 	this._videoSlot.src = "honda_civic.mp4";
 	this._videoSlot.load();
	videoSlot = this._videoSlot;
 }; 

 LinearAd.prototype.startAd = function() { 
	 console.log("Starting ad"); 
	 playVideoPlayer();
	 //pauseVideoPlayer();
 }; 

 LinearAd.prototype.stopAd = function(e, p) { 
	 console.log("Stopping ad"); 
 }; 

 LinearAd.prototype.setAdVolume = function(val) { 
	 console.log("setAdVolume"); 
 }; 

 LinearAd.prototype.getAdVolume = function() { 
	 console.log("getAdVolume"); 
 }; 

 LinearAd.prototype.resizeAd = function(width, height, viewMode) { 
	 console.log("resizeAd");
 }; 

 LinearAd.prototype.pauseAd = function() { 
	 console.log("pauseAd"); 
 }; 

 LinearAd.prototype.resumeAd = function() { 
	 console.log("resumeAd"); 
 }; 

 LinearAd.prototype.expandAd = function() { 
	 console.log("expandAd"); 
 }; 

 LinearAd.prototype.getAdExpanded = function(val) { 
	 console.log("getAdExpanded"); 
 };
 
 LinearAd.prototype.getAdSkippableState = function(val) { 
	 console.log("getAdSkippableState"); 
 }; 

 LinearAd.prototype.collapseAd = function() { 
	 console.log("collapseAd"); 
 }; 

 LinearAd.prototype.skipAd = function() { 
	 console.log("skipAd");
 };

 // Callbacks for events are registered here 
 LinearAd.prototype.subscribe = function(aCallback, eventName, aContext) { 
 console.log("Subscribe"); 
 }; 

 // Callbacks are removed based on the eventName 
 LinearAd.prototype.unsubscribe = function(eventName) { 
 console.log("unsubscribe"); 
 } 

getVPAIDAd = function() { 
 myLinearAd = new LinearAd(); 
 return myLinearAd;
}; 

LinearAd.prototype.createAndAddDivs = function(outerDiv) {
	height = outerDiv.style.height;
	width = outerDiv.style.width;
	var divNodes = 
	'<div class="product-slides-container" ><ul class="product-slides">'+
	'<li class="slide-item"><a href="#" onclick="javascript:downloadBrochure()">Brochure</a></li>'+
	'<li class="slide-item"><a href="#" onclick="javascript:bookTestDrive()">Test Drive</a></li>'+
	'<li class="slide-item"><a href="#" onclick="javascript:locateDealers()">Dealers</a></li>'+
	'<li class="slide-item"><a href="#" onclick="javascript:showReviews()">Reviews</a></li></ul></div>'+
	'<div class="testDrive" style="border:none"><div class="testDriveFormContainer">'+
	'<div class="testDriveHeading">Schedule Test Drive</div><div>'+
	'<label>First Name:</label> <input type="text"></div><div><label>Last Name:</label> '+
	'<input type="text"></div><div><label>Phone Number:</label> <input type="text"></div><div>'+
	'<label>Email Address:</label> <input type="text"></div><div><label>Preferred Date:</label><select class="form" id="selDate">'+
	'<option value="">- Select Date -</option><option value="5/30/2013" selected="selected">Thu, May 30</option><option value="5/31/2013">Fri, May 31</option>'+
	'<option value="6/1/2013">Sat, Jun 1</option><option value="6/2/2013">Sun, Jun 2</option><option value="6/3/2013">Mon, Jun 3</option>'+
	'<option value="6/4/2013">Tue, Jun 4</option><option value="6/5/2013">Wed, Jun 5</option><option value="6/6/2013">Thu, Jun 6</option>'+
	'<option value="6/7/2013">Fri, Jun 7</option><option value="6/8/2013">Sat, Jun 8</option><option value="6/9/2013">Sun, Jun 9</option>'+
	'<option value="6/10/2013">Mon, Jun 10</option><option value="6/11/2013">Tue, Jun 11</option><option value="6/12/2013">Wed, Jun 12</option>'+
	'<option value="6/13/2013">Thu, Jun 13</option></select></div><div><label>Preferred Time:</label><select class="form" id="selTime">'+
	'<option value="">- Select Time -</option><option value="07:00AM">07:00AM</option><option value="07:15AM">07:15AM</option>'+
	'<option value="07:30AM">07:30AM</option><option value="07:45AM">07:45AM</option><option value="08:30AM">08:30AM</option>'+
	'<option value="08:45AM">08:45AM</option><option value="09:00AM">09:00AM</option><option value="09:15AM">09:15AM</option>'+
	'<option value="09:30AM">09:30AM</option><option value="09:45AM">09:45AM</option><option value="10:00AM">10:00AM</option>' +
	'<option value="10:15AM">10:15AM</option><option value="10:30AM">10:30AM</option><option value="10:45AM">10:45AM</option>'+
	'<option value="11:00AM">11:00AM</option><option value="11:15AM">11:15AM</option><option value="11:30AM">11:30AM</option>'+
	'<option value="11:45AM">11:45AM</option><option value="12:00PM">12:00PM</option><option value="12:15PM">12:15PM</option>'+
	'<option value="12:30PM">12:30PM</option><option value="12:45PM">12:45PM</option><option value="01:00PM">01:00PM</option>'+
	'<option value="01:15PM">01:15PM</option><option value="01:30PM">01:30PM</option><option value="01:45PM">01:45PM</option>'+
	'<option value="02:00PM">02:00PM</option><option value="02:15PM">02:15PM</option><option value="02:30PM">02:30PM</option>'+
	'<option value="02:45PM">02:45PM</option><option value="03:00PM">03:00PM</option><option value="03:15PM">03:15PM</option>'+
	'<option value="03:30PM">03:30PM</option><option value="03:45PM">03:45PM</option><option value="04:00PM">04:00PM</option>'+
	'<option value="04:15PM">04:15PM</option><option value="04:30PM">04:30PM</option><option value="04:45PM">04:45PM</option>'+
	'<option value="05:00PM">05:00PM</option><option value="05:15PM">05:15PM</option><option value="05:30PM">05:30PM</option>'+
	'<option value="05:45PM">05:45PM</option><option value="06:00PM">06:00PM</option><option value="06:15PM">06:15PM</option>'+
	'<option value="06:30PM">06:30PM</option><option value="06:45PM">06:45PM</option><option value="07:00PM">07:00PM</option>'+
	'<option value="07:15PM">07:15PM</option><option value="07:30PM">07:30PM</option></select></div>'+
	'<div><a href="#" class="btn">Schedule</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:resumeAd()" class="btn">Close</a></div></div></div>'+
	'<div class="dealersMap"><div class="dealersList"></div><img height='+height+' width="'+width+'" src="img/honda-dealers-map.png"></div>'+
	
	'<div class="tweet"></div>'+
	
	'<div class="interiors" id="right"><img src="img/honda/gal_lg1.jpg" width="690px" height="430px">'+
	'<img src="img/honda/gal_lg2.jpg" width="'+width+'" height='+height+'><img src="img/honda/gal_lg3.jpg" width="690px" height="430px">'+
	'<img src="img/honda/gal_lg4.jpg" width="'+width+'" height='+height+'></div>'+
	
	'<div class="threesixty car" style="border:none"><div class="spinner"><span></span></div><ol class="threesixty_images"></ol></div>'+
	
	'<div class="playlist" style="width:47;height:'+height+';"><div class="clear"></div>'+
	'<div class="viewport" style="width:47;height:'+height+';">'+
	'<ol class="playlist-items"><li class="playlist-item">'+
	'<img class="tooltip" src="img/tumblr.png" onclick="javascript:showTumblr()" style="opacity: 1;">'+
	'</li><li class="playlist-item">'+
	'<img class="tooltip" src="img/facebook.png" onclick="javascript:showFacebook()" style="opacity: 1;">'+
	'</li><li class="playlist-item">'+
	'<img class="tooltip" src="img/twitter.png" onclick="javascript:showTwitter()" style="opacity: 1;">'+
	'</li><li class="playlist-item">'+
	'<img class="tooltip customView" src="img/360degree-icon.png" onclick="javascript:show360()" style="opacity: 1;">'+
	'</li><li class="playlist-item">'+
	'<img class="tooltip" src="img/image-icon.png" onclick="javascript:showInteriors()" style="opacity: 1;">'+
	'</li></ol></div></div>';
	outerDiv.innerHTML = divNodes;
	
};

function hideOthers(showLayer) {
  var layers = ['#jp_jplayer_0','.tweet','.threesixty','.dealersMap','.testDrive','.interiors'];
  for(var i = 0; i < layers.length; i++) {
    $(layers[i]).hide();
  }
  if(showLayer) {
    $(showLayer).show();
  }
}

function downloadBrochure () {
	window.open("http://www.hondacarindia.com/download/Civic-Brochure.pdf");
}

function bookTestDrive() {
	pauseVideoPlayer();
    hideOthers(".testDrive");
}

function locateDealers() {
	pauseVideoPlayer();
    hideOthers(".dealersMap");
    $(".dealersList").load("dealers.html?pageId="+(+new Date));
    
}

function showReviews() {
	window.open("http://autos.yahoo.com/honda/civic-sedan/2013/reviews/");
}

function showTumblr() {
	window.open("http://www.tumblr.com/tagged/honda-civic");
}

function showFacebook() {
	window.open("https://www.facebook.com/HondaCivic2013");
}

function showTwitter() {
	pauseVideoPlayer();
    hideOthers(".tweet");
    $(".tweet").tweet({
        username: "HondaCivicTour",
        join_text: "",
        avatar_size: 32,
        count: 4,
        loading_text: "loading tweets..."
	});
}

function show360() {
	pauseVideoPlayer();
    hideOthers(".threesixty");
    initThreeSixty();
}

function pauseVideoPlayer () {
	videoSlot.pause();
}

function playVideoPlayer() {
	videoSlot.play();
}

function showInteriors() {
	pauseVideoPlayer();
    hideOthers(".interiors");
    $('#right').cycle({ 
      fx: 'fade',
      timeout: 500
    });
}

var car;

function initThreeSixty() {
  if(typeof car == 'undefined') {
    car = $('.car').ThreeSixty({
        totalFrames: 52, // Total no. of image you have for 360 slider
        endFrame: 52, // end frame for the auto spin animation
        currentFrame: 1, // This the start frame for auto spin
        imgList: '.threesixty_images', // selector for image list
        progress: '.spinner', // selector to show the loading progress
        imagePath:'img/car/', // path of the image assets
        filePrefix: '', // file prefix if any
        ext: '.png', // extention for the assets
        height: 454,
        width: 848,
        navigation: true
    });
  }
}

function resumeAd() {
	hideOthers("abc");
	playVideoPlayer();
}