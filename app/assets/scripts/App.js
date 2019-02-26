// class Person{
//   constructor(name, age){
//     this.name = name,
//     this.age = age;
//   }
//   callName(){
//     console.log(`Mam na imię ${this.name} i mam ${this.age} lat`)
//   }  
//  };

// const names = [{
//   name: "Filip",
//   age: 25,

//  },
//  {
//   name: "Izaaddadd",
//   age: 24
//  }
//  ]
// function callAllNames(){
//   names.map(person => new Person(person.name, person.age).callName())
// }

// callAllNames()



// $('.site-header__menu-icon').click(function(){
//   alert("Działa")
// })




class MobileMenu {
  constructor() {
    this.siteHeader = $(".site-header")
    this.menuIcon = $('.site-header__menu-icon');
    this.menuContent = $('.site-header__menu-content');
    this.events();
  }
  events(){
    this.menuIcon.click(() => this.toggleTheMenu());
    console.log(this)
  }
  toggleTheMenu() {
     this.menuContent.toggleClass("site-header__menu-content--is-visible");
     console.log(this);
     this.siteHeader.toggleClass("site-header--is-expanded")
   }
  }

const test = new MobileMenu();