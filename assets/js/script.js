setTimeout(() => {  
    scroller.destroy();
}, 0);
setTimeout(() => {  
    scroller.init();
}, 50);
setTimeout(() => {  
    scroller.update();
}, 1000);


const swiper2 = new Swiper("#imgs1", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
    pagination: {
      el: ".swiper-pagination",
    },
    
});
  
const swiper3 = new Swiper("#imgs2", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    
});

const swiper = new Swiper("#swiper", {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: "auto",
            spaceBetween: 50,
        },
    }
});

// Script Tab dan Header //
const inputBtn1 = $(".site1 .circle input");
const inputBtn2 = $(".site2 .circle input");
const inputBtn3 = $(".site3 .circle input");
const inputBtn4 = $(".site4 .circle input");
const menu = $(".headerIcon");
const portfolioBtn = $(".headerRight > a");
const portTab = $(".portTab");
const nav = $("nav");
const navList = nav.find("a");
const navBG = $(".navBG");



const about = document.querySelector('#about');
const webSite = document.querySelector('#webSite');
const animation = document.querySelector('#animation');
const script = document.querySelector('#script');
const board = document.querySelector('#board');
const contact = document.querySelector('#contact');


inputBtn1.on('click',{site:"siteCode1", tab:"tab1"}, codeView);
inputBtn2.on('click',{site:"siteCode2", tab:"tab2"}, codeView);
inputBtn3.on('click',{site:"siteCode3", tab:"tab3"}, codeView);
inputBtn4.on('click',{site:"siteCode4", tab:"tab4"}, codeView);

function codeView(e) {
    let site = e.data.site;
    let tab = e.data.tab;

    // console.log(site)
    // console.log(tab)
    $(`input:radio[name='${site}']`).change(function(){
        let tabBox = $(`.${tab}`);
        let siteCode = $(this).prop("checked",true).attr("id");
        tabBox.removeClass("on");
        $('.'+siteCode).addClass("on");
    });
}

menu.on("click", function () {
    $(this).toggleClass("active");
    nav.toggleClass("active");
});

navBG.on("click", function () {
    nav.removeClass("active");
    menu.removeClass("active");
})

portfolioBtn.on("click", function () {
    portTab.slideToggle(300);
    $(this).toggleClass("on");
})

//메뉴에 리스트 클릭시 로코모티브 스크롤 동작
navList.on("click", function(e){
    e.preventDefault();

    //로코모티브 스크롤에서는 아래 코드에 오류발생
    // $('html, body').animate({
    //     scrollTop: $(this.hash).offset().top
    // }, 500);

    //따라서 아래와 같은 방식으로 해야 오류가 발생하지 않는다.
    scroller.scrollTo($(this).attr("href"))

    //모바일에서 메뉴 클릭 후 사라지게 하기
    if (window.matchMedia('(max-width: 575px)').matches) {
        nav.removeClass("active");
        menu.removeClass("active");
    }
})
