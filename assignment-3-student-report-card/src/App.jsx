import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Anuroop", score: 75 },
    { id: 2, name: "Rahul", score: 35 },
  ]);

  // Add student
  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    };
    setStudents([...students, newStudent]);
  };

  // Update score
  const updateScore = (id, newScore) => {
    const updated = students.map((student) =>
      student.id === id
        ? { ...student, score: Number(newScore) }
        : student
    );
    setStudents(updated);
  };

  return (
    <div className="container">
      <Header />
      <AddStudentForm addStudent={addStudent} />
      <StudentTable students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;