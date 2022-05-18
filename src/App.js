import './App.css';
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Carousel } from "react-bootstrap"
import Offers from './components/Offers'
import CategoryList from './components/CategoryList';
function App() {
  return (

    <div className="App">
      <Navbar />
      <Offers/>
      <h1 class="h1">Categories</h1>
      <Container>
        <CategoryList />
        </Container>
    </div>

  );
}


export default App;
