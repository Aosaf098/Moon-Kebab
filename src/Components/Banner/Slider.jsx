import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider1 from "../../../public/assets/home/01.jpg";
import Slider2 from "../../../public/assets/home/02.jpg";
import Slider3 from "../../../public/assets/home/03.png";

const Slider = () => {
  return (
    <>
      <div className="h-[calc(100dvh-129px)] flex items-center justify-center">
        <Carousel
          showArrows={true}
          width={"100%"}
          showThumbs={false}
          infiniteLoop={true}
        >
          <div>
            <img src={Slider1} />
          </div>
          <div>
            <img src={Slider2} />
          </div>
          <div>
            <img src={Slider3} />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
