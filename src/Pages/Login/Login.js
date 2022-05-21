import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Gicon from '../../assets/icons/Gicon.png';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useToken from '../../CustomHooks/useToken';


function Register() {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    if (loading || gLoading) {
        <div className="flex items-center justify-center ">
            <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    }

    if (gError) {

    }

    const [token] = useToken(user || gUser)

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    if (token) {
        navigate(from, { replace: true });
    }


    const handleFormSubmit = async (data) => {
        await signInWithEmailAndPassword(data.email, data.password)

    }

    return (
        <div className='w-96 mx-auto p-6 rounded-lg items-center mt-3 shadow-2xl'>
            <h3 className='text-2xl font-semibold text-center'>Login</h3>
            <form onSubmit={handleSubmit(handleFormSubmit)}>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">email</span>
                    </label>
                    <input type="email" name='email' placeholder="Your email" class="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid email'
                            }
                        })}
                    />
                    <p className='text-red-600'><small>{error ? error.message : ''}</small></p>
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600"><small>{errors.email.message}</small></span>}
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" class="input input-bordered w-full max-w-xs"
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is Required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 characters or longer'
                            }
                        })}
                    />
                    <p className='text-red-600'><small>{error ? error.message : ''}</small></p>
                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                </div>

                <div class="form-control mt-4 w-full max-w-xs">
                    <input type="submit" value='Login' class="btn btn-accent w-full max-w-xs" />
                </div>
                <p className='py-2'><small>New in Doctors Portal? <Link className='text-primary font-medium' to='/register'>Register now </Link></small></p>
                <div class="divider">or</div>
            </form>
            <button onClick={() => signInWithGoogle()} className='btn btn-ghost w-full max-w-xs'>
                <img className='w-[20px] mr-2' src={Gicon} alt="" />
                Sign in with Google </button>

        </div>
    )
}

export default Register;
