import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
function App() {
  return (
    <div>
      <Header></Header>
      <SearchBar></SearchBar>
      <Card></Card>
    </div>
  );
}

export default App;
