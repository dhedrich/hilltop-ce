$(window).load(function () {
    $("#s1").endlessScroll({
        width: '100%',
        height: '100px',
        steps: -2,
        speed: 40,
        mousestop: true
    });
});