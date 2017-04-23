/**
 * Created by good on 2017/4/23.
 */
$.fn.affix = function (top,position) {
    var $this = $(this),
        $win = $(window),
        winWidth = $win.width(),
        targetWidth=$this.outerWidth(),
        scrollTop = $win.scrollTop(),
        offsetLeft = $this.offset().left,
        offsetTop = $this.offset().top,
        offsetRight = $win.width()-$this.outerWidth()-offsetLeft,
        distance=(position==='left'?offsetLeft:offsetRight),
        top = top || offsetTop,
        position = position || 'left';

    //初始化
    fix();

    function fix() {
        $this.css({position: 'fixed', top: top + 'px', 'z-index': 999, 'width':targetWidth + 'px' }).css(position,distance + 'px');
    }

    /*$win.scroll(function () {
     scrollTop = $(this).scrollTop();
     fix();
     });*/

    $win.resize(function () {
        $this.removeAttr('style');
        scrollTop = $win.scrollTop(),
            winWidth = $win.width(),
            targetWidth=$this.outerWidth(),
            offsetLeft = $this.offset().left,
            offsetRight = $win.width()-$this.outerWidth()-offsetLeft,
            offsetTop = $this.offset().top,
            distance=(position==='left'?offsetLeft:offsetRight);
        fix();
    });

}