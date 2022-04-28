
import image from "./portfolioImages/hookemedit.png"

function About () {
    
    return (
        <div>
            <img className="about-image" src={image} alt="Felipa Mendez"></img>
            <div className="text-div">
                Full-Stack Developer with experience in Ruby, Rails, React and JavaScript based programming and a background in email development. Possess strong skills in mentoring and project management that help teams develop professionally and increase project efficiency.
            </div> 
        </div>
    )
}

export default About