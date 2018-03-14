var btns = document.getElementsByClassName('btn-entrance__link');
var log = document.getElementsByClassName('form-entrance__login');
var welc = document.getElementsByClassName('form-entrance__welcome');
var main = document.getElementsByClassName('btn-form__link-login');
btns[0].onclick = function() {
    log[0].classList.add("form-entrance_active");
    welc[0].classList.remove("form-entrance_active");
}
main[1].onclick = function() {
    log[0].classList.remove("form-entrance_active");
    welc[0].classList.add("form-entrance_active");
}