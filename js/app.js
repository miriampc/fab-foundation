$(document).foundation()

var imgShow = document.getElementsByClassName("imgShow")[0];
var changesImg = document.getElementById("changesImg");

for(var i = 0; i < 4; i++){
	var imgContent = document.getElementsByClassName("imgContent")[i];
	var urlImg = "assets/img/wooden-teardrop-bg-s" + i +'.png';
	imgContent.addEventListener("click", function(e){
		if (e.target.tagName == "IMG") {
      imgShow.style.display = "block";
      console.log(e.target.src);
      changesImg.src = e.target.src;
		}
	})
}
