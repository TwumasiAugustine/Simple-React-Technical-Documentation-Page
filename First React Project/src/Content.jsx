import ReactIntro from "./Intro";
import ReactLibraries from "./Libraries";
import ReactUpdate from "./Updates";
import ReactBlog from "./Blog"
import './Library.css'
import './Update.css'
import './UseReact.css'

function Content() {
    return (
        <div>
            <ReactIntro/>
            <ReactLibraries/>
            <ReactUpdate/>
            <ReactBlog/>
        </div>
    );
}

export default Content;