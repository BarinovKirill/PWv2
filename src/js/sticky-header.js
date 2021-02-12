
if(window.innerWidth > 990){
    window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    })
}
window.addEventListener('resize', function(){
    if(window.innerWidth > 990){
        window.addEventListener("scroll", function(){
            var header = document.querySelector("header");
            header.classList.toggle("sticky", window.scrollY > 0);
        })
    }
});
