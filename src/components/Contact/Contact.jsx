import React from 'react'
import './Contact.css'
import {RiMailSendFill} from 'react-icons/ri'
import {GrMapLocation} from 'react-icons/gr'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      

<div className="container contact__container">

  <div className="contact__options">

    <article className='contact__option'>
      <RiMailSendFill className='contact__option-icon'/>
      <h4>Email</h4>
      <h5>info@imperialregistrars.co.ke</h5>
      <a href="mailto:info@imperialregistrars.co.ke" target="_blank">Send us a message</a>
    </article>

    <article className='contact__option'>
      <GrMapLocation className='contact__option-icon'/>
      <h4>Waruku-Nairobi
Manyani East No.136 </h4>
      <h5>off wayaki way.</h5>
      <a href="">Locate Us</a>
    </article>


    <article className='contact__option'>
      <BsWhatsapp className='contact__option-icon'/>
      <h4>Whatsapp</h4>
      <h5>+254 780 558-218</h5>
      <a href="https://api.whatsapp.com/send?phone+254780558218">Send a message</a>
    </article>

  </div>

{/*END OF CONTACT OPTIONS*/}
<form action='' className='form__fill'>
    <input type="text" name='name' placeholder='Your Full name' required />
    <input type="email" name='email' placeholder='Your Email' required />
    <textarea name="message" rows="7" placeholder='Your message' required></textarea>
    <button type='submit' className='btn btn-primary'>Send Message</button>

</form>
</div>
    </section>
  )
}

export default Contact