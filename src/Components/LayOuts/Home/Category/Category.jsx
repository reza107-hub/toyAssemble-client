import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import XmanToy from "./xManToy";
import FantasticFour from "./FantasticFour";
import Avenger from "./Avenger.jsx";
const Category = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);
  const xManToys = toys.filter((toy) => toy.category == "X Man");
  const avengersToys = toys.filter((toy) => toy.category == "Avengers");
  const fantasticFourToys = toys.filter(
    (toy) => toy.category == "Fantastic Four"
  );
  console.log(xManToys);
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
          <Tab>X-Man</Tab>
          <Tab>Avengers</Tab>
          <Tab>Fantastic Four</Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-wrap gap-5 justify-around mt-2">
            {xManToys.map((toy) => (
              <XmanToy key={toy.id} toy={toy} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-wrap gap-5 justify-around mt-2">
            {avengersToys.map((toy) => (
              <Avenger key={toy.id} toy={toy} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-wrap gap-5 justify-around mt-2">
            {fantasticFourToys.map((toy) => (
              <FantasticFour key={toy.id} toy={toy} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
