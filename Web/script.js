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
      img: "../picture/Data_picture/7.jpeg",
      name: "정희철 선생님",
      price: "400,000원",
      write: "희철쌤과 함께하는 낚시 데이트",
    },
    {
      id: 8,
      img: "../picture/Data_picture/8.jpeg",
      name: "김경남 선생님",
      price: "150,000원",
      write: "경남썜과 함꼐하는 스크린 골프",
    },
    {
      id: 9,
      img: "../picture/Data_picture/9.jpeg",
      name: "김기태 선생님",
      price: "1,000,000원",
      write: "기태쌤과 함께하는 자율주행 만들기",
    },
    {
      id: 10,
      img: "../picture/Data_picture/10.jpeg",
      name: "김규봉 선생님",
      price: "250,000원",
      write: "규봉쌤과 함께하는 아재개그 배틀",
    },
    {
      id: 11,
      img: "../picture/Data_picture/11.jpeg",
      name: "정유진 선생님",
      price: "950,000원",
      write: "유진쌤과 함께하는 피구경기",
    },
    {
      id: 12,
      img: "../picture/Data_picture/12.jpeg",
      name: "박진향 선생님",
      price: "8,700,000원",
      write: "진향쌤과 함께하는 핵실험",
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