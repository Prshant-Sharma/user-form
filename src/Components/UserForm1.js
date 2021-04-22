import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function UserForm1() {
    const [basicDetails, setBasicDetails] = useState([{userName: '', age: '', gender: ''}]);

    const history = useHistory();

    const saveBasicDetails = () => {
        let user = [];
        let userData = JSON.parse(localStorage.getItem('userDetails'));
        let obj = {};
        obj['id'] = parseInt(Date.now());
        obj['name'] = basicDetails.userName;
        obj['age'] = basicDetails.age;
        obj['gender'] = basicDetails.gender;
        if(userData === null) {
            user.push(obj);
            localStorage.setItem('userDetails', JSON.stringify(user));
        } else {
            userData.push(obj);
            localStorage.setItem('userDetails', JSON.stringify(userData));
        }
        history.push('/user-personal-details');
        // localStorage.setItem('userDetails', JSON.stringify(basicDetails))
    }

    return (
        <div>
            <h2>Basic Details</h2>
            <button onClick={() => history.push('/user-details')}>User list</button>
            <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '10%'}}>
                <label style={{fontSize: '18px'}}>Name</label>
                <input 
                    style={{width: '30%', height: '30px', fontSize: '18px'}}
                    type="text" 
                    placeholder="Enter full name" 
                    value={basicDetails.userName} 
                    onChange={e => setBasicDetails({...basicDetails, userName: e.target.value})}>
                </input>
            </div>
            <br></br>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <label style={{fontSize: '18px'}}>Age</label>
                <input 
                    style={{width: '30%', height: '30px', fontSize: '18px'}}
                    type="text" 
                    placeholder="Enter your age" 
                    value={basicDetails.age} 
                    onChange={e => setBasicDetails({...basicDetails, age: e.target.value})}>
                </input>
            </div>
            <br></br>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <label style={{fontSize: '18px'}}>Gender</label>
                <input 
                    style={{width: '30%', height: '30px', fontSize: '18px'}}
                    type="text" 
                    placeholder="Enter your gender"
                    value={basicDetails.gender} 
                    name='gender'
                    onChange={e => setBasicDetails({...basicDetails, gender: e.target.value})}>
                </input>
            </div>
            <br></br>
            <br></br>
            <button style={{padding: '5px', width: '15%', fontSize: '18px'}} onClick={saveBasicDetails} disabled={!basicDetails.userName || !basicDetails.age || !basicDetails.gender}>Next</button>
        </div>
    )
}

export default UserForm1
