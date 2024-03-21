//===========================to do list=================================================================
var $ = document

var todolist =[];

var date = new Date();
var time =date.toLocaleDateString()


var todoinput =  $.querySelector('.todo-input');
var todoEnter =  $.querySelector('.btnenter')
var todoDanger =  $.querySelector('.btndanger')
var type =  $.querySelector('.type')
var typee =  $.querySelector('.typp')


var colors = $.querySelectorAll('.todocolor')
colors.forEach(color =>{
    color.addEventListener('click',()=>{
        var maincolor = color.style.backgroundColor
        todoinput.style.backgroundColor =maincolor;
    })
})

var count = 1



 todoEnter.addEventListener('click',()=>{
    var todoinput =  $.querySelector('.todo-input');
    var input = todoinput.value;
   var todoObj={
       time:time,
       input:input
   }
     todolist.push(todoObj)
     localStorage.setItem('todolist',JSON.stringify(todolist))


if(input ==''){
    alert('please type every thing')
    return false;
}
else {
  var colorss =todoinput.style.backgroundColor;

  var list = $.createElement('div')
 list.setAttribute('class','listt')
  list.setAttribute('id','note'+ count);

    var bottom = $.createElement('i')
    bottom.setAttribute('class','fa fa-trash');
  list.appendChild(bottom)


    list.style.backgroundColor = colorss

    var textinput =$.createElement('p')
    textinput.setAttribute('class','todo-p')
    textinput.innerHTML =time+"<br>"+input
    list.appendChild(textinput)

    typee.appendChild(list);
    todoinput.value = ''
    todoinput.style.backgroundColor = '#fff'
   count++


}

     bottom.addEventListener('click',()=>{
$.getElementById(list.id).remove();
     })

})
todoDanger.addEventListener('click',()=>{
    todoinput.value = ''
    todoinput.style.backgroundColor = '#fff'
})




