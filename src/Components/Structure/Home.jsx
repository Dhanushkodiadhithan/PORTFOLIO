import '../Style/Home.css'
import '../Responsive/RHome.css'

const Home = () => {
 
  return(
 <>
    <section id="Home" className='home'>
    <div className="content">
      <h2 title='HOW ARE YOU...?'>Hi There...</h2>
      <h1>I am <span>Dhanushkodi Adhithan </span>. M</h1>
      <h2>BE - CSE 3<sup>rd</sup> Year </h2>
      <h2>Krishnasamy College of Engineering and Technology</h2>
      <button>RESUME</button>
      <div className="list">
        <ul>
          <li>
            <a href='tel:+916374993897'><i class="fa-solid fa-phone"></i></a>
          </li>
          <li>
            <a href="mailto:dhanushkodiadhithanm2003@gmail.com"><i class="fa-solid fa-envelope"></i></a>
          </li>
        </ul>
      </div>
    </div>
    <img src={require("../Attachments/ME.jpeg")} alt="MY_IMAGE" width={500}/>
    </section>
 </>
  )
};

export default Home;