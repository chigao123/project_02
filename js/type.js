window.addEventListener('load', function () {
    var lis = document.querySelectorAll('#lis');
    var swiper = document.querySelector('.swiper-wrapper');
    var navItem = document.querySelectorAll('.nav-item');
    var categoryTitle = this.document.querySelectorAll('.category_title');
    var main = this.document.querySelectorAll('.mian');
    for (var i = 0; i < navItem.length; i++) {
        navItem[i].addEventListener('touchstart', function () {
            for (var n = 0; n < navItem.length; n++) { 
                navItem[n].className = 'nav-item';
            }
            this.className = 'nav-item cur';
        })
    }
    // console.log(lis.length);
    for (var i = 0; i < lis.length; i++) {
        lis[i].setAttribute('index', i);
        lis[i].addEventListener('touchstart', function () {
            for (var n = 0; n < lis.length; n++) {
                lis[n].className = '';
            }
            var index = this.getAttribute('index');
            console.log(index);
            this.className = 'list-style';
            swiper.style.transform = 'translateY(' + -560 * index + 'px)';
            swiper.style.transition = 'all .5s';
        })
    }
})