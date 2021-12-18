import React from "react";  
// import '../../src/App.css';
 
function Footer() {
	return (
        
        <div className="footer" id="footer">
            <div className='img-link'>
                <a href="https://github.com/lydiawdesign" target="_blank"><img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" className="icon"/></a>
                <a href="https://www.linkedin.com/in/lydia-williamson/" target="_blank"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
            </div>
            <p className='footer-info'>
                &copy; Lydia Williamson  |  <a href="https://github.com/lydiawdesign/react_portfolio_LW/blob/main/react-portfolio/src/img/Lydia%20Williamson%20Resume%202021%20September%20Updated.pdf" className="link">download resume</a>
            </p>

        </div>
    
	);
}

export default Footer;