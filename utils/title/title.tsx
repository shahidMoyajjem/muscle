import React from 'react'
import Image from 'next/image'
import Style from './title.module.scss'
import BottomTitle from '../../assets/bottomTitle.png'

interface messageType {
    message?: string
}

const Title = ({message}:messageType) => {
    return (
        <div className={Style.titleHolder} >
            <div className={Style.title} >
                Explore <span> The World</span>
            </div>
            <Image className={Style.upImage} src={BottomTitle} alt='Image of a Plane' />

        </div>
    ) 
}

export default Title
