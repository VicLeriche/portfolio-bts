const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
    header.ClassList.toggle("sticky",window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclike = () => {
    menu.ClassList.toggle('bx-x');
    navlist.ClassList.toggle('open');

}

window.onscroll = () => {
    menu.ClassList.remove('bx-x');
    navlist.ClassList.remove('open');
}