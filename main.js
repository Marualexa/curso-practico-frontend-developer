const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.deskton-menu');
const menuEsteIcon = document.querySelector('.menu');
const movilMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shopping-cart-container');
const productDetailContainer = document.querySelector('#products-in-cart');
const contsOrder = document.querySelector('#contador');
const totalProducts = document.querySelector('.total');
const cardContainer = document.querySelector('.cards-container');
const closeIcon = document.querySelector('.product-detail-close');
const priceProduct = document.querySelector('.price');
const imagInProduct = document.querySelector('.product--image');
const nameProduct = document.querySelector('.product--name');
const descriptionProduct = document.querySelector('.product-description');
const cardOrderButton = document.querySelector('#order-button');
const body = document.querySelector('.body');
const modalContainer = document.querySelector('.modal-container');

const loginBotton = document.querySelector('.primary-button');
const loginContainer = document.querySelector('.login');
const articConteiner = document.querySelector('.home-container');
const olviPass = document.querySelector('.recur-contrase')
const createPass = document.querySelector('.contrasena');
const sigRegis = document.querySelector('.signup-button');
const registro = document.querySelector('.registro');
const myAccount = document.querySelector('.mi-cuenta');
const myProfile = document.querySelector('.my-profile');
const emailConfir = document.querySelector('#confirm-email');
const confirmCorre = document.querySelector('.email');
const buttonLogin = document.querySelector('#boton-inicio');
const edictPerfil = document.querySelector('#my-profile-edicte');
const bottonEdict = document.querySelector('#edict');
const closetHome = document.querySelector('.cerrar');

loginBotton.addEventListener('click', function(ev) {
    console.log('ev', ev)
    ev.preventDefault();
    console.log('click');
    loginContainer.classList.add('inactive');
    articConteiner.classList.remove('inactive')
});

olviPass.addEventListener('click', function(ev) {
    ev.preventDefault();
    loginContainer.classList.add('inactive');
    createPass.classList.remove('inactive');
    console.log('contraseña', olviPass)
});

sigRegis.addEventListener('click', function() {
    loginContainer.classList.add('inactive');
    registro.classList.remove('inactive');
    console.log('registro', sigRegis);
});

myAccount.addEventListener('click', function(ev) {
    ev.preventDefault();
    articConteiner.classList.add('inactive');
    myProfile.classList.remove('inactive');
    console.log('click', myAccount);
});

emailConfir.addEventListener('click', function(ev) {
    ev.preventDefault();
    createPass.classList.add('inactive');
    confirmCorre.classList.remove('inactive');
    console.log('email', emailConfir);
});

buttonLogin.addEventListener('click', function() {
    confirmCorre.classList.add('inactive');
    loginContainer.classList.remove('inactive');
    console.log('confirma', buttonLogin);
})

edictPerfil.addEventListener('click', function(ev) {
    ev.preventDefault();
    console.log('boton', bottonEdict)
    bottonEdict.setAttribute('value', 'Confirm');
    myProfile.classList.add('inactive');
    registro.classList.remove('inactive');
    console.log('edictor', edictPerfil);
})

bottonEdict.addEventListener('click', function(ev) {
    ev.preventDefault();
    registro.classList.add('inactive');
    articConteiner.classList.remove('inactive');
    console.log('click boton', bottonEdict);
})

closetHome.addEventListener('click', function(ev) {
    ev.preventDefault();
    articConteiner.classList.add('inactive');
    loginContainer.classList.remove('inactive');
    console.log('cerrar perfil', closetHome);
})

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

    // body.classList.add('body-inactive')
    modalContainer.classList.add('active')


    imagInProduct.setAttribute('src', event.image)
    nameProduct.innerText = event.name
    priceProduct.innerText = '$' + event.price

    const infoDetall = document.querySelector('.info-detall');

    let autocard = document.querySelector('.add-to-cart-button')
    console.log('aqui', autocard)
    if (autocard) {
        autocard.parentElement.removeChild(autocard)
    }
    const addToCart = document.createElement('button');
    const imgcar = document.createElement('img');
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
    modalContainer.classList.remove('active')
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

//esta funcion pinta el carrito

function newResult(array) {
    const cantidad = array
        .map(item => item.id)
        .reduce((obj, item) => {
            if (!obj[item]) {
                obj[item] = 1;
            }
            else {
                obj[item] = obj[item] + 1
            }


            return obj;
        }, {});
    return cantidad;
}

