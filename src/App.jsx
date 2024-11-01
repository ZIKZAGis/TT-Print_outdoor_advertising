// import logo from './logo.svg';
import Header from './sections/Header/Header';
import Intro from './sections/Intro/Intro';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className='App_header'>
        <Header/>
      </header>
      <main>
        <Intro/>
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
