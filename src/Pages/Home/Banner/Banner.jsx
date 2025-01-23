import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../assets/home/7.avif";
import img2 from "../../../assets/home/2.avif";
import img3 from "../../../assets/home/3.avif";
import img4 from "../../../assets/home/4.avif";
import img5 from "../../../assets/home/5.avif";
import img6 from "../../../assets/home/6.avif";

const Banner = () => {
  const bannerData = [
    {
      img: img1,
      alt: "Image 1",
    },
    {
      img: img2,
      alt: "Image 2",
    },
    {
      img: img3,
      alt: "Image 3",
    },
    {
      img: img4,
      alt: "Image 4",
    },
    {
      img: img5,
      alt: "Image 5",
    },
    {
      img: img6,
      alt: "Image 6",
    },
  ];

  return (
    <Carousel>
      {bannerData.map((item, index) => (
        <div key={index}>
          <img className="max-h-[95vh] w-full" src={item.img} alt={item.alt} />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
