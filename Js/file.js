// Selector Settings Elements
let the_Settings = document.querySelector('.settings'),
    open_Settings = document.querySelector('.settings .open-set'),
    open_Icon = document.querySelector('.settings .open-set i'),
    the_Colors = document.querySelectorAll('.color-option ul li'),
    back_Controls = document.querySelectorAll('.back-control span');

// The List Landing Background
let back_List = ['../Img/head_1.jpeg', '../Img/head_2.jpeg', '../Img/head_3.jpeg', '../Img/head_4.jpeg', '../Img/head_5.jpeg', '../Img/head_6.jpeg', '../Img/head_7.jpeg', '../Img/head_8.jpeg', '../Img/head_9.jpeg', '../Img/head_10.jpeg'],
    back_Interval,
    background_Options = false;

// Selector Header Elelemnts
let the_Header = document.querySelector('.header'),
    the_Navbar = document.querySelector('.header .navbar'),
    the_Container = document.querySelector('.container'),
    all_Links = document.querySelectorAll('.links li a'),
    open_Menu = document.querySelector('.open-mega'),
    mega_Menu = document.querySelector('.link-mega'),
    slider_Header = document.querySelectorAll('.slider-header .slide'),
    slider_Next = document.querySelector('.header .arrow .right'),
    slider_Prev = document.querySelector('.header .arrow .left'),
    slider_P = document.querySelectorAll('.slide p');

// Selector The Articles Elements
let the_Articles = document.querySelector('.articles'),
    art_Cont = document.querySelector('.articles .container'),
    art_Read_More = document.querySelectorAll('.articles .box .front .read-more'),
    back_Read_More = document.querySelectorAll('.articles .box .back');

// Selector The Gallary Elements
let the_Gallary = document.querySelector('.gallary'),
    the_Cover = document.querySelector('.gallary .cover'),
    cover_Img = document.querySelector('.gallary .cover img'),
    slide_Img = document.querySelector('.gallary .img'),
    gallary_Img = document.querySelectorAll('.gallary .img img'),
    prev_Img = document.querySelector('.gallary .arrow .left'),
    next_Img = document.querySelector('.gallary .arrow .right');

// Stop Propagation Settings
the_Settings.addEventListener('click', function(e) {
    e.stopPropagation();
});

// Open Settings
open_Settings.onclick = function() {
    open_Icon.classList.toggle('fa-spin');
    the_Settings.classList.toggle('open');
};

// Get The Color From Local Storage
let option_Color = localStorage.getItem('option-color'),
    option_Back_Color = localStorage.getItem('option-back-color'),
    option_Color_Alt = localStorage.getItem('option-color-alt'),
    option_Back_Rgba = localStorage.getItem('option-back-rgba');

// Check Local Storage For Color
if (option_Color !== null) {

    // For Each the Color List
    the_Colors.forEach((color) => {

        // Set Main Color In :Root In Style Css File
        document.documentElement.style.setProperty('--main-color', option_Color);
        document.documentElement.style.setProperty('--main-back-color', option_Back_Color);
        document.documentElement.style.setProperty('--main-color-alt', option_Color_Alt);
        document.documentElement.style.setProperty('--main-back-rgba', option_Back_Rgba);

        // Remove Class Active
        color.classList.remove('active');

        // Data Color Equal Option COlor In Local Storage
        if (color.dataset.color === option_Color && color.dataset.color === option_Back_Color && color.dataset.coloralt === option_Color_Alt && color.dataset.backrgba === option_Back_Rgba) {

            // Add Class Active In Element 
            color.classList.add('active');

        };
    });
};

// Get The Control Background Landing From Lockal Storage
let option_Background = localStorage.getItem('option-background');

// Check Local Storage For Background Landing
if (option_Background !== null) {

    // Remove Class Active
    back_Controls.forEach((btn) => {
        btn.classList.remove('active');
    });

    // Check Local Storage True Or False
    if (option_Background === 'yes') {
        background_Options = true;
        check_Background(the_Header, back_List);
    } else {
        background_Options = false;
        clearInterval(back_Interval);
    };

    // Check Click Yes Btns
    if (option_Background === 'yes') {
        document.querySelector('.settings .back-control .yes').classList.add('active');
    } else {
        document.querySelector('.settings .back-control .no').classList.add('active');
    };
};

