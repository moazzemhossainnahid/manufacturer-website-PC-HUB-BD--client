import { signOut } from 'firebase/auth';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useSignInWithGithub, useSignInWithFacebook, useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from '../Pages/components/Loading';
import useToken from './useToken';

const useFirebase = () => {
    const [user, loading, error] = useAuthState(auth);
    const [createUserWithEmailAndPassword, cuser] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithEmailAndPassword, suser] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, guser] = useSignInWithGoogle(auth);
    const [SignInWithGithub, gituser] = useSignInWithGithub(auth);
    const [SignInWithFacebook, fuser] = useSignInWithFacebook(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    
    const { register, handleSubmit, reset} = useForm();
    const [token] = useToken(user || cuser || suser || guser || gituser || fuser);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    // let signinError;

    // if(error || cerror || serror || gerror || giterror || ferror){
    //     console.log("there was an error");
    //     signinError = <p className="text-red-500"><small>{error?.message} || {cerror?.message} || {serror?.message} || {gerror?.message} || {giterror?.message} || {ferror?.message}</small></p>
    // }

    const imageUrlKey = 'e738f1d16de6b265746b7f82cc157644';

    // handle Signup form
    const handleSignupform = async(body) => {
        const displayName = body.displayName;
        const email = body.email;
        const password = body.password;

        if(email === '' || password === ''){
            toast.error("Please Input Valid User Information");
            return;
        }

        // if(cerror){
        //     signinError = <p className="text-red-500"><small>{cerror?.message} </small></p>
        // }
    

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({displayName : displayName})
        .then(() => {
            if(token){
                navigate(from, {replace:true} || '/');
            }
            
            reset();
        })

    }

    // handle Signin form
    const handleSigninform = async(body) => {
        const email = body.email;
        const password = body.password;

        if(email === '' || password === ''){
            toast.error("Please Input Valid Email & Password");
            return;
        }

        await signInWithEmailAndPassword(email, password)
        .then(() => {
            if(token){
                navigate(from, {replace:true});
            }
            // toast.success("Signin User Successfully");
            reset();
        })

    }

    // handle Google Signin
    const handleGoogleSignin = async() => {
        await signInWithGoogle()
        .then(() => {
            if(token){
                navigate(from, {replace:true});
            }
            // toast.success("Signin User Successfully");
        })
    }

    // handle Github Signin
    const handleGithubSignin = () => {
        
         SignInWithGithub()
        .then(() => {
            if(token){
                navigate(from, {replace:true});
            }

            // toast.success("Signin User Successfully");
        })
    }

    // handle Facebook Signin
    const handleFacebookSignin = async() => {
        await SignInWithFacebook()
        .then(() => {
            if(token){
                navigate(from, {replace:true});
            }
            // toast.success("Signin User Successfully");
        })
    }

    // handle SignOut
    const handleSignOut = async() => {
        await signOut(auth)
        .then(() => {
            localStorage.removeItem("accessToken");
            // toast.success("User SignOut Successfully", {position: "top-center"});
        })
    }


    // handle Update Profile
    
    const handleUpdateProfile = async(data) => {
        const email = data.email;
        const image = data.photoURL[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageUrlKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const img = result.data.url;
                const profile = {
                    displayName: data.displayName,
                    email: data.email,
                    phone: data.phone,
                    photoURL: img
                }
                
                // send to database
                fetch(`http://localhost:5000/profile/${email}`, {
                    method: 'PUT',
                    headers: {
                        "content-type" : "application/json"
                    },
                    body: JSON.stringify(profile)
                })
                .then(res => res.json())
                .then(inserted => {
                    console.log(inserted);
                    if(inserted.matchedCount){
                        toast.success("Updated Successfully")
                        reset();
                    }else{
                        toast.error("Faild to Update")
                    }
                })

            }
        })
        // await updateProfile({displayName : displayName, photoURL})

    }




    // ------------------------------------------------------------
    const handlePurchase = (data) => {
        const quantity = data.quantity;
        const avQuantity = data.avQuantity;
        const minOrder = data.minOrder;

        if(quantity < minOrder){
            toast.error(`Order At Least ${minOrder} Pcs`);
            return;
        }
        if(quantity > avQuantity){
            toast.error(`Order Processed Maximum ${avQuantity} Pcs`);
            return;
        }

        reset();
    }
    
    return {
        user,
        loading,
        error,
        register,
        handleSubmit,
        handleSignupform,
        handleSigninform,
        handleGoogleSignin,
        handleGithubSignin,
        handleFacebookSignin,
        handleUpdateProfile,
        handleSignOut,
        handlePurchase
    };
};

export default useFirebase;