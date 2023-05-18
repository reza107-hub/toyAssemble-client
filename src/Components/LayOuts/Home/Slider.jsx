// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-center items-center gap-24 w-[80%] mx-auto p-10">
            <div>
              <img
                className="md:w-[1600px] rounded-lg"
                src="https://th.bing.com/th/id/OIG.XddaBUC5NMAAbY.xfLgR?pid=ImgGn"
                alt=""
              />
            </div>
            <div className="space-y-4 text-center">
              <p className="text-accent text-5xl font-bold ">
                Unleash Your <br /> Inner Hero
              </p>
              <p className="text-neutral opacity-70">
                Discover a world of adventure with our Avenger Toy Collection.
                Join the mighty heroes on their epic quests and let your
                imagination soar to new heights. Experience the power,
                excitement, and camaraderie of Earth has mightiest heroes as you
                embark on thrilling playtime adventures
              </p>
              <button className="btn btn-secondary normal-case font-bold">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center gap-24 w-[80%] mx-auto p-10">
            <div>
              <img
                className="md:w-[1600px] rounded-lg"
                src="https://th.bing.com/th/id/OIG.qEv9lPdBGjIrQFdUPw.t?pid=ImgGn"
                alt=""
              />
            </div>
            <div className="space-y-4 text-center">
              <p className="text-accent text-5xl font-bold ">
                Unleash Your <br /> Inner Hero
              </p>
              <p className="text-neutral opacity-70">
                Discover a world of adventure with our Avenger Toy Collection.
                Join the mighty heroes on their epic quests and let your
                imagination soar to new heights. Experience the power,
                excitement, and camaraderie of Earth has mightiest heroes as you
                embark on thrilling playtime adventures
              </p>
              <button className="btn btn-secondary normal-case font-bold">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center gap-24 w-[80%] mx-auto p-10">
            <div>
              <img
                className="md:w-[1600px] rounded-lg"
                src="https://th.bing.com/th/id/OIG.F55gr0Ja4GEaUIwI1jwQ?pid=ImgGn"
                alt=""
              />
            </div>
            <div className="space-y-4 text-center">
              <p className="text-accent text-5xl font-bold ">
                Unleash Your <br /> Inner Hero
              </p>
              <p className="text-neutral opacity-70">
                Discover a world of adventure with our Avenger Toy Collection.
                Join the mighty heroes on their epic quests and let your
                imagination soar to new heights. Experience the power,
                excitement, and camaraderie of Earth has mightiest heroes as you
                embark on thrilling playtime adventures
              </p>
              <button className="btn btn-secondary normal-case font-bold">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
