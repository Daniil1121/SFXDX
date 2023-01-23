interface IPopUpProps {
  popUpText: string;
  setPopUpisOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopUp = ({ popUpText, setPopUpisOpen }: any) => {
  return (
    <div className="popup popup__wrapper">
      <div className="popup__container">
        <h4>{popUpText}</h4>
        <button onClick={() => setPopUpisOpen(false)} className="btn btn-reset">
          Хорошо
        </button>
      </div>
    </div>
  );
};

export default PopUp;
