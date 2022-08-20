import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { FormRow } from '../../component';
import { updateUser } from '../../features/user/userSlice';


const Profile = () => {


    let { user, isLoading } = useSelector(store => store.user)
    let dispatch = useDispatch()
    const [userData, setUserData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        lastName: user?.lastName || "",
        location: user?.location || ""
    });

    let handleSubmit = (e) => {
        e.preventDefault()

        let { name, email, location, lastName } = userData
        if (!name || !email || !location || !lastName) {
            toast.error("fill data")
            return
        }

        dispatch(updateUser(userData));
    }

    let handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setUserData({ ...userData, [name]: value })
    }

    return (
        <Wrapper>
            <form className="form" onSubmit={handleSubmit}>
                <h3>profile</h3>
                <div className="form-center">
                    <FormRow type="text" name="name" value={userData.name} handleChange={handleChange} />
                    <FormRow type="text" name="last name" value={userData.lastName} handleChange={handleChange} />
                    <FormRow type="email" name="email" value={userData.email} handleChange={handleChange} />
                    <FormRow type="text" name="location" value={userData.location} handleChange={handleChange} />
                    <button type='submit' className='btn btn-block' disabled={isLoading}>{isLoading ? "loading ..." : "save changes"} </button>
                </div>

            </form>
        </Wrapper>
    );
}

export default Profile;
