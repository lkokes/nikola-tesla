<<<<<<< HEAD
function showAndHide(inv) {
    var innerStyle = document.getElementById(inv);
    console.log(innerStyle);
    if (innerStyle.style.display === 'none') {
        innerStyle.style.display = 'block';
    } else {
        innerStyle.style.display = 'none';
=======
let x = document.getElementById('invention1');
function ShowAndHide() {
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
>>>>>>> 3f6cd2a419e45264a18470f49260429af5a377ff
    }
}