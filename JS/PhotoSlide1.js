
for(var i= 0; i<document.getElementsByClassName("PhotoSlide")[0].getElementsByTagName("div")[0].getElementsByTagName("img").length;i++){
document.getElementsByClassName("PhotoSlide")[0].getElementsByTagName("div")[0].getElementsByTagName("img")[i].onclick=function (ImageTag){

 var SmallSrc=this.src
  var BigSrc=SmallSrc.replace("small","big")
  document.getElementsByClassName("PhotoSlide")[0].getElementsByTagName("div")[1].getElementsByTagName("img")[0].src=BigSrc
}
}

He,,o Wor,d!