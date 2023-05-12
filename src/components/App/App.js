import "../App/App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather } from "../../utils/weatherApi";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather().then((data) => {
      const main = data.main;
      const temperature = main && main.temp;
      const temp = Math.ceil(temperature);
      setTemp(temp);

      const location = data.name;
      setLocation(location);
    });
  }, [temp]);

  return (
    <div>
      <Header onCreateModal={handleCreateModal} currentLocation={location} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer className="footer" />
      {activeModal === "create" && (
        <ModalWithForm title="New garment" onClose={handleCloseModal} name="addGarment">
          <label className="form__label">
            Name
            <input type="text" name="name" minLength="1" maxLength="30" className="form__input" placeholder="Name"/>
          </label>
          <label className="form__label">
            Image
            <input type="url" name="link" minLength="1" maxLength="30" className="form__input" placeholder="Image URL"/>
          </label>
          <p className="modal_type_weather">Select the weather type:</p>
          <div>
            <div>
              <input type="radio" id="hot" value="hot" />
              <label className="form__input_label-weather">Hot</label>
            </div>
            <div>
              <input type="radio" id="warm" value="warm" />
              <label className="form__input_label-weather">Warm</label>
            </div>
            <div>
              <input type="radio" id="cold" value="cold" />
              <label className="form__input_label-weather">Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
