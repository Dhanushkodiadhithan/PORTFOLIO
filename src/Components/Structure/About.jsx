import "../Style/About.css"
import '../Responsive/RAbout.css'

const About = () =>{
    return(
        <>
        <div id="About" className="about">
            <img src={require("../Attachments/MY_PIC.jpg")} alt="MY_PIC" />
            <div className="content">
                <h1>ABOUT <span className="ylw">ME</span></h1>
                <p>Hello! I'm currently pursuing my Bachelor's in Computer Science and Engineering, and I'm in my third year of studies. My passion for technology has driven me to explore various facets of software development. Currently, I'm diving deep into the world of front-end development.</p>
                <p>Alongside my academic curriculum, I'm dedicated to enhancing my skills in front-end development. I find the process of creating dynamic web applications from scratch both challenging and rewarding.</p>
                <p>Studying Computer Science and Engineering has provided me with a strong foundation in programming, algorithms, and data structures.</p>
            </div>
        </div>
        </>
    )
}

export default About;