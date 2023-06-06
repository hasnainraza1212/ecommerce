var menuBtn = document.querySelector(".btn-parent");
var navLinks = document.querySelector(".navLinks")
var menuOpen = false;
menuBtn.addEventListener('click', () => {

});
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        navLinks.classList.add("open");
        menuOpen = true;
    }
    else{
        menuBtn.classList.remove('open');
        navLinks.classList.remove("open");
        menuOpen = false;
    }

});
console.log()




var cardMain = document.querySelector(".cardMain");

function Clothes(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
}

// men section


var manchoth1 = new Clothes('Men\'s classic stretch suit', '$695.00', 'imagesEcommerce\\manchoth1.jpg');
var manchoth2 = new Clothes('Dark blue classic long sleeves shirt', '$89.00', 'imagesEcommerce\\manchoth2.jpg');
var manchoth3 = new Clothes('Blue classic long sleeves shirt', '$89.00', 'imagesEcommerce\\manchoth3.jpg');
var manchoth4 = new Clothes('Men\'s classic long sleeves shirt', '$39.00', 'imagesEcommerce\\manchoth4.jpg');
var manchoth5 = new Clothes('Polo men\'s classic shirt', '$45.00', 'imagesEcommerce\\manchoth5.jpg');
var manchoth6 = new Clothes('Men\'s long sleeve fleece shirt', '$65.00', 'imagesEcommerce\\manchoth6.jpg');
var manchoth7 = new Clothes('Classic fit stretch suit', '$499.00', 'imagesEcommerce\\manchoth7.jpg');
var manchoth8 = new Clothes('Men\'s classic fit suit', '$77.00', 'imagesEcommerce\\manchoth8.jpg');
var manchoth9 = new Clothes('Ecosmart fleece hooded sweatshirtt', '$77.00', 'imagesEcommerce\\manchoth9.jpg');
var manchoth10 = new Clothes('Men\'s classic soft cotton polo shirt', '$77.00', 'imagesEcommerce\\manchoth10.jpg');
var manchoth11 = new Clothes('Men\'s rugged wear unlined denim jacket', '$45.00', 'imagesEcommerce\\manchoth11.jpg');
var manchoth12 = new Clothes('Men\'s two piece finished slim fit suit', '$399.00', 'imagesEcommerce\\manchoth12.jpg');
var manchoth13 = new Clothes('Essentials men\'s blend heavyweight coat', '$77.00', 'imagesEcommerce\\manchoth13.jpg');
var men = {
manchoth1:manchoth1,
manchoth2:manchoth2,
manchoth3:manchoth3,
manchoth4:manchoth4,
manchoth5:manchoth5,
manchoth6:manchoth6,
manchoth7:manchoth7,
manchoth8:manchoth8,
manchoth9:manchoth9,
manchoth10:manchoth10,
manchoth11:manchoth11,
manchoth12:manchoth12,
manchoth13:manchoth13

}
// men section


