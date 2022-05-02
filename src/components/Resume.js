import { GrDocumentText } from "react-icons/gr"
import resume from "./portfolioImages/FelipaMendezResume.pdf"

function Resume () {
    
    return (
       <div className="text-div">
           <a className="link" target="_blank" rel="noopener noreferrer" href={resume}>Resume <GrDocumentText /></a> 
           <iframe className="resume" src={resume}></iframe>
       </div>
    )
}

export default Resume