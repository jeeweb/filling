import { IPost } from "@/types/Post";
import { http, HttpResponse } from "msw";

enum DrinkList {
  defaultValue = "주종",
  Soju = "소주",
  Beer = "맥주",
  KoreanTraditionalLiquor = "전통주",
  Sake = "사케",
  Wine = "와인",
  Whiskey = "위스키",
  Vodka = "보드카",
  Tequila = "데낄라",
  Rum = "럼",
  Brandy = "브랜디",
  Cocktail = "칵테일",
  Etc = "기타",
}

const DrinkDetails = [
  {
    category: "Wine",
    name: DrinkList.Wine,
    drinkTypes: [
      "레드",
      "화이트",
      "로제",
      "오렌지",
      "스파클링",
      "디저트",
      "기타",
    ],
    country: [
      "남아공",
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
  },
  {
    category: "Whiskey",
    name: DrinkList.Whiskey,
    drinkTypes: ["싱글몰트", "몰트", "버번", "라이", "블렌디드"],
    country: [
      "대만",
      "미국",
      "스코틀랜드",
      "아일랜드",
      "일본",
      "캐나다",
      "기타",
    ],
  },
];

const MockData = [
  {
    postId: "post01",
    drink: DrinkList.Beer,
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
    image: "/sample1.jpeg",
    drink: DrinkList.Wine,
    drinkType: DrinkDetails[0].drinkTypes[1],
    country: DrinkDetails[0].country[0],
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
    drink: DrinkList.Beer,
    image: "/sample1.jpeg",
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
    image: "/sample1.jpeg",
    drink: DrinkList.Etc,
    brand: "브랜드이름",
    base: "기타주류",
    country: "한국",
    createdAt: new Date(),
    weather: "흐림",
    location: "바",
    people: "",
    food: "",
    title: "titletitle",
    contents: "contents contents contents contents",
  },
  {
    postId: "post05",
    drink: DrinkList.Brandy,
    image: "/sample2.jpg",
    brand: "브랜디브랜드",
    drinkType: "꼬냑",
    country: "미국",
    createdAt: new Date(),
    weather: "맑음",
    location: "장소",
    people: "홍길동",
    food: "타코",
    title: "제목 예시",
    contents: "컨텐츠 예시입니다",
  },
  {
    postId: "post06",
    image: "/sample2.jpg",
    drink: DrinkList.KoreanTraditionalLiquor,
    brand: "브랜드테스트",
    city: "가평",
    brewery: "양조장",
    createdAt: new Date(),
    weather: "비",
    location: "장소",
    people: "홍길동",
    food: "가리비관자구이",
    title: "테스트",
    contents: "컨텐츠 예시입니다",
  },
  {
    postId: "post07",
    drink: DrinkList.Tequila,
    image: "/sample2.jpg",
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
    postId: "post08",
    image: "/sample2.jpg",
    drink: DrinkList.Cocktail,
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
  {
    postId: "post09",
    image: "/sample3.jpg",
    drink: DrinkList.Beer,
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
    postId: "post10",
    image: "/sample3.jpg",
    drink: DrinkList.Soju,
    brand: "진로이즈백",
    createdAt: new Date(),
    weather: "비",
    location: "와인바",
    people: "홍길동",
    food: "가리비관자구이",
    title: "화이트와인",
    contents: "컨텐츠 예시입니다",
  },
  {
    postId: "post11",
    drink: DrinkList.Sake,
    image: "/sample3.jpg",
    brand: "사케사케",
    createdAt: new Date(),
    weather: "맑음",
    location: "올림픽공원",
    people: "김철수, 이영희",
    food: "",
    title: "제목",
    contents: "컨텐츠 예시입니다",
  },
  {
    postId: "post12",
    image: "/sample3.jpg",
    drink: DrinkList.Cocktail,
    brand: "진토닉",
    base: "Monkey47",
    ingredients: "라임주스",
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
    const searchParams = new URL(request.url).searchParams;
    const perPageParam = parseInt(searchParams.get("per_page") as string);
    const pageParam = parseInt(searchParams.get("page") as string);
    const totalData = MockData.length;
    const totalPages = Math.round(totalData / perPageParam);
    console.log(
      `perPage: ${perPageParam} pages: ${pageParam} totalData: ${totalData} totalPages: ${totalPages}`
    );

    return HttpResponse.json(
      MockData.slice(pageParam * perPageParam, (pageParam + 1) * perPageParam)
    );
  }),

  http.get("/api/posts/:postId", ({ params }) => {
    const { postId } = params;
    const postDetail = MockData.find((data) => data.postId === postId);
    if (postDetail) {
      return HttpResponse.json(postDetail);
    }
    return HttpResponse.json({ message: "no_data" }, { status: 404 });
  }),

  http.get("/api/drinks", () => {
    return HttpResponse.json(DrinkList);
  }),
  http.get("/api/drink-details", () => {
    return HttpResponse.json(DrinkDetails);
  }),

  http.post("/api/new", async ({ request }) => {
    const newData = await request.json();
    console.log(newData);
    if (MockData.length > 0) {
      newData!.postId = `post${
        parseInt(MockData[MockData.length - 1].postId.slice(4)) + 1
      }`;
    } else {
      newData!.postId = "post01";
    }
    MockData.push(newData);
    return HttpResponse.json(Array.from(MockData.values()), { status: 201 });
  }),
];
