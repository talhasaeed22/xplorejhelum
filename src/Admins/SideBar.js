import React, { useState } from 'react'
import './Sidebar.css'
import logo from '../Images/Adminlogo.png'
import { Link, useLocation } from 'react-router-dom'
import Alert from '../Components/Models/Alert'
const SideBar = () => {
    const [error, setError] = useState(false)
    const [message1, setMessage1] = useState('');
    const [message2, setMessage2] = useState('')
    let location = useLocation();
    const signout = () => {
        localStorage.setItem('hotel', "");
        localStorage.setItem('token', '');
        localStorage.setItem('name', '');
        localStorage.setItem('email', '');
        setError(true);
        setMessage1('Success');
        setMessage2('Logged Out Successfuly')
        // navigate('/login')
    }
    return (
        <>

            <nav className='sidenav '>
                <ul>
                    <li>
                        <Link to="/Admin" className='sidelogo'>
                            <img src={logo} alt="Logo" />
                            <span className='side-nav-item text-white'>plore Jhelum</span>
                        </Link>
                    </li>

                </ul>

                <ul className='lower'>
                    <li>
                        <Link to="/Admin" className={`Link ${location.pathname === '/Admin' && 'sideactive'}`}>
                            <i className="fa sidefa fa-home" aria-hidden="true"></i>
                            <span className='side-nav-item'>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Profile" className={`Link ${location.pathname === '/Profile' && 'sideactive'}`}>
                            <i className="fa sidefa fa-user" aria-hidden="true"></i>
                            <span className='side-nav-item'>Profile</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/Request" className={`Link ${location.pathname === '/Request' && 'sideactive'}`}>
                            <i className="fa sidefa fa-th-list" aria-hidden="true"></i>
                            <span className='side-nav-item'>Requests</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Guests" className={`Link ${location.pathname === '/Guests' && 'sideactive'}`}>
                            <i className="fa sidefa fa-users" aria-hidden="true"></i>
                            <span className='side-nav-item'>Guests</span>
                        </Link>
                    </li>
                   
                    <li>
                        <Link to='/Login' onClick={signout} className='side-logout Link'>
                            <i className="fa sidefa fa-sign-out" aria-hidden="true"></i>
                            <span className='side-nav-item'>Logout</span>
                        </Link>
                    </li>
                </ul>

            </nav>
            {error && <Alert message1={message1} message2={message2} setError={setError} />}

        </>
    )
}

export default SideBar