import './App.css'

import phones from "./assets/illustration-phones.svg"
import laptop from "./assets/illustration-laptop-desktop.svg"

function App() {

  return (
    <div className='App'>
      <div className='hero-container'>
        <header>
          <div className='header-left-container'>
            <h2>Blogr</h2>
            <div className='header-left-dropdown-container'>
              <span className='dropdown'>Product</span>
              <span className='dropdown'>Company</span>
              <span className='dropdown'>Connect</span>
            </div>
          </div>
          <div className='header-right-container'>
            <button className='login-btn'>Login</button>
            <button className='signup-btn'>Sign Up</button>
          </div>
        </header>
        <div className='hero'>
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
          <div>
            <button className='freestart-btn'>Start for Free</button>
            <button className='learnmore-btn'>Learn More</button>
          </div>
        </div>
      </div>
      <div className='top-section-container'>
        <h3>Designed for the future</h3>
        <div className='top-section-content'>
          <div className='top-section-content-left'>
            <div>
              <h4>Introducing an extensible editor</h4>
              <p>Blogr features an exceedingly intuitive interface which lets you focus on on thing: creating content. The editor supports managment of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
            </div>
            <div>
              <h4>Robust content managment</h4>
              <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.</p>
            </div>
          </div>
          <svg className='editor-desktop-img' width="925" height="882" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="0%" y1="27.881%" x2="100%" y2="72.119%" id="c"><stop stop-color="#FF8F71" offset="0%"/><stop stop-color="#FF3E55" offset="100%"/></linearGradient><linearGradient x1="0%" y1="41.725%" x2="100%" y2="58.275%" id="e"><stop stop-color="#FF8F71" offset="0%"/><stop stop-color="#FF3E55" offset="100%"/></linearGradient><filter x="-10.9%" y="-11.7%" width="121.8%" height="132.8%" filterUnits="objectBoundingBox" id="b"><feOffset dy="20" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="20" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0.421821759 0 0 0 0 0.554338424 0 0 0 0 0.893710371 0 0 0 0.243444056 0" in="shadowBlurOuter1"/></filter><rect id="a" x="0" y="0" width="642" height="427" rx="15"/></defs><g transform="translate(40)" fill="none" fill-rule="evenodd"><rect fill="#2D2E40" opacity=".08" transform="matrix(1 0 0 -1 0 890)" x="145" y="144" width="600" height="602" rx="300"/><rect stroke="#2D2E40" opacity=".5" transform="matrix(1 0 0 -1 0 882)" x="105.5" y="100.5" width="679" height="681" rx="339.5"/><rect stroke="#2D2E40" opacity=".25" transform="matrix(1 0 0 -1 0 882)" x="5.5" y=".5" width="879" height="881" rx="439.5"/><g transform="translate(0 242)"><mask id="d" fill="#fff"><use xlinkHref="#a"/></mask><g fill-rule="nonzero"><use fill="#000" filter="url(#b)" xlinkHref="#a"/><use fill="url(#c)" xlinkHref="#a"/></g><path d="M3 125h636a3 3 0 013 3v296a3 3 0 01-3 3H3a3 3 0 01-3-3V128a3 3 0 013-3z" fill="#2D2E40" fill-rule="nonzero" mask="url(#d)"/><rect fill="#FFF" fill-rule="nonzero" mask="url(#d)" x="90.523" y="47.709" width="135.785" height="137.165" rx="3"/><ellipse fill="#2D2E40" mask="url(#d)" cx="158.416" cy="116.888" rx="39.306" ry="39.36"/><rect fill="#FFF" fill-rule="nonzero" mask="url(#d)" x="248.939" y="47.709" width="302.538" height="325.617" rx="3"/></g><path d="M209 284c47.125-73.367 81.977-113.013 104.557-118.938 33.87-8.886 23.765 83.14 72.535 72.473 48.77-10.666 54.716-103.974 91.603-108.37 36.887-4.397 56.402 80.946 72.515 88.81 10.742 5.241 24.005-6.094 39.79-34.007" stroke="url(#e)" stroke-width="8" stroke-linecap="round" transform="translate(0 242)"/></g></svg>
        </div>
      </div>
      <div className='mid-section-container'>
      <img className='phones-img' src={phones}></img>
        <div className='mid-section-content'>
          <h3>State of the Art Infrastructure</h3>
          <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
        </div>
      </div>
      <div className='bottom-section-container'>
        <div className='bottom-section-content'>
        <img className='laptop-img' src={laptop}></img>
        <div className='bottom-section-content-right'>
          <div>
            <h4>Free, open, simple</h4>
            <p>
              Blogr is a free and open source application backed by a large community of helpful developers. It supports 
              features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
              and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
            </p>
          </div>
          <div>
            <h4>Powerful tooling</h4>
            <p>
              Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
              capable of producing even the most complicated sites.
            </p>
          </div>
        </div>
        </div>
      </div>
      <div className='footer-container'>
        <div className='footer-content'>
          <h3>Blogr</h3>
          <div>
            <h4>Product</h4>
            <span>Overview</span>
            <span>Pricing</span>
            <span>Marketplace</span>
            <span>Features</span>
            <span>Integrations</span>
          </div>
          <div>
            <h4>Company</h4>
            <span>About</span>
            <span>Team</span>
            <span>Blog</span>
            <span>Careers</span>
          </div>
          <div>
            <h4>Connect</h4>
            <span>Contact</span>
            <span>Newsletter</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </div>
    </div>
  )
}



export default App
