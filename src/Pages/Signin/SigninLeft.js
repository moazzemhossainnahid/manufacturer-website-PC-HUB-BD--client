import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const SigninLeft = () => {
    return (
        <div className='w-full mx-auto rounded'>
            <h2 className="font-bold text-2xl py-5">Sign In</h2>
            <div className="py-5">
                <FontAwesomeIcon className='mx-3 p-2 rounded-full border' size='1x' color='gray' icon={faFacebook}/>
                <FontAwesomeIcon className='mx-3 p-2 rounded-full border' size='1x' color='gray' icon={faGoogle}/>
                <FontAwesomeIcon className='mx-3 p-2 rounded-full border' size='1x' color='gray' icon={faGithub}/>
            </div>
            <span className="text-gray-500">or use your account</span>
            <form action="" className='py-3'>
            <input type="email" placeholder="Enter Your Email" class="input bg-slate-100 my-2 block mx-auto input-ghost w-full max-w-xs" />
            <input type="password" placeholder="Enter Your Password" class="input bg-slate-100 my-2 block mx-auto input-ghost w-full max-w-xs" />
            </form>
            <span className="text-gray-400"><Link to='/forgotpassword'>Forgot Your Password?</Link></span>
            <Button>SIGN IN</Button>
            
        </div>
    );
};

export default SigninLeft;