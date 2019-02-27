//MobileMenu: //
class MobileMenu {
  constructor() {
    this.siteHeader = $(".site-header")
    this.menuIcon = $('.site-header__menu-icon');
    this.menuContent = $('.site-header__menu-content');
    this.events();
  }
  events() {
    this.menuIcon.click(() => this.toggleTheMenu());
    console.log(this)
  }
  toggleTheMenu() {
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    console.log(this);
    this.siteHeader.toggleClass("site-header--is-expanded");
    this.menuIcon.toggleClass('site-header__menu-icon--close-x')
  }
}

const test = new MobileMenu();


//Reveal on Scroll: //
class RevealOnScroll {
  constructor(classElement, animationDelay) {
    this.itemsToReveal = classElement;
    this.animationDelay = animationDelay;
    this.hideInitially();
    this.createOnScroll();
  }
  hideInitially() {
    this.itemsToReveal.addClass('reveal-item');
  }

  createOnScroll() {
    // this.itemsToReveal.each(function(){
    //   const currentItem = this;
    //   $(document).scroll(function(){ 
    //     const scrollTop = $(document).scrollTop();
    //     const offsetTop = $(currentItem).offset().top;
    //     const height = $(currentItem).outerHeight();
    //     console.log(scrollTop, offsetTop);
    //     if(scrollTop >= offsetTop - height){
    //       $(currentItem).addClass('reveal-item--is-visible');
    //     } else if(scrollTop < offsetTop - height){
    //       $(currentItem).removeClass('reveal-item--is-visible');
    //     }
    //   })    
    // })
    const that = this;
    [...this.itemsToReveal].forEach(element => {
      document.addEventListener('scroll', function () {
        const scrollTop = window.scrollY;
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        console.log(scrollTop,  offsetTop - height);
        if (scrollTop >= offsetTop - height / that.animationDelay) {
          element.classList.add('reveal-item--is-visible');
        } else if (scrollTop < offsetTop - height / that.animationDelay) {
          element.classList.remove('reveal-item--is-visible');
        }
      })
    })

  }


}

new RevealOnScroll($('.feature-item'), 1);
new RevealOnScroll($('.testimonial'), 1)