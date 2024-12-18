// import logo from './logo.svg';
import './App.scss';
import Contacts from './sections/Contacts/Contacts';
import Footer from './sections/Footer/Footer';
import Gallery from './sections/Gallery/Gallery';
import Header from './sections/Header/Header';
import Intro from './sections/Intro/Intro';
import OurServices from './sections/OurServices/OurServices';

function App() {
  return (
    <div className="App">
      <header className='App_header'>
        <Header/>
      </header>
      <main>
        <Intro/>
        <OurServices/>
        <Gallery/>
        <Contacts/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
