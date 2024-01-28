import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { app } from '../../firebase'
import { loginGoogle } from '../features/user/userSlice'



const Oauth = () => {
    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)
    console.log("current", authState.user)
    const firebaseGoggle = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)
            const result = await signInWithPopup(auth, provider)
            // console.log(result)
            // const res = await fetch('http://localhost:5000/api/user/google', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         name: result.user.displayName,
            //         email: result.user.email,
            //         photo: result.user.photoURL,
            //     }),
            // });
            // const data = await res.json();

            // console.log({
            //     name: result.user.displayName,
            //     email: result.user.email,
            //     photo: result.user.photoURL,
            // });
            const values = {
                name: result.user.displayName,
                email: result.user.email,
                avatar: result.user.photoURL,
            }

            dispatch(loginGoogle(values))

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <button onClick={firebaseGoggle} type='button' className='p-2 bg-red-600 text-white rounded-xl w-full'>Continue With Google</button>
    )
}

export default Oauth   