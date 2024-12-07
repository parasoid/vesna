document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("show-menu");
    console.log(1)
});

function scrollToProduct() {
    document.getElementById("product").scrollIntoView({behavior: "smooth"});
}

function scrollToContact() {
    document.getElementById("footer").scrollIntoView({behavior: "smooth"});
}

function scrollToLogo() {
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
}

function scrollToAbout() {
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
}