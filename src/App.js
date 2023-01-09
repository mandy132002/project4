import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Info from './components/Info';
import Interests from './components/Interests';

function App() {
  return (
    <>
      <div className='mt-10 container bg-gray-100 grid w-1/4 border border-black rounded-xl mx-auto place-content-center'>
        <Info/>
        <About/>
        <Interests/>
        <Footer/>
      </div>
      
    </>
  );
}

export default App;
