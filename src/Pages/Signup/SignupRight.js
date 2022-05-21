import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import Button from '../components/Button';

const SignupRight = () => {
    return (
        <div className='w-full mx-auto rounded'>
            <h2 className="font-bold text-2xl py-5">Create Account</h2>
            <div className="py-5">
                <FontAwesomeIcon className='mx-3 p-2 rounded-full border' size='1x' color='gray' icon={faFacebook}/>
                <FontAwesomeIcon className='mx-3 p-2 rounded-full border' size='1x' color='gray' icon={faGoogle}/>
                <FontAwesomeIcon className='mx-3 p-2 rounded-full border' size='1x' color='gray' icon={faGithub}/>
            </div>
            <span className="text-gray-400">or use your account</span>
            <form action="" className='py-3'>
            <input type="text" placeholder="Enter Your Name" class="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs" />
            <input type="email" placeholder="Enter Your Email" class="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs" />
            <input type="password" placeholder="Enter Your Password" class="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs" />
            </form>
            <Button>SIGN UP</Button>      
            </div>
    );
};

export default SignupRight;