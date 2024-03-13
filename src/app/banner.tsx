import React from 'react';
import Image, { StaticImageData } from 'next/image'; // If using Next.js Image component 


interface BannerProps {
    images: { id: string; image: { id: string; src: StaticImageData; alt: string; }; } [];
    speed?: number;  
  }

const Banner: React.FC<BannerProps> = ({ images, speed = 5000 }) => {
  return (
    <div className="inner-banner"> 
      <div className="wrapper-banner">
      <section style={{ '--speed': `${speed}ms` } as any}> 
          {images.map(({ id, image }) => (
            <div className="img-banner" key={id}>
              <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" /> // Access the 'src' property
            </div>
          ))}
        </section>
        {/* ... Repeat sections as needed */}
      </div>
    </div>
  );
};

export default Banner; 