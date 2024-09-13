import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item text-white my-8 pt-8">
      <SectionTitle heading={"Featured Item"} subHeading={"check it out"} />
      <div className="md:flex gap-4 justify-center items-center lg:pb-20 lg:pt-12 lg:px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2024</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quibusdam a culpa labore explicabo laudantium, provident suscipit et
            ex in.
          </p>
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
