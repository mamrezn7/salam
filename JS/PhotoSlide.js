function ShowBig(ImageTag){

 var SmallSrc=ImageTag.src
  var BigSrc=SmallSrc.replace("small","big")
  document.getElementsByClassName("PhotoSlide")[0].getElementsByTagName("div")[1].getElementsByTagName("img")[0].src=BigSrc
}