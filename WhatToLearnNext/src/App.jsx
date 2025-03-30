import Header from './Header.jsx'
import Footer from './Footer.jsx'
import CardList from './CardList.jsx'
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop.jsx';
import SearchBar from './SearchBar.jsx';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <CardList />
    </BrowserRouter>
  );
}

export default App;