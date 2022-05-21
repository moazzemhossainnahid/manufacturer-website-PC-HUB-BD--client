import { signOut } from 'firebase/auth';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useSignInWithGithub, useSignInWithFacebook, useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const useFirebase = () => {
    const [user, loading, error] = useAuthState(auth);
    const [createUserWithEmailAndPassword, cuser, cloading, cerror] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithEmailAndPassword, suser, sloading, serror] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [SignInWithGithub, gituser, gitloading, giterror] = useSignInWithGithub(auth);
    const [SignInWithFacebook, fuser, floading, ferror] = useSignInWithFacebook(auth);


    
    const { register, handleSubmit, formState: { errors }, reset} = useForm();

    

    // handle Signup Form
    const handleSignupForm = async(body) => {
        const email = body.email;
        const password = body.password;

        if(email === '' || password === ''){
            toast.error("Please Input Valid User Information");
            return;
        }

        await createUserWithEmailAndPassword(email, password)
        .then(() => {
            toast.success("User Created Successfully");
            reset();
        })

    }

    // handle Signin Form
    const handleSigninForm = async(body) => {
        const email = body.email;
        const password = body.password;

        if(email === '' || password === ''){
            toast.error("Please Input Valid Email & Password");
            return;
        }

        await signInWithEmailAndPassword(email, password)
        .then(() => {
            toast.success("Signin User Successfully");
            reset();
        })

    }

    // handle Google Signin
    const handleGoogleSignin = async() => {
        await signInWithGoogle()
        .then(() => {
            toast.success("Signin User Successfully");
        })
    }

    // handle Github Signin
    const handleGithubSignin = async() => {
        await SignInWithGithub()
        .then(() => {
            toast.success("Signin User Successfully");
        })
    }

    // handle Facebook Signin
    const handleFacebookSignin = async() => {
        await SignInWithFacebook()
        .then(() => {
            toast.success("Signin User Successfully");
        })
    }

    // handle SignOut
    const handleSignOut = async() => {
        await signOut(auth)
        .then(() => {
            toast.success("User SignOut Successfully", {position: "top-center"});
        })
    }
    
    return {
        user,
        errors,
        register,
        handleSubmit,
        handleSignupForm,
        handleSigninForm,
        handleGoogleSignin,
        handleGithubSignin,
        handleFacebookSignin,
        handleSignOut
    };
};

export default useFirebase;