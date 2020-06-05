import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const cockpit = props => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
      console.log('[Cockpit.js] useEffect updated');
      setTimeout(() => {
        //alert('Saved data to cloud!');
      }, 1000);
      toggleBtnRef.current.click();
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
    if (props.personsLength <= 2) {
      asssignedClasses.push(classes.Red);
    }
    if (props.personsLength <= 1) {
      asssignedClasses.push(classes.Bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={asssignedClasses.join(' ')}>This is really working!</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
            Toggle Persons
            </button>        
        </div>
    );
}

export default React.memo(cockpit);