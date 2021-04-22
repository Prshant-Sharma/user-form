import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function UserForm2() {
    const [personalDetails, setPersonalDetails] = useState([{education: '', profession: '', city: ''}]);

    const history = useHistory();

    const savePersonalDetails = () => {
        let user = [];
        let userData = JSON.parse(localStorage.getItem('userDetails'));
        let obj = {};
        obj['education'] = personalDetails.education;
        obj['profession'] = personalDetails.profession;
        obj['city'] = personalDetails.city;
        user.push(...userData, obj);
        if(userData.length === 1) {
            let userarray = [];
            userarray.push(Object.assign({}, ...user));
            localStorage.setItem('userDetails', JSON.stringify(userarray));
        } else {
            userData.push(Object.assign({}, ...user)); 
            userData.splice(userData.length - 2, 1);
            localStorage.setItem('userDetails', JSON.stringify(userData));
        }
        alert('User added successfully!', history.push('/user-details'));
    }
 
    return (
        <div>
            <h2>Personal Details</h2>
            <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '10%'}}>
                <label style={{fontSize: '18px'}}>Education</label>
                <input 
                    style={{width: '30%', height: '30px', fontSize: '18px'}}
                    type="text" 
                    placeholder="Enter your highest degree" 
                    value={personalDetails.education} 
                    onChange={e => setPersonalDetails({...personalDetails, education: e.target.value})}>
                </input>
            </div>
            <br></br>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <label style={{fontSize: '18px'}}>Profession</label>
                <input 
                    style={{width: '30%', height: '30px', fontSize: '18px'}}
                    type="text" 
                    placeholder="Enter your profession" 
                    value={personalDetails.profession} 
                    onChange={e => setPersonalDetails({...personalDetails, profession: e.target.value})}>
                </input>
            </div>
            <br></br>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <label style={{fontSize: '18px'}}>City</label>
                <input 
                    style={{width: '30%', height: '30px', fontSize: '18px'}}
                    type="text" 
                    placeholder="Enter your city"
                    value={personalDetails.city} 
                    name='gender'
                    onChange={e => setPersonalDetails({...personalDetails, city: e.target.value})}>
                </input>
            </div>
            <br></br>
            <br></br>
            <button style={{padding: '5px', width: '15%', fontSize: '18px'}} onClick={savePersonalDetails} disabled={!personalDetails.education || !personalDetails.profession || !personalDetails.city}>Submit</button>
        </div>
    )
}

export default UserForm2
