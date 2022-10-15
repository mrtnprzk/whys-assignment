import { ReactNode } from "react";

export type CommentType = {
  id: number;
  author: string;
  text: string;
  date: string;
}

export type ArticleType = {
  id: number;
  author: string;
  date: string;
  text: string;
  comments: CommentType[];
}

export type ArticleContextType = {
  articles: ArticleType[];
  isLoading: boolean;
}

export type ArticleContextProps = {
  children: ReactNode;
}
