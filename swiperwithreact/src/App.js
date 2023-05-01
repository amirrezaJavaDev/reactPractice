import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import About from "./public/about/About";
import Home from "./public/home/Home";
import Contact from "./public/contact/Contact";
import Blog from "./public/blog/page";
import NewsPage from './public/news/NewsPage';
import Dashboard from "./public/dashboard/Dashboard";
function App() {
  return (
    <div className='App'>
          <BrowserRouter>
            <Routes>
              <Route path='/'  element={<Home />}/>
              <Route path='/about'  element={<About />}/>
              <Route path='blog'  element={<Blog />}/>
              <Route path='contact'  element={<Contact />}/>
              <Route path='news'  element={<NewsPage />}/>
              <Route path='dashboard'  element={<Dashboard />}/>
            </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
