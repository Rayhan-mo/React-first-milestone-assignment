import React from 'react';
import coursedata from '../../fake data/data';
import { useState } from 'react';
import './Course.css';
import EachCourse from '../EachCourse/EachCourse';
import Cart from '../Cart/Cart';


const Course = () => {
    // const data= coursedata;
    // console.log(data);
    const [courses, setCourses] = useState((coursedata));
    const [cart, setCart] = useState([])

    const handleAddCourse = (course) => {
        // console.log('course added', course);
        const newCart = [...cart, course];
        setCart(newCart);
    }
    return (
        <div className="course-container">
             <div className="course-name">
               {
                  courses.map(course => <EachCourse
                   handleAddCourse = {handleAddCourse}
                   course={course}>{course.name}</EachCourse>)
               }
               </div>
             <div className="cart-container">
                <Cart cart={cart}></Cart>
             </div>
          </div>
    );
};

export default Course;