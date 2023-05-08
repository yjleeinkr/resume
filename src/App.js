import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import DetailModal from "./components/DetailModal";

function App() {
  const [isModalVisible, setIsModalVisibile] = useState(false);
  const [clickedProject, setClickedProject] = useState('');

  const showModal = (boolean, projectName) =>{
    setIsModalVisibile(boolean);
    setClickedProject(projectName);
  }
  return (
    <div className="App">
      <DetailModal
        isModalVisible={isModalVisible}
        showModal={showModal}
        project={clickedProject}
      />
      <Container showModal={showModal} />
    </div>
  );
}

export default App;
