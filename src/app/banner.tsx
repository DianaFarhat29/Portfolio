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
      {images.map(({ id, image }) => (
      <section style={{ '--speed': `${speed}ms` } as any} > 
            <div  key={id}>
              <Image id={image.id} src={image.src} alt={image.alt}  className="img-banner" />
            </div>
        </section>
         ))}
        {/* ... Repeat sections as needed */}
      </div>
    </div>
  );
};

export default Banner; 