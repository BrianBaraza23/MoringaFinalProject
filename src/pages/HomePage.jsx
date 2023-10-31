import React from "react";
import VideoCard from "../components/VideoCard";
import ArticleCard from "../components/ArticleCard";
import Header from "../components/Header";
import FeaturedView from "../components/FeaturedView";
import NewPostSection from "../components/NewPostSection";
import TrendingMedia from "../components/TrendingMedia";
import VideoSlider from "../components/VideoSlider";

const HomePage = () => {
  return (
    <>
      <Header />
      <FeaturedView />
      <NewPostSection />
      <TrendingMedia />
      <VideoSlider />
    </>
  );
};

export default HomePage;
