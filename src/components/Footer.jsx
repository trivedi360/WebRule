const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-left">
                    <div className="footer-company">
                        <div className="footer-logo">
                            <img src="image\idea.png" alt="" />
                        </div>
                        <h2>WebRule</h2>
                    </div>
                    <div>
                        <button className="btn1">Try Webrule</button>
                        <button className="btn2">
                            Watch Demo
                        </button>
                    </div>
                    <div className="social-media">
                        <div>
                            <img src="image\fb.png" alt="" />
                        </div>
                        <div>
                            <img src="image\insta.png" alt="" />
                        </div>
                        <div>
                            <img src="image\git.png" alt="" />
                        </div>
                        <div>
                            <img src="image\github.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="footer-right">
                    <div>
                        <h3>Address :</h3>
                        <h4>N-110, Lalita Park, East Delhi</h4>
                        <h4>Pincode : 110092</h4>
                        <div class="contact-info">
                            <div class="phone">
                                <span>Ph: </span>
                                <a href="tel:+919304163735">+919304163735</a>
                                <span class="separator">|</span>
                                <a href="tel:+919128422105">+919128422105</a>
                            </div>
                            <div class="email">
                                <span>Email: </span>
                                <a href="mailto:webrule@gmail.com">webrule@gmail.com</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <h6>@2024 Webrule.com All rights reserved.</h6>
                <h6>Terms of Service</h6>
            </div>
        </div>
    )
}

export default Footer