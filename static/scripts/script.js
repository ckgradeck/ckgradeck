document.addEventListener('DOMContentLoaded', function(){
    addClicks();
});

function addClicks(){

    const gallery = document.querySelector('.gallery-grid')
    const images = document.querySelectorAll('.image')
    images.forEach(function(image) {
        image.addEventListener('click', function(event){
        
            //code to remove the image if click outside
            const openPicture = document.querySelector(".image--clicked");

            
            document.addEventListener('click', function(event){
                console.log(event)
                if (image !== event.target && !image.contains(event.target)) {    
                    console.log('clicking outside the div ');
                    console.log(`${event.target.classList}`)
                    
                    image.classList.remove("opened")
                    openPicture.remove();
                    return;

                }
            });
            

                //code to remove the image if clicked inside. possibly redundant
            if(image.classList.contains("opened")){
                console.log("not opened")
            }
            else{
                //CODE TO MAKE THE IMAGE LARGER WHEN CLICKED ON IT
                screenWidth = window.innerWidth;
                screenHeight = window.innerHeight;
                imgWidth = image.getBoundingClientRect().width
                imgHeight = image.getBoundingClientRect().height
                
                const tempPicture = document.createElement('img');
                tempPicture.classList.add("image--clicked")
                image.classList.add("opened")

                tempPicture.src = image.src;
                tempPicture.width = 400;
                tempPicture.style.left = (screenWidth/2 - imgWidth/2) + "px"
                tempPicture.style.top = (screenHeight/2 - imgHeight/2) + "px"
                gallery.appendChild(tempPicture);
            }
                    
                    
                
        });
    });

}
