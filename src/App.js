import './App.css';
import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="App">
dep-inclusions
      <h1>Studen ID: 101388704</h1>
      <h1>Studen ID: Edgar Gomez</h1>

      <h1>Studen ID: Put Your Student ID</h1>
      <h1>Studen ID: Put Your Student Name</h1>
main
      <h1>Student Information System</h1>
      <h5>Powered By: moxDroid Labs Inc. || DevOps</h5>
      <StudentForm addStudent={addStudent} />
      Developerd By: Pritesh Patel
      <StudentList students={students} />
    </div>
  );
};

export default App;
