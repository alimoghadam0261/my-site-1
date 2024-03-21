var $ = document

var resulth = $.querySelector('.resulth1');
var resultp = $.querySelector('.resultp');
var enter = $.querySelector('.btn-enter')

enter.addEventListener('click', () => {

    var age = $.querySelector('.Age').value;
    var weight = $.querySelector('.Weight').value;
    var Height = $.querySelector('.Height').value;



    var h = Height * Height;


    var result = weight / h;

    $.getElementById('resulth5').innerHTML = "Your Bmi Number = "+" "+ result;
    if (0 < result < 18.5) {
        $.getElementById('reulth3').innerHTML  = "Your Are Thin";
        $.getElementById('resultp').innerHTML  =" you are underweight according to the BMA formula, please consult your nutritionist "
    }
    if (18.5< result < 25.5) {
        $.getElementById('reulth3').innerHTML  = "Your Are normal";
        $.getElementById('resultp').innerHTML  =  "You have a relatively ideal weight and do not need to see a doctor "


    }
    if (26 < result){
        $.getElementById('reulth3').innerHTML  = "Your Are fat";
        $.getElementById('resultp').innerHTML  = "You are overweight, which causes various diseases, so be sure to see a doctor "

        }



    console.log(age + "-" + result)

})


