import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/Sections/main/Main";
import {Skills} from "./layout/Sections/skills/Skills";
import {Projects} from "./layout/Sections/projects/Projects";
import {Contact} from "./layout/Sections/contact/Contact";
import {Footer} from "./layout/footer/Footer";
import {GoTopBtn} from "./Components/goTopBtn/GoTopBtn";



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
            <GoTopBtn/>
        </div>
    );
}

export default App;

