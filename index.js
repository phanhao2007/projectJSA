let products = {
    data : [
        {
            name:"Gà truyền thống",
            price:"60.000đ-150.000đ",
            image:"https://static.kfcvietnam.com.vn/images/items/lg/POP-R.jpg?v=4BB804",
        },
        {
            name:"Gà sốt tiêu",
            price:"60.000đ-150.000đ",
            image:"https://cdn.tgdd.vn/Files/2021/08/11/1374508/bo-tui-cach-lam-dui-ga-nuong-tieu-kfc-cuc-ngon-khong-thua-gi-ngoai-tiem-202108111914057751.jpg",
        },
        {
            name:"khoai tây chiên",
            price:"20.000đ-50.000đ",
            image:"https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/7/29/935863/Vb_ROIF.jpg",
        },
        {
            name:"mì ý",
            price:"60.000đ-100.000đ",
            image:"https://product.hstatic.net/200000758381/product/mi_y_phi-le_ga_quay_e8c84247998a462992a5bd5624fecf28_1024x1024.jpg",
        },
        {
            name:"khoai tây chiên phô mai",
            price:"25.000đ-55.000đ",
            image:"https://daylambanh.edu.vn/wp-content/uploads/2020/02/khoai-tay-lac-pho-mai.jpg",
        },
        {
            name:"humberger truyền thống ",
            price:"60.000đ",
            image:"https://doanhnhanplus.vn/wp-content/uploads/2018/07/DN-thuc-don-chay-tai-KFC-TinDN-270718-1.jpg",
        },
        {
            name:"humberger tôm",
            price:"70.000đ",
            image:"https://product.hstatic.net/200000758381/product/d.cbo_b._shrimp_bcd9ec67616e43ddbd72db0c021df81f_grande.jpg",
        },
        {
            name:"humberger cá hồi",
            price:"70.000đ",
            image:"https://www.premierfrozenfoods.com/custom/public/images/filled-bagels-1-1.jpg",
        },
        {
            name:"Cơm TERIYAKI",
            price:"41.000đ-80.000đ",
            image:"https://img.giftpop.vn/brand/KFC/MP2202150002_BASIC_origin.jpg",
        },
        {
            name:"gà viên popcorn",
            price:"50.000đ-130.000đ",
            image:"https://shipdoandemff.com/wp-content/uploads/2018/05/G%C3%A0-Vi%C3%AAn-V%E1%BB%ABa.jpg",
        },
        {
            name:"Cơm gà nướng kim chi",
            price:"60.000đ-100.000đ",
            image:"https://saoexpress.vn/wp-content/uploads/2019/10/C%C6%A1m-g%C3%A0-n%C6%B0%E1%BB%9Bng-ch%C3%ADnh-th%E1%BB%A9c-1.jpg",
        },
    ]
}
for (let items of products.data) {
    

    let card = document.createElement("div")
    card.classList.add("card")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.setAttribute("src", items.image)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = items.name.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerHTML = "<b>Price:</b> " + items.price;
    container.appendChild(price);

    let btn = document.createElement("button")
    btn.setAttribute("onclick", "addToCart()")
    btn.innerHTML = "Thêm vào giỏ hàng"
    container.appendChild(btn)
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

// for (let i of products.data){
//     let product = JSON.parse(localStorage.product)
//     product.push({
//         name: items.name,
//         price: items.price , 
//         images: items.image
//     })

//     localStorage.setItem("product", JSON.stringify(product))
// }


// const addToCart = () => {
    
// }
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Thay đổi hình sau mỗi 2 giây
}