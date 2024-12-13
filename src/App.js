import Navebar from './components/Navebar';
import Categories from './components/Categories';
import Saleimg from './components/Saleimg';
import Recommended from './components/Recommended';
import Topic from './components/Topic';
import Popular from './components/Popular';
import Footer from './components/Footer';

function App() {
  return (
 <div>
   <Navebar></Navebar>
    <Categories></Categories>
    <Saleimg></Saleimg>
    <Recommended></Recommended>
    <Topic></Topic>
    <Popular></Popular>
    <Footer></Footer>
 </div>
  );
}

export default App
