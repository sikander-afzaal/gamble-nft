import { useEffect } from "react";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import Landing from "./Pages/Landing/Landing";
const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
};

export default App;
