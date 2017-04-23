$.scrollspy = function (navSelector, conSelector, speed, top) {

    var $navItems = $(navSelector),
        conItemsNum = $navItems.length,
        conItemsTop = [],
        activeNum = 0,
        $win = $(window),
        speed = speed || 50,
        scrollTop = $win.scrollTop();

    //初始化
    (function () {
        for (var i = 0; i < conItemsNum; i++) {
            if($($($navItems.eq(i).attr('href'))).length){
                var ctop = $($navItems.eq(i).attr('href')).offset().top;
                conItemsTop.push(ctop);
            }
        }
        getActiveNum(scrollTop);
        navMoveTo(activeNum);
    })();

    function getActiveNum(t) {
        for (var i = 0; i < conItemsNum; i++) {
            if (t < conItemsTop[i]-top) {
                activeNum = Math.min(conItemsNum, Math.max(i - 1, 0));
                break;
            }
            if (t >= conItemsTop[conItemsNum - 1]-top) {
                activeNum = conItemsNum - 1;
                break;
            }
        }
    }

    function conScrollTo(n) {
        $('body,html').animate({'scrollTop': conItemsTop[n]-top}, speed);
    }

    function navMoveTo(n) {
        //这里添加处理nav代码
        $navItems.parent().removeClass('active').eq(n).addClass('active');
    }

    $win.scroll(function () {
        scrollTop = $(this).scrollTop()+top;
        getActiveNum(scrollTop);
        navMoveTo(activeNum);
    });

    $navItems.click(function (e) {
        e.preventDefault();
        activeNum = $navItems.index(this);
        conScrollTo(activeNum);
        //navMoveTo(activeNum);
    });
}