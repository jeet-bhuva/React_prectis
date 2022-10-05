import { Link } from "react-router-dom"


function About() {
    return (
        <div>
            <div>
                <h1 style={{ color: 'goldenrod' }}>This Is About Page</h1>
                <p>A page is one side of a leaf (or sheet) of paper, parchment or other material (or electronic media) in a book, magazine, newspaper, or other collection of sheets, on which text or illustrations can be printed, written or drawn, to create documents.</p>
                <p>It can be used as a measure of communicating general quantity of information ("That topic covers twelve pages") or more specific quantity</p>
                <h4><li><Link to="/user/jeet">Jeet</Link></li></h4>
                <h4><li><Link to="/user/karan">Karan</Link></li></h4>
                <Link to='/'>Go To Home Page</Link>

            </div>
        </div>
    )
}

export default About