import Carousel from "react-material-ui-carousel";
import image1 from "../assets/image-1.png";
import image2 from "../assets/image-2.png";
import image3 from "../assets/image-3.png";
import image4 from "../assets/image-4.png";

const CarouselSection = () => {
  const items = [image1, image2, image3, image4];

  return (
    <Carousel
      indicatorContainerProps={{
        style: {
          position: "absolute",
          bottom: "0",
          textAlign: "right",
          zIndex: 1,
          backgroundColor: "#0000008f",
          padding: "10px",
          paddingRight: "5vw",
        },
      }}
      className="mt-4"
    >
      {items.map((item, index) => (
        <img
          key={index}
          src={item}
          alt="carousel"
          className="w-full h-96 object-cover"
        />
      ))}
    </Carousel>
  );
};

export default CarouselSection;
