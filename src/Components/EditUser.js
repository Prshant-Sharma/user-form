import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function EditUser() {
    const [selectedId, setSelectedId] = useState(null);
    const [userData, setUserData] = useState([]);
    const [selectedUser, setSelectedUser] = useState([]);
    const [userToBeUpdate, setUserToBeUpdate] = useState([{userName: '', age: '', gender: '', profession: '', city: '', education: ''}])

    const { id } = useParams();

    useEffect(() => {
        setSelectedId(id);
        getLocalStorageData();
        getSelectedUser();
    }, [selectedId]);
        
    const getLocalStorageData = () => {
        setUserData(JSON.parse(localStorage.getItem('userDetails')));
        console.log(userData);
    }

    const getSelectedUser = () => {
        setSelectedUser(userData.filter(user => user.id === 1619096603353));
        console.log(selectedId);
        console.log(selectedUser);
    }

    const updateUser = (user) => {
        let localStorageData = JSON.parse(localStorage.getItem('userDetails'));
        let obj = {};
        obj['id'] = user.id;
        obj['name'] = userToBeUpdate.userName || user.name;
        obj['age'] = userToBeUpdate.age || user.age;
        obj['gender'] = userToBeUpdate.gender || user.gender;
        obj['profession'] = userToBeUpdate.profession || user.profession;
        obj['city'] = userToBeUpdate.city || user.city;
        obj['education'] = userToBeUpdate.education || user.education;
        localStorageData.push(obj);
        localStorage.setItem('userDetails', JSON.stringify(localStorageData));
    }

    return (
        <div>
            <h2>Edit User</h2>
            {selectedUser.map((user, index) => {
                return(
                    <div key={index}>
                        <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '5%'}}>
                            <label style={{fontSize: '18px'}}>Name</label>
                            <input 
                                style={{width: '30%', height: '30px', fontSize: '18px'}}
                                type="text" 
                                placeholder="Enter full name" 
                                defaultValue={user.name} 
                                onChange={e => setUserToBeUpdate({...userToBeUpdate, userName: e.target.value})}>
                            </input>
                        </div>
                        <br></br>
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <label style={{fontSize: '18px'}}>Age</label>
                            <input 
                                style={{width: '30%', height: '30px', fontSize: '18px'}}
                                type="text" 
                                placeholder="Enter your age" 
                                defaultValue={user.age} 
                                onChange={e => setUserToBeUpdate({...userToBeUpdate, age: e.target.value})}>
                            </input>
                        </div>
                        <br></br>
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <label style={{fontSize: '18px'}}>Gender</label>
                            <input 
                                style={{width: '30%', height: '30px', fontSize: '18px'}}
                                type="text" 
                                placeholder="Enter your age" 
                                defaultValue={user.gender} 
                                onChange={e => setUserToBeUpdate({...userToBeUpdate, gender: e.target.value})}>
                            </input>
                        </div>
                        <br></br>
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <label style={{fontSize: '18px'}}>Education</label>
                            <input 
                                style={{width: '30%', height: '30px', fontSize: '18px'}}
                                type="text" 
                                placeholder="Enter your age" 
                                defaultValue={user.education} 
                                onChange={e => setUserToBeUpdate({...userToBeUpdate, education: e.target.value})}>
                            </input>
                        </div>
                        <br></br>
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <label style={{fontSize: '18px'}}>Profession</label>
                            <input 
                                style={{width: '30%', height: '30px', fontSize: '18px'}}
                                type="text" 
                                placeholder="Enter your age" 
                                defaultValue={user.profession} 
                                onChange={e => setUserToBeUpdate({...userToBeUpdate, profession: e.target.value})}>
                            </input>
                        </div>
                        <br></br>
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <label style={{fontSize: '18px'}}>City</label>
                            <input 
                                style={{width: '30%', height: '30px', fontSize: '18px'}}
                                type="text" 
                                placeholder="Enter your age" 
                                defaultValue={user.city} 
                                onChange={e => setUserToBeUpdate({...userToBeUpdate, city: e.target.value})}>
                            </input>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <button style={{padding: '5px', width: '15%', fontSize: '18px'}} onClick={() => updateUser(user)}>Update</button>
                    </div>
                )
            })}
        </div>
    )
}

export default EditUser
