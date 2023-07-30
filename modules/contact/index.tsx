import { FormEventHandler, useCallback, useRef } from "react";
import type { IconType } from "react-icons";
import { AiFillInstagram } from "react-icons/ai";
import { MdLocationOn, MdEmail, MdLocalPhone } from "react-icons/md";
import DefaultButton from "@/components/default-button";
import useForm from "@/hooks/use-form";

export default function ContactMe() {
  const formRef = useRef<HTMLFormElement>(null);
  const contactInfo = [
    {
      icon: MdLocationOn,
      text: "227, Pocket 19, Sector-24, Rohini, Delhi, 110085",
      link: "https://goo.gl/maps/w5LyjqyFpAYXHtHG9",
    },
    {
      icon: MdEmail,
      text: "mrcoconetto@gmail.com",
      link: "mailto:mrcoconetto@gmail.com",
    },
    {
      icon: MdLocalPhone,
      text: "8700331212",
      link: "tel:+918700331212",
    },
    {
      icon: AiFillInstagram,
      text: "@mr.coconetto",
      link: "https://www.instagram.com/mr.coconetto",
    },
  ];
  const mapper = (
    data: {
      icon: IconType;
      text: string;
      link: string;
    },
    index: number
  ) => {
    const Icon = data.icon;
    return (
      <a
        href={data.link}
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
  const googleSubmit = useForm({
    formRef: formRef,
    gFormId: "13fADHJHAepkeN8vm2BstsqVgUR2HctTqLv2792AOGBI",
    links: [
      { entryId: "97866395", formId: "input-name" },
      { entryId: "1327291787", formId: "input-phone" },
      { entryId: "1648415632", formId: "input-email" },
      { entryId: "861143231", formId: "input-address" },
      { entryId: "1787233755", formId: "input-message" },
    ],
  });
  const submitHandler = useCallback<FormEventHandler>(
    (entry) => {
      entry.preventDefault();
      googleSubmit();
      formRef.current?.reset();
    },
    [googleSubmit]
  );
  return (
    <section aria-label="contact us" id="contact-us">
      <div className="contact-wrapper">
        <div className="contact-form-container">
          <div className="form-header">
            <h2 className="form-heading">Get in Touch</h2>
            <p className="form-subheading">
              Feel free to drop us a line below!
            </p>
          </div>
          <form className="contact-form" ref={formRef} onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Your Name"
              id="input-name"
              required
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              id="input-phone"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              id="input-email"
              required
            />
            <input
              type="text"
              placeholder="Your Address"
              id="input-address"
              required
            />
            <textarea
              placeholder="Type your message here"
              cols={30}
              rows={10}
              id="input-message"
              required
            />
            <DefaultButton btnType="submit">SEND</DefaultButton>
          </form>
        </div>
        <div className="contact-info-container">
          <h1 className="info-header">Contact Us</h1>
          <div className="info-container">{contactInfo.map(mapper)}</div>
        </div>
      </div>
    </section>
  );
}
