import Link from "next/link";
import React, { useRef, useState, useContext } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import NotificationContext from "@/store/notification-context";

function Contact() {
  const [isInvalid, setIsInvalid] = useState(false);
  const notificationCtx = useContext(NotificationContext);

  const formRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  function sendEmailHandler(event) {
    event.preventDefault();
    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API

    const enteredName = nameRef.current.value;
    const enteredPhone = phoneRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredSubject = subjectRef.current.value;
    const enteredMessage = messageRef.current.value;

    notificationCtx.showNotification({
      title: "Sending the Message...",
      message: "Sending the message to Carlos.",
      status: "pending",
    });

    if (
      !enteredEmail ||
      enteredEmail.trim() === "" ||
      !enteredEmail.includes("@") ||
      !enteredName ||
      enteredName.trim() === "" ||
      !enteredPhone ||
      enteredPhone.trim() === "" ||
      !enteredSubject ||
      enteredSubject.trim() === "" ||
      !enteredMessage ||
      enteredMessage.trim() === ""
    ) {
      setIsInvalid(true);
      return;
    }
    const messageBody = {
      name: enteredName,
      phone: enteredPhone,
      email: enteredEmail,
      subject: enteredSubject,
      message: enteredMessage,
    };
    fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(messageBody),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        console.log("We are here RESPONSE");
        if (response.ok) {
          console.log(response);
          return response.json();
        }

        return response.json().then((data) => {
          console.log("We are here RESPONSE ERROR");
          throw new Error(data.message || "Something went wrong!");
        });
      })
      .then((data) => {
        console.log("We are here DATA");
        notificationCtx.showNotification({
          title: "Success!",
          message: "Successfully sent the message to Carlos!",
          status: "success",
        });
      })
      .catch((error) => {
        console.log("We are here CATCH ERROR");
        notificationCtx.showNotification({
          title: "Error!",
          message: error.message || "Something went wrong!",
          status: "error",
        });
      });

    formRef.current.reset();
  }

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#e36414]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/** left */}
          <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  src="/assets/contact.jpg"
                  alt=""
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
              </div>
              <div>
                <h2>Carlos Diaz</h2>
                <p>Full Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let<span>&#39;</span>s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link
                      href="https://www.linkedin.com/in/diaz-carlos-h/"
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href="https://github.com/carlosmdiaz" target="_blank">
                      <FaGithub />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link
                      href="mailto:carlosdiaz3979@gmail.com"
                      target="_blank"
                    >
                      <AiOutlineMail />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link
                      href="/assets/Carlos-Diaz-Resume.pdf"
                      alt="Download Resume PDF"
                      target="_blank"
                      download
                    >
                      <BsFillPersonLinesFill />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/** right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={formRef} onSubmit={sendEmailHandler}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      ref={nameRef}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      ref={phoneRef}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    ref={emailRef}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    ref={subjectRef}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    ref={messageRef}
                  ></textarea>
                </div>
                <button
                  className="w-full p-4 text-gray-100 mt-4"
                  onClick={sendEmailHandler}
                >
                  Send Message
                </button>
                {isInvalid && <p>Please enter a valid email address!</p>}
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#e36414]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
