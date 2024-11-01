// import logo from './logo.svg';
import Header from './components/Header/Header';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className='App_header'>
        <div className='App_container'>
          <Header/>
        </div>
       </header>
       <main>
        <div className='App_container'>
          Main
        </div>
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
