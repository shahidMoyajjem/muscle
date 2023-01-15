import Image from 'next/image'
import React from 'react'
import Title from 'utils/title/title'
import Style from './Explore.module.scss'
import FromTo from '../../assets/fromTo.png'
import ExploreImg from '../../assets/travelArts/99.png'

const Explore = () => {
    return (
        <div className={Style.container} >
            <Title  />

            <div className={Style.explorContainer}>

                <div className={Style.explorer}>

                    <div className={Style.fromTo}>
                        <div className={Style.fromBoxContainer}>
                        <div className={Style.fromBox}>
                            <p>To The City/Country</p>
                            <input type="text" name="" id="" />
                        </div>

                        <div className={Style.fromBox}>
                            <p>To The City/Country</p>
                            <input type="text" name="" id="" />
                        </div>                        <div className={Style.fromBox}>
                            <p>To The City/Country</p>
                            <input type="text" name="" id="" />
                        </div>        
                        <div className={Style.fromBox}>
                            <p>To The City/Country</p>
                            <input type="text" name="" id="" />
                        </div>                
                        <div className={Style.fromBox}>
                            <p>To The City/Country</p>
                            <input type="text" name="" id="" />
                        </div>

                        <div className={Style.toBox}>
                            <p>From The City/Country</p>
                            <input type="text" name="" id="" />
                        </div>
                        </div>
                        <Image className={Style.fromToImage} src={FromTo} alt='explore' />

                    </div>

                    <div className={Style.exploreImg}>
                        <Image src={ExploreImg} alt='explore' />
                    </div>

                </div>

                <div className={Style.explorerBtn}>
                    <p>Lets Go</p>
                </div>
            </div>
        </div>
    )
}

export default Explore
