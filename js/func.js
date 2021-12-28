var btn1 = document.querySelector('#btn1');
var toggle = false;
function chngimg(){
    if (toggle === true)  {
        document.getElementById('dec1').src  = 'images/smile.png';
        document.getElementById('btn1').className  = 'far fa-smile-beam';

    } else {
       document.getElementById('dec1').src = 'images/cry.jpg';
       document.getElementById('btn1').className  = 'far fa-sad-tear';

    }
    toggle = !toggle; 
}