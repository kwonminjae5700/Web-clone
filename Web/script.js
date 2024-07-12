const data = [
    {
      id: 1,
      img: "../picture/Data_picture/1.jpeg",
      name: "이경숙 선생님",
      price: "가격 측정 불가",
      write: "경숙쌤과 함께하는 충청도 드라이브",
    },
    {
      id: 2,
      img: "../picture/Data_picture/2.jpeg",
      name: "이정하 선생님",
      price: "1,000,000원",
      write: "정하쌤과 함께하는 배구 게임",
    },
    {
      id: 3,
      img: "../picture/Data_picture/3.png",
      name: "진예빈 선생님",
      price: "890,000",
      write: "예빈쌤과 함께하는 비속어 배우기",
    },
    {
      id: 4,
      img: "../picture/Data_picture/4.jpeg",
      name: "정종건 선생님",
      price: "770,000원 + 병원비",
      write: "종건쌤과 함께하는 딱밤내기",
    },
    {
      id: 5,
      img: "../picture/Data_picture/5.jpeg",
      name: "박건우 선생님",
      price: "100,000원",
      write: "건우쌤과 함께하는 롤 5대5 내전",
    },
    {
      id: 6,
      img: "../picture/Data_picture/6.jpeg",
      name: "강은수 선생님",
      price: "1,560,000원",
      write: "은수쌤과 함께하는 패션쇼",
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
            <p>${item.write}</p>
        </div>
    `;
});