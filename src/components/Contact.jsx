import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { ReactComponent as Group } from "../components/assets/Group icon.svg";
import { ReactComponent as Gps } from "../components/assets/gps.svg";
import { ReactComponent as Phone } from "../components/assets/phone.svg";
import { ReactComponent as Mail } from "../components/assets/mail.svg";

function Contact() {
  return (
    <div>
      <Header />
      
      <div className="outer-box">
      <div className="box">
        <form action="">
            <p>Leave a Message</p>
          <input type="text" placeholder="Name"  required/> <br/>
          <input type="email" placeholder="email" required /> <br/>
          <textarea></textarea> <br/>
          <button>Send</button>
        </form>
        <div>
          <p>
            {" "}
            <Gps />
            No.13, Abike Jokogbola Street, <br />
            Sholebo Estate, Ikorodu, Lagos{" "}
          </p>
          <p>
            {" "}
            <Phone /> +2348034327546
          </p>
          <p>
            {" "}
            <Mail /> info@sunvest.energy{" "}
          </p>
          <Group />
          <div>
            <iframe
              title="sholca"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.1937164128767!2d3.498111613827535!3d6.622842895210815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bec2769661335%3A0x9bbf180790508b55!2sSolebo%20Str%2C%20Ikorodu!5e0!3m2!1sen!2sng!4v1617175246708!5m2!1sen!2sng"
              width="400"
              height="300"
              style={{ borderRadius: 20 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      </div>
      
     
      <Footer />
    </div>
  );
}

export default Contact;
