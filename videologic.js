var newVideo=[
	{
		video:"Video",
		source:"Sample Video/video.mp4"
	}
];

var pbutton=document.querySelector("#play"),
muted=document.getElementById("mute"),
video=document.querySelector(".video"),
res=document.querySelector("#reset"),
fullVideo=document.querySelector(".c-video"),
back5=document.getElementById("back"),
for5=document.getElementById("for"),
prog=document.querySelector(".progress"),
fullScreen=document.querySelector("#fullscreen"),
seekSlider=document.getElementById("seekslider"),
seekSlide=document.getElementById("red"),
currentTi=document.getElementById("currenttime"),
durationTi=document.getElementById("durationtime"),
soundSlider=document.getElementById("soundslider"),
li=document.querySelectorAll("li"),
playlist=document.querySelector("ul");
m=true,
isFullScreen=false,
fileInput=document.querySelector("input[type=file]"),
uploadedVideo={
	video:String,
	source:String
},
i=0;
	
pbutton.addEventListener("click",playpause);
muted.addEventListener("click",volumeVideo);
res.addEventListener("click",restart1);
back5.addEventListener("click",backBy5);
for5.addEventListener("click",forwardBy5);
fullScreen.addEventListener("click",toggleFullScreen);
seekSlider.addEventListener("change",vidSeek);
video.addEventListener("timeupdate",updateSeek);
soundSlider.addEventListener("change",soundSeek);
fileInput.addEventListener("change",playFile);
video.addEventListener("ended",end);
	
document.addEventListener('keydown', e => {
	switch (e.keyCode) {
		case 32:
			video.paused ? video.play() : video.pause();
			break;
		case 37: 
			video.currentTime += -5;
			break;
		case 39:
			video.currentTime += 5;
		break;
	}
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
function playFile()
{
	var listItem = document.createElement('li');
	playlist.appendChild(listItem);
	var file=this.files[0];
	listItem.objUrl = URL.createObjectURL(file);
	listItem.textContent = file.name;
	listItem.addEventListener('click', function (e) {
			video.setAttribute("src", this.objUrl);
	});
	playlist.appendChild(listItem);
	uploadedVideo.source = URL.createObjectURL(file);
	uploadedVideo.video=file.name;
	newVideo.push(uploadedVideo);
} 

function nextVideo()
{
	if(i<newVideo.length)
	{
		video.pause();
		video.setAttribute("src",newVideo[i++]["source"]);
		video.currentTime=0.0;
		var nt=video.currentTime*(100/video.duration);
		seekSlider.value=nt;
		seekSlide.style.width = nt +"%";
		video.load();
		video.pause();
		pbutton.classList.add("fa-google-play");
		pbutton.classList.remove("fa-pause");
		pbutton.style.fontSize="22px";
	}
	else
	{
		i=0;
	}
}


function end()
{
	video.currentTime=0.0;
	pbutton.classList.add("fa-google-play");
	pbutton.classList.remove("fa-pause");
	pbutton.style.fontSize="22px";
	alert("Video ended");
}

