import type { IconType } from "react-icons";
import { AiFillInstagram } from "react-icons/ai";
import { MdLocationOn, MdEmail, MdLocalPhone } from "react-icons/md";
import DefaultButton from "@/components/default-button";

export default function ContactMe() {
  const contactInfo = [
    {
      icon: MdLocationOn,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, aspernatur.",
    },
    {
      icon: MdEmail,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, aspernatur.",
    },
    {
      icon: MdLocalPhone,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, aspernatur.",
    },
    {
      icon: AiFillInstagram,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, aspernatur.",
    },
  ];
  const mapper = (
    data: {
      icon: IconType;
      text: string;
    },
    index: number
  ) => {
    const Icon = data.icon;
    return (
      <a
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="info-card"
        key={index}
      >
        <Icon className="info-icon" />
        <span className="info-text">{data.text}</span>
      </a>
    );
  };
  return (
    <section aria-label="contact us" id="contact-us">
      <div className="contact-wrapper">
        <div className="contact-info-container">
          <h1 className="info-header">Contact Us</h1>
          {contactInfo.map(mapper)}
        </div>
        <div className="contact-form-container">
          <h2 className="form-heading">Get in Touch</h2>
          <p className="form-subheading">Feel free to drop us a line below!</p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea
              placeholder="Type your message here"
              cols={30}
              rows={10}
            />
            <DefaultButton btnType="submit">SEND</DefaultButton>
          </form>
        </div>
      </div>
    </section>
  );
}
