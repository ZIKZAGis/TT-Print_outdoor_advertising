// import logo from './logo.svg';
import './App.scss';
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
      </main>
      <footer>
        <div className='App_container'>
          Footer
        </div>
      </footer>
    </div>
  );
}

export default App;
