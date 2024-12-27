import * as React from "react";
import './com.css';

class MyComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="title">Student Registration Form</h1>
                <label className="text" htmlFor="name">Student Name</label>
                <input className="text1" type="text" name="" id="name" placeholder="Student name" /><br></br>

                <label  className="text" htmlFor="email">Student Email</label>
                <input  className="text1" type="text" name="" id="email" placeholder="Student email" /><br></br>
                
                <label className="text" htmlFor="phone">Student Phone</label>
                <input  className="text1" type="text" name="" id="phone" placeholder="Student Phone" /><br></br>

                <label  className="text" htmlFor="address">Student address</label>
                <input  className="text1"type="text" name="" id="address" placeholder="Student address" /><br></br>

                <label  className="text"  htmlFor="gender">Gender</label>
                <select className="text1" id="gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select><br></br>
                
                <input className="btn" type="button" value="Register" />
                
            </div>
        );
    }
}
export default MyComponent;