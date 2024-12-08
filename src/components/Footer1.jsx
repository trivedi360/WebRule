

const Footer = ({scroll}) => {
    return (
        <>
            <div className={`footer ${scroll}`}>
                <div className="footer-top">
                    <div className="footer-top-left">
                        <h3>In need of a designer/developer?</h3>
                        <p>I’m currently available for work.
                        </p>
                        <a href="" className="footer-button">" Send a message "</a>
                    </div>
                    <div className="footer-top-left">
                        <a href="tel:+91">+91</a>
                        <br/>
                        <a href="mailto:">tri</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="fb-left">
                        <p>
                        <a href>heheh</a> 
                        <br/>  
                        " kg "
                        <br/>  
                        " sn "                 
                        </p>
                        
                    </div>
                    <div className="fb-middle">
                        <h2>About WEB-RULE</h2>
                        <p>From The Mountain is a culmination of technical expertise in the world of the web & a passion for design. In other words, I build online stuff that looks great. Pop me a message to chat about your next project.</p>
                    </div>
                    <div className="fb-right">
                        <ul>
                            <li>
                                <a href="" target="_blank">A</a>
                            </li>
                            <li>
                            <a href="" target="_blank">B</a>
                            </li>
                            <li>
                            <a href="" target="_blank">C</a>
                            </li>
                            <li>
                            <a href="" target="_blank">D</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;