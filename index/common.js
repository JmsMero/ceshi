$(function() {

    /* 关闭导航 */
    function closeNav() {
        $('.page-container').addClass('nav-close').removeClass('nav-open');
    };
    /* 打开导航 */
    function openNav() {
        $('.page-container').addClass('nav-open').removeClass('nav-close');
    };
    window.closeNav = closeNav;
    window.openNav = openNav;

    /* 导航按钮 */
    $('#menuBtn').click(function(){
        if( $('.page-container').hasClass('nav-close')) {
            openNav();
        }else {
            closeNav();
        }
    });

    /* 屏幕大小适配 */
    function smallScreen() {
        if( $(window).width() <= 640 ) {
            $('.page-container').addClass('mobile').removeClass('pc');
        }else {
            $('.page-container').addClass('pc').removeClass('mobile');
        };
    };
    smallScreen();
    $(window).resize(function() {
        if ($(window).width() <= 640) {
            smallScreen();
        }else{
            smallScreen();
        };
    });

    /* 浏览器宽度小于1024 时，默认收起导航 */
    if ($(window).width() <= 1024) {
        closeNav();
    }
    $(window).resize(function() {
        if ($(window).width() <= 1024) {
            closeNav();
        }else{
            openNav();
        };
        custScroll();
    });
    $('.nav-mask').click(function(){
        closeNav();
    });

    /* PC端用滚动条 */
    function custScroll(){
        if($(window).width() > 640) {
            $('.page-content').niceScroll({
                cursorcolor:"#414453",
                cursorwidth: '9px',
                cursorborderradius: '10px',
                background: '#FFFFFF',
                spacebarenabled:false,
                cursorborder: '0',
                zindex: "auto",
            });
            $('.page-content').getNiceScroll().resize();
        };
    };
    custScroll();

    /* 日期选择插件配置 */
    laydate.render({
        elem: '#start_date',
        theme: '#CFA457'
    });
    laydate.render({
        elem: '#end_date',
        theme: '#CFA457'
    });

});