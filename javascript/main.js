let heading = document.getElementById("heading");
let hamBurgerCloseMenu = document.getElementById("hamBurgerCloseMenu");
let hamBurgerOpenMenu = document.getElementById("hamBurgerOpenMenu");
let navBar = document.querySelector(".navBar");
let aboutExtraButton = document.getElementById("aboutExtraButton");
let extraClose = document.querySelector(".extraClose");
let minusCloseAbout = document.querySelector(".minusCloseAbout");
let aboutMenu = document.querySelector(".aboutMenu");
let extraBlog = document.querySelector(".extraBlog");
let extraBlogOpen = document.querySelector(".extraBlogOpen");
let blogPostMenu = document.querySelector(".blogPostMenu");
let blogExtraButton = document.getElementById("blogExtraButton")


heading.onclick = function(){
    hamBurgerCloseMenu.classList.toggle("closeHamMenu");
    hamBurgerOpenMenu.classList.toggle("openHamMenu");
    navBar.classList.toggle("navBarOpen");

    heading.addEventListener('click'  ,() =>{
        extraClose.classList.remove("extraCloseJs");
            minusCloseAbout.classList.remove("minusOpen");
            aboutMenu.classList.remove("aboutMenuOpen");
            extraBlog.classList.remove("extraCloseJs");
            extraBlogOpen.classList.remove("minusOpen");
            blogPostMenu.classList.remove("aboutMenuOpen");

          

        
    })

    aboutExtraButton.onclick = function(){
        extraClose.classList.toggle("extraCloseJs");
        minusCloseAbout.classList.toggle("minusOpen");
        aboutMenu.classList.toggle("aboutMenuOpen");


    }
    blogExtraButton.onclick = function(){
        extraBlog.classList.toggle("extraCloseJs");
        extraBlogOpen.classList.toggle("minusOpen");
        blogPostMenu.classList.toggle("aboutMenuOpen");
    }

    document.querySelectorAll('.navBar a').forEach(link =>{
        link.addEventListener('click' ,() =>{
            hamBurgerCloseMenu.classList.remove("closeHamMenu");
            hamBurgerOpenMenu.classList.remove("openHamMenu");
            navBar.classList.remove("navBarOpen");
            extraClose.classList.remove("extraCloseJs");
            minusCloseAbout.classList.remove("minusOpen");
            aboutMenu.classList.remove("aboutMenuOpen");
            extraBlog.classList.remove("extraCloseJs");
            extraBlogOpen.classList.remove("minusOpen");
            blogPostMenu.classList.remove("aboutMenuOpen");



        })
    })

   

}