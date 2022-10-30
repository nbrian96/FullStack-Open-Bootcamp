import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import Gretingfuntion from './components/pure/gretingFuntion';
import TaskListComponent from './components/container/task_list';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />

				{/* Componente propio Gretting.jsx */}
				{/* <Greeting name="Nisum"></Greeting> */}

				{/** Componente de Ejemplo Funcional */}
				{/* <Gretingfuntion name="Nisum"></Gretingfuntion> */}

				{/** Componente de Listado de Tareas */}
				<TaskListComponent></TaskListComponent>
			</header>
		</div>
	);
}

export default App;
