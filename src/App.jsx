// import logo from './logo.svg';
import './App.scss';
import Header from './components/Header'
import { LandingSection } from './components/LandingSection';

function App() {
	const landingSections = [
		{
			name: "main",
			infoPosition: "center"
		},
		{
			name: "renewableEnergy",
			infoPosition: "bottom"
		},
		{
			name: "productsAndServices",
			infoPosition: "right"
		},
		{
			name: "aboutUs",
			infoPosition: "left"
		},
	]

	return (
		<div className="App">
			<Header />

			{landingSections.map((section, index) => (
        <LandingSection key={index} section={section} />
      ))}
		</div>
	);
}

export default App;
