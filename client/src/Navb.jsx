import React from 'react'
import "./navb.css"

const Navb = () => {
    return (
        <div className='NavigationBar navbar navbar-expand-lg'>
            <div className='B-Logo'>
                <a class="navbar-brand" href="#"><img src='/src/assets/images/logo.svg' /> </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className='Nav-Links'></div>

        </div>
    )
}

export default Navb
