import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'

function UserDetails() {
    const [userData, setUserData] = useState([]);

    const history = useHistory();

    const editIcon = <FontAwesomeIcon icon={faPen} />
    const deleteIcon = <FontAwesomeIcon icon={faTrash} />

    useEffect(() => {
        getLocalStorageData();
    }, [userData]);

    const getLocalStorageData = () => {
        setUserData(JSON.parse(localStorage.getItem('userDetails')) || []);
    };

    const deleteUser = (id) => {
        if(window.confirm('Are you sure to delete?')) {
            let localStorageData = JSON.parse(localStorage.getItem('userDetails'));
            localStorageData.splice(id, 1);
            localStorage.setItem('userDetails', JSON.stringify(localStorageData));
        }
    }

    return (
        <div>
            <h2>User Details</h2>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>     
                <h3>Name</h3>
                <h3>Age</h3>
                <h3>Gender</h3>
                <h3>Education</h3>
                <h3>Profession</h3>
                <h3>City</h3>
                <h3>Actions</h3>
            </div>
            {userData.map((user, index) => {
                return(
                    <div key={index} style={{display: 'flex', justifyContent: 'space-evenly'}}>
                        <div style={{marginLeft: '-150px'}}>
                            <h4>{user.id}</h4>
                        </div>
                        <div style={{marginLeft: '-100px'}}>
                            <h4>{user.name}</h4>
                        </div>
                        <div style={{marginLeft: '-65px'}}>
                            <h4>{user.age}</h4>
                        </div>
                        <div style={{marginLeft: '-40px'}}>
                            <h4>{user.gender}</h4>
                        </div>
                        <div style={{marginLeft: '-80px'}}>
                            <h4>{user.education}</h4>
                        </div>
                        <div style={{marginLeft: '-50px'}}>
                            <h4>{user.profession}</h4>
                        </div>
                        <div style={{marginLeft: '-50px'}}>
                            <h4>{user.city}</h4>
                        </div>
                        <div>
                            <button style={{height: '25px'}} onClick={() => history.push('/edit-user/' + user.id)}>{editIcon}</button>
                            <button style={{height: '25px'}} onClick={() => deleteUser(index)}>{deleteIcon}</button>
                        </div>
                    </div>
                )
            })}
            <button onClick={() => history.push('/')}>Go to home</button>
            {!userData.length ? 'No user added' : ''}
        </div>
    )
}

export default UserDetails
