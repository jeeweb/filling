import { http, HttpResponse, StrictResponse } from "msw";

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
    // 이름(brand), 베이스(base), 사용재료(ingredients) 직접 입력
  },
  {
    drinkId: "d12",
    category: "기타",
    // 주종(drink), 이름(brand), 생산지(country) 직접 입력
  },
];

const MockData = [
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
    postId: "post02",
    image: "/sample2.jpg",
    tags: [
      { tagId: "tag01", item: DrinkData[4].category },
      { tagId: "tag02", item: DrinkData[4].types![1] },
      { tagId: "tag03", item: DrinkData[4].country![0] },
    ],
    brand: "Wild Yeast Chardonnay",
    vintage: 2019,
    createdAt: new Date(),
    weather: "비",
    location: "와인바",
    people: "홍길동",
    food: "가리비관자구이",
    title: "화이트와인",
    contents: "컨텐츠 예시입니다",
  },
  {
    postId: "post03",
    tags: [{ tagId: "tag01", item: DrinkData[1].category }],
    image: "/sample3.jpg",
    brand: "노티드 스마일 위트 에일",
    createdAt: new Date(),
    weather: "맑음",
    location: "올림픽공원",
    people: "김철수, 이영희",
    food: "",
    title: "제목",
    contents: "컨텐츠 예시입니다",
  },
  {
    postId: "post04",
    image: "/sample4.jpg",
    tags: [{ tagId: "tag01", item: DrinkData[10].category }],
    brand: "진토닉",
    base: "Monkey47",
    createdAt: new Date(),
    weather: "흐림",
    location: "바",
    people: "",
    food: "",
    title: "titletitle",
    contents: "contents contents contents contents",
  },
];

export const handlers = [
  http.get("/api/posts", ({ request }) => {
    const url = new URL(request.url);
    const perPageParam = parseInt(url.searchParams.get("per_page") as string);
    const pageParam = parseInt(url.searchParams.get("page") as string) || 1;

    return HttpResponse.json([
      {
        param: pageParam,
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
        param: pageParam + 1,
        postId: "post02",
        image: "/sample2.jpg",
        tags: [
          { tagId: "tag01", item: DrinkData[4].category },
          { tagId: "tag02", item: DrinkData[4].types![1] },
          { tagId: "tag03", item: DrinkData[4].country![0] },
        ],
        brand: "Wild Yeast Chardonnay",
        vintage: 2019,
        createdAt: new Date(),
        weather: "비",
        location: "와인바",
        people: "홍길동",
        food: "가리비관자구이",
        title: "화이트와인",
        contents: "컨텐츠 예시입니다",
      },
      {
        param: pageParam + 2,
        postId: "post03",
        tags: [{ tagId: "tag01", item: DrinkData[1].category }],
        image: "/sample3.jpg",
        brand: "노티드 스마일 위트 에일",
        createdAt: new Date(),
        weather: "맑음",
        location: "올림픽공원",
        people: "김철수, 이영희",
        food: "",
        title: "제목",
        contents: "컨텐츠 예시입니다",
      },
      {
        param: pageParam + 3,
        postId: "post04",
        image: "/sample4.jpg",
        tags: [{ tagId: "tag01", item: DrinkData[10].category }],
        brand: "진토닉",
        base: "Monkey47",
        createdAt: new Date(),
        weather: "흐림",
        location: "바",
        people: "",
        food: "",
        title: "titletitle",
        contents: "contents contents contents contents",
      },
    ]);
  }),
  http.get("/api/posts/:postId", ({ request, params }) => {
    const { postId } = params;
    const postDetail = MockData.find((data) => data.postId === postId);
    if (postDetail) {
      return HttpResponse.json(postDetail);
    }
    return HttpResponse.json({ message: "no_data" }, { status: 404 });
  }),
];
