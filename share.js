function openMobileMenu()
{
    mobileNavButton.classList.toggle("openMenu");
}

function moveBannerTitle()
{
    bannerTitle.classList.add("move-banner-title"); 
    moveBannerContent(); 
    showRegisterButton();  
}

function moveBannerContent()
{
    bannerContent.classList.add("move-banner-content");
}
function showRegisterButton()
{
    registerButton.classList.add("showRegisterButton");
}