//women section
var woman1 = new Clothes('Textured vegan leather moto Jacket', '$693.00–$699.00', 'imagesEcommerce\\womanCloth1.jpg');
var woman2 = new Clothes('Raw denim short with sequins', '$69.00', 'imagesEcommerce\\womanCloth2.jpg');
var woman3 = new Clothes('White short checkered T-shirt & skirt', '$119.00', 'imagesEcommerce\\womanCloth3.jpg');
var woman4 = new Clothes('Women\'s 2-pieces dress', '$56.00', 'imagesEcommerce\\womanCloth4.jpg');
var woman5 = new Clothes('Midi dress with floral embroidery', '$199.00', 'imagesEcommerce\\womanCloth5.jpg');
var woman6 = new Clothes('Women\'s leather set', '$16.00–$693.00', 'imagesEcommerce\\womanCloth6.jpg');
var woman7 = new Clothes('Women\'s mulberry silk pants', '$99.00', 'imagesEcommerce\\womanCloth7.jpg');
var woman8 = new Clothes('Chiffon floral cardigan summer', '$24.00', 'imagesEcommerce\\womanCloth8.jpg');
var woman9 = new Clothes('Women\'s tulip sleeved dress', '$169.00', 'imagesEcommerce\\womanCloth9.jpg');
var woman10 = new Clothes('Sequin dresses for women party', '$48.00', 'imagesEcommerce\\womanCloth10.jpg');
var woman11 = new Clothes('Lightweight lounge terry cardigan', '$195.00', 'imagesEcommerce\\womanCloth18.jpg');
var woman12 = new Clothes('Casual ripped denim shorts', '$34.00', 'imagesEcommerce\\womanCloth12.jpg');
var woman13 = new Clothes('Women\'s leather mini skirt', '$36.00', 'imagesEcommerce\\womanCloth13.jpg');
var woman14 = new Clothes('Women\'s sleeveless round neck dress', '$47.00', 'imagesEcommerce\\womanCloth14.jpg');
var woman15 = new Clothes('Elastic waist waffle knit trousers', '$169.00', 'imagesEcommerce\\womanCloth15.jpg');
var woman16 = new Clothes('Women casual blazer work office', '$119.00–$159.00', 'imagesEcommerce\\womanCloth16.jpg');
var woman17 = new Clothes('Women\'s tulip long sleeved sheath dress', '$169.00', 'imagesEcommerce\\womanCloth17.jpg');
var woman18 = new Clothes('Woman slim work office blazer', '$16.00', 'imagesEcommerce\\womanCloth18.jpg');
var woman19 = new Clothes('Women\'s slim-fit cotton tank', '$16.00', 'imagesEcommerce\\womanCloth19.jpg');
var woman20 = new Clothes('Women casual long sleeve dresses', '$169.00', 'imagesEcommerce\\womanCloth20.jpg');
var woman21 = new Clothes('Women\'s tulip sleeved sheath dress', '$169.00', 'imagesEcommerce\\womanCloth21.jpg');
var woman22 = new Clothes('Sequin dresses for women party night', '$48.00', 'imagesEcommerce\\womanCloth22.jpg');
var woman23 = new Clothes('Multi strap cross back one piece swimsuit', '$65.00', 'imagesEcommerce\\womanCloth15.jpg');
var woman24 = new Clothes('One piece swimsuit competitive swimwear', '$26.00', 'imagesEcommerce\\womanCloth10.jpg');
var women = {
woman1:woman1, 
woman2:woman2, 
woman3:woman3, 
woman4:woman4, 
woman5:woman5, 
woman6:woman6, 
woman7:woman7, 
woman8:woman8, 
woman9:woman9, 
woman10:woman10,
woman11:woman11,
woman12:woman12,
woman13:woman13,
woman14:woman14,
woman15:woman15,
woman16:woman16,
woman17:woman17,
woman18:woman18,
woman19:woman19,
woman20:woman20,
woman21:woman21,
woman22:woman22,
woman23:woman23,
woman24:woman24

}


//women section

// Shoes section



var manShoe1 = new Clothes('Skechers men\'s classic sneaker', '$69.00', 'imagesEcommerce\\manShoe1.jpg');
var manShoe2 = new Clothes('Low heel ankle bootie', '$29.00', 'imagesEcommerce\\manShoe2.jpg');
var manShoe3 = new Clothes('Men\'s nantucket loafer leather shoes', '$55.00', 'imagesEcommerce\\manShoe3.jpg');
var manShoe4 = new Clothes('Man waterproof industrial boot', '$89.00', 'imagesEcommerce\\manShoe4.jpg');
// var manShoe5 = new Clothes('Textured vegan leather moto Jacket', '$693.00-$699.00', 'imagesEcommerce\\manShoe5.jpg');
// var manShoe6 = new Clothes('Textured vegan leather moto Jacket', '$693.00-$699.00', 'imagesEcommerce\\manShoe6.jpg');

var manShoe = {
manShoe1:manShoe1,
manShoe2:manShoe2,
manShoe3:manShoe3,
manShoe4:manShoe4
}

var womanShoe1 = new Clothes('Women\'s flax dress pump', '$125.00-$129.00', 'imagesEcommerce\\womanShoe1.jpg');
var womanShoe2 = new Clothes('Women high heels party blue shoes', '$$125.00', 'imagesEcommerce\\womanShoe2.jpg');
var womanShoe3 = new Clothes('Women\'s flax dress red pump', '$125.00', 'imagesEcommerce\\womanShoe3.jpg');
var womanShoe4 = new Clothes('Women\'s flax dress blue pump', '$125.00', 'imagesEcommerce\\womanShoe4.jpg');
var womanShoe5 = new Clothes('Women high heels party tan shoes', '$125.00-$129.00', 'imagesEcommerce\\womanShoe5.jpg');
var womanShoe6 = new Clothes('Textured vegan leather moto Jacket', '$125.00-$129.00', 'imagesEcommerce\\womanShoe6.jpg');
var womanShoe = {
    womanShoe1:womanShoe1,
    womanShoe2:womanShoe2,
    womanShoe3:womanShoe3,
    womanShoe4:womanShoe4,
    womanShoe5:womanShoe5,
    womanShoe6:womanShoe6
}

var shoes = {
    manShoe:manShoe,
    womanShoe:womanShoe

}
// Shoes section

// watches section

