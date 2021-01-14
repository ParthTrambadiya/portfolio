const project_item = document.querySelector('.project-items');
const popup = document.querySelector(".popup-box")
const popupclosebtn = popup.querySelector(".popup-close-btn");
const popupiconbtn = popup.querySelector(".popup-close-icon");

$(document).ready(function() {
    $('.person_position').animatedHeadline({
        animationType: 'clip'
    });

    $("#lightgallery").lightGallery({
        selector: '.item',
        download: false,
        share: false
    });
});

project_item.addEventListener('click', function(e){
    if(e.target.tagName.toLowerCase() == 'button') {
        const item =e.target.parentElement;
        const h3 = item.querySelector("h3").innerHTML;
        const readMoreCont = item.querySelector(".read-more").innerHTML;
        popup.querySelector("h3").innerHTML = h3;
        popup.querySelector(".popup-body").innerHTML = readMoreCont;
        popupBox();
    }
});

popupclosebtn.addEventListener("click", popupBox);
popupiconbtn.addEventListener("click", popupBox);

popup.addEventListener("click", function(event){
    if(event.target == popup){
       popupBox();
    }
})

function popupBox(){
    popup.classList.toggle("open");
}