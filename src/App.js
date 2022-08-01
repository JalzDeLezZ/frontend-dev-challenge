import { Fragment, useContext } from "react";
import { Modal } from "./components/Modal";
import { AllContext } from "./context/store";
import Home from "./pages/Home";
import { Portal } from "./Portal";
import './styles/DarkMode.scss';

function App() {
  const {
    statements: { s_modal, s_darkMode },
  } = useContext(AllContext);

  return (
    <Fragment>
      <div className={s_darkMode ? "general--darkMode" : null}>
        {s_modal && (
          <Portal>
            <Modal />
          </Portal>
        )}
        <Home />
      </div>
    </Fragment>
  );
}

export default App;
