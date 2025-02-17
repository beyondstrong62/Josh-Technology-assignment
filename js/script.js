
const overlay = document.createElement("div");
overlay.id = "overlay";
document.body.appendChild(overlay);
overlay.style.display = "none";


function modal1() {
  console.log("Firing");

  const modal1 = document.getElementById("modal1");

  overlay.style.display = "flex";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; 
  overlay.style.zIndex = "9998";
  overlay.style.transition = "opacity 0.3s ease";



  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");

  btn1.disabled = true;
  btn2.disabled = true;

  modal1.style.display = "flex";
  modal1.style.opacity = "1";
  modal1.style.zIndex = "9999";
}

function modal2() {
  const modal2 = document.getElementById("modal2");
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const overlay = document.createElement("div");
  overlay.id = "overlay";

  // Style the overlay
  overlay.style.display = "flex";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; 
  overlay.style.zIndex = "9998";
  overlay.style.transition = "opacity 0.3s ease";

  document.body.appendChild(overlay);

  const main = document.getElementsByTagName("main")[0];
  const footer = document.getElementsByTagName("footer")[0];
  const header = document.getElementsByTagName("header")[0];

  btn1.disabled = true;
  btn2.disabled = true;
  modal2.style.display = "flex";
  modal2.style.opacity = "1";
  modal2.style.zIndex = "9999";

}

function modal1close() {
  const modal1 = document.getElementById("modal1");
  modal1.style.display = "none";
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const overlay = document.getElementById("overlay");

  overlay.style.display = "none";
  btn1.disabled = false;
  btn2.disabled = false;


}

function cancelModel2() {
  const modal2 = document.getElementById("modal2");
  modal2.style.display = "none";
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const overlay = document.getElementById("overlay");

  overlay.style.display = "none";

  btn1.disabled = false;
  btn2.disabled = false;

}




const foodInfo = [
  { id: 1, image_url: './images/slider-1.png', name: 'Home made pizza', price: 190, rating: 4.7, description: 'Delivery Time: 50-79 min, Quantity: 1' },
  { id: 2, image_url: './images/slider-2.png', name: 'Tandoori Chicken', price: 184, rating: 4.3, description: 'Delivery Time: 15-29 min, Quantity: 1, Discount: 10%' },
  { id: 3, image_url: './images/slider-3.png', name: 'Chilli Chicken', price: 116, rating: 4.1, description: 'Delivery Time: 30-40 min, Quantity: 1, Discount: 30%' },
  { id: 4, image_url: './images/slider-1.png', name: 'Veg Burger', price: 99, rating: 4.5, description: 'Delivery Time: 20-30 min, Discount: 30%' },
  { id: 5, image_url: './images/slider-2.png', name: 'Pasta Alfredo', price: 150, rating: 4.2, description: 'Delivery Time: 25-35 min' }
];

const ImageStruct = document.getElementById('imageSlider');
const sliderContainer = document.getElementById('imageSliderContainer');

