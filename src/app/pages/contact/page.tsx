"use client";
import { useForm} from "@formspree/react";
import Threads from "@/app/components/background/Threads";
import { SiGmail, SiGooglemaps } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
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
      className="flex flex-col space-y-5 p-0 pt-[50px] md:p-[70px] md:pt-2 relative mx-2 xl:mx-0 text-black dark:text-white "
    >
      <div className="absolute left-0 top-0 right-0 bottom-0 w-full h-full ">
        <Threads amplitude={0.6} distance={1.4} enableMouseInteraction={true} />
      </div>
      <div className="relative flex flex-col md:flex-row items-start md:items-stretch w-full min-h-[60vh]">
        <div className="relative hidden md:flex flex-col justify-start items-center  gap-4 pt-10">
          <h1 className="text-lg tracking-widest rotate-[-90deg] text-gray-300">
            CONTACT.
          </h1>
          <div className="w-px h-36 bg-gray-400 mt-6"></div>
        </div>
        <h1 className="text-lg block md:hidden tracking-widest text-gray-300">
            CONTACT. <hr className="w-[15vh]" />
          </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 items-start md:pb-[10vh] h-full">
          <div className="flex flex-col items-center justify-center 3xl:mr-[40px]">
            <h3 className={`${courierPrime.className} w-full hidden md:block  font-bold leading-tight text-[30px] z-30`}>Available for work, collaborations, <br /> or just a friendly hello.</h3>
            <p
              className={`${sourceCodePro.className} w-full  text-wrap text-justify md:text-start font-normal leading-tight items-center justify-center mt-5`}
            >
              I’m always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>
            <div
              className={`${sourceCodePro.className} w-full  font-bold leading-tight flex flex-col items-start mt-10 space-y-10 z-30`}
            >
              <div className="flex ">
                <SiGmail
                  size={30}
                  className="inline-block mr-2 dark:bg-white p-1 dark:text-black bg-black text-white  rounded-lg"
                />
                <div className="space-y-2">
                  <span className="  z-30 p-1 ">Email:</span>
                  <p className="text-gray-600 dark:text-gray-400">
                    imamhari247@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex ">
                <IoLogoWhatsapp
                  size={30}
                  className="inline-block mr-2 dark:bg-white p-1 dark:text-black bg-black text-white  rounded-lg"
                />
                <div className="space-y-2">
                  <span className="  z-30 p-1 ">Whatsapp:</span>
                  <p className="text-gray-600 dark:text-gray-400">
                    +62 812-1167-6558
                  </p>
                </div>
              </div>
              <div className="flex ">
                <SiGooglemaps
                  size={30}
                  className="inline-block mr-2 dark:bg-white p-1 dark:text-black bg-black text-white  rounded-lg"
                />
                <div className="space-y-2">
                  <span className="z-30 p-1 ">Address:</span>
                  <p className="text-gray-600 dark:text-gray-400">
                    Bekasi, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
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
                    className="peer w-full bg-transparent py-5 text-xl font-bold outline-none placeholder:text-gray-600  dark:placeholder:text-gray-400  focus:placeholder:text-gray-400 dark:focus:placeholder:text-gray-600"
                    name="name"
                  />
                  <svg
                    viewBox="0 0 300 100"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="input-line-1 pointer-events-none absolute bottom-0 right-0 h-[90px] w-[300%] fill-none stroke-[3]  stroke-gray-400 dark:stroke-white focus:stroke-black peer-focus:!stroke-black dark:peer-focus:!stroke-gray-600"
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
                    type="email"
                    placeholder="Your email"
                    autoComplete="off"
                    className="peer w-full bg-transparent py-5 text-xl font-bold outline-none placeholder:text-gray-600  dark:placeholder:text-gray-400  focus:placeholder:text-gray-400 dark:focus:placeholder:text-gray-600"
                    id="email"
                    name="email"
                  />

                  <svg
                    viewBox="0 0 300 100"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="input-line-1 pointer-events-none absolute bottom-0 right-0 h-[90px] w-[300%] fill-none stroke-[3]  stroke-gray-400 dark:stroke-white focus:stroke-black peer-focus:!stroke-black dark:peer-focus:!stroke-gray-600"
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
                    className="peer w-full bg-transparent py-5 text-xl font-bold outline-none placeholder:text-gray-600  dark:placeholder:text-gray-400  focus:placeholder:text-gray-400 dark:focus:placeholder:text-gray-600"
                    name="subject"
                  />
                  <svg
                    viewBox="0 0 300 100"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="input-line-1 pointer-events-none absolute bottom-0 right-0 h-[90px] w-[300%] fill-none stroke-[3]  stroke-gray-400 dark:stroke-white focus:stroke-black peer-focus:!stroke-black dark:peer-focus:!stroke-gray-600"
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
                    className="peer min-h-[11rem] w-full resize-none bg-transparent py-5 text-xl font-bold  outline-none  placeholder:text-gray-600  dark:placeholder:text-gray-400  focus:placeholder:text-gray-400 dark:focus:placeholder:text-gray-600"
                    placeholder="Your Message"
                    id="message"
                    name="message"
                  ></textarea>{" "}
                  <svg
                    viewBox="0 0 300 100"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="input-line-1 pointer-events-none absolute bottom-0 right-0 h-[90px] w-[300%] fill-none stroke-[3]  stroke-gray-400 dark:stroke-white focus:stroke-black peer-focus:!stroke-black dark:peer-focus:!stroke-gray-600"
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
              <button
                type="submit"
                disabled={state.submitting}
                className="flex items-center justify-center space-x-2 text-white dark:text-black bg-[#090c2c] dark:bg-[#e9e9e9] py-5 px-6 rounded-md hover:bg-[#090c2c]/80 dark:hover:bg-[#e9e9e9]/80 transition duration-200 ease-in-out z-30"
              >
                <RiMailSendFill size={30} />
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
