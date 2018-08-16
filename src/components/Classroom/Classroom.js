import React, { Component } from "react";

import students from "../../students.json";
import Student from "../Student";

class Classroom extends Component {

    state = {
        students: students,
        studentNameCalled: ""
    };

    rollCall = (name, favSubject) => {
        alert(`Hello my name is ${name} and my favorite subject is ${favSubject}`);
        this.setState({
            studentNameCalled: name
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
                        id={student.id}
                        name={student.name}
                        favoriteSubject={student.favoriteSubject}
                        rollCall = {this.rollCall}
                    />
                ))}
            </div>
        )
    }
}

export default Classroom;