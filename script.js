function showAndHide(inv) {
    var innerStyle = document.getElementById(inv);
    console.log(innerStyle);
    if (innerStyle.style.display === 'none') {
        innerStyle.style.display = 'block';
    } else {
        innerStyle.style.display = 'none';
    }
}