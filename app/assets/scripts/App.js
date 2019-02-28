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
  }
  toggleTheMenu() {
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
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
        // console.log(scrollTop,  offsetTop - height);
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
new RevealOnScroll($('.testimonial'), 1);

//StickyHeader//

class StickyHeader {
  constructor() {
    this.siteHeader = $('.site-header');
    this.siteHeaderChangeColor();
    this.pageSections = $('.page-section');
    this.headerLinks = $('nav a');
    this.scrollToSection();
  }
  siteHeaderChangeColor() {
    const that = this;
    $(document).scroll(function () {
      const scrollTop = $(document).scrollTop();
      const height = $(that.siteHeader).outerHeight();
      if (scrollTop > 1.5 * height) {
        $(that.siteHeader).addClass('site-header--sticky')
      } else {
        $(that.siteHeader).removeClass('site-header--sticky')
      }
    })
  }

  scrollToSection() {
    const that = this;
    this.pageSections.each(function () {
      const currentPageSection = this;
      const idOfNavigation = currentPageSection.getAttribute('data-matching-link');
      $(idOfNavigation).click(function () {
        $(that.headerLinks).each(function () {
          $(this).removeClass('orange-highlight');
        })
        $(idOfNavigation).addClass('orange-highlight');
        $('html, body').animate({
          scrollTop: $(currentPageSection).offset().top
        }, 500);
      // console.log('wywołane klikiem', $(window).scrollTop(), $(currentPageSection).offset().top)
      });
    });
  }
}

new StickyHeader();


//Zmiana koloru przycisków menu przy scrollowaniu //

class OrangeButtonAtScroll {
  constructor() {
    this.pageSections = $('.page-section');
    this.headerLinks = $('nav a');
    this.addOrangeColorToButton();
  }

  addOrangeColorToButton() {
    const that = this;
    $(window).scroll(function () {
      $(that.headerLinks).each(function () {
        $(this).removeClass('orange-highlight');
      });
      const windowScroll = $(window).scrollTop();
      $(that.pageSections).each(function () {
        const start = $(this).offset().top;
        const end = start + $(this).outerHeight();
        // console.log(windowScroll, start, end);

        if (windowScroll >= Math.floor(start) && windowScroll < Math.floor(end)) {
          const idOfNavigation = this.getAttribute('data-matching-link');
          $(idOfNavigation).addClass('orange-highlight');
          // console.log(idOfNavigation);
        }
      })
    })
  }
}


new OrangeButtonAtScroll();