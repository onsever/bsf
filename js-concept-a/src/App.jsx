import React from "react";
import "./App.css";

export default function App() {
    const students = [
        { name: "John", age: 20, grades: [50, 75, 89] },
        { name: "Gerald", age: 25, grades: [88, 34, 93] },
        { name: "Khan", age: 22, grades: [44, 21, 37] },
    ];

    const calculateAverageGrade = (grades) => {
        const sum = grades.reduce((total, grade) => total + grade, 0);
        return sum / grades.length;
    }

    const printStudentInfo = (student) => {
        const averageGrade = calculateAverageGrade(student.grades);
        console.log(`${student.name} (${student.age}) - ${averageGrade}`);
    }

    students.forEach(printStudentInfo);

    return (
        <div className="container">
            <h1>Student Information Table</h1>
            <div className="line" />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Average Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.name}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{parseFloat(calculateAverageGrade(student.grades)).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
