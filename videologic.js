var newVideo=[
	{
		video: "Video",
		source: "Sample Video/video.mp4"
	},
	{
		video: "Video 2",
		source: "Sample Video/Video2.mp4"
	},
	{
		video: "Singham",
		source: "Sample Video/Singham.mp4"
	},
	{
		video: "Mr.Bean",
		source: "Sample Video/Mr. Bean.mp4"
	},
	{
		video: "Father on Holidays",
		source: "Sample Video/Father on Holidays"
	}
];
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
var next=document.getElementById("changeVideo");
var v1=document.querySelector(".v1");
var v2=document.querySelector(".v2");
var v3=document.querySelector(".v3");
var v4=document.querySelector(".v4");
var v5=document.querySelector(".v5");
var m=true;
var isFullScreen=false;
var i=1;

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
next.addEventListener("click",nextVideo);
v1.addEventListener("click",function()
{
	var source="D:/udemy/video/Sample Video/"+v1.innerHTML;
	video.pause();
	video.setAttribute("src",source);
	video.load();
	video.play();
	pbutton.classList.remove("fa-google-play");
	pbutton.classList.add("fa-pause");
	pbutton.style.fontSize="22px";
});
v2.addEventListener("click",function()
{
	var source="D:/udemy/video/Sample Video/"+v2.innerHTML;
	video.pause();
	video.setAttribute("src",source);
	video.load();
	video.play();
	pbutton.classList.remove("fa-google-play");
	pbutton.classList.add("fa-pause");
	pbutton.style.fontSize="22px";
});
v3.addEventListener("click",function()
{
	var source="D:/udemy/video/Sample Video/"+v3.innerHTML;
	video.pause();
	video.setAttribute("src",source);
	video.load();
	video.play();
	pbutton.classList.remove("fa-google-play");
	pbutton.classList.add("fa-pause");
	pbutton.style.fontSize="22px";
});
v4.addEventListener("click",function()
{
	var source="D:/udemy/video/Sample Video/"+v4 .innerHTML;
	video.pause();
	video.setAttribute("src",source);
	video.load();
	video.play();
	pbutton.classList.remove("fa-google-play");
	pbutton.classList.add("fa-pause");
	pbutton.style.fontSize="22px";
});
v5.addEventListener("click",function()
{
	var source="D:/udemy/video/Sample Video/"+v5 .innerHTML;
	video.pause();
	video.setAttribute("src",source);
	video.load();
	video.play();
	pbutton.classList.remove("fa-google-play");
	pbutton.classList.add("fa-pause");
	pbutton.style.fontSize="22px";
});


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
	else
	{
		muted.classList.add("fa-volume-mute");
		muted.classList.remove("fa-volume-up");
		muted.style.fontSize="22px";
		muted.style.color="red";
	}
}

function nextVideo()
{
	if(i<=newVideo.length-1)
	{
		video.pause();
		video.setAttribute("src",newVideo[i++]["source"]);
		video.load();
		video.play();
		pbutton.classList.remove("fa-google-play");
		pbutton.classList.add("fa-pause");
		pbutton.style.fontSize="22px";
	}
	else
	{
		alert("Playlist ended");
	}
}
