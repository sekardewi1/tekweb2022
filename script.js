const navbar = document.getElementsByTagName('nav')[0];
    window.addEventListener('scroll',function(){
        console.log(window.scrollY);
        if(window.scrollY > 0){

            navbar.classList.replace('bg-transparent','bg-light');
        }
        else if(window.scrollY<=0){
            navbar.classList.replace('bg-light','bg-transparent');
            
        }
    });


// const navtext = document.querySelector('.navbar-brand')
// window.addEventListener('scroll',function(){
//     if(window.scrollY > 0){
//         style.color = 'green'
//     }
//     else if(window.scrollY<=0){
//         navtext.classList.replace('text-light','text-color')
//     }
// });

