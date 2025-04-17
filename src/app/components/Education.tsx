import React from "react";
import styles from "../styles/flipCard.module.css";
import Image from "next/image";
import { Source_Code_Pro, Courier_Prime } from "next/font/google";

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Education() {
  return (
    <div className="mt-20">
      <div className={`${styles.wrapper}  flex flex-wrap justify-center gap-20 `}>
        <div className={styles.card}>
          <div className={styles.frontpage}>
            <div className="flex items-center h-full bg-gray-300 dark:bg-gray-700 rounded-[15px]">
              <Image
                src="/pancasila.webp"
                width={300}
                height={30}
                alt="profile picture"
                priority={false}
              />
            </div>
          </div>
          <div className={`${styles.backpage} bg-[#E9E9E9] dark:bg-[#394150]`}>
            <div className={styles.cardcontent}>
              <h3 className={`${courierPrime.className} text-center text-black dark:text-white text-[20px]`}>
                Pancasila University
              </h3>
              <div className={sourceCodePro.className}>
              <p className={styles.carddescription}>
                Diploma of Engineering (Electrical)
              </p>
              <p className={styles.carddescription}>GPA: 3.12 / 4.00</p>
              <button className={styles.cardbutton}>
                <a
                  href="https://univpancasila.ac.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore More
                </a>
              </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.frontpage}>
            <div className="flex items-center h-full bg-gray-300 dark:bg-gray-700 rounded-[15px]">
              <Image
                src="/revou.webp"
                width={300}
                height={30}
                alt="profile picture"
                priority={false}
              />
            </div>
          </div>
          <div className={`${styles.backpage} bg-[#E9E9E9] dark:bg-[#394150]`}>
            <div className={styles.cardcontent}>
              <h3 className={`${courierPrime.className} text-center text-black dark:text-white text-[20px]`}>RevoU</h3>
              <div className={`${sourceCodePro.className} text-black dark:text-white`}>
              <p className={styles.carddescription}>
                Full-stack Software Engineer
              </p>
              <p className={styles.carddescription}>
                GPA: Certificate of Completion with end score of 96.73/100
              </p>
              <button className={styles.cardbutton}>
                <a
                  href="https://www.revou.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore More
                </a>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
