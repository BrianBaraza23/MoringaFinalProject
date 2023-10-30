import React from "react";
import VideoCard from "../components/VideoCard";
import ArticleCard from "../components/ArticleCard";

const HomePage = () => {
  const dummyData = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <VideoCard />
      {dummyData.map((card) => {
        return <ArticleCard key={card} />;
      })}
    </>
  );
};

export default HomePage;
