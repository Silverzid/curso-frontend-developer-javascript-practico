const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu");
const menuCarrito = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer =document.querySelector("#productDetail");



//escuchando evento menu desplegable pc
menuEmail.addEventListener('click', toggleDesktopMenu);
//escuchando evento menu desplegable mobile
menu.addEventListener('click', toggleMobileMenu);
//escuchando evento carrito navbar
menuCarrito.addEventListener('click', toggleAsideCarrito);

productDetailCloseIcon.addEventListener("click", closeProductDetail);

//Funciones para esconder y aparecer menus (menu derecha, izquierda y carrito de compras)
function toggleDesktopMenu (){
    const  isCarritoMenuClosed = shoppingCartContainer.classList.contains('inactive');
    const  isProductDetailContainerClosed =productDetailContainer.classList.contains('inactive');
    if (!isCarritoMenuClosed || !isProductDetailContainerClosed){
        shoppingCartContainer.classList.add("inactive");
        productDetailContainer.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const  isCarritoMenuClosed = shoppingCartContainer.classList.contains('inactive');
    const  isProductDetailContainerClosed =productDetailContainer.classList.contains('inactive');
    if (!isCarritoMenuClosed || !isProductDetailContainerClosed){
        shoppingCartContainer.classList.add("inactive");
        productDetailContainer.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleAsideCarrito (){
    const  isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const  isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const  isProductDetailContainerClosed =productDetailContainer.classList.contains('inactive');
    if (!isMobileMenuClosed || !isDesktopMenuClosed || !isProductDetailContainerClosed){
        mobileMenu.classList.add("inactive");
        desktopMenu.classList.add("inactive");
        productDetailContainer.classList.add("inactive");
    }
    shoppingCartContainer.classList.toggle("inactive"); 
}


const productList =[];
productList.push({
    name: "Bike",
    price: 300,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Helmet",
    price: 100,
    image: "https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto"
});
productList.push({
    name: "Tennis",
    price: 50,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg"
});
productList.push({
    name: "Gafas",
    price: 20,
    image: "https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602"
});
productList.push({
    name: "Guarda Asientos",
    price: 40,
    image: "https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg"
});

function closeProductDetail (){
    productDetailContainer.classList.add('inactive');
}

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add("inactive");
    desktopMenu.classList.add("inactive");
}

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const imgproduct = document.createElement('img');
        imgproduct.setAttribute('src', product.image);
        imgproduct.addEventListener("click", openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+ product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        const productFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        //agregar un tag dentro de otro tag
        productFigure.appendChild(productImgCart);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv, productFigure);
        productCard.append(imgproduct, productInfo);
        cardsContainer.appendChild(productCard);
    }   
}

renderProducts(productList);