import react from 'react'
import { Link } from 'react-router-dom'
import '../../css/header/header.scss'

export default function header(){
    return (
    <div className="header">
        <ul>
            <li>{/* need fix, get current url and calculate what is next and previous */}
                <Link to="/">previous</Link>
            </li>
            <li>
                <Link to="/project2">next</Link>
            </li>
        </ul>
    </div>
    )
}