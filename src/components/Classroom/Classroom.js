import React, { Component } from "react";

import students from "../../students.json";
import Student from "../Student";

class Classroom extends Component {

    state = {
        students: students
    };

    rollCall = (name, favSubject) => {
        alert(`Hello my name is ${name} and my favorite subject is ${favSubject}`);
    }

    render() {
        return (
            <div>
                <h1>Classroom</h1>
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