function ImagePopup({card, isOpen, isClose, closeTouchOverlay}) {
  return (
    <div onClick={e => closeTouchOverlay(e)} className={`popup popup-images popup_type_images ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup-images__container">
          <button className="popup__close" type="button" onClick={isClose}></button>
          <figure className="popup-images__figure">
            <img className="popup-images__img" src={card?.link} alt={card?.name} />
            <figcaption className="popup-images__figcaption">{card?.name}</figcaption>
          </figure>
        </div>
      </div>
  )
}

export default ImagePopup;