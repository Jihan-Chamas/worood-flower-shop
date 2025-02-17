import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FlowerCarousel = ({ products }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      slidesPerView={4}
      // autoplay={{ delay: 3000 }}
      pagination={false} // 👈 This removes the dots
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <div className="flower-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button className="shop-btn">Buy now</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FlowerCarousel;
