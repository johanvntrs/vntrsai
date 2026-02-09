'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

interface PlaceholderLogo {
  name: string;
  src: string;
}

interface TrustedLogosCarouselProps {
  logos: PlaceholderLogo[];
}

const STEP_MS = 2600;
const CARD_WIDTH_PX = 196;
const GAP_PX = 20;

export function TrustedLogosCarousel({ logos }: TrustedLogosCarouselProps) {
  const [items, setItems] = useState(logos);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    setItems(logos);
  }, [logos]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const timer = setInterval(() => {
      setIsSliding(true);
    }, STEP_MS);

    return () => clearInterval(timer);
  }, []);

  const doubledItems = useMemo(() => [...items, items[0]].filter(Boolean), [items]);

  const handleTransitionEnd = () => {
    if (!isSliding || items.length < 2) {
      return;
    }

    setItems((prev) => [...prev.slice(1), prev[0]]);
    setIsSliding(false);
  };

  return (
    <div className="mx-auto w-full max-w-[920px] overflow-hidden">
      <div
        className={`flex gap-5 ${isSliding ? 'transition-transform duration-700 ease-out' : ''}`}
        style={{
          transform: isSliding ? `translateX(-${CARD_WIDTH_PX + GAP_PX}px)` : 'translateX(0)',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {doubledItems.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex min-w-[196px] items-center justify-center rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-3 shadow-[0_18px_30px_-26px_rgba(26,35,55,0.85)]"
          >
            <Image
              src={logo.src}
              alt={`${logo.name} logo placeholder`}
              width={160}
              height={48}
              className="h-12 w-auto max-w-[160px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
