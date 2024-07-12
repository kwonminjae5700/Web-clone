const data = [
    {
      id: 1,
      img: "../assets/kitty.png",
      name: "고양이 기타",
      price: "10,000원",
      address: "부산 기장군 가락동",
    },
    {
      id: 2,
      img: "../assets/AirPod.png",
      name: "완전 새 에어팟",
      price: "22,000원",
      address: "부산 양정동",
    },
    {
      id: 3,
      img: "../assets/laptop.png",
      name: "중고 맥북",
      price: "980,000원",
      address: "서울 강남구 삼성동",
    },
    {
      id: 4,
      img: "../assets/phone.png",
      name: "스마트폰",
      price: "800,000원",
      address: "서울 종로구 종로1가",
    },
    {
      id: 5,
      img: "../assets/headphone.png",
      name: "헤드폰",
      price: "36,000원",
      address: "대구 중구 동성로",
    },
    {
      id: 6,
      img: "../assets/ipad.png",
      name: "아이패드",
      price: "84,000원",
      address: "부산 해운대구",
    },
    {
      id: 7,
      img: "../assets/earing.png",
      name: "귀걸이",
      price: "200,000원",
      address: "인천 남동구 구월동",
    },
    {
      id: 8,
      img: "../assets/bicycle.png",
      name: "산악 자전거",
      price: "150,000원",
      address: "대전 서구 둔산동",
    },
    {
      id: 9,
      img: "../assets/electric_bicycle.jpg",
      name: "전기 자전거",
      price: "650,000원",
      address: "부산 부산진구 당감동",
    },
    {
      id: 10,
      img: "../assets/goldRing.jpg",
      name: "금반지",
      price: "250,000원",
      address: "서울 강서구 까치산동",
    },
    {
      id: 11,
      img: "../assets/guitar.jpg",
      name: "깁슨 일렉기타",
      price: "950,000원",
      address: "서울 한강",
    },
    {
      id: 12,
      img: "../assets/LG.jpg",
      name: "LG 제습기",
      price: "300,000원",
      address: "부산 부산진구 서면",
    },
  ];

  const items= data.map(item => {

    let i = document.querySelector(".flea_box");
    i.innerHTML +=  `<div class="item">
            <img src="${item.img}" alt="${item.name}" width="223" height="223" style="border-radius : 14px;"/>
            <p>${item.name}</p>
            <h2>${item.price}</h2>
            <p>${item.address}</p>
        </div>
    `;
});