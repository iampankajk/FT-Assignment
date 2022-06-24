import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card/Card';
import Category from './components/Category/Category';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
function App() {
  return (
    <div>
      <Header></Header>
      <SearchBar></SearchBar>
      <Card></Card>
      <Category></Category>
    </div>
  );
}

export default App;
