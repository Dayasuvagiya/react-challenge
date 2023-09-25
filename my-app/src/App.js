import css from './App.module.css';
import RenderingLists from './components/RenderingLists';
// import Sidebar from "./components/Sidebar";
// import NavBarForm from "./components/NavBarForm";
function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
     {/* <Sidebar />
      <NavBarForm /> */}
      <RenderingLists />
      
    </div>
  );
}

export default App;