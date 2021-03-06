import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import useFirebase from '../../../src/Hooks/useFirebase';

const SignupRight = () => {
    const {register, handleSubmit, handleSignupform, handleGoogleSignin, handleGithubSignin, handleFacebookSignin, signinError} = useFirebase();
    return (
        <div className='w-full mx-auto rounded'>
            <h2 className="font-bold text-2xl py-5">Create Account</h2>
            <div className="py-5">
                <button onClick={handleGoogleSignin}><FontAwesomeIcon className='mx-3 p-2 rounded-full border hover:bg-secondary hover:text-white' size='1x' color='gray' icon={faGoogle}/></button>
                <button onClick={handleGithubSignin}><FontAwesomeIcon className='mx-3 p-2 rounded-full border hover:bg-secondary hover:text-white' size='1x' color='gray' icon={faGithub}/></button>
                <button onClick={handleFacebookSignin}><FontAwesomeIcon className='mx-3 p-2 rounded-full border hover:bg-secondary hover:text-white' size='1x' color='gray' icon={faFacebook}/></button>
            </div>
            <span className="text-gray-400">or use your account</span>
            <form onSubmit={handleSubmit(handleSignupform)} action="" className='py-3'>
            <input {...register('displayName')} type="text" placeholder="Enter Your Name" required className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs" />
            <input {...register('email')} type="email" placeholder="Enter Your Email" required className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs" />
            <input {...register('password')} type="password" placeholder="Enter Your Password" required className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs" />
            {signinError}
            <input className='btn btn-outline px-7 btn-secondary my-5 block mx-auto' type="submit" value="SIGN UP" />
            </form>   
            </div>
    );
};

export default SignupRight;