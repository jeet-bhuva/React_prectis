import { Link, useNavigate } from "react-router-dom"

function Home() {

    const navigate = useNavigate() 

    const NavGetPage = (url) => {
        navigate(url)
    }

    return (
        <div>
            <h1 style={{ color: 'rosybrown' }}>This Is Home Page</h1>
            <p>A home page is generally the primary web page which a visitor navigating to a website from a search engine will see, and it may also serve as a landing page to attract visitors.</p>
            <p>In some cases, the home page is a site directory, particularly when a website has multiple home pages.</p>
            <Link to='/about'>Go To About Page</Link><br />
            <button type="button" className="btn btn-info" onClick={() => NavGetPage('/about')}>Go To About Page</button>
            <br/>
            <button type="button" className="btn btn-dark" onClick={() => NavGetPage('/filter')}>Go To Filter Page</button>

        </div>
    )
}

export default Home