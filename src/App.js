import { Fragment, useContext } from "react";
import { Modal } from "./components/Modal";
import { AllContext } from "./context/store";
import Home from "./pages/Home";
import { Portal } from "./Portal";

function App() {

  const {
    statements: { s_modal },
  } = useContext(AllContext);

  return (
    <Fragment>
      {s_modal && <Portal><Modal/></Portal>}
      <Home/>
    </Fragment>
  );
}

export default App;
