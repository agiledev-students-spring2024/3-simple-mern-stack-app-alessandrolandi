import { Link } from 'react-router-dom'
import './About.css'
import React, { useEffect, useState } from 'react';

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
    const [Data, setData] = useState({});
    useEffect(() => {
        fetch("http://localhost:5002/about")
        .then( response => {
            if(!response.ok){
                throw new Error('Network not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            setData(data);
        })
        .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <>
        <h1> About </h1>

        <img src= {Data.image} alt="profile" width="210" height="256"/>

        <p>{Data.paragraph}</p>

        </>

    );
}
// make this component available to be imported into any other file
export default About
