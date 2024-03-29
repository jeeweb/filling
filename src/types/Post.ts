export interface IPost {
  postId: string;
  drink: string;
  image: string;
  brand: string;
  country?: string;
  city?: string;
  brewery?: string;
  drinkType?: string;
  vintage?: Date;
  base?: string;
  ingredients?: string;
  createdAt: Date;
  weather?: string;
  location: string;
  people?: string;
  food: string;
  title: string;
  contents: string;
}
