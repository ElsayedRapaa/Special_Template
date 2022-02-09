// Selector Settings Elements
let the_Settings = document.querySelector('.settings'),
    open_Settings = document.querySelector('.settings .open-set'),
    open_Icon = document.querySelector('.settings .open-set i'),
    the_Colors = document.querySelectorAll('.color-option ul li'),
    back_Controls = document.querySelectorAll('.back-control span'),
    mood_Text = document.querySelector('.dark-mood .mood-text'),
    opt_Mood = document.querySelector('.dark-mood .opt-mood'),
    click_Mood = document.querySelector('.dark-mood .click-mood');

// The List Landing Background
let back_List = ['../Img/head_1.jpeg', '../Img/head_2.jpeg', '../Img/head_3.jpeg', '../Img/head_4.jpeg', '../Img/head_5.jpeg', '../Img/head_6.jpeg', '../Img/head_7.jpeg', '../Img/head_8.jpeg', '../Img/head_9.jpeg', '../Img/head_10.jpeg'],
    back_Interval,
    background_Options = false;

// Selector Header Elelemnts
let sections = document.querySelectorAll('.section'),
    the_Header = document.querySelector('.header'),
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
    the_Art_Box = document.querySelectorAll('.articles .box'),
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

// Selector The Skills Elements
let our_Skills = document.querySelector('.our-skills'),
    skills_Name = document.querySelectorAll('.our-skills .skill .skill-text'),
    skills_Num = document.querySelectorAll('.our-skills .skill-num'),
    skills_Prog = document.querySelectorAll('.our-skills .skill-prog span'),
    state_Skills = false;

// Selector The Testimonials Elements
let testimonials = document.querySelectorAll('.testimonials .box');

// Selector The Top Vidoes
let the_Vid = document.querySelector('.videos .box .vid'),
    play_Screen = document.querySelector('.videos .box .vid .play-screen'),
    play_Screen_icon = document.querySelector('.videos .box .vid .play-screen i'),
    vid_Time = document.querySelector('#vid-time'),
    the_Backward = document.querySelector('.videos .backward'),
    the_Forward = document.querySelector('.videos .forward'),
    the_Pause = document.querySelector('.videos .pause'),
    the_Volume = document.querySelector('.videos .volume'),
    range_Vol = document.querySelector('#cont-volume'),
    num_Vol = document.querySelector('.vol-num'),
    start_Time = document.querySelector('.vid-time .start-time'),
    vid_List = document.querySelector('.videos .vid-list');

// The Up Arrow
let arrow_Up = document.querySelector('.up');

// The Window Scroll
window.onscroll = function() {
    if (window.scrollY >= 500) {
        arrow_Up.classList.add('show');
        arrow_Up.onclick = function() {
            window.scrollTo(0, 0);
        };
    } else {
        arrow_Up.classList.remove('show');
    };

    if (window.scrollY > our_Skills.offsetTop - 100) {

        //  The Progress Skills Background
        skills_Prog.forEach((prog) => {
            prog.style.width = parseInt(prog.dataset.skills) + '%';
        });

        // The Skills Number Progress Skill
        if (!state_Skills) {
            skills_Num.forEach((num) => {
                count_Prog(num);
            });
        };
        state_Skills = true;
    };
};

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

let the_Mood = localStorage.getItem('dark-mood');

if (the_Mood !== null) {

    if (the_Mood === 'true') {
        click_Mood.classList.add('click');
        document.body.classList.add('dark');
        mood_Text.textContent = 'Dark Mood';
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#FFF';
        the_Settings.style.backgroundColor = '#000';
    } else {
        click_Mood.classList.remove('click');
        document.body.classList.remove('dark');
        mood_Text.textContent = 'Light Mood';
        document.body.style.backgroundColor = '#FFF';
        the_Settings.style.backgroundColor = '#EEE';
    }

};

// The Dark Mood
opt_Mood.onclick = function() {

    click_Mood.classList.toggle('click');
    if (click_Mood.classList.contains('click')) {

        mood_Text.textContent = 'Dark Mood';
        document.body.classList.add('dark');
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#FFF';
        the_Settings.style.backgroundColor = '#000';
        localStorage.setItem('dark-mood', true);

    } else {
        mood_Text.textContent = 'Light Mood';
        document.body.classList.remove('dark');
        document.body.style.backgroundColor = '#FFF';
        the_Settings.style.backgroundColor = '#EEE';
        localStorage.setItem('dark-mood', false);
    };

};

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

        // Scroll Section
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth',
        });
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

// Function Progress Numbers
function count_Prog(num) {

    // Get The Skills Number
    let target = parseInt(num.dataset.skills);

    // Set Interval 
    let num_prog_Interval = setInterval(() => {
        num.textContent++;
        if (num.textContent == target) {
            clearInterval(num_prog_Interval);
            num.textContent = num.textContent + '%';
        };
    }, 2000 / target);
};


// he Testimonials Slide
let index3 = 0;

setInterval(() => {
    testi_Slide();
}, 3000);

function testi_Slide() {
    testimonials[index3].classList.remove('active');
    index3 = [index3 + 1] % testimonials.length;
    testimonials[index3].classList.add('active');
};

// The Top Videos Section
let the_Video = document.createElement('video'),
    index_Music = 0,
    playing = false,
    index_forEach,
    timer;

