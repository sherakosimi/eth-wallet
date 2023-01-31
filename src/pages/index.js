import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import TransferSection from "../components/Transfer";
import TransactionSection from "../components/Transactions";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFive,
} from "../components/InfoSection/Data";
import Services from "../components/Services";
import { useAuth } from "../contexts/AuthContext";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const { currentUser } = useAuth();
  console.log(currentUser);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  if (currentUser) {
    return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} auth={true} />
        <HeroSection auth={true} />
        <TransferSection {...homeObjOne} />
        <TransactionSection {...homeObjFive} />

        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} auth={false} />
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
        <Footer />
      </>
    );
  }
}

export default Home;
