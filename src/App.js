import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RestaurantList from './components/RestaurantList';
import BookingSteps from './components/BookingSteps';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="font-sans">

      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Hero />
      <RestaurantList />
      <BookingSteps />
      <Footer/>
    </div>
  );
}

export default App;
