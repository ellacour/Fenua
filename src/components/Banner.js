import React from 'react'
import vidSource from '../assets/videos/waves.mp4'

/* eslint-disable jsx-a11y/anchor-is-valid */

const Banner = (props) => (
    <section id="banner" className="major hero-section">
        <video
            className="video-player fullscreen"
            // height="100%"
            // width="100%"
            loop
            muted
            autoPlay
        >
            <source
                src={vidSource}
                type="video/mp4"
            />
        </video>
        <div className="inner">
            <header className="major">
                <h1 className="hero-title">Fenua project</h1>
                <h3 className="hero-subtitle">Be ready, Fenua website launch in early 2021</h3>
                <ul className="icons hero-section-socials">
                    <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
                </ul>
            </header>
        </div>
        {/* <div className="content">
            <ul className="actions">
                <li><a href="#one" className="button next scrolly">Get Started</a></li>
            </ul>
        </div> */}
        <div className="fenua-credits">
            {/* <ul>
                <li><a href="https://www.instagram.com/ryan_borne/" className="">@ryanborne</a></li>
                <li><a href="https://www.coralgardeners.org/" className="">@coralgardeners</a></li>
                <li><a href="https://www.instagram.com/tikanuismith/" className="">@tikanuismith</a></li>
            </ul> */}
        </div>
        <button id="unmuteButton">play</button>
    </section>
)

export default Banner
