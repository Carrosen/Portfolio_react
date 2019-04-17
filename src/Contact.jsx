import React from "react"

const Contact = () => {
    return (
            <div className="content-wrapper">
                <div className="flex flex-wrap mb-4">
                    <div className="w-full lg:w-3/4 md:w-1/2">
                        <h1 className="content-text">Contact Me</h1>

                            <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                                <p class="hidden">
                                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                                </p>
                                <p>
                                    <label>Email: <input type="text" name="email" /></label>
                                </p>
                                <p>
                                    <label>Message: <textarea name="message"></textarea></label>
                                </p>
                                <p>
                                    <button type="submit">Send</button>
                                </p>
                            </form>

                    </div>
    
                </div>
            </div>
        )
};


export default Contact
