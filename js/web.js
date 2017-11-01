var search = document.querySelector('.search');
search.addEventListener('click', function () {
    search.classList.toggle('active')
});

var favorite = document.querySelector('article header button');
favorite.addEventListener('click', function () {
    favorite.classList.toggle('active')
});

var downloads = document.querySelectorAll('.downloaden');
for (var i = 0; i < downloads.length; i++) {
    downloads[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })
}