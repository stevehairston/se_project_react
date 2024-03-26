import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const [imageUrl, setUrl] = useState("");
  const handleURLChange = (e) => {
    setUrl(e.target.value);
  };

  const [weather, setWeather] = useState("");
  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
  };

  useEffect(() => {
    if (isOpen) {
      setName("");
      setUrl("");
      setWeather("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="New garment"
      onClose={handleCloseModal}
      name="addGarment"
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="form__label">
        Name
        <input
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          className="form__input"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className="form__label">
        Image
        <input
          type="url"
          name="link"
          minLength="10"
          className="form__input"
          placeholder="Image URL"
          value={imageUrl}
          onChange={handleURLChange}
        />
      </label>
      <p className="modal_type_weather">Select the weather type:</p>
      <div>
        <div>
          <label className="form__input_label-weather">
            <input
              type="radio"
              name="weather-button"
              id="hot"
              className="form__input_button"
              value="hot"
              onChange={handleWeatherChange}
            />
            Hot
          </label>
        </div>
        <div>
          <label className="form__input_label-weather">
          <input
              type="radio"
              name="weather-button"
              id="warm"
              className="form__input_button"
              value="warm"
              onChange={handleWeatherChange}
            />
            Warm
          </label>
        </div>
        <div>
          <label className="form__input_label-weather">
          <input
              type="radio"
              name="weather-button"
              id="cold"
              className="form__input_button"
              value="cold"
              onChange={handleWeatherChange}
            />
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
