"use client"
import Promo from "./components/promo/promo";
import { HeroContainer, GalleryContainer, Main } from "./home.style"
import BookGallery from "./components/gallery/gallery"
import Slider from "./components/slider/slider"
import { ISlideImage } from "./interfaces"
import { useEffect } from "react"
import { createRoot } from 'react-dom/client';
import { slides } from "./data";
import type { Metadata } from 'next'



export default function Books() {
useEffect(() => {
  const promoContainer = document.getElementById("promo-container");
  const root = createRoot(promoContainer!);
  root.render(<Promo />);
  return () => {
    promoContainer && 
    root.unmount();
  };
}, [])

  return (
      <Main>
        <HeroContainer>
            <Slider slides={slides}/>
        </HeroContainer>      
        <GalleryContainer>
            <BookGallery />
        </GalleryContainer>
      </Main>
  )
}