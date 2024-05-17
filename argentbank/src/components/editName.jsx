import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../redux/features/profileSlice";
import '../css/pages/Profile.css'

export default function EditName(){
    
    const dispatch = useDispatch();
    const userProfile = useSelector((state)=> state.profile)
    const token = useSelector((state)=> state.authen.token)

    const [isEditing, setEditing] = useState(false)
    const [editeuserName, setediteuserName] = useState(userProfile.userName)

    useEffect(() =>{
        setediteuserName(userProfile.userName)
    }, [userProfile.userName])

    const handleEditClick = ()=>{
        setEditing(true)
    }
     const handleSaveClick = async (event) =>{
        event.preventDefault()
        setEditing(false)
        try{
            const editeuserNamestring = String(editeuserName);
            const response = await fetch('http://localhost:3001/api/v1/user/profile',{
                method: 'PUT',
                headers:  {
                    accept : 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body:JSON.stringify({
                    userName: editeuserNamestring
                })
            })
            if(response.ok){
                const responseData = await response.json()
                console.log(responseData)
                dispatch(updateProfile(editeuserName))
            } else{
                console.error('Error :', response.statusText)
            }
            
     }
    catch (error){
        console.error('Error :', error)
    }}
    
    // Ferme le formulaire sans sauvgarder les modifications
    const handleCancelClick = () =>{
        setediteuserName(userProfile.userName)
        setEditing(false)
    }

    // Met à jour editeuserName
    const handleUserNameChange = (event) =>{
        setediteuserName(event.target.value)
    }

    return (
        <>
        { isEditing ?(
            <form onSubmit={handleSaveClick}>
                <h1>Edit User Info</h1>
                <div className="form">
                    <div className="edit">
                        <label htmlFor="userName">User Name :</label>
                        <input type="text" id="userName" value={editeuserName} onChange={handleUserNameChange} autoComplete="userName" required />
                    </div>
                    <div className="edit">
                        <label htmlFor="firstName">First Name :</label>
                        <input type="text" id="firstName" value={userProfile.firstName} readOnly />
                    </div>
                    <div className="edit">
                        <label htmlFor="lastName">Last Name :</label>
                        <input type="text" id="lastName" value={userProfile.lastName} readOnly />
                    </div>
                </div>
                <div className="edit-ctaBtn">
                    <button className="edit-button" type="submit">Save</button>
                    <button className="edit-button" type="button" onClick={handleCancelClick}>Cancel</button>
                </div>
            </form>
        ):(
        <>
        <h1> Welcome back <br/>
        {userProfile ? `${userProfile.firstName} ${userProfile.lastName} !!` : 'Loading...'}
        </h1>
        <button className="edit-button" type="button" onClick={handleEditClick}>Edit Name</button>
        </>
        )

        }
        </>
    )
}
