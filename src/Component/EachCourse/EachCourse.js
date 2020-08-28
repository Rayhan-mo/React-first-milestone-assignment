import React from 'react';
import './EachCourse.css';

const EachCourse = (props) => {
    // console.log(props);
  

    const {name, image, price, instructor}=props.course;
    return (
        <div className="each-container">
            <div className="container">
                <img className="image" src={image} alt=""/>
                <h3>{name}</h3>
                <p>Price:${price}</p>
                <h5>Instructor: {instructor}</h5>
                <button className="bg-warning"
                 onClick = {() => props.handleAddCourse(props.course)}
                >Enroll Now</button>
            </div>
        </div>
    );
};

export default EachCourse;