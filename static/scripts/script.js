document.addEventListener('DOMContentLoaded', function(){
    addClicks();
});

function addClicks(){

    
    images = document.querySelectorAll('.image')
    images.forEach(function(image) {
        image.addEventListener('click', function(e){
        
            document.addEventListener('click', function( event ) {
            if (image !== event.target && !image.contains(event.target)) {    
                console.log('clicking outside the div');
                image.classList.remove("image--clicked")
                image.width = 400
            }
            });

            if (image.classList.contains("image--clicked")) {
                console.log("unclick")
                image.classList.remove("image--clicked")
                image.width = 400
            }
            else{
                image.width = 600
                image.classList.add("image--clicked")
                console.log(`clicked on ${image.getBoundingClientRect().width} ${image.getBoundingClientRect().height}`)
                screenWidth = window.innerWidth;
                screenHeight = window.innerHeight;
                imgWidth = image.getBoundingClientRect().width
                imgHeight = image.getBoundingClientRect().height
                image.style.left = (imgWidth - imgWidth/2) + "px"
            }
        })
    });

}
