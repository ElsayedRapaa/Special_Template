// Thes Is Selectors All Elelemnts
let the_Navbar = document.querySelector('.header .navbar'),
    the_Container = document.querySelector('.container');

// Padding Top Body
document.body.style.paddingTop = the_Navbar.clientHeight + 'px';

// Reset The Width Navbar and Padding
the_Navbar.style.paddingRight = (`${(window.innerWidth - the_Container.clientWidth) / 2}px`);

// On Resize Window
window.onresize = function() {
    // Reset the Width navbar and Padding
    the_Navbar.style.paddingLeft = (`${(window.innerWidth - the_Container.clientWidth) / 2}px`);
};
console.log((window.innerWidth - the_Container.clientWidth) / 2);