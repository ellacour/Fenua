import React, {useState} from 'react'
let mailcheck = require('mailcheck');

const Contact = (props) => {
    // state declaration for contact form
    const [name, setName]=useState(undefined);
    const [email, setEmail]=useState(undefined);
    const [message, setMessage]=useState(undefined);
    

    const nameHandleChange=(event)=>{
        setName(event.currentTarget.value)
    }
    
    const emailHandleChange=(event)=>{
        setEmail(event.currentTarget.value)
    }

    const messageHandleChange=(event)=>{
        setMessage(event.currentTarget.value)
    }

    return(
        <section id="contact">
            <div className="inner">
                <section>
                    <form method="post" action="#">
                        <div className="field half first">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" value={name} onChange={(e)=>{setName(undefined)}}   onBlur={nameHandleChange} />
                        </div>
                        <div className="field half">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" value={email} onChange={(e)=>{setEmail(undefined)}}  onBlur={emailHandleChange} />
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows="6" value={message} onChange={(e)=>{setMessage(undefined)}}  onBlur={messageHandleChange} ></textarea>
                        </div>
                        <ul className="actions">
                            <li><input type="submit" value="Send Message" className="special" /></li>
                            <li><input type="reset" value="Clear" onClick={()=>{setName(undefined);setEmail(undefined);setMessage('')}} /></li>
                        </ul>
                    </form>
                </section>
                <section className="split">
                    <section>
                        <div className="contact-method">
                            <span className="icon alt fa-envelope"></span>
                            <h3>Email</h3>
                            <a href="mailto:fenuaproject@gmail.com?subject=Contact%20Fenua%20project">fenuaproject@gmail.com</a>
                        </div>
                    </section>
                    <section>
                        <div className="contact-method">
                            <span className="icon alt fa-phone"></span>
                            <h3>Phone</h3>
                            <span>(000) 000-0000 x12387</span>
                        </div>
                    </section>
                    <section>
                        <div className="contact-method">
                            <span className="icon alt fa-home"></span>
                            <h3>Address</h3>
                            <span>1234 Somewhere Road #5432<br />
                            Nashville, TN 00000<br />
                            United States of America</span>
                        </div>
                    </section>
                </section>
            </div>
        </section>
    )
}

export default Contact
