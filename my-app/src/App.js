import css from './App.module.css';
// import RenderingLists from './components/RenderingLists';
// import Sidebar from "./components/Sidebar";
// import NavBarForm from "./components/NavBarForm";
import LifeCyclesCDM from './components/LifeCyclesCDM';


function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
     {/* <Sidebar />
      <NavBarForm /> 
      <RenderingLists /> */}
      <LifeCyclesCDM />
      
    </div>
  );
}

export default App;