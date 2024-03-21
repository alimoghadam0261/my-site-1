var $ = document;

var menu = $.querySelector('.menu')
var imglogo = $.querySelector('#img-logo')
var btnarrow = $.querySelector('.btnarrow')

window.addEventListener('scroll',()=>{
if(window.pageYOffset > 190){
    menu.style.height="70px"
    // menu.style.background="#dbeadb"
    menu.style.marginTop="-60px"
    menu.style.position="fixed"
    menu.style.borderBottom="1px solid #ccc"
    menu.style.boxShadow="5px 28px 17px -17px #ADADAD"
    menu.style.zIndex="5"
    menu.style.transition="all .3s"
    imglogo.style.width="30px"
    imglogo.style.height="30px"
    imglogo.style.marginTop="30px"
    btnarrow.style.display="block"
    btnarrow.style.transition="all .3s"



}
    if(window.pageYOffset <190){
        menu.style.height="100px"
        menu.style.boxShadow="0 0 0 0 #ffff"
        imglogo.style.width="95px"
        imglogo.style.height="95px"
        imglogo.style.marginTop="4px"
        menu.style.marginTop="0px"
        btnarrow.style.display="none"
    }


})
//---------remove icon
var remove= $.querySelector('.remove-icon')
var topinfo= $.querySelector('.topinfo')

remove.addEventListener('click',()=>{
    topinfo.style.display="none"
})

//-------------------------fullscreen


function full() {
    document.documentElement.requestFullscreen();
}
//--------------notification------------
Notification.requestPermission()
.then(function show(){
    var noti = new Notification('salam',{
        body:'salam test noti',
        icon:"./img/logo/logo.png"
    })
})
