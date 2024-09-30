import MyForm from './components/MyForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: "Josias", email: "josias@gmail.com", bio:"Eu sou um editor.", role: "Editor"}}/>
    </div>
  );
}

export default App;
