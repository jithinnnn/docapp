import './App.css';
import { Routes, Route } from "react-router-dom";
import { app, database } from './firebaseConfig';
import Docs from './Components/Docs';
import EditDocs from './Components/EditsDocs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Docs database={database} />} />
      <Route path="/editDocs/:id" element={<EditDocs database={database}/>} />
    </Routes>
  );
}

export default App;