import "../App/App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData} from "../../utils/weatherApi";

// const currentDate = new Date().toLocaleString("default", {
//   month: "long",
//   day: "numeric",
// });

function App() {
  // const weatherTemp = "102 °F";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0)
  const [location, setLocation] = useState(0)

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview")
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather().then((data) => {
      // const temp = parseWeatherData(data);
      const main = data.main
      const temperature = main && main.temp;
      const temp = Math.ceil(temperature);
      setTemp(temp)

      const location = data.name
      setLocation(location)

    })
console.log(temp);

  }, [temp]);

  return (
    <div>
      <Header onCreateModal={handleCreateModal} currentLocation={location}/>
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer className="footer" />
      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal}>
          <label>
            Name
            <input type="text" name="name" minLength="1" maxLength="30" />
          </label>
          <label>
            Image
            <input type="url" name="link" minLength="1" maxLength="30" />
          </label>
          <p>Select the weather type:</p>
          <div>
            <div>
              <input type="radio" id="hot" value="hot" />
              <label>Hot</label>
            </div>
            <div>
              <input type="radio" id="warm" value="warm" />
              <label>Warm</label>
            </div>
            <div>
              <input type="radio" id="cold" value="cold" />
              <label>Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" &&
        <ItemModal selectedCard={selectedCard}  onClose={handleCloseModal} />
      }
    </div>
  );
}

export default App;
