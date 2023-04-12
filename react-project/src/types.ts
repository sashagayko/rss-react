export type userCards = {
  nameInput: string;
  birthday: string;
  profilePicture: FileList;
  gender: string;
  countries: string;
  agreement: boolean;
};

export type Article = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
};

export type ResponseArticle = {
  articles: Article[];
};
