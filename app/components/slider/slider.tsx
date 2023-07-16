
import { ISlideImage } from "@/app/interfaces";
import { DotIndicator, SliderContainer, SlideShowControls } from "./style";
import { useEffect, useState, useRef } from "react";
import Image from 'next/image';

type SliderProps = {
  slides: ISlideImage[];
};

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState<ISlideImage>(slides[0]);
  const intervalTime = 3000;
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const nextSlide = () => {
      const activeIndex = slides.findIndex((slide) => slide.id === activeSlide.id);
      const nextIndex = (activeIndex + 1) % slides.length;
      setActiveSlide(slides[nextIndex]);
      timeoutIdRef.current = setTimeout(nextSlide, intervalTime);
    };

    timeoutIdRef.current = setTimeout(nextSlide, intervalTime);

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, [slides, activeSlide, intervalTime]);

  const handleSlideChange = (slide: ISlideImage) => {
    setActiveSlide(slide);
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    timeoutIdRef.current = setTimeout(() => {
      const activeIndex = slides.findIndex((s) => s.id === slide.id);
      const nextIndex = (activeIndex + 1) % slides.length;
      setActiveSlide(slides[nextIndex]);
    }, intervalTime);
  };

  return (
    <SliderContainer>
      <Image src={activeSlide.url} alt={activeSlide.alt || "slide"} fill={true} placeholder = 'blur' blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==" sizes="(max-width: 1120px) 100vw, (max-width: 680px) 50vw" priority={true}/>
      <SlideShowControls>
        {slides.map((slide) => (
          <DotIndicator
            key={slide.id}
            $active={slide.id === activeSlide.id}
            onClick={() => handleSlideChange(slide)}
          />
        ))}
      </SlideShowControls>
    </SliderContainer>
  );
};

export default Slider;
