import React from 'react'
import './styles/Navigation.css'

function Navigation() {
    return (
        <>
            <nav className="navbar navbar-expand-lg NavBar">
                <div className="container-fluid">
                    <div className='logoIcon'>
                        <i className='bx bx-health' ></i>
                        <a className="navbar-brand" href="/">MedicApp</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse options" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <a className="nav-link" href="/blog">Blog</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/about">Nosotros</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/citas">Citas</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation