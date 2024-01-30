import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Body from '../components/Body'
import Button from '../components/Button'
import Input from '../components/Input'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { profileUser, updateUser, updateUserProfile } from '../features/user/userSlice'
import { stables } from '../constants/stables'
import { IoAdd } from "react-icons/io5";

import {
    deleteObject,
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../../firebase';


const Profile = () => {
    const userState = useSelector(state => state?.auth?.user)
    const profileUpdated = useSelector(state => state?.auth?.userProfileUpdated)
    const usereUpdated = useSelector(state => state?.auth?.userUpdated)
    const profile = useSelector(state => state?.auth?.profile)
    // const token = useSelector(state => state?.user.userInfo.token)
    // console.log(userState.token)

    const dispatch = useDispatch()
    // const navigate = useNavigate()
    // const authState = useSelector(state => state.auth)

    const Schema = Yup.object().shape({
        username: Yup.string().required("username is required"),
        email: Yup.string().email("email must be valid").required("email is required"),
        password: Yup.string(),
        // Cpassword: Yup.string().required("password confirm password is required").oneOf([Yup.ref('password'), null], 'Must match "password" field value'),
    });

    const [formData, setFormData] = useState({});


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            username: profile?.username || "",
            email: profile?.email || "",
            password: profile?.password || "",
            // Cpassword: '',
        },
        validationSchema: Schema,
        onSubmit: values => {
            const data = { values, token: userState.token }
            dispatch(updateUser(data))
            // alert(JSON.stringify(values, null, 2));

        },
    })

    useEffect(() => {
        dispatch(profileUser(userState.token))
    }, [profileUpdated, usereUpdated])


    const handleDelete = () => {
        const values = new FormData()
        values.append('profilePicture', "")
        const data = { values, token: userState.token }
        dispatch(updateUserProfile(data))
        setPicture("");

        //firebase
        const storage = getStorage(app);
        const desertRef = ref(storage, profile?.avatar);
        deleteObject(desertRef).then(() => {
        }).catch((error) => {
            console.log(error)
        });
    }

    const [imagePercent, setImagePercent] = useState(0);
    const [picture, setPicture] = useState('')
    const [imageError, setImageError] = useState(false);

    const handleSubmit = () => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + picture.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, picture);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setImagePercent(Math.round(progress));
            },
            (error) => {
                setImageError(true);
                console.log(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const values = { avatar: downloadURL }
                    const data = { values, token: userState.token }
                    dispatch(updateUser(data))
                    setImagePercent(0)
                });
            }
        );
    }

    const handleChoose = (e) => {
        const file = e.target.files[0];
        setPicture(file);
        // console.log(file)
    }

    // let img3 = { URL.createObjectURL(picture) }
    // const image = "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
    // const image0 = stables + profile?.avatar
    // const display = profile?.avatar ? image0 : image

    return (
        <Body>
            <div className='min-h-screen flex justify-center items-center gap-3'>
                <div className='flex gap-5 -mt-32'>
                    <div className='px-5 border-2 rounded-xl py-5'>
                        <h1 className='text-center font-semibold text-2xl mb-5'>Avatar</h1>
                        <div className='space-y-3'>
                            {
                                profile?.avatar
                                    ?
                                    <img className="h-48 w-48 object-cover rounded-full border-2 border-slate-200" src={profile?.avatar} alt="" />
                                    :
                                    !picture
                                        ?
                                        <label htmlFor="picture" className='h-48 w-48 flex items-center justify-center'>
                                            <div className='bg-slate-100 w-full h-full rounded-full flex items-center justify-center'>
                                                <IoAdd className='text-6xl' />
                                            </div>
                                        </label>
                                        :
                                        <label htmlFor="picture" className='w-full h-full'>
                                            <img className="object-cover h-48 w-48 rounded-full " src={URL.createObjectURL(picture)} alt="" />
                                        </label>
                            }
                            <input onChange={handleChoose} className='hidden' id='picture' type="file" />
                            <p className='text-center text-sm'>{imagePercent > 0 ? <p>{imagePercent} %</p> : "Maximum size 1 mb"}</p>
                            {
                                profile?.avatar
                                    ?
                                    <button className='p-2 bg-red-500 text-white rounded-xl w-full ' type='button' onClick={handleDelete}>Delete</button>
                                    :
                                    picture
                                        ?
                                        <button className='p-2 bg-green-500 text-white rounded-xl w-full ' onClick={handleSubmit} type='button'>submit</button>
                                        :
                                        <label htmlFor='picture' className='text-center p-2 bg-black text-white rounded-xl w-full ' type='button'>Choose</label>
                            }
                        </div>
                    </div>
                    <form onSubmit={formik.handleSubmit} className='w-96  py-5 rounded-xl border-2 '>
                        <h1 className='text-center font-semibold text-2xl mb-5'>Profile</h1>
                        <div className='px-5 space-y-3'>

                            <div>
                                <Input
                                    type="text"
                                    name="username"
                                    label="Username"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleChange}
                                    value={formik.values.username}
                                />
                                {formik.errors.username && formik.touched.username ? <p className='text-red-500'>{formik.errors.username}</p> : null}
                            </div>
                            <div>
                                <Input
                                    type="text"
                                    name="email"
                                    label="Email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleChange}
                                    value={formik.values.email}
                                />
                                {formik.errors.email && formik.touched.email ? <p className='text-red-500'>{formik.errors.email}</p> : null}
                            </div>
                            <div>
                                <Input
                                    type="password"
                                    name="password"
                                    label="Password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleChange}
                                    value={formik.values.password}
                                />
                                {formik.errors.password && formik.touched.password ? <p className='text-red-500'>{formik.errors.password}</p> : null}
                            </div>
                            {/* <div>
                            <Input
                                type="password"
                                name="Cpassword"
                                label="Confirm Password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleChange}
                                value={formik.values.Cpassword}
                            />
                            {formik.errors.Cpassword && formik.touched.Cpassword ? <p className='text-red-500'>{formik.errors.Cpassword}</p> : null}
                        </div> */}
                            <Button />
                        </div>
                    </form>
                </div>
            </div>
        </Body>
    )
}

export default Profile