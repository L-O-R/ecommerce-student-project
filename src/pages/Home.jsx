import React from "react";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import CategorySection from "../components/home/CategorySection";
import PopularProducts from "../components/home/PopularProducts";
import SaleBannerSection from "../components/home/SaleBannerSection";
import HotDealsSection from "../components/home/HotDealsSection";
import BestSaleTimer from "../components/home/BestSaleTimer";
import FeaturedProducts from "../components/home/FeaturedProducts";
import LatestNews from "../components/home/LatestNews";
import ClientTestimonials from "../components/home/ClientTestimonials";
import SubscriberModal from "../components/home/SubscriberModal";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CategorySection />
      <PopularProducts />
      <SaleBannerSection />
      <HotDealsSection />
      <BestSaleTimer />
      <FeaturedProducts />
      <LatestNews />
      <ClientTestimonials />
      <SubscriberModal />
    </>
  );
};

export default Home;
