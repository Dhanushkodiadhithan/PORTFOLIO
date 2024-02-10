import '../Style/Contact.css'
import '../Responsive/RContact.css'

const Contact = () =>{
    return(
        <>
        <div className="contact" id='contact'>
            <h1 className='title'>CONTACT <span className="ylw">ME</span></h1>
            <div className="main">
                <input type="text" placeholder='Your Name' className='name'/>
                <input type="email" placeholder='Your Email' className='email'/>
                <textarea className='msg'placeholder='Message' cols="30" rows="10"></textarea>
                <div className="send">
                    <button className='btn'>SEND</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;