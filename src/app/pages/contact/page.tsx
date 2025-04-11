"use client";
import { useForm, ValidationError } from "@formspree/react";
import Threads from "@/app/components/background/Threads";
import Image from "next/image";
import { Source_Code_Pro, Courier_Prime } from "next/font/google";

import { RiMailSendFill } from "react-icons/ri";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const courierPrime = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Contact() {
  const [state, handleSubmit] = useForm("mgvaryez");
  if (state.succeeded) {
    return <p>Thanks for oportunity!</p>;
  }
  return (
    <section
      id="contact"
      className="flex flex-col space-y-5 p-0 pt-[50px] md:p-[70px] relative mx-2 xl:mx-0 h-full text-black dark:text-white"
    >
      <div className="absolute left-0 top-0 right-0 bottom-0 w-full h-full ">
        <Threads amplitude={0.6} distance={1.4} enableMouseInteraction={true} />
      </div>
      <div className="md:mx-[7vh]">
        <h1
          className={`${sourceCodePro.className} w-full text-start text-[50px] font-bold leading-tight items-center `}
        >
          Contact
        </h1>

        <div className="grid grid-cols-2 items-center mt-[10vh] h-full">
          <div className="flex flex-col items-center justify-center ">
            <Image
              src="/mail-dark.png"
              width={500}
              height={100}
              alt="icon mail"
              className=" hidden dark:block z-50 "
            />
            <Image
              src="/mail-light.png"
              width={500}
              height={100}
              alt="icon mail"
              className=" block dark:hidden z-50"
            />
            <p
              className={`${sourceCodePro.className} w-full text-start text-[16px] font-normal leading-tight items-center justify-center mt-5`}
            >
              I’m always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>
          </div>

          <div>
            <h4
              className={`${sourceCodePro.className} w-full flex text-start text-[20px] font-bold leading-tight items-center justify-center mt-5`}
            >
              Want to get in touch?
            </h4>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col space-y-5 mt-5"
            >
              <div className="group">
                <div className="relative overflow-hidden">
                  <input
                    type="text"
                    placeholder="Your name"
                    autoComplete="off"
                    className="peer w-full bg-transparent py-5 text-xl font-bold text-[#090c2c] outline-none transition-colors duration-200 ease-in-out placeholder:text-[#090c2c] dark:text-[#e9e9e9] dark:placeholder:text-[#e9e9e9]"
                    name="name"
                  />
                  <svg
                    viewBox="0 0 300 100"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="input-line-1 pointer-events-none absolute bottom-0 right-0 h-[90px] w-[300%] fill-none stroke-[1.75] transition-colors duration-300 will-change-transform stroke-[#090c2c] dark:stroke-[#e9e9e9] peer-focus:!stroke-[#090c2c]-200/50 dark:peer-focus:!stroke-[#e9e9e9]-800/50"
                    preserveAspectRatio="none"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(66%, 0px)",
                    }}
                  >
                    <path d="M0 90H100C110 90 120 84 130 78C140 72 160 72 170 78C180 84 190 90 200 90H300"></path>
                  </svg>
                </div>
              </div>
              <div className="group">
                <div className="relative overflow-hidden">
                  <div className="relative overflow-hidden">
                  <input
                    type="email"
                    placeholder="Your email"
                    autoComplete="off"
                    className="peer w-full bg-transparent py-5 text-xl font-bold text-[#090c2c] outline-none transition-colors duration-200 ease-in-out placeholder:text-[#090c2c] dark:text-[#e9e9e9] dark:placeholder:text-[#e9e9e9]"
                    id="email"
                    name="email"
                  />
                  </div>
                  <svg
                    viewBox="0 0 300 100"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="input-line-1 pointer-events-none absolute bottom-0 right-0 h-[90px] w-[300%] fill-none stroke-[1.75] transition-colors duration-300 will-change-transform stroke-[#090c2c] dark:stroke-[#e9e9e9] peer-focus:!stroke-[#090c2c]-200/50 dark:peer-focus:!stroke-[#e9e9e9]-800/50"
                    preserveAspectRatio="none"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(66%, 0px)",
                    }}
                  >
                    <path d="M0 90H100C110 90 120 84 130 78C140 72 160 72 170 78C180 84 190 90 200 90H300"></path>
                  </svg>
                </div>
              </div>
              <div className="group">
                <div className="relative overflow-hidden">
                  <input
                    type="text"
                    placeholder="Subject"
                    autoComplete="off"
                    className="peer w-full bg-transparent py-5 text-xl font-bold text-[#090c2c] outline-none transition-colors duration-200 ease-in-out placeholder:text-[#090c2c] dark:text-[#e9e9e9] dark:placeholder:text-[#e9e9e9]"
                    name="subject"
                  />
                  <svg
                    viewBox="0 0 300 100"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="input-line-1 pointer-events-none absolute bottom-0 right-0 h-[90px] w-[300%] fill-none stroke-[1.75] transition-colors duration-300 will-change-transform stroke-[#090c2c] dark:stroke-[#e9e9e9] peer-focus:!stroke-[#090c2c]-200/50 dark:peer-focus:!stroke-[#e9e9e9]-800/50"
                    preserveAspectRatio="none"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(66%, 0px)",
                    }}
                  >
                    <path d="M0 90H100C110 90 120 84 130 78C140 72 160 72 170 78C180 84 190 90 200 90H300"></path>
                  </svg>
                </div>
              </div>

              <div className="group">
                <div className="relative overflow-hidden">
                  <textarea
                    className="peer min-h-[11rem] w-full resize-none bg-transparent py-5 text-xl font-bold text-[#090c2c] outline-none transition-colors duration-200 ease-in-out placeholder:text-[#090c2c] dark:text-[#e9e9e9] dark:placeholder:text-[#e9e9e9]"
                    placeholder="Your Message"
                    id="message"
                    name="message"
                  ></textarea>{" "}
                  <svg
                    viewBox="0 0 300 100"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="input-line-4 pointer-events-none absolute bottom-0 right-0 h-[90px] w-[300%] fill-none stroke-[1.75] transition-colors duration-300 will-change-transform stroke-[#090c2c] dark:stroke-[#e9e9e9] peer-focus:!stroke-[#090c2c] dark:peer-focus:!stroke-white"
                    preserveAspectRatio="none"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(66%, 0px)",
                    }}
                  >
                    <path d="M0 90H100C110 90 120 84 130 78C140 72 160 72 170 78C180 84 190 90 200 90H300"></path>
                  </svg>
                </div>
              </div>
              <button type="submit" disabled={state.submitting} className="flex items-center  justify-center space-x-2 bg-[#090c2c] dark:bg-[#e9e9e9] py-5 px-6 rounded-md hover:bg-[#090c2c]/80 dark:hover:bg-[#e9e9e9]/80 transition duration-200 ease-in-out z-50">
                <RiMailSendFill size={30}/>
                <span>SEND</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
