import "./App.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

// importiert Header, main und footer
// main importiert dann alles was in Main ist
// verschachteln, erstmal aber ohne children props
// Komponenten dort importieren, wo sie auch gebraucht werden.
