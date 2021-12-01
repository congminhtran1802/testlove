var s1 = document.querySelector('.show1')
var s2 = document.querySelector('.show2')
var s3 = document.querySelector('.show3')
var s4 = document.querySelector('.show4')
var linkfb = 'https://www.facebook.com/MinhDaiDe1'
const textconst = 'Yêu cần lý do không <3<3'
function show2() {
    s2.classList.toggle('toggle')
    s1.classList.toggle('toggle')
}
function show3() {
    s3.classList.toggle('toggle')
    s2.classList.toggle('toggle')
}
function show4() {
    s4.classList.toggle('toggle')
    s3.classList.toggle('toggle')
}
function moveButton() {
    var x = Math.random() * ($(window).width() - $('.no').width()) * 0.9 ;
    var y = Math.random() * ($(window).height() - $('.no').height()) * 0.9;
    var left = x + 'px';
    var top = y + 'px';
    $('.no').css("left", left);
    $('.no').css("top", top);
}
function textauto1() {
    var n = "";
    var text = " " + textconst;
    var a = Array.from(text);
    var textVal = $('.textauto').val() ? $('.textauto').val() : "";
    var count = textVal.length;
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            n = n + a[i];
            if (i == text.length + 1) {
                $('.textauto').val("");
                n = "";
                break;
            }
        }
    }
    $('.textauto').val(n);
    setTimeout("textauto1()", 1);
}
function fb() {
    window.location = linkfb;
}