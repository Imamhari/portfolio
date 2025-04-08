import React from "react";
import styles from "../styles/flipCard.module.css";
import Image from "next/image";

export default function Education() {
  return (
    <div className="mt-20">
      <div className={`${styles.wrapper} flex justify-center gap-20 `}>
        <div className={styles.card}>
          <div className={styles.frontpage}>
            <div className="flex items-center h-full bg-gray-300 dark:bg-gray-700 rounded-[15px]">
              <Image
                src="/pancasila.png"
                width={300}
                height={30}
                alt="profile picture"
                priority
              />
            </div>
          </div>
          <div className={styles.backpage}>
            <div className={styles.cardcontent}>
              <h3 className="text-center text-black text-[20px]">
                Pancasila University
              </h3>
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
        <div className={styles.card}>
          <div className={styles.frontpage}>
            <div className="flex items-center h-full bg-gray-300 dark:bg-gray-700 rounded-[15px]">
              <Image
                src="/revou.png"
                width={300}
                height={30}
                alt="profile picture"
                priority
              />
            </div>
          </div>
          <div className={styles.backpage}>
            <div className={styles.cardcontent}>
              <h3 className="text-center text-black">RevoU</h3>
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
  );
}
