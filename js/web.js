var search = document.querySelector('.search');
search.addEventListener('click', function () {
    search.classList.toggle('active')
});

var number = 0;
var favorite = document.querySelectorAll('article header button');
for (var i = 0; i < favorite.length; i++) {
    favorite[i].addEventListener('click', function () {
        if (this.classList.toggle('button.active')) {
            number++;
        } else {
            number--;
        }
        document.querySelector('header div').innerHTML = number;
        this.classList.toggle('active');
    })
}

var downloads = document.querySelectorAll('.downloaden');
for (var i = 0; i < downloads.length; i++) {
    downloads[i].addEventListener('click', function () {
        this.classList.toggle('active')
    });
}