// Git The Colors 
the_Colors.forEach((color) => {

    // Get The Background List Color From Data Color
    color.style.backgroundColor = color.dataset.color;

    // Click In One Color From List
    color.addEventListener('click', function(e) {

        // Set The Color In Local Storage
        localStorage.setItem('option-color', e.target.dataset.color);
        localStorage.setItem('option-back-color', e.target.dataset.color);
        localStorage.setItem('option-color-alt', e.target.dataset.coloralt);
        localStorage.setItem('option-back-rgba', e.target.dataset.backrgba);

        // Remove Class Active From All List Color
        the_Colors.forEach((co) => {
            co.classList.remove('active');
        });

        // Add Class Active In Target Color
        e.target.classList.add('active');

        // Set The Color In Style Css File :Root Form Color List
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        document.documentElement.style.setProperty('--main-back-color', e.target.dataset.color);
        document.documentElement.style.setProperty('--main-color-alt', e.target.dataset.coloralt);
        document.documentElement.style.setProperty('--main-back-rgba', e.target.dataset.backrgba);

    });
});

// Check The Background Img
function check_Background(img, list) {

    // Set Interval Change Background Landing After a few Seconds
    back_Interval = setInterval(() => {

        // Random Number From List
        let the_Random = Math.floor(Math.random() * list.length),
            get_Src = list[the_Random];

        // Change The Background Landing
        img.style.backgroundImage = `url(${get_Src})`;

    }, 5000);
};

// Background Controls
back_Controls.forEach((btn) => {

    // Click In Btns
    btn.addEventListener('click', function(e) {

        // Remove Class Active
        back_Controls.forEach((btn2) => {
            btn2.classList.remove('active');
        });

        // Add Class Active in Target Btn
        e.target.classList.add('active');

        // Click Btn Yes
        if (e.target.dataset.backcontrol === 'yes') {

            // Change The Background Img
            background_Options = true;
            check_Background(the_Header, back_List);
            localStorage.setItem('option-background', e.target.dataset.backcontrol);
        } else {

            // Stop Background Img
            background_Options = false;
            clearInterval(back_Interval);
            localStorage.setItem('option-background', e.target.dataset.backcontrol);
        };

    });
});

// Padding Top Body
document.body.style.paddingTop = the_Navbar.clientHeight + 'px';

// Reset The Width Navbar and Padding
the_Navbar.style.paddingLeft = `${(window.innerWidth - the_Container.clientWidth) / 2 + 55}px`;
the_Navbar.style.paddingRight = `${(window.innerWidth - the_Container.clientWidth) / 2 + 55}px`;

// Reset The Width Navbar and Padding
if (window.innerWidth < 500) {
    the_Navbar.style.paddingLeft = `${(window.innerWidth - the_Container.clientWidth) / 2}px`;
    the_Navbar.style.paddingRight = `${(window.innerWidth - the_Container.clientWidth) / 2}px`;
};

// On Resize Window
window.onresize = function() {
    // Padding Top Body
    document.body.style.paddingTop = the_Navbar.clientHeight + 'px';

    // Reset the Width navbar and Padding
    the_Navbar.style.paddingLeft = `${(window.innerWidth - the_Container.clientWidth) / 2 + 55}px`;
    the_Navbar.style.paddingRight = `${(window.innerWidth - the_Container.clientWidth) / 2 + 55}px`;

    // Reset The Width Navbar and Padding
    if (window.innerWidth < 500) {
        the_Navbar.style.paddingLeft = `${(window.innerWidth - the_Container.clientWidth) / 2}px`;
        the_Navbar.style.paddingRight = `${(window.innerWidth - the_Container.clientWidth) / 2}px`;
    };

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
    // Check Mega Menu
    if (mega_Menu.classList.contains('show')) {
        mega_Menu.classList.remove('show');
    };

    // Check Settings Option
    if (the_Settings.classList.contains('open')) {
        open_Settings.click();
    };

};

