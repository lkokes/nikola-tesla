function showAndHide(inv) {
    var innerStyle = document.getElementById(inv);
    console.log(innerStyle);
    if (innerStyle.style.display === 'none') {
        innerStyle.style.display = 'block';
    } else {
        innerStyle.style.display = 'none';
    }
}

var backToTop = $('<a>', {
    href:'#',
    class: 'back-to-top',
    html: '<i class="fas fa-chevron-up fa-2x"></i>'
});

backToTop
.hide()
.appendTo('body')
.on('click', function(){
    $('body').animate({scrollTop: 0});
});

var win = $(window);
win.on('scroll', function(){
    if (win.scrollTop() >=500) backToTop.fadeIn();
    else backToTop.hide();
})