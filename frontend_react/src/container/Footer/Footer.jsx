import React, {useState} from 'react'

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss'
import Typewriter from 'typewriter-effect';

const {REACT_APP__EMAIL_ADDRESS, REACT_APP__PHONE_NUMBER, REACT_APP__TAWK_TOGGLER} = process.env;

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  const emailText = "Send me an email";
  const phoneText = "Give me a call";
  const chatText = "Start live chat";

  const sendEmail = () => {window.open(window.location.href = `mailto:${REACT_APP__EMAIL_ADDRESS}?subject=Email from Zayn Ejaz Portfolio App`, '_blank');}
  const phoneCall = () => {window.location.href = `tel:${REACT_APP__PHONE_NUMBER}`;}
  const startLiveChat = REACT_APP__TAWK_TOGGLER;

  return (
    <>
      {/* <h2 className="head-text">Let's have a chat. <span>Contact me</span></h2> */}
      <h2 className="head-text">

      <Typewriter options={{

            loop: false,
          }}
            onInit={(typewriter) => {
              typewriter
              .typeString('Let\'s ')
              .pauseFor(10)
              .typeString('go for a coffee')
              .pauseFor(50)
              .deleteChars(15)
              .pauseFor(5)
              .typeString('have a chat.')
              .pauseFor(700)
              .typeString('<br>')
              .pauseFor(1000)
              .typeString('<span>Contact Me</span> ')
              .pauseFor(500)
              .deleteChars(1)
              .pauseFor(300)
              .typeString('<span>!</span>')
              .start();
            }}
          />

      </h2>


      <div className="app__footer-cards">
        <div onClick={sendEmail} className="p-text">
          <div className="app__footer-card app__grayGradbg-rev">
            <img src={images.email} alt="email" />
            <p className="p-text">{emailText}</p>
          </div>
        </div>

        <div onClick={phoneCall} className="p-text">
          <div className="app__footer-card app__grayGradbg-rev">
            <img src={images.mobile} alt="phone" />
            <p className="p-text">{phoneText}</p>
          </div>
        </div>

        <a href={startLiveChat} className="p-text">
          <div className="app__footer-card app__grayGradbg-rev">
            <img src={images.liveChat} alt="phone" />
            <p className="p-text">{chatText}</p>
          </div>
        </a>

      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" required value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" required value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text " onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
       ) : (
        <div>
          <h3 className="head-text">

            <Typewriter options={{

              loop: false,
            }}
              onInit={(typewriter) => {
                typewriter
                .typeString('<span >Thank you</span> for getting in touch!')
                .pauseFor(700)
                .typeString('<br>')
                .pauseFor(600)
                .typeString('<span>I will get back to you</span> as soon as possible. ')
                .pauseFor(500)
                .typeString('😊 ')
                .start();
              }}
            />

          </h3>
        </div>
       )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__grayGradbg',
  // 'app__whitebg',
);