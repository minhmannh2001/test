document.addEventListener('DOMContentLoaded', function(event) {
    if (window.innerWidth >= 768) {
        document.querySelector(".navbar-nav").classList.add("font-size-30");
        document.querySelector(".navbar-collapse").classList.add("h-100");
        document.querySelector(".navbar-collapse").classList.add("d-flex");
        document.querySelector(".navbar-collapse").classList.add("align-items-end");
        document.querySelector(".navbar-collapse").classList.add("justify-content-end");
    } else {
        if (window.innerWidth <= 576) {
            document.querySelector(".top1-reading-category").childNodes[3].width = 20;
            document.querySelector(".top1-reading-category").childNodes[3].height = 20;
            document.querySelector(".top1-reading-category-link").classList.add("top1-reading-category-link-responsive");
            document.querySelector(".top1-reading-author-link").classList.add("top1-reading-author-link-responsive");
            document.querySelector(".top1-reading-headline-link").classList.add("top1-reading-headline-link-responsive");
            document.querySelector(".top1-reading-background").classList.add("top1-reading-responsive");
            document.querySelector(".top1-reading-content").classList.replace("px-5", "px-4");
            document.querySelector(".top1-reading-content").classList.replace("pt-4", "pt-3");
            document.querySelector(".top1-reading-content").classList.replace("pb-5", "pb-4");
            const topReadingContents = document.querySelectorAll(".top-reading-content");
            for (var i of topReadingContents) {
                i.classList.add("top-reading-content-responsive");
            }
        }
        document.querySelector(".navbar-nav").classList.add("ml-auto");
    }
    
});



