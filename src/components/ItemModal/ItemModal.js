import "./ItemModal.css";
const ItemModal = ({ selectedCard, onClose }) => {

  return (
    <div className="itemModal">
      <div className="itemModal__content">
        <button
          className="itemModal_button"
          type="button"
          onClick={onClose}
        ></button>
        <img src={selectedCard.link} alt="card link" className="itemModal__card-image"/>
        <div className="itemModal_card-name">{selectedCard.name}</div>
        <div className="itemModal_card-weather"> Weather: {selectedCard.weather}</div>
      </div>
    </div>
  );
};

export default ItemModal;