// Slider Header Index
let index = 0;

// Start Slider Working
function next() {

    slider_Header[index].classList.remove('active');
    slider_Header[index].classList.remove('left');
    index = [index + 1] % slider_Header.length;
    slider_Header[index].classList.add('active');
    slider_Header[index].classList.add('right');

};

function prev() {
    slider_Header[index].classList.remove('active');
    slider_Header[index].classList.remove('right');
    index = [index - 1 + slider_Header.length] % slider_Header.length;
    slider_Header[index].classList.add('active');
    slider_Header[index].classList.add('left');
};

// Check Arrow
slider_Next.onclick = next;
slider_Prev.onclick = prev;

// Read More For Each
art_Read_More.forEach((arrow) => {

    // Click In The Read More
    arrow.addEventListener('click', function(e) {

        // The Back For Each
        back_Read_More.forEach((back) => {

            // Info Is Visibile
            if (back.classList.contains(e.target.dataset.readmore)) {
                back.style.left = '0';
            };

            // The Close Icon
            let close = document.querySelectorAll('.articles .box .back > i');

            // Close The Back Info Read More
            close.forEach((close) => {
                close.addEventListener('click', function(e) {
                    e.target.parentNode.style.left = '-100%';
                });
            });
        });
    });
});

// Click in Cover Img
cover_Img.addEventListener('click', function(e) {

    // Create Overlay Element
    let overlay = document.createElement('div');
    // Add Class Overlay 
    overlay.classList.add('overlay');
    overlay.classList.add('flex-r-center');


    // Create The Img
    let coverimg = document.createElement('img');
    coverimg.classList.add('coverimg');
    coverimg.src = e.target.src;

    // Close Img
    let close = document.createElement('i');
    close.classList.add('fas');
    close.classList.add('fa-times');
    close.classList.add('close-cover');

    // Close The Overlay Img
    close.onclick = function() {
        overlay.remove();
    };

    // Append The Close To Overlay
    overlay.appendChild(close);
    // Append The coverimg To Overlay
    overlay.appendChild(coverimg);
    // Append Overlay To Gallary Section
    the_Gallary.appendChild(overlay);

});

// Index For Slider Gallary
let index2;

// Img Gallary For Each
gallary_Img.forEach((img, i) => {

    // Click In Img From Img Gallary
    img.addEventListener('click', function(e) {

        // Remove Class Active
        gallary_Img.forEach((img2) => {
            img2.classList.remove('active');
        });

        // Add Class Active In Clicked Img
        e.target.classList.add('active');

        // Reset Index Number
        index2 = i;

        // Change The Src Cover Img To Img Click Src
        cover_Img.src = e.target.src;

    });
});

// Check Btns Slider The Gallary
function nextImg() {
    if (index2 < gallary_Img.length - 1) {
        gallary_Img[index2].classList.remove('active');
        gallary_Img[index2++];
        gallary_Img[index2].classList.add('active');
        cover_Img.src = gallary_Img[index2].src;
    } else {
        gallary_Img[gallary_Img.length - 1].classList.remove('active');
        index2 = 0;
        gallary_Img[index2].classList.add('active');
        cover_Img.src = gallary_Img[index2].src;
    };
};

function prevImg() {
    if (index2 === 0) {
        gallary_Img[index2].classList.remove('active');
        index2 = gallary_Img.length - 1;
        gallary_Img[index2].classList.add('active');
        cover_Img.src = gallary_Img[index2].src;
    } else {
        gallary_Img[index2].classList.remove('active');
        gallary_Img[index2--];
        gallary_Img[index2].classList.add('active');
        cover_Img.src = gallary_Img[index2].src;
    };
};

// Run SLider Gallary
next_Img.onclick = nextImg;
prev_Img.onclick = prevImg;

// For Reset The Gallary
window.onload = function() {
    next_Img.click();
};