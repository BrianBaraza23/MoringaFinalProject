import React from "react";
import Header from "../components/Header";
import Article from "../components/Article";
import ArticlesSection from "../components/ArticlesSection";

const ArticlePage = () => {
  return (
    <div>
      <Header />
      <Article />
      <ArticlesSection section_color='bg-default-green' />
    </div>
  );
};

export default ArticlePage;
