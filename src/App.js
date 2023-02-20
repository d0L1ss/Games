import HeaderNav from "./components/HeaderNav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './components/HeaderNav.css'
import './components/Header.css'
import './components/Main.css'
import './components/Footer.css'
import ModalNav from "./components/ModalNav";
import ModalNavv from "./components/ModalNavv";


function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
