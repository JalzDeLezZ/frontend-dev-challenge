import ReactDOM from "react-dom";
import { useContext } from "react";
import { AllContext } from "./context/store";
import "./styles/Portal.scss";

const Portal = ({ children }) => {
  const { xDispatch } = useContext(AllContext);

  return ReactDOM.createPortal(
    <div
      className="PortalBackground"
      onClick={() => {
        xDispatch({ type: "TOGGLE" });
      }}
    >
      {children}
    </div>,
    document.getElementById("portal")
  );
};
export { Portal };
