import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = props => {
    useEffect(() => {
      console.log('[Cockpit.js] useEffect updated');
      setTimeout(() => {
        alert('Saved data to cloud!');
      }, 1000);
      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect')
      }
    }, []);

    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect')
      }
    })    

    const asssignedClasses = [];
    let btnClass = '';
    btnClass = classes.Red;
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
      asssignedClasses.push(classes.Red);
    }
    if (props.persons.length <= 1) {
      asssignedClasses.push(classes.Bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={asssignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>
            Toggle Persons
            </button>        
        </div>
    );
}

export default cockpit;