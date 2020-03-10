var pbutton=document.querySelector("#play");
var muted=document.getElementById("mute");
var video=document.querySelector(".video");
var video1=document.querySelector("#video1");
var res=document.querySelector("#reset");
var fullVideo=document.querySelector(".c-video");
var back5=document.getElementById("back");
var for5=document.getElementById("for");
var prog=document.querySelector(".progress");
var fullScreen=document.querySelector("#fullscreen");
var seekSlider=document.getElementById("seekslider");
var seekSlide=document.getElementById("red");
var  currentTi=document.getElementById("currenttime");
var durationTi=document.getElementById("durationtime");
var soundSlider=document.getElementById("soundslider");
var m=true;
var isFullScreen=false;

pbutton.addEventListener("click",playpause);
muted.addEventListener("click",volumeVideo);
res.addEventListener("click",restart1);
back5.addEventListener("click",backBy5);
for5.addEventListener("click",forwardBy5);
video1.addEventListener("ended",function()
{
	alert("Video has ended");
	video.currentTime=0.0;
	pbutton.classList.add("fa-google-play");
	pbutton.classList.remove("fa-pause");
	pbutton.style.fontSize="22px";
	
});
fullScreen.addEventListener("click",toggleFullScreen);
seekSlider.addEventListener("change",vidSeek);
video.addEventListener("timeupdate",updateSeek);
soundSlider.addEventListener("change",soundSeek);


function playpause()
{
	if(video.paused)
	{
		video.play();		
		pbutton.classList.remove("fa-google-play");
		pbutton.classList.add("fa-pause");
		pbutton.style.fontSize="22px";
	}
	else
	{
		video.pause();
		pbutton.classList.add("fa-google-play");
		pbutton.classList.remove("fa-pause");
		pbutton.style.fontSize="22px";
	}
}

function volumeVideo()
{
	if(m)
	{
		video.volume=0.0;
		soundSlider.value=video.volume*100;
		muted.classList.remove("fa-volume-mute");
		muted.classList.add("fa-volume-up");
		muted.style.fontSize="22px";
		muted.style.color="red";
	}
	else
	{
		video.volume=1.0;
		soundSlider.value=video.volume*100;
		muted.classList.remove("fa-volume-up");
		muted.classList.add("fa-volume-mute");

	}
	m=!m;
}

function restart1()
{
	video.currentTime=0;
}

function backBy5()
{
	if(video.currentTime>5)
	{
		video.currentTime-=5.0;
	}
	else
	{
		video.currentTime=0.0;
	}
}

function forwardBy5()
{
	if(video.duration-video.currentTime>5.0)
	{
		video.currentTime+=5.0;
	}
	else
	{
		video.currentTime=video.duration;
	}
}


function toggleFullScreen()
{
	if(isFullScreen==false)
	{
		if(fullVideo.requestFullScreen)
			fullVideo.requestFullScreen();
		else if(fullVideo.webkitRequestFullScreen)
			fullVideo.webkitRequestFullScreen();
		else if(fullVideo.mozRequestFullScreen)
			fullVideo.mozRequestFullScreen();
		isFullScreen=true;
	}
	else
	{
		if(fullVideo.cancelFullScreen)
			fullVideo.cancelFullScreen();
		else if(fullVideo.exitFullScreen)
			fullVideo.exitFullScreen();
		else if(fullVideo.webkitCancelFullScreen)
			fullVideo.webkitCancelFullScreen();
		isFullScreen=false;
	}
}

function vidSeek()
{
	var ut=video.duration*(seekSlider.value/100);
	video.currentTime=ut;
}

function updateSeek()
{
	var nt=video.currentTime*(100/video.duration);
	seekSlider.value=nt;
	seekSlide.style.width = nt +"%";
	var curmin=Math.floor(video.currentTime/60);
	var cursec=Math.floor(video.currentTime-curmin*60);
	var durmin=Math.floor(video.duration/60);
	var dursec=Math.round(video.duration-durmin*60);
	if(cursec<10)
	{
		cursec="0"+cursec;
	}
	
	if(curmin<10)
	{
		curmin="0"+curmin;
	}
	
	if(dursec<10)
	{
		dursec="0"+dursec;
	}

	if(durmin<10)
	{
		durmin="0"+durmin;
	}
	currentTi.innerHTML=curmin+":"+cursec;
	durationTi.innerHTML=durmin+":"+dursec;
}

function soundSeek()
{
	video.volume=soundSlider.value/100;
	if(video.volume==0)
	{
		muted.classList.remove("fa-volume-mute");
		muted.classList.add("fa-volume-up");
		muted.style.fontSize="22px";
		muted.style.color="red";
	}
}