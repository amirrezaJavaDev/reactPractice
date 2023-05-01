import {BrowserRouter,Routes,Route,Link,NavLink} from "react-router-dom";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
//deference betweem link and  navlink is when using navlink create a class name with active element
function App() {
  return (
    <BrowserRouter>
        <header>
            <nav>
                <h1>Job-react</h1>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="about">About</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <Routes>
                <Route index element={<Home />}/>
                <Route path="about" element={<About />}/>
            </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App
