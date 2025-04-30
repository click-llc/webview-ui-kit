import { TouchEvent, useEffect, useRef } from 'react';
import { AUTO_PLAY_INTERVAL } from '../countants';

import styles from './BannerSlider.module.scss';

export type BannerSliderProps = {
  autoplay?: boolean;
  autoplayInterval?: number;
  slides: { id: number | string; image: string }[];
};

export const BannerSlider = ({ autoplay = true, autoplayInterval = AUTO_PLAY_INTERVAL, slides }: BannerSliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isOneSlide = slides.length > 0 && slides.length === 1;
  let currentIndex = 0;

  const showNextSlide = () => {
    if (sliderRef.current) {
      currentIndex = (currentIndex + 1) % slides.length;
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  };

  const showPrevSlide = () => {
    if (sliderRef.current) {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) showNextSlide();
    if (diff < -50) showPrevSlide();
  };

  useEffect(() => {
    if (isOneSlide) {
      return;
    }

    let interval: NodeJS.Timeout | null = null;

    if (autoplay) {
      interval = setInterval(showNextSlide, autoplayInterval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, autoplayInterval]);

  return (
    <div
      className={styles.slider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slides} ref={sliderRef}>
        {slides.map(slide => (
          <div key={slide.id} className={styles.slide}>
            <img className={styles.slideImg} src={slide.image} alt={`Slide ${slide.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
