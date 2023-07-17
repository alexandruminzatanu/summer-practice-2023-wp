export type Article = {
  title: string;
  content: string;
  publishDate: Date;
};

export interface ServerArticle extends Article {
  id: number
};

export type ServerArticles = ServerArticle[];
export type Articles = Article[];
