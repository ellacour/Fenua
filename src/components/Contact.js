import React from 'react'

/* eslint-disable jsx-a11y/anchor-is-valid */

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form name="Contact Form" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="Contact Form" />
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required/>
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
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
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>Somewhere over the rainbow<br />
                        Where dreams come true<br /></span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
