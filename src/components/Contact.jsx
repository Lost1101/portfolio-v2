const Contact = () => {
    return(
        <>
            <div className="Contact">
                <h1>Contact</h1>
                <div>
                    <p>More in connect with me ~</p>
                    <div className="Contact-form">
                        <div>
                            <form action="https://getform.io/f/35da3c10-7774-4f57-a7ac-c8bb96600bd0" method="POST">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" name="name" placeholder="Your Name..." className="Form-input" required/>
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" placeholder="Your Name..." required/>
                                <label htmlFor="message">Message</label>
                                <textarea name="message" rows={4} placeholder="Leave a Message..."></textarea>
                                <input type="hidden" name="_gotcha" style={{display:'none'}}/>
                                <button type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;