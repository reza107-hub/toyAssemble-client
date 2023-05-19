import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Gallery from "./Gallery/Gallery";
import Service from "./Service/Service";

const Home = () => {
  return (
    <div className="bg-slate-50">
      <Banner />
      <div>
        <p className="text-primary font-bold text-3xl text-center mt-20">
          Featured Gallery
        </p>
        <Gallery />
      </div>
      <Category />
      <Service />
    </div>
  );
};

export default Home;
