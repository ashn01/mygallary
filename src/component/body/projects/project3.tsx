import react, { useEffect } from 'react'
import { gsap } from "gsap";

import '../../../css/project3/project3.scss'

export default function Project3(){

    useEffect(()=>{
        gsap.to(".box", 1,{
            y:()=>{
                return '200%'
            }
        })
        gsap.to(".panel", 1,{
            y:()=>{
                return '-100%'
            }
        })
        gsap.to("h1",1,{
            opacity:()=>{
                return 1
            }
        }).delay(1)
    },[])

    return(
        <div className="project3-main">
            <div className="project3-content">
                <div className={`box`}>
                    <h1>Hello this is project 3<br/>My Awesome project awaits you</h1>
                </div>
                <div className={`panel`}/>
            </div>
        </div>
    )
}