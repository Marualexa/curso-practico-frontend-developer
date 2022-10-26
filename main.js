const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.deskton-menu');
const menuEsteIcon = document.querySelector('.menu');
const movilMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container');

emailMenu.addEventListener('click', toggleDesktopMenu);
menuEsteIcon.addEventListener('click', toggleMovilMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    let isAsideClosed = aside.classList.contains('inactive');
    let isDesktopClose = desktopMenu.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    } console.log('se cierra')

    if (!isAsideClosed) {
        desktopMenu.classList.add('inactive');
    } 

    desktopMenu.classList.toggle('inactive');
}

function toggleMovilMenu() {
    let isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    movilMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    let isMovilMenuclosed = movilMenu.classList.contains('inactive');
   
    if (!isMovilMenuclosed) {
        movilMenu.classList.add('inactive');
    }


    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Colageno',
    price: '95.00',
    image: './logos/img1.jpg',
});

productList.push({
    name: 'Glucosa',
    price: '89,00',
    image: "./logos/img2.png",
});
productList.push({
    name: 'Combos',
    price: '100,00',
    image: './logos/img3.jpg',
});
productList.push({
    name: 'Hidratante',
    price: '45,00',
    image: './logos/img4.jpg',
});
productList.push({
    name: 'Aceites',
    price: '13,00',
    image: './logos/img5.jpg',
});
productList.push({
    name: 'Relog',
    price: '120,00',
    image: './logos/img6.jpg',
});
productList.push({
    name: 'Maquillaje',
    price: '9,00',
    image: './logos/img7.jpg',
});
productList.push({
    name: 'Hidratante',
    price: '20,00',
    image: './logos/img8.jpg',
});
productList.push({
    name: 'Crema',
    price: '45,00',
    image: './logos/img9.jpg',
});
productList.push({
    name: 'Brochas',
    price: '22,00',
    image: './logos/img10.jpg',
});
productList.push({
    name: 'Belleza',
    price: '170,00',
    image: './logos/img11.jpg',
});
productList.push({
    name: 'Hidratante',
    price: '70,00',
    image: './logos/img12.png',
});
productList.push({
    name: 'Brillo',
    price: '10,00',
    image: './logos/img13.jpg',
});
productList.push({
    name: 'Labial',
    price: '30,00',
    image: './logos/img14.png',
});
productList.push({
    name: 'Colageno',
    price: '15,00',
    image: './logos/img15.jpg',
});

function listProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './iconos/carrito.png')
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
    
        cardContainer.appendChild(productCard)
    }
    
}

listProducts(productList);