ImageStruct.innerHTML = foodInfo.map((ele) => {
  return `
      <div class="image card" id="${ele.id}">
      <div class="offer-badge">
                        <svg width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 10C0.5 4.47715 4.97715 0 10.5 0H27.5C30.2614 0 32.5 2.23858 32.5 5V25C32.5 27.7614 30.2614 30 27.5 30H5.5C2.73858 30 0.5 27.7614 0.5 25V10Z" fill="#BEBEBE"/>
<path d="M2 10C2 4.47715 6.47715 0 12 0H31V30H2V10Z" fill="#F3BA00"/>
<path d="M11.2988 18.1094V19H5.71484V18.2207L8.50977 15.1094C8.85352 14.7266 9.11914 14.4023 9.30664 14.1367C9.49805 13.8672 9.63086 13.627 9.70508 13.416C9.7832 13.2012 9.82227 12.9824 9.82227 12.7598C9.82227 12.4785 9.76367 12.2246 9.64648 11.998C9.5332 11.7676 9.36523 11.584 9.14258 11.4473C8.91992 11.3105 8.65039 11.2422 8.33398 11.2422C7.95508 11.2422 7.63867 11.3164 7.38477 11.4648C7.13477 11.6094 6.94727 11.8125 6.82227 12.0742C6.69727 12.3359 6.63477 12.6367 6.63477 12.9766H5.55078C5.55078 12.4961 5.65625 12.0566 5.86719 11.6582C6.07812 11.2598 6.39062 10.9434 6.80469 10.709C7.21875 10.4707 7.72852 10.3516 8.33398 10.3516C8.87305 10.3516 9.33398 10.4473 9.7168 10.6387C10.0996 10.8262 10.3926 11.0918 10.5957 11.4355C10.8027 11.7754 10.9062 12.1738 10.9062 12.6309C10.9062 12.8809 10.8633 13.1348 10.7773 13.3926C10.6953 13.6465 10.5801 13.9004 10.4316 14.1543C10.2871 14.4082 10.1172 14.6582 9.92188 14.9043C9.73047 15.1504 9.52539 15.3926 9.30664 15.6309L7.02148 18.1094H11.2988ZM17.6705 14.0547V15.3555C17.6705 16.0547 17.608 16.6445 17.483 17.125C17.358 17.6055 17.1783 17.9922 16.9439 18.2852C16.7095 18.5781 16.4263 18.791 16.0943 18.9238C15.7662 19.0527 15.3951 19.1172 14.981 19.1172C14.6529 19.1172 14.3501 19.0762 14.0728 18.9941C13.7955 18.9121 13.5455 18.7812 13.3228 18.6016C13.104 18.418 12.9165 18.1797 12.7603 17.8867C12.604 17.5938 12.4849 17.2383 12.4029 16.8203C12.3208 16.4023 12.2798 15.9141 12.2798 15.3555V14.0547C12.2798 13.3555 12.3423 12.7695 12.4673 12.2969C12.5962 11.8242 12.7779 11.4453 13.0122 11.1602C13.2466 10.8711 13.5279 10.6641 13.856 10.5391C14.188 10.4141 14.5591 10.3516 14.9693 10.3516C15.3013 10.3516 15.606 10.3926 15.8833 10.4746C16.1646 10.5527 16.4146 10.6797 16.6333 10.8555C16.8521 11.0273 17.0376 11.2578 17.19 11.5469C17.3462 11.832 17.4654 12.1816 17.5474 12.5957C17.6294 13.0098 17.6705 13.4961 17.6705 14.0547ZM16.5806 15.5312V13.873C16.5806 13.4902 16.5572 13.1543 16.5103 12.8652C16.4673 12.5723 16.4029 12.3223 16.3169 12.1152C16.231 11.9082 16.1216 11.7402 15.9888 11.6113C15.8599 11.4824 15.7095 11.3887 15.5376 11.3301C15.3697 11.2676 15.1802 11.2363 14.9693 11.2363C14.7115 11.2363 14.483 11.2852 14.2837 11.3828C14.0845 11.4766 13.9165 11.627 13.7798 11.834C13.647 12.041 13.5455 12.3125 13.4751 12.6484C13.4048 12.9844 13.3697 13.3926 13.3697 13.873V15.5312C13.3697 15.9141 13.3912 16.252 13.4341 16.5449C13.481 16.8379 13.5494 17.0918 13.6392 17.3066C13.729 17.5176 13.8384 17.6914 13.9673 17.8281C14.0962 17.9648 14.2447 18.0664 14.4126 18.1328C14.5845 18.1953 14.774 18.2266 14.981 18.2266C15.2466 18.2266 15.479 18.1758 15.6783 18.0742C15.8775 17.9727 16.0435 17.8145 16.1763 17.5996C16.313 17.3809 16.4146 17.1016 16.481 16.7617C16.5474 16.418 16.5806 16.0078 16.5806 15.5312ZM18.8272 12.5605V12.1094C18.8272 11.7852 18.8975 11.4902 19.0382 11.2246C19.1788 10.959 19.38 10.7461 19.6417 10.5859C19.9034 10.4258 20.214 10.3457 20.5733 10.3457C20.9405 10.3457 21.253 10.4258 21.5108 10.5859C21.7725 10.7461 21.9737 10.959 22.1143 11.2246C22.255 11.4902 22.3253 11.7852 22.3253 12.1094V12.5605C22.3253 12.877 22.255 13.168 22.1143 13.4336C21.9776 13.6992 21.7784 13.9121 21.5167 14.0723C21.2589 14.2324 20.9483 14.3125 20.585 14.3125C20.2218 14.3125 19.9073 14.2324 19.6417 14.0723C19.38 13.9121 19.1788 13.6992 19.0382 13.4336C18.8975 13.168 18.8272 12.877 18.8272 12.5605ZM19.6417 12.1094V12.5605C19.6417 12.7402 19.6749 12.9102 19.7413 13.0703C19.8116 13.2305 19.9171 13.3613 20.0577 13.4629C20.1983 13.5605 20.3741 13.6094 20.585 13.6094C20.796 13.6094 20.9698 13.5605 21.1065 13.4629C21.2432 13.3613 21.3448 13.2305 21.4112 13.0703C21.4776 12.9102 21.5108 12.7402 21.5108 12.5605V12.1094C21.5108 11.9258 21.4757 11.7539 21.4054 11.5938C21.339 11.4297 21.2354 11.2988 21.0948 11.2012C20.9581 11.0996 20.7843 11.0488 20.5733 11.0488C20.3663 11.0488 20.1925 11.0996 20.0518 11.2012C19.9151 11.2988 19.8116 11.4297 19.7413 11.5938C19.6749 11.7539 19.6417 11.9258 19.6417 12.1094ZM22.9815 17.3652V16.9082C22.9815 16.5879 23.0518 16.2949 23.1925 16.0293C23.3331 15.7637 23.5343 15.5508 23.796 15.3906C24.0577 15.2305 24.3682 15.1504 24.7276 15.1504C25.0948 15.1504 25.4073 15.2305 25.6651 15.3906C25.9268 15.5508 26.128 15.7637 26.2686 16.0293C26.4093 16.2949 26.4796 16.5879 26.4796 16.9082V17.3652C26.4796 17.6855 26.4093 17.9785 26.2686 18.2441C26.1319 18.5098 25.9327 18.7227 25.671 18.8828C25.4132 19.043 25.1026 19.123 24.7393 19.123C24.3761 19.123 24.0636 19.043 23.8018 18.8828C23.5401 18.7227 23.337 18.5098 23.1925 18.2441C23.0518 17.9785 22.9815 17.6855 22.9815 17.3652ZM23.796 16.9082V17.3652C23.796 17.5449 23.8292 17.7168 23.8956 17.8809C23.9659 18.041 24.0714 18.1719 24.212 18.2734C24.3526 18.3711 24.5284 18.4199 24.7393 18.4199C24.9503 18.4199 25.1241 18.3711 25.2608 18.2734C25.4015 18.1719 25.505 18.041 25.5714 17.8809C25.6378 17.7207 25.671 17.5488 25.671 17.3652V16.9082C25.671 16.7246 25.6358 16.5527 25.5655 16.3926C25.4991 16.2324 25.3956 16.1035 25.255 16.0059C25.1182 15.9043 24.9425 15.8535 24.7276 15.8535C24.5206 15.8535 24.3468 15.9043 24.2061 16.0059C24.0694 16.1035 23.9659 16.2324 23.8956 16.3926C23.8292 16.5527 23.796 16.7246 23.796 16.9082ZM24.9972 11.6816L20.8311 18.3496L20.2218 17.9629L24.3878 11.2949L24.9972 11.6816Z" fill="#101115"/>
</svg>

                    </div>
    <img src="${ele.image_url}" alt="food" class="imgsec2" />
    <div class="card_content">
        <div class="sec2_card_area1">
            <p>${ele.name}</p>
            <span>$${ele.price}</span>
        </div>
        <div class="sec2_card_area2">
            <span class="star_up">
                <span class="star">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.1121 4.72554L8.51478 4.17806L6.90666 0.764102C6.86274 0.670629 6.79048 0.594961 6.70122 0.548967C6.47736 0.43324 6.20532 0.529679 6.09339 0.764102L4.48528 4.17806L0.88791 4.72554C0.788731 4.74038 0.698053 4.78934 0.628627 4.86352C0.544696 4.95386 0.498446 5.0754 0.50004 5.20142C0.501634 5.32745 0.550942 5.44766 0.637128 5.53563L3.23987 8.19291L2.62496 11.9452C2.61054 12.0324 2.61976 12.1222 2.65159 12.2043C2.68341 12.2864 2.73655 12.3575 2.805 12.4095C2.87344 12.4616 2.95444 12.4925 3.03882 12.4988C3.1232 12.5051 3.20757 12.4865 3.28238 12.4452L6.50003 10.6736L9.71768 12.4452C9.80553 12.4941 9.90754 12.5104 10.0053 12.4926C10.2518 12.4481 10.4176 12.2033 10.3751 11.9452L9.76019 8.19291L12.3629 5.53563C12.4338 5.46293 12.4805 5.36798 12.4947 5.26412C12.533 5.00447 12.3601 4.76412 12.1121 4.72554Z" fill="#1B1C21"/>
                    </svg> 
                    <span>${ele.rating}</span>
                </span>
                <span class="rating">${ele.delivery_time}</span>
            </span>
            <button style="border: none; background-color:white;">
                <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="22" height="20" rx="5" fill="#BEBEBE"/>
                    <rect x="0.5" y="0.5" width="22" height="20" rx="5" fill="#F3BA00"/>
                    <path d="M11.5991 10.6961V16.1863M6.04956 10.6961H11.5991H6.04956ZM17.1487 10.6961H11.5991H17.1487ZM11.5991 10.6961V5.20587V10.6961Z" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
</div>

    `;
}).join('');

const moveLeftBtn = document.getElementById('moveLeft');
const moveRightBtn = document.getElementById('moveRight');

let scrollPosition = 0;
const itemWidth = 620; 


moveLeftBtn.addEventListener('click', () => {
  scrollPosition = Math.min(scrollPosition + itemWidth, 0); 
  ImageStruct.style.transform = `translateX(${scrollPosition}px)`;
});


moveRightBtn.addEventListener('click', () => {
  const maxScroll = -(itemWidth * (foodInfo.length - Math.floor(sliderContainer.offsetWidth / itemWidth)));
  scrollPosition = Math.max(scrollPosition - itemWidth, maxScroll);
  ImageStruct.style.transform = `translateX(${scrollPosition}px)`;
});