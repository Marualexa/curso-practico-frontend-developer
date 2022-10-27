const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.deskton-menu');
const menuEsteIcon = document.querySelector('.menu');
const movilMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shopping-cart-container');
const productDetailContainer = document.querySelector('#products-in-cart');
const cardContainer = document.querySelector('.cards-container');
const closeIcon = document.querySelector('.product-detail-close');
const priceProduct = document.querySelector('.price')
const imagInProduct = document.querySelector('.product--image');
const nameProduct = document.querySelector('.product--name');
const descriptionProduct = document.querySelector('.product-description');

const cardOrderButton = document.querySelector('#order-button')

emailMenu.addEventListener('click', toggleDesktopMenu);
menuEsteIcon.addEventListener('click', toggleMovilMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoShoppingCartContainer);
closeIcon.addEventListener('click', closeProductDetailAside);



function toggleDesktopMenu() {
    let isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    let isDesktopClose = desktopMenu.classList.contains('inactive');

    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    } console.log('se cierra')

    if (!isshoppingCartContainerClosed) {
        desktopMenu.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMovilMenu() {
    let isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    movilMenu.classList.toggle('inactive');
}

function toggleCarritoShoppingCartContainer() {
    let isMovilMenuclosed = movilMenu.classList.contains('inactive');

    if (!isMovilMenuclosed) {
        movilMenu.classList.add('inactive');
    }

    let isProductDetailClose = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClose) {
        productDetailContainer.classList.add('inactive');
    }


    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(event) {
    console.log("esta es la info", event)
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');

    imagInProduct.setAttribute('src', event.image)
    nameProduct.innerText = event.name
    priceProduct.innerText = '$' + event.price

    const infoDetall = document.querySelector('.info-detall');

    let autocard = document.querySelector('.add-to-cart-button')
    console.log('aqui', autocard)
        if(autocard) {
            autocard.parentElement.removeChild(autocard)
        }
    const addToCart = document.createElement('button');
    const imgcar =document.createElement('img');
    imgcar.setAttribute('src', './iconos/carrito.png')

    addToCart.classList.add('add-to-cart-button');
    addToCart.classList.add('primary-button');
    addToCart.innerText = 'Add to cart';

    addToCart.appendChild(imgcar);
    infoDetall.appendChild(addToCart);
    
    


    function add() {
       return agregarItemAlCarrito(event)
    }

    addToCart.addEventListener('click', add, false);
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}


const orderProduct = []
// orderProduct.push({
//     image: './logos/img1.jpg',
//     name: 'delproducto',
//     price: '10',
//     imagClose: './iconos/icons8.png',
// })
// orderProduct.push({
//     image: './logos/img1.jpg',
//     name: 'delproducto',
//     price: '10',
//     imagClose: './iconos/icons8.png',
// })
// orderProduct.push({
//     image: './logos/img1.jpg',
//     name: 'delproducto',
//     price: '10',
//     imagClose: './iconos/icons8.png',
// })
// orderProduct.push({
//     image: './logos/img1.jpg',
//     name: 'delproducto',
//     price: '10',
//     imagClose: './iconos/icons8.png',
// })
// orderProduct.push({
//     image: './logos/img1.jpg',
//     name: 'delproducto',
//     price: '10',
//     imagClose: './iconos/icons8.png',
// })
// orderProduct.push({
//     image: './logos/img1.jpg',
//     name: 'delproducto',
//     price: '10',
//     imagClose: './iconos/icons8.png',
// })
// orderProduct.push({
//     image: './logos/img1.jpg',
//     name: 'delproducto',
//     price: '10',
//     imagClose: './iconos/icons8.png',
// })
// orderProduct.push({
//     image: './logos/img1.jpg',
//     name: 'delproducto',
//     price: '10',
//     imagClose: './iconos/icons8.png',
// })

function listOrderProduct(orderInCard, createCheckoutButton = true) {
    const orderContainer = document.querySelector('.my-order-content')
    orderContainer.innerHTML = ''

    for (let listOrderProduct of orderInCard) {
        const orderList = document.createElement('div');
        orderList.classList.add('shopping-cart');

        //Crear figure y img, agregar al figure el img por dentro, agragarle el atribucto src al img
        const figureImag = document.createElement('figure');
        const imagCar = document.createElement('img');
        imagCar.setAttribute('src', listOrderProduct.image);

        figureImag.appendChild(imagCar);

        const contentInfo = document.createElement('p');
        contentInfo.innerText = listOrderProduct.name;

        const priceInform = document.createElement('p');
        priceInform.innerText = '$' + listOrderProduct.price;

        const imgClose = document.createElement('img');
        imgClose.setAttribute('src', './iconos/icons8.png');

        orderList.appendChild(figureImag);

        orderList.appendChild(contentInfo);

        orderList.appendChild(priceInform);

        orderList.appendChild(imgClose);

        orderContainer.appendChild(orderList);
    }

    const buttonOrder = document.createElement('button');
    buttonOrder.classList.add('primary-button');
    buttonOrder.innerText = 'Checkout';

    if (createCheckoutButton == true) {
        orderContainer.appendChild(buttonOrder);
    }
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

function agregarItemAlCarrito(info) {
    console.log('esta es info', info);
    orderProduct.push(info)
    listOrderProduct(orderProduct, true);
}

function listProducts(arr) {
    for (let product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        //Product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        // productImg.addEventListener('click', openProductDetailAside)
        productCard.addEventListener('click', function (event) {
            event.stopPropagation();
            openProductDetailAside(product)
        })

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
        productImgCard.setAttribute('src', './iconos/carrito.png');

        productImgCard.addEventListener('click', function (event) {
            console.log('event click');
            event.stopPropagation();
            agregarItemAlCarrito(product)
        })

        productInfoFigure.appendChild(productImgCard);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);


        cardContainer.appendChild(productCard)
    }

}

listProducts(productList);

listOrderProduct(orderProduct, false);
