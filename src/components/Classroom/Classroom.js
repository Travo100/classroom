import React, { Component } from "react";

import students from "../../students.json";
import Student from "../Student";

class Classroom extends Component {

    state = {
        students: students,
        studentNameCalled: "",
        studentsArray: []
    };

    rollCall = (name, favSubject) => {
        alert(`Hello my name is ${name} and my favorite subject is ${favSubject}`);
        
        // making a new array with the student named called myStudents 
        let myStudents = [...this.state.studentsArray, name];
        this.setState({
            studentNameCalled: name,
            studentsArray: myStudents //setting the studentsArray to the new myStudents array
        });
    }

    render() {
        return (
            <div>
                <h1>Classroom</h1>
                <div>
                    <p>The following student was called on {this.state.studentNameCalled}</p>
                </div>
                {this.state.students.map(student => (
                    <Student
                        key={student.id}
                        id={student.id}
                        name={student.name}
                        favoriteSubject={student.favoriteSubject}
                        rollCall = {this.rollCall}
                    />
                ))}
                <div className="students-history">
                    <h2>History of who we called on</h2>
                    <ol>
                        {this.state.studentsArray.map(student => (
                            <li>{student}</li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Classroom;