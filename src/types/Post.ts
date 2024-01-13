export interface Tag {
  tagId: string;
  item: string;
}

export interface Post {
  postId: string;
  tags: Tag[];
  image: string;
  brand?: string;
  country?: string;
  brewery?: string;
  type?: string;
  vintage?: Date;
  name?: string;
  base?: string;
  ingredients?: string;
  drink?: string;
  createdAt: Date;
  weather?: string;
  location: string;
  people?: string;
  food: string;
  title: string;
  contents: string;
}
