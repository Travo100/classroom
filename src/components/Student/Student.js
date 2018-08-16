import React from "react";

const Student = (props) => (
    <div className="student">
        <p>Id: {props.id}</p>
        <p>Name: {props.name}</p>
        <p>Favorite Subject: {props.favoriteSubject}</p>
        <button onClick={() => props.rollCall(props.name, props.favoriteSubject)}>Call on student</button>
    </div>
);

export default Student;