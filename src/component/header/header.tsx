import react, { useEffect, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import '../../css/header/header.scss'

export default function Header(){
    const params =new URLSearchParams(useLocation().search) 
    const [id, setId] = useState<string|null>(null)

    useEffect(()=>{
        setId(params.get('id'))
    },[params])


    return (
    <div className="header">
        <ul>
            <li>{/* need fix, get current url and calculate what is next and previous */}
                <Link to={`/project?id=${id!=null&&parseInt(id)-1}`}>previous</Link>
            </li>
            <li>
                <Link to={`/project?id=${id!=null&&parseInt(id)+1}`}>next</Link>
            </li>
        </ul>
    </div>
    )
}