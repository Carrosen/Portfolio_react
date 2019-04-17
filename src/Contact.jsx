import React from "react"

const Contact = () => {
    return (
            <div className="content-wrapper">
                <div className="flex md:items-center flex-wrap mb-4">
                    <div className="w-full lg:w-3/4 md:w-1/2">
                        <h1 className="content-text">Contact Me</h1>

                            <form class="w-full max-w-xs" name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                                <div class="md:flex md:items-center mb-6">
                                    <div class="md:w-1/3">
                                        <p class="hidden">
                                            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                                        </p>

                                        <p>
                                            <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                            Email:
                                            </label>
                                        </p>
                                    </div>
                                        <div class="md:w-2/3">
                                            <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" id="inline-full-name" type="text" placeholder="Email" />
                                        </div>
                                    </div>
                                        <div class="md:flex md:items-center mb-6">
                                            <div class="md:w-1/3">
                                        <p>
                                            <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
                                            Message:
                                            </label>
                                            </p>
                                        </div>
                                        <div class="md:w-2/3">
                                        <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" id="inline-username" type="Message:" placeholder="Message" />
                                        </div>
                                    </div>

                                    <div class="md:flex md:items-center">
                                        <div class="md:w-1/3"></div>
                                            <div class="md:w-2/3">
                                        <p>
                                            <button class="shadow bg-purple hover:bg-purple-light focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" type="submit">Send</button>
    
                                        
                                        </p>
                                        </div>
                                </div>
                                </form> 

                    </div>
    
                </div>
            </div>
        )
};


export default Contact
