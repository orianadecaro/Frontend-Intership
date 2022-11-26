import React from 'react';
import Background from '../../components/Background/Background';
import FormLogin from '../../components/FormLogin/FormLogin';
import { selectUser } from '../../redux/slice/UserSlice';
import {useSelector} from 'react-redux';
import Home from '../Home/Home';

function Login() {
    const user = selectUserSelector(selectUserctUser);

    return (
        <Background>
            {  user ? <Home/> : <FormLogin /> }
        </Background>
    )
}

export default Login;
