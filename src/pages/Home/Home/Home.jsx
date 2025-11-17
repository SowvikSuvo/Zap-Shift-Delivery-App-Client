import React from "react";
import Banner from "../Banner/Banner";
import HowItWorks from "../../../components/HowItWorks ";
import Services from "../../../components/Services";
import Brands from "../Brands/Brands";
import Features from "../../../components/Features";
import PromoSection from "../../../components/PromoSection";
import Reviews from "../Reviews/Reviews";
import ModernFaqSection from "../../../components/ModernFaqSection";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <Services></Services>
      <Brands></Brands>
      <Features></Features>
      <PromoSection></PromoSection>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
      <ModernFaqSection></ModernFaqSection>
    </div>
  );
};

export default Home;
