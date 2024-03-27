import "../App/App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import AddItemModal from "../AddItemModal/AddItemModal";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Route, Switch } from "react-router-dom";
import api from "../../utils/api";
import Profile from "../Profile/Profile";
import "../Profile/Profile.css";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const onAddItem = (values) => {
    api
      .addItem(values)
      .then((item) => {
        const items = [item, ...clothingItems];
        setClothingItems(items);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const handleCardDelete = (selectedCard) => {
    api
      .deleteItem(selectedCard._id)
      .then(() => {
        setClothingItems((cards) =>
          cards.filter((c) => c._id !== selectedCard._id)
        );
        handleCloseModal();
      })
      .catch(console.error);
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const main = data.main;
        const temperature = main && main.temp;
        const weather = {
          temperature: {
            F: Math.round(temperature),
            C: Math.round(((temperature - 32) * 5) / 9),
          },
        };
        setTemp(weather);
        const location = data.name;
        setLocation(location);
      })
      .catch((err) => {
        console.log(`An error has occurred ${err}`);
      });
  }, []);

  useEffect(() => {
    api
      .getItemList()
      .then((items) => {
        setClothingItems(items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <Header onCreateModal={handleCreateModal} currentLocation={location} />
      <Switch>
        <Route exact path="/">
          <Main
            weatherTemp={temp}
            clothingItems={clothingItems}
            onSelectCard={handleSelectedCard}
            onDeleteCard={handleCardDelete}
          />
        </Route>
        <Route path="/profile">
          <Profile
            clothingItems={clothingItems}
            onSelectCard={handleSelectedCard}
            onCreateModal={handleCreateModal}
            onDeleteCard={handleCardDelete}
          />
        </Route>
      </Switch>
      <Footer className="footer" />
      {activeModal === "create" && (
        <AddItemModal
          handleCloseModal={handleCloseModal}
          isOpen={activeModal === "create"}
          onAddItem={onAddItem}
        />
      )}
      {activeModal === "preview" && (
        <ItemModal
          selectedCard={selectedCard}
          onClose={handleCloseModal}
          onDeleteCard={handleCardDelete}
        />
      )}
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
