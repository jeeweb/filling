import { http, HttpResponse } from "msw";

const DrinkData = [
  {
    drinkId: "d01",
    category: "소주",
    // 이름(brand) 직접 입력
  },
  {
    drinkId: "d02",
    category: "맥주",
    // 이름(brand), 생산지(country) 직접 입력
  },
  {
    drinkId: "d03",
    category: "전통주",
    // 이름(brand), 생산지(city), 양조장(brewery) 직접 입력
  },
  {
    drinkId: "d04",
    category: "사케",
    // 이름(brand) 직접 입력
  },
  {
    drinkId: "d05",
    category: "와인",
    types: ["레드", "화이트", "로제", "오렌지", "스파클링", "디저트", "기타"],
    country: [
      "남아프리카공화국",
      "뉴질랜드",
      "독일",
      "미국",
      "스페인",
      "아르헨티나",
      "오스트리아",
      "이탈리아",
      "조지아",
      "칠레",
      "캐나다",
      "포르투갈",
      "프랑스",
      "헝가리",
      "호주",
      "기타",
    ],
    // 이름(brand), 연도(vintage) 직접 입력
  },
  {
    drinkId: "d06",
    category: "위스키",
    types: ["싱글몰트", "몰트", "버번", "라이", "블렌디드"],
    country: [
      "대만",
      "미국",
      "스코틀랜드",
      "아일랜드",
      "일본",
      "캐나다",
      "기타",
    ],
    // 이름(brand), 숙성연도(vintage) 직접 입력
  },
  {
    drinkId: "d07",
    category: "보드카",
    // 이름(brand), 생산지(country) 직접 입력
  },
  {
    drinkId: "d08",
    category: "데낄라",
    // 이름(brand), 생산지(country) 직접 입력
  },
  {
    drinkId: "d09",
    category: "럼",
    // 이름(brand), 종류(type), 생산지(country) 직접 입력
  },
  {
    drinkId: "d10",
    category: "브랜디",
    // 이름(brand), 등급(type), 생산지(country) 직접 입력
  },
  {
    drinkId: "d11",
    category: "칵테일",
    // 이름(name), 베이스(base), 사용재료(ingredients) 직접 입력
  },
  {
    drinkId: "d12",
    category: "기타",
    // 주종(drink), 이름(brand), 생산지(country) 직접 입력
  },
];

export const handlers = [
  http.get("/api/posts", ({ request }) => {
    return HttpResponse.json([
      {
        postId: "post01",
        tags: [{ tagId: "tag01", item: DrinkData[1].category }],
        image: "/sample1.jpeg",
        brand: "Corona",
        createdAt: new Date(),
        weather: "맑음",
        location: "비틀비틀",
        people: "홍길동",
        food: "타코",
        title: "제목 예시",
        contents: "컨텐츠 예시입니다",
      },
      {
        postId: "post2",
        image: "/sample2.jpg",
        tags: [
          { tagId: "tag01", item: DrinkData[4].category },
          { tagId: "tag02", item: DrinkData[4].types![1] },
          { tagId: "tag03", item: DrinkData[4].country![0] },
        ],
        brand: "Wild Yeast Chardonnay",
        createdAt: new Date(),
        weather: "비",
        location: "와인바",
        people: "홍길동",
        food: "가리비관자구이",
        title: "화이트와인",
        contents: "맛있는 샤도네이 발견",
      },
    ]);
  }),
  http.get("/api/posts/:postId", ({ request, params }) => {
    const { postId } = params;
    return HttpResponse.json([
      {
        postId: "post1",
        image: "/sample1.jpeg",
        tags: [{ tagId: "tag01", item: DrinkData[1].category }],
        brand: "Corona",
        createdAt: new Date(),
        weather: "맑음",
        location: "비틀비틀",
        people: "홍길동",
        food: "타코",
        title: "제목 예시",
        contents: "컨텐츠 예시입니다",
      },
      {
        postId: "post2",
        image: "/sample2.jpeg",
        tags: [
          { tagId: "tag01", item: DrinkData[4].category },
          { tagId: "tag02", item: DrinkData[4].types![1] },
          { tagId: "tag03", item: DrinkData[4].country![0] },
        ],
        brand: "Wild Yeast Chardonnay",
        createdAt: new Date(),
        weather: "비",
        location: "와인바",
        people: "홍길동",
        food: "가리비관자구이",
        title: "제목 예시22",
        contents: "맛있는 샤도네이 발견",
      },
    ]);
  }),
];
