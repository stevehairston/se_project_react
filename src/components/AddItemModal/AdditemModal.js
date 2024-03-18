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
      // onSubmit={(e) => onAddItem({e, name})}
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
          minLength="1"
          maxLength="30"
          className="form__input"
          placeholder="Image URL"
          onChange={handleURLChange}
        />
      </label>
      <p
        className="modal_type_weather"
        value={weather}
        onChange={handleWeatherChange}
      >
        Select the weather type:
      </p>
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
  );
};

export default AddItemModal;
