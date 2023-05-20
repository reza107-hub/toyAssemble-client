import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import XmanToy from "./xManToy";
import FantasticFour from "./FantasticFour";
import Avenger from "./Avenger.jsx";

const Category = () => {
  const [toys, setToys] = useState([]);
  const [showAllToys, setShowAllToys] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const categories = [...new Set(toys.map((toy) => toy.category))];

  const toggleShowAllToys = () => {
    setShowAllToys(!showAllToys);
  };

  return (
    <div>
      <div className="mt-20">
        <p className="font-bold text-center text-accent font">TOP CATEGORIES</p>
        <p className="text-3xl text-center mt-3 text-primary font-bold font-serif">
          Shop By Categories
        </p>
      </div>
      <Tabs className="mt-20 w-[80%] mx-auto">
        <TabList className="text-center text-neutral border">
          {categories.map((category) => (
            <Tab key={category}>{category}</Tab>
          ))}
        </TabList>

        {categories.map((category) => (
          <TabPanel key={category}>
            <div className="grid md:grid-cols-3 gap-5 justify-around mt-2">
              {showAllToys
                ? toys
                    .filter((toy) => toy.category === category)
                    .map((toy) => {
                      switch (category) {
                        case "X Man":
                          return <XmanToy key={toy._id} toy={toy} />;
                        case "Avengers":
                          return <Avenger key={toy._id} toy={toy} />;
                        case "Fantastic Four":
                          return <FantasticFour key={toy._id} toy={toy} />;
                        default:
                          return null;
                      }
                    })
                : toys
                    .filter((toy) => toy.category === category)
                    .slice(0, 3)
                    .map((toy) => {
                      switch (category) {
                        case "X Man":
                          return <XmanToy key={toy._id} toy={toy} />;
                        case "Avengers":
                          return <Avenger key={toy._id} toy={toy} />;
                        case "Fantastic Four":
                          return <FantasticFour key={toy._id} toy={toy} />;
                        default:
                          return null;
                      }
                    })}
            </div>
            <div className="text-center">
            {toys.filter((toy) => toy.category === category).length > 3 && (
              <button
                onClick={toggleShowAllToys}
                className="btn btn-primary normal-case mt-4"
              >
                {showAllToys ? "Show Less" : "See More"}
              </button>
            )}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Category;
