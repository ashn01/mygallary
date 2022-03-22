import react, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from 'react-router-dom';

import Project1 from './projects/project1'
import Project2 from './projects/project2'
import Project3 from './projects/project3'

export default function Project(){
    const params =new URLSearchParams(useLocation().search) 
    const [id, setId] = useState<string|null>(null)

    useEffect(()=>{
        setId(params.get('id'))
    },[params])

    switch(id){
        case '1':
            return <Project1/>
        case '2':
            return <Project2/>
        case '3':
            return <Project3/>
        default :
            return <div></div>
    }
}