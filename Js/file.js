// Thes Is Selectors All Elelemnts
let the_Header = document.querySelector('.header'),
    the_Navbar = document.querySelector('.header .navbar'),
    the_Container = document.querySelector('.container'),
    all_Links = document.querySelectorAll('.links li a'),
    open_Menu = document.querySelector('.open-mega'),
    mega_Menu = document.querySelector('.link-mega');

let back_List

// Padding Top Body
document.body.style.paddingTop = the_Navbar.clientHeight + 'px';

// Reset The Width Navbar and Padding
the_Navbar.style.paddingLeft = `${(window.innerWidth - the_Container.clientWidth) / 2}px`;
the_Navbar.style.paddingRight = `${(window.innerWidth - the_Container.clientWidth) / 2}px`;

// On Resize Window
window.onresize = function() {
    // Reset the Width navbar and Padding
    the_Navbar.style.paddingLeft = `${(window.innerWidth - the_Container.clientWidth) / 2}px`;
    the_Navbar.style.paddingRight = `${(window.innerWidth - the_Container.clientWidth) / 2}px`;
    // Add Setting Header
    the_Header.style.height = `${(window.innerHeight - the_Navbar.clientHeight)}px`;
};

// Add Setting Header
the_Header.style.height = `${(window.innerHeight - the_Navbar.clientHeight)}px`;

// Stop Default Links
all_Links.forEach((link) => {

    link.addEventListener('click', function(e) {
        // Stop Prevent Default Links
        e.preventDefault();

        // Open Mega Menu
        if (link.classList.contains('open-mega')) {
            // Stop Propagation
            e.stopPropagation();
            // Toggle Class Show In Mega Menu
            mega_Menu.classList.toggle('show');

        };
    });
});

// Click in Window Close Mega Menu
window.onclick = function() {
    if (mega_Menu.classList.contains('show')) {
        mega_Menu.classList.remove('show');
    };
};