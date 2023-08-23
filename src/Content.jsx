import { ArticlesIndex } from "./ArticlesIndex";
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  const [articles, setArticles] = useState([]);

  const handleArticlesIndex = () => {
    console.log("handleArticlesIndex");
    axios.get("http://localhost:3000/articles").then((response) => {
      console.log(response.data);
      setArticles(response.data.articles);
    });
  };

  useEffect(handleArticlesIndex, []);

  return (
    <div>
      <ArticlesIndex articles={articles} />
    </div>
  );
}
