import "./ItemModal.css";
const ItemModal = ({ selectedCard, onClose, onDeleteCard }) => {
  return (
    <div className="itemModal">
      <div className="itemModal__content">
        <button
          className="itemModal_button"
          type="button"
          onClick={onClose}
        ></button>
        <img
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
          className="itemModal__card-image"
        />
        <div className="itemModal_card-name">{selectedCard.name}</div>
        <button
            type="text"
            className="itemModal_button-delete"
            onClick={onDeleteCard}
          >
            Delete item
          </button>
        <div className="itemModal_card-weather">
          {" "}
          Weather: {selectedCard.weather}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