// This Is The Object
const the_Info = [{
    path: '../Video/Music Before Exame.mp4',
    name: 'Music Before Exame'
}, {
    path: '../Video/Bad Player Fottbal.mp4',
    name: 'Bad Player Fottbal'
}, {
    path: '../Video/Music The World.mp4',
    name: 'Music The World'
}, {
    path: '../Video/Music Your The Love.mp4',
    name: 'Music Your The Love'
}, {
    path: '../Video/Thank You Allah.mp4',
    name: 'Thank You Allah'
}, {
    path: '../Video/Woman In Islamic.mp4',
    name: 'Woman In Islamic'
}];

// Create Elements Videos Number
for (let i = 0; i < the_Info.length; i++) {

    let the_Parent = document.createElement('div'),
        name_List = document.createElement('div'),
        time_List = document.createElement('div');
    the_Parent.classList.add('parent');
    the_Parent.setAttribute('data-vid', the_Info[i].path);
    name_List.classList.add('name');
    name_List.textContent = the_Info[i].name;
    the_Parent.appendChild(name_List);
    vid_List.appendChild(the_Parent);
};

let the_Parent = document.querySelectorAll('.parent');

the_Vid.appendChild(the_Video);

click_Vid_Name(index_forEach);

// Get The Info Function
function all_Info(index) {
    the_Video.src = the_Info[index].path;
    the_Video.load();
    timer = setInterval(range_Time, 1000);
};

// Run The Function
all_Info(index_Music);

// Play the Videos And Add Class Active In Parent Element
function click_Vid_Name(index_for) {
    the_Parent.forEach((vid, i) => {
        vid.addEventListener('click', function(e) {
            the_Parent.forEach((vid2) => {
                vid2.classList.remove('active');
            });
            index_for = i;
            if (e.target.dataset.vid == the_Info[i].path || e.target.parentNode.dataset.vid == the_Info[i].path) {
                all_Info(index_for);
                played();
                e.target.classList.add('active');
                e.target.parentNode.classList.add('active');
            };
            index_Music = i;
        });
    });
};

// Btn Play the Vidoe
function play() {
    if (playing == false) {
        played();
    } else {
        noplayed();
    };

    // Hide The Vidow Icons From Vidoe Screen After 3 Seconds
    setTimeout(() => {
        play_Screen.classList.add('hide');
    }, 3000);
};

// Play Video
function played() {
    playing = true;
    play_Screen.innerHTML = '<i class="fas fa-pause"></i>';
    the_Pause.innerHTML = '<i class="fas fa-pause"></i>';
    the_Video.play();
};

// Stop Video
function noplayed() {
    playing = false;
    play_Screen.innerHTML = '<i class="fas fa-play"></i>';
    the_Pause.innerHTML = '<i class="fas fa-play"></i>';
    the_Video.pause();
};

// Next Video
function next_Vid() {
    if (index_Music < the_Info.length - 1) {
        index_Music++;
        all_Info(index_Music);
        the_Parent[index_Music - 1].classList.remove('active');
        the_Parent[index_Music].classList.add('active');
    } else {
        index_Music = 0;
        all_Info(index_Music);
        the_Parent[the_Info.length - 1].classList.remove('active');
        the_Parent[index_Music].classList.add('active');
    };
    played();
};

// Prev Video
function prev_Vid() {
    if (index_Music == 0) {
        index_Music = the_Info.length - 1;
        all_Info(index_Music);
        the_Parent[0].classList.remove('active');
        the_Parent[the_Info.length - 1].classList.add('active');
    } else {
        index_Music--;
        all_Info(index_Music);
        the_Parent[index_Music + 1].classList.remove('active');
        the_Parent[index_Music].classList.add('active');
    };
    played();
};

// Volume Controls
function volume() {
    num_Vol.textContent = range_Vol.value;
    the_Video.volume = range_Vol.value / 100;
};

// The Mute Video
function mute() {
    if (num_Vol.textContent > 0) {
        the_Volume.innerHTML = '<i class="fas fa-volume-down"></i>';
        num_Vol.textContent = 0;
        range_Vol.value = 0;
        the_Video.volume = 0 / 100;
    } else {
        the_Volume.innerHTML = '<i class="fas fa-volume-up"></i>';
        the_Video.volume = 50 / 100;
        range_Vol.value = 50;
        num_Vol.textContent = 50;
    };
};

// The Time Vidoes
function the_Time() {
    let the_Current = the_Video.duration * (vid_Time.value / 100);
    the_Video.currentTime = the_Current;
};

// The Range Slider
function range_Time() {
    let position = 0;
    if (!isNaN(the_Video.duration)) {
        position = the_Video.currentTime * (100 / the_Video.duration);
        vid_Time.value = position;

        let the_Start = Math.floor(the_Video.currentTime / 60),
            the_Start2 = Math.floor(the_Video.currentTime % 60);

        if (the_Start < 10) {
            the_Start = `0${the_Start}`;
        };

        if (the_Start2 < 10) {
            the_Start2 = `0${the_Start2}`;
        };
        start_Time.textContent = `${the_Start}:${the_Start2}`;
    };
    if (the_Video.ended) {
        the_Forward.click();
    };
};

// The Reset Settings
document.querySelector('.settings .reset').onclick = function() {
    localStorage.removeItem('option-background');
    localStorage.removeItem('option-color');
    localStorage.removeItem('option-back-color');
    localStorage.removeItem('option-color-alt');
    localStorage.removeItem('option-back-rgba');
    localStorage.removeItem('dark-mood');
    window.onload();
};

// For Reset The Gallary And Top Videos
window.onload = function() {
    next_Img.click();
    the_Parent[0].classList.add('active');
};