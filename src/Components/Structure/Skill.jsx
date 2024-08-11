import "../Style/Skill.css"
import '../Responsive/RSkill.css'

const Skill = () => {
    return(
        <>
        <div className="Skill" id="skill">
            <h1>MY <span className="ylw">SKILLS</span></h1>
            <div className="skills">
                <div className="tech">
                    <h2 className="title">Technical Skills</h2>
                    <div className="main">
                        <div className="html">
                            <h2>HTML</h2>
                            <span className="bar">
                                <span className="per">
                                    <span className="html-num">95%</span>
                                </span>
                            </span>
                        </div>
                        <div className="css">
                            <h2>CSS</h2>
                            <span className="bar">
                                <span className="per">
                                    <span className="css-num">75%</span>
                                </span>
                            </span>
                        </div>
                        <div className="JavaScript">
                            <h2>JS</h2>
                            <span className="bar">
                                <span className="per">
                                    <span className="js-num">60%</span>
                                </span>
                            </span>
                        </div>
                        <div className="react">
                            <h2>REACT</h2>
                            <span className="bar">
                                <span className="per">
                                    <span className="react-num">70%</span>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="prof">
                    <h2 className="title">Professional Skills</h2>
                    <div className="main">
                        <div className="one">
                            <div className="communication">
                                <span className="inner">90%</span>
                            </div>
                            <span className="name">Communication</span>
                        </div>
                        <div className="two">
                            <div className="team-work">
                                <span className="inner">80%</span>
                            </div>
                                <span className="name">Team Work</span>
                        </div>
                        <div className="three">
                            <div className="time">
                                <span className="inner">75%</span>
                            </div>
                                <span className="name">Time Management</span>
                        </div>
                        <div className="four">
                            <div className="creativity">
                                <span className="inner">70%</span>
                            </div>
                                <span className="name">Creativity</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Skill;