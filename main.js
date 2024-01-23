const menuNav = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const MenuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

menuNav.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
MenuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
       aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside(){
   const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
   if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
   }
   aside.classList.toggle('inactive')
}


const producList = [];
producList.push({
    name: 'Bike',
    price: 120,
    Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})
producList.push({
    name: 'Skate',
    price: 50,
    Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
})
producList.push({
    name: 'Pantalla',
    price: 200,
    Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
})

function renderProducts(arr){ 
    for(product of producList){
        const productCart = document.createElement('div')
        productCart.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.Image);

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        const productInfoDiv = document.createElement('p');
   
        const productPrice= document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText =  product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCard);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);


        productCart.appendChild(productImg);
        productCart.appendChild(productInfo);

        cardsContainer.appendChild(productCart);
    }
}
renderProducts(producList);
