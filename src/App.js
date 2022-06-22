import 'bootstrap/dist/css/bootstrap.min.css';
import CityDetails from './components/CityDetails/CityDetails';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
function App() {
  return (
    <div>
      <Header></Header>
      <SearchBar></SearchBar>
      <CityDetails></CityDetails>
    </div>
  );
}

export default App;
