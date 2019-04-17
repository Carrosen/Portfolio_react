import React from "react"

const scrollToTop = () => {
    // window.scrollTo(0, 0)
    let mainSection = document.getElementById('main-section')
    mainSection.scrollTop = 0
    document.documentElement.scrollTop = 0

}

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-content">
                Made with React
                <button onClick={scrollToTop}>Scroll To Top</button>
            </div>
        </div>
    )
}

export default Footer