import "./ItemModal.css";
const ItemModal = ({ selectedCard, onClose }) => {

  return (
    <div className="modal">
      <div className="modal__content">
        <button
          className="modal_button"
          type="button"
          onClick={onClose}
        ></button>
        <img src={selectedCard.link} alt="card link" />
        <div>{selectedCard.name}</div>
        <div> Weather type: {selectedCard.weather}</div>
      </div>
    </div>
  );
};

export default ItemModal;
