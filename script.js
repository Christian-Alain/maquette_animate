
// var petit = document.getElementsByClassName('petit_img');
// var moyen = document.getElementsByClassName('moyen_img');
// var grand = document.getElementsByClassName('grand_img');

var image = ['banner.png','make.jpg','images.jpg','photo.jpg','téléchargement.jpg','telephone.jpg'];
var slide = document.getElementById('right');
var i = 0;

slide.addEventListener('click', function changer(){
    changeSlider1();
    changeSlider2();
    changeSlider3();
})

function changeSlider1(){
    document.change1.src = image[i];

    if(i < image.length - 1){
        i++ ;
        // console.log(i);
    }
    else{
        i = 0 ;
    }
}
function changeSlider2(){
    document.change2.src = image[i];

    if(i < image.length - 1){
        i+=3 ;
    }
    else{
        i = 0 ;
    }
}
function changeSlider3(){
    document.change3.src = image[i];

    if(i < image.length - 1){
        i+=2 ;
    }
    else{
        i = 0 ;
    }
}