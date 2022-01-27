window.addEventListener('load', function () {
    var navDispaly = this.document.querySelector('.nav-dispaly');
    var nav = this.document.querySelector('.nav');
    var navItemLayer = this.document.querySelector('.nav-item-layer');
    var flag = false;
    var swiper = this.document.querySelector('.swiper-wrapper');
    navDispaly.addEventListener('touchstart', function () {
        if (flag) {
            navItemLayer.style.display = 'none';
            flag = false;
        } else {
            navItemLayer.style.display = 'block';
            flag = true;
        }
    })
    var navItem = this.document.querySelectorAll('.nav-item')
    for (let i = 0; i < navItem.length; i++) {
        navItem[i].addEventListener('touchstart', function () {
            for (let n = 0; n < navItem.length; n++) {
                navItem[n].className = 'nav-item';
            }
            this.className = 'nav-item nav-current';
        })
    }

    var swiperImg = swiper.children;
    var index = 1;
    var w = swiper.children[0].clientWidth;
    function tranaitionNone(translatex) {
        //去除运动
        swiper.style.transition = 'none';
        swiper.style.transform = 'translateX(' + translatex + 'px)';
    }
    function tranaitionStart(translatex) {
        //启动运动
        swiper.style.transform = 'translateX(' + translatex + 'px)';
        swiper.style.transition = 'all .3s';
    }
    var li = this.document.querySelectorAll('.swiper-list');
    //启动定时器
    var time = function () {
        index++;
        translatex = - index * w;
        // console.log(translatex);
        tranaitionStart(translatex);
        // console.log(index)
    };
    var li = this.document.querySelectorAll('.swiper-list');
    //设置无缝滚动
    swiper.addEventListener('transitionend', function () {
        if (index >= 3) {
            index = 1;
            translatex = - index * w;
            tranaitionNone(translatex);
        } else if (index < 1) {
            index = 2;
            translatex = - index * w;
            tranaitionNone(translatex);
        }
        //设置小圆圈
        for (var i = 0; i < li.length; i++) {
            li[i].className = 'swiper-list';
            li[index - 1].className = 'cur swiper-list';
        }
        // console.log(index);
    })
    var timer = this.setInterval(time, 2000);
    var moveX = 0;
    //tuoch事件
    //手指触摸清除定时器
    swiper.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX;
        clearInterval(timer);
    });
    swiper.addEventListener('touchmove', function (e) {
        moveX = e.targetTouches[0].pageX - startX;//手指移动的距离
        translatex = - index * w + moveX;
        tranaitionStart(translatex);
        e.preventDefault();
        flag = true;
        // console.log(11);
    })
    swiper.addEventListener('touchend', function () {
        if (flag) {
            if (Math.abs(moveX) > 50) {
                if (moveX > 0) {
                    index--;
                } else {
                    index++;
                }
                translatex = - index * w;
                tranaitionStart(translatex);
            } else {
                translatex = - index * w;
                swiper.style.transition = 'all .1s';
                swiper.style.transform = 'translateX(' + translatex + 'px)';
            }
            //开启定时器
            clearInterval(timer);
            timer = setInterval(time, 2000);
        }
    })
})