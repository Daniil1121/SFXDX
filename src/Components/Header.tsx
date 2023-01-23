import { useState, useEffect } from "react";
import { ReactComponent as LogoSVG } from "./../assets/svg/general/Logo.svg";
import { ReactComponent as MetamaskSVG } from "./../assets/svg/general/metamask.svg";
import { ReactComponent as FrameSVG } from "./../assets/svg/general/Frame.svg";
import { Maybe } from "@metamask/providers/dist/utils";
import Portal from "./otherComponents/Portal";

const Header = () => {
  const [account, setAccount] = useState("");
  const [popUpText, setPopUpText] = useState("");
  const [popUpisOpen, setPopUpisOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (window.ethereum?.isConnected()) {
        connectWallet();
      }
      setLoading(false);
    }, 500);
  }, []);

  const connectWallet = async () => {
    setLoading(true);
    if (typeof window.ethereum === "undefined") {
      setPopUpText("Please install the meta mask extension in your browser");
      setPopUpisOpen(true);
      setLoading(false);
    } else {
      try {
        let response: Maybe<string[]> = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (response![0]) {
          setLoading(false);
          setAccount(response![0]);
          window.ethereum.on("accountsChanged", (response: any) => {
            setAccount(response[0]);
          });
          window.ethereum.on("chainChanged", () => {
            setPopUpText("Network has been changed");
            setPopUpisOpen(true);
          });
          window.ethereum.on("error", () => {
            setPopUpText("Connection error occurred");
            setPopUpisOpen(true);
          });
        }
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    }
  };

  return (
    <div className="header">
      <div className="container header__container">
        <div className="header__logo">
          <LogoSVG className="logo-svg" />
        </div>
        <div className="header__controls">
          {account ? (
            <button className="header__wallet btn btn-reset">
              <MetamaskSVG className="mask-svg" />
              {`${account.split("").slice(0, 10).join("")}...${account
                .split("")
                .slice(account.length - 4, account.length)
                .join("")}`}
              <FrameSVG className="frame-svg" />
            </button>
          ) : (
            <button
              disabled={loading}
              onClick={connectWallet}
              className={`header__connect-button btn btn-reset ${
                loading ? "loading" : ""
              }`}
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
      {popUpisOpen && (
        <Portal>
          <div className="popup popup__wrapper">
            <div className="popup__container">
              <h4>{popUpText}</h4>
              <button
                onClick={() => setPopUpisOpen(false)}
                className="btn btn-reset"
              >
                Хорошо
              </button>
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
};

export default Header;
