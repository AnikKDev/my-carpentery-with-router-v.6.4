import React, { useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useUpdateProfile, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import LoadingSpinner from '../../SharedPages/LoadingSpinner';
import toast from 'react-hot-toast';
const SignUp = () => {
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = async data => {
        const { name } = data;
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: name });
        reset();
    };

    // sign in with google
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);


    const [token] = useToken(user || gUser);

    useEffect(() => {
        if (token) {
            navigate('/home')
        }
    }, [token, navigate]);

    if (error || gError) {
        toast.error('Something went wrong with sign up. try again')
    }

    if (loading || gLoading) {
        return <LoadingSpinner />
    };
    return (
        <div className=" flex justify-center lg:h-screen items-center">
            <div class="card w-full md:w-96 items-center shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} class="card-body w-full lg:w-96">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input
                            {...register("name", { required: true })}
                            type="text" placeholder="name" class="input input-bordered" />
                        <span class="label-text text-error">{errors.email?.type === 'required' && "Name is required"}</span>
                    </div>

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input
                            {...register("email", { required: true })}
                            type="email" placeholder="email" class="input input-bordered" />
                        <span class="label-text text-error">{errors.email?.type === 'required' && "Email is required"}</span>
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input
                            {...register("password", { required: true })}
                            type="password" placeholder="password" class="input input-bordered" />
                        <span class="label-text text-error">{errors.password && "Password is required"}</span>


                    </div>
                    <div class="form-control mt-6">
                        <button type="submit" class="btn btn-primary">Sign Up</button>
                    </div>

                </form>
                <div class="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary w-80">SIGN iN WITH GOOGLE</button>

                <label class="mt-2">
                    Already have an account? <Link to="/login" class="btn btn-link px-0">Login</Link>
                </label>
            </div>
        </div>
    );
};

export default SignUp;