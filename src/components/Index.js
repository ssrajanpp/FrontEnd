
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import indexdata from '../api/indexdata.json';
import videourl from '../api/indexvideo.json';

export default function Home (){
        return(
            <section className="section fd-section-index">
                <div className="fd-section-inner">
                    {indexdata.map ( (row) => (
                        <div key={row.id}>
                            <h2 className="fd-heading">{row.heading_1} <u>{row.heading_2}</u> {row.heading_1}</h2> 
                            <p className="fd-message">{row.message}</p>
                            <p className="fd-message">{row.message_2}</p>    
                        </div>
                    )
                    )}
                </div>
                {videourl.map ( (url) => (
               <video key={url.id} poster={url.image} id="indexVideo"  className="indexVideo" autoPlay={true} muted loop playsInline  preLoad="auto">
                    <source src={url.webm_url} type="video/webm"/>
                    <source src={url.mp3_url} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                ))}
                <a href="#secondPage" className="fd-arrow-down"><FontAwesomeIcon icon={faChevronDown} /></a>
            </section>
        )
    
}