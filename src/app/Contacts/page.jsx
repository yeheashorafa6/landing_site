"use client"
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const variants_x = {
  initial: {
    opacity: 0,
    x:100
  },
  animate: {
    opacity: 1,
    x:0,
    transition: {
      duration : 1,
    },
  },
}

const variantsx = {
  initial: {
    opacity: 0,
    x:-100
  },
  animate: {
    opacity: 1,
    x:0,
    transition: {
      duration : 1,
    },
  },
}
function ContactPage() {
   
  const init={
    email : "",
    username : "",
    message : "",
  }

    // STATE
    const [inputsValue,setInputsValue]=useState(init);
    const [result, setResult] = useState("");
    // == STATE ==

  const misInput =
  inputsValue.name == "" ||
  inputsValue.phoneNumber == "" ||
  inputsValue.message == "";

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1394ff52-77b0-4d7b-87c2-841bf978a50b");

    if (!misInput) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("SomeThing Error ! Try Agine ...");
      event.target.reset();
      result.target.value.reset();
    // setResult(" ");

    }
    
  };


  return (
    <motion.section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <motion.div variants={variantsx} initial="initial" whileInView="animate" className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <motion.div className="mx-auto max-w-lg text-center">
          <motion.h1 className="text-2xl font-bold sm:text-3xl">Contact With Us</motion.h1>

          <motion.p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </motion.p>
        </motion.div>

        <motion.form onSubmit={onSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <motion.div className="relative">
              <motion.input
                value={inputsValue.email}
                onChange={(event) => {      
                  setInputsValue({ ...inputsValue, email: event.target.value });
                }}
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />

              <motion.span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </motion.span>
            </motion.div>

            <motion.div className="relative">
              <motion.input
                value={inputsValue.username}
                onChange={(event) => {      
                  setInputsValue({ ...inputsValue, username: event.target.value });
                }}
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter username"
              />
            </motion.div>

            <motion.div className="relative">
              <motion.textarea 
                placeholder="Enter Your Message" 
                rows="5" 
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                value={inputsValue.message}
                onChange={(event) => {      
                  setInputsValue({ ...inputsValue, message: event.target.value });
                }}>
              </motion.textarea>
            </motion.div>
            <div className="message-sending">
            <span className={misInput ? "text-red-500" : "text-green-500"}>{result}</span>
          </div>
          

          <motion.div className="flex items-center justify-center">
            <motion.button
              type="submit"
              className="inline-block rounded-lg bg-accent px-5 py-3 text-lg font-medium text-white"
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>

      <motion.div variants={variants_x} initial="initial" whileInView="animate" className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <Image fill src={"/assets/contact.png"} alt="contact" />
      </motion.div>
    </motion.section>
  );
}

export default ContactPage;
