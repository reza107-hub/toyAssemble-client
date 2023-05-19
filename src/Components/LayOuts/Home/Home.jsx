import Banner from "./Banner";
import Category from "./Category/Category";
import Gallery from "./Gallery/Gallery";

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
    </div>
  );
};

export default Home;
