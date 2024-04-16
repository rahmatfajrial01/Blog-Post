import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Body from '../components/Body'
import Cart from '../components/Cart'
import { getUserFavorite } from '../features/user2/userSlice'

const Favorite = () => {
    const dispatch = useDispatch()
    const token = useSelector(state => state?.auth?.user?.token)
    const userFavorite = useSelector(state => state?.user?.userFavorite)
    const addedToFavorite = useSelector(state => state?.user?.addedToFavorite)

    console.log(userFavorite)

    useEffect(() => {
        dispatch(getUserFavorite(token))
    }, [addedToFavorite])
    return (
        <section className='px-5'>
            <Body>
                <div className='flex justify-center font-semibold text-xl mt-5 '>
                    {userFavorite?.favorite.length > 0
                        ?
                        <h1>Favorite</h1>
                        :
                        <h1>Favorite Post Is Empty</h1>}
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 mt-5'>
                    {
                        userFavorite?.favorite && userFavorite?.favorite.map((item, key) =>
                            <Cart
                                key={key}
                                _id={item?._id}
                                title={item?.title}
                                photo={item?.photo}
                                createdAt={item?.createdAt}
                                avatar={item?.user?.avatar}
                                username={item?.user?.username}
                                slug={item?.slug}
                            />
                        )
                    }
                </div>
            </Body>
        </section >
    )
}

export default Favorite   