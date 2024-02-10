import '../Style/Header.css'
import '../Responsive/RHeader.css'

const Header = () => {
 
  return(
 <>
    <header className='head'>
        <h2 className='title'><a href="#Home">MY <span className="ylw" title="Yes..It's Mine">PORTFOLIO</span></a></h2>
        <div className='menu'>
            <ul className='list'>
                <li className='items'><a href="#Home">HOME</a></li>
                <li className='items'><a href="#About">ABOUT</a></li>
                <li className='items'><a href="#skill">SKILL</a></li>
                <li className='items'><a href="#task">TASK</a></li>
                <li className='items'><a href="#contact">CONTACT</a></li>
            </ul>
        </div>
    </header>
 </>
  )
};

export default Header;