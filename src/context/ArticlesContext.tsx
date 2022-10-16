import { createContext, useContext, useEffect, useState } from "react";
import articlesData from "../data/articles.json";
import {
  ArticleContextType,
  ArticleContextProps,
  ArticleType,
} from "../../types";

const ArticleContext = createContext({} as ArticleContextType);

export const useArticle = () => {
  return useContext(ArticleContext);
};

export const ArticleProvider = ({ children }: ArticleContextProps) => {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getArticles = async () => {
    try {
      const result = await articlesData;
      setArticles(result);
      if (result) {
        setIsLoading(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <ArticleContext.Provider value={{ articles, isLoading }}>
      {children}
    </ArticleContext.Provider>
  );
};