var watch1 = new Clothes('Men’s pro diver stainless watch', '$119.00', 'imagesEcommerce/manWatch1.jpg');
var watch2 = new Clothes('Men’s minimalist slim casual watch', '$75.00', 'imagesEcommerce/manWatch2.jpg');
var watch3 = new Clothes('Waterproof Watch with Leather Band', '$89.00', 'imagesEcommerce/manWatch3.jpg');
var watch4 = new Clothes('Mens Watches Ultra-Thin Minimalist', '$35.00', 'imagesEcommerce/manWatch4.jpg');
var watch5 = new Clothes('Men’s machine stainless steel quartz watch', '$74.00', 'imagesEcommerce/manWatch5.jpg');
var watches = {
watch1:watch1,
watch2:watch2,
watch3:watch3,
watch4:watch4,
watch5:watch5


}
// watches section


// purse section


var purse1 = new Clothes('Travel handle totte bags', '$185.00', 'imagesEcommerce\\purse1.jpg');
var purse2 = new Clothes('Women\'s jet set travel', '$195.00', 'imagesEcommerce\\purse2.jpg');
var purse3 = new Clothes('Woman laptop tote bag', '$195.00', 'imagesEcommerce\\purse3.jpg');
var purse4 = new Clothes('Women top handle satchel handbags', '$195.00', 'imagesEcommerce\\purse4.jpg');
var purse = {

    purse1:purse1,
    purse2:purse2,
    purse3:purse3,
    purse4:purse4,
}


// purse section

// for (var i = 1; i < 5; i++) {
//     // console.log(i)
//     document.write(`var jewellery${i} = new  Clothes(\'Textured vegan leather moto Jacket\', \'$693.00-$699.00\', \'imagesEcommerce\\\jewellery${i}.jpg\');` + '<br>')
// }









//watches section

//jewellery section



var jewellery1 = new Clothes('Gold earrings for women', '$150.00', 'imagesEcommerce\\jewellery1.jpg');
var jewellery2 = new Clothes('Diamond wedding ring for women', '$499.00', 'imagesEcommerce\\jewellery2.jpg');
var jewellery3 = new Clothes('Diamond wedding rings for women', '$189.00', 'imagesEcommerce\\jewellery3.jpg');
var jewellery4 = new Clothes('Silver earrings for women', '$199.00', 'imagesEcommerce\\jewellery4.jpg');
var jewellery = {

    jewellery1: jewellery1,
    jewellery2: jewellery2,
    jewellery3: jewellery3,
    jewellery4: jewellery4

}
//jewellery section

var shop = {
    men:men,
    women:women,
    shoes:shoes,
    watches:watches,
    purse:purse,
    jewellery:jewellery
}

// // Function to generate the card HTML
// function generateCard(name, price, image) {
//   return `
//     <div class="col-lg-3 col-md-4 col-sm-6">
//       <div class="">
//         <div class="img"><img src="${image}" alt=""></div>
//         <div class="mt-4"><p>${name}</p></div>
//         <div><p>${price}</p></div>
//       </div>
//     </div>
//   `;
// }


var cardMain = document.querySelector(".cardMain");
var categoryFilter = document.getElementById("categoryFilter");
var searchBar = document.getElementById("searchBar");

// Function to generate the card HTML
function generateCard(name, price, image) {
  return `
    <div class="col-lg-3 col-md-4 col-sm-6">
      <div class="">
        <div class="img"><img src="${image}" alt=""></div>
        <div class="mt-4"><p>${name}</p></div>
        <div><p>${price}</p></div>
      </div>
    </div>
  `;
}

// Function to create dynamic cards based on the selected category and search query
function createCards(category, query) {
  var html = "";
  var data;

  switch (category) {
    case "men":
      data = shop.men;
      break;
    case "women":
      data = shop.women;
      break;
    case "manShoe":
      data = shop.shoes.manShoe;
      break;
    case "womanShoe":
      data = shop.shoes.womanShoe;
      break;
    case "watches":
      data = shop.watches;
      break;
    case "purse":
      data = shop.purse;
      break;
    case "jewellery":
      data = shop.jewellery;
      break;
    default:
      // Default to all categories
      data = Object.assign({}, shop.men, shop.women, shop.shoes.manShoe, shop.shoes.womanShoe, shop.watches, shop.purse, shop.jewellery);
      break;
  }


  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      var item = data[key];
      if (
        query === "" ||
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        category !== "all" &&
        key.toLowerCase().includes(query.toLowerCase())
      ) {
        html += generateCard(item.name, item.price, item.image);
      }
    }
  }
  cardMain.innerHTML = html;
}

// Event listener for category filter
categoryFilter.addEventListener("change", function () {
  var selectedCategory = this.value;
  var searchQuery = searchBar.value;
  createCards(selectedCategory, searchQuery);
});

// Event listener for search bar
searchBar.addEventListener("input", function () {
  var selectedCategory = categoryFilter.value;
  var searchQuery = this.value;
  createCards(selectedCategory, searchQuery);
});

// Initial card generation with all categories and empty search query
createCards("all", "");
