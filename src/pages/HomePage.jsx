import React from "react";
import VideoCard from "../components/VideoCard";
import ArticleCard from "../components/ArticleCard";
import Header from "../components/Header";

const HomePage = () => {
  const dummyData = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <Header />
      <VideoCard />
      {dummyData.map((card) => {
        return <ArticleCard key={card} />;
      })}
    </>
  );
};

export default HomePage;
