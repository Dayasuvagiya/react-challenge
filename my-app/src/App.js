import css from './App.module.css';
// import RenderingLists from './components/RenderingLists';
// import Sidebar from "./components/Sidebar";
// import NavBarForm from "./components/NavBarForm";
// import LifeCyclesCDM from './components/LifeCyclesCDM';
// import LifeCyclesCDU from './components/LifeCyclesCDU';
// import LifeCyclesCWU from './components/LifeCyclesCWU';
// import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
     {/* <Sidebar />
      <NavBarForm /> 
      <RenderingLists /> 
      <LifeCyclesCDM /> 
      <LifeCyclesCDU /> 
      <LifeCyclesCWU /> 
      <ControlledForm />*/}
      <UncontrolledForm />
      
    </div>
  );
}

export default App;