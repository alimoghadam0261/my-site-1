var $ = document;






var day3 = $.querySelector('#day3')


//--------------clock1
function time1(){
    var date = new Date();
    $.querySelector('.box-clock1').innerHTML = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

}
setInterval(time1,1000)



//---------------------clock2


function time2() {
    var date = new Date();
    $.querySelector('.clock2 h1').innerHTML = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

    var timee =date.toLocaleDateString();
    $.querySelector('.clock2 p').innerHTML = timee
}

setInterval(time2,1000)


//-------------clock3

function time3(){
    var date = new Date();
    $.querySelector('#h33').innerHTML = date.getHours();
    $.querySelector('#m3').innerHTML = date.getMinutes();
    $.querySelector('#mon3').innerHTML ="Month:"+ date.getMonth();
    $.querySelector('#s3').innerHTML = date.getSeconds();
    $.querySelector('#day3').innerHTML ="Day:"+  date.getDay();

}
setInterval(time3,1000)