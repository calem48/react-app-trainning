import React from 'react';
import { useState } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import { Logo, FormRow } from '../component';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';


const initialState = {
    name: "",
    password: "",
    email: "",
    isMember: true
}

const Register = () => {
    const [value, setValues] = useState(initialState);
    let { user, isLoading } = useSelector(state => state.user)
    let dispatch = useDispatch()

    let handleChange = (e) => {
        let name = e.target.name
        let val = e.target.value
        setValues({ ...value, [name]: val })
    }

    let handelSubmit = (e) => {
        e.preventDefault()
        let { name, password, email, isMember } = value
        if (!email || !password || (!isMember && !name)) {
            toast.error("fill the inputs")
            return
        }

        if (isMember) {
            dispatch(loginUser({ email: email, password: password }))
            return
        }

        if (!isMember) {
            dispatch(registerUser({ name: name, email: email, password: password }))
            return
        }
    }




    let toggolMember = () => {
        setValues({ ...value, isMember: !value.isMember })
    }

    return (
        <Wrapper className='full-page'>
            <form className="form" onSubmit={handelSubmit}>
                <Logo />
                <h3>{value.isMember ? "Login" : "Register"}</h3>
                {
                    !value.isMember &&
                    <FormRow type="text" name="name" handleChange={handleChange} value={value.name} />
                }
                <FormRow type="email" name="email" handleChange={handleChange} value={value.email} />
                <FormRow type="password" name="password" handleChange={handleChange} value={value.password} />
                <button type="submit" className="btn btn-block">{isLoading ? "loading" : "submit"}</button>
                {/* <button type="button" className="btn btn-block btn-hipster">demo app</button> */}
                <p>
                    {value.isMember ? "Not a member yet?" : "Already a member?"}
                    <button
                        onClick={toggolMember}
                        type="button" className="member-btn">{!value.isMember ? "Login" : "Register"}
                    </button>
                </p>
            </form>
        </Wrapper>
    );
}

export default Register;