function listOrderProduct(orderInCard, createCheckoutButton = true) {
    const orderContainer = document.querySelector('.my-order-content')
    orderContainer.innerHTML = ''

    //calculando items repetidos
    const contadorDeIds = newResult(orderInCard);
    console.log('contadorDeIds', contadorDeIds);

    const removeItems = orderInCard.filter((item, pos) => {
        return orderInCard.indexOf(item) == pos;
    })
    console.log("removeItems", removeItems);

    for (let listOrderProduct of removeItems) {

        console.log('este es un item del carrito', listOrderProduct)
        const orderList = document.createElement('div');
        orderList.classList.add('shopping-cart');

        const figureImag = document.createElement('figure');
        const imagCar = document.createElement('img');
        imagCar.setAttribute('src', listOrderProduct.image);

        figureImag.appendChild(imagCar);

        const contentInfo = document.createElement('p');
        contentInfo.innerText = listOrderProduct.name + ' X' + contadorDeIds[listOrderProduct.id];
        

        const priceInform = document.createElement('p');
        priceInform.innerText = '$' + listOrderProduct.price;

        const imgClose = document.createElement('img');
        imgClose.setAttribute('src', './iconos/icons8.png');

        imgClose.addEventListener('click', () => {
            eliminarItemCarrito(listOrderProduct)
        })


        orderList.appendChild(figureImag);

        orderList.appendChild(contentInfo);

        orderList.appendChild(priceInform);

        orderList.appendChild(imgClose);

        orderContainer.appendChild(orderList);

    }

    const buttonOrder = document.createElement('button');
    buttonOrder.classList.add('primary-button');
    buttonOrder.innerText = 'Checkout';

    //seccion de precios

    const totalPrices = orderInCard.map(item => item.price);
    const suma = totalPrices.reduce((suma, element) => {
        return suma + parseFloat(element)
    }, 0);

    totalProducts.innerText = suma;

    const pContainer = document.createElement('div');
    pContainer.classList.add('total-price')
    const pSection = document.createElement('p');
    const spanSection = document.createElement('span');
    const pSecondSection = document.createElement('p');

    spanSection.innerText = 'Total';
    pSection.appendChild(spanSection);

    pSecondSection.innerText = '$' + Number(suma).toFixed(2);
    pSecondSection.classList.add('total');

    pContainer.appendChild(pSection);
    pContainer.appendChild(pSecondSection);
    orderContainer.appendChild(pContainer);

    if (createCheckoutButton == true) {
        orderContainer.appendChild(buttonOrder);
    }

    contsOrder.innerText = removeItems.length
}

const productList = [];
productList.push({
    id: '1',
    name: 'Colageno',
    price: '95.00',
    image: './logos/img1.jpg',
    cantidad: '1'
});

productList.push({
    id: '2',
    name: 'Glucosa',
    price: '89.27',
    image: "./logos/img2.png",
    cantidad: '1'
});
productList.push({
    id: '3',
    name: 'Combos',
    price: '100.00',
    image: './logos/img3.jpg',
    cantidad: '1'
});
productList.push({
    id: '4',
    name: 'Hidratante',
    price: '45.00',
    image: './logos/img4.jpg',
    cantidad: '1'
});
productList.push({
    id: '5',
    name: 'Aceites',
    price: '13.67',
    image: './logos/img5.jpg',
    cantidad: '1'
});
productList.push({
    id: '6',
    name: 'Relog',
    price: '120.00',
    image: './logos/img6.jpg',
    cantidad: '1'
});
productList.push({
    id: '7',
    name: 'Maquillaje',
    price: '9.00',
    image: './logos/img7.jpg',
    cantidad: '1'
});
productList.push({
    id: '8',
    name: 'Hidratante',
    price: '20.00',
    image: './logos/img8.jpg',
    cantidad: '1'
});
productList.push({
    id: '9',
    name: 'Crema',
    price: '45.00',
    image: './logos/img9.jpg',
    cantidad: '1'
});
productList.push({
    id: '10',
    name: 'Brochas',
    price: '22.00',
    image: './logos/img10.jpg',
    cantidad: '1'
});
productList.push({
    id: '11',
    name: 'Belleza',
    price: '170.00',
    image: './logos/img11.jpg',
    cantidad: '1'
});
productList.push({
    id: '12',
    name: 'Hidratante',
    price: '70.00',
    image: './logos/img12.png',
    cantidad: '1'
});
productList.push({
    id: '13',
    name: 'Brillo',
    price: '10.00',
    image: './logos/img13.jpg',
    cantidad: '1'
});
productList.push({
    id: '14',
    name: 'Labial',
    price: '30.00',
    image: './logos/img14.png',
    cantidad: '1'
});
productList.push({
    id: '15',
    name: 'Colageno',
    price: '15.00',
    image: './logos/img15.jpg',
    cantidad: '1'
});

function agregarItemAlCarrito(info) {
    console.log('esta es info', info);
    orderProduct.push(info)
    listOrderProduct(orderProduct, true);
}

function eliminarItemCarrito(itemDeEliminacion) {
    console.log('eliminar item', itemDeEliminacion);
    console.log('este es el carrito actual', orderProduct);
    const index = orderProduct.findIndex(item => item.name === itemDeEliminacion.name);
    console.log('este es el indice', index);
    orderProduct.splice(index, 1);
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



