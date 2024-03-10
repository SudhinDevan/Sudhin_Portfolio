import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Certifications = () => {
  return (
    <>
      <div className="px-6 cursor-default pt-10 w-full">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>My Previous</p>
          <h2 className={`${styles.sectionHeadText}`}>Certifications</h2>
        </motion.div>
        <div
          className="pt-6 pb-5 px-3 rounded-xl"
          style={{ backgroundColor: "rgba(16, 13, 37, 0.8)" }}
        >
          <ul className="text-lg md:px-10 px-0">
            <li className="pb-5 flex flex-col">
              &#183; The Web Developer Bootcamp 2023 <br />
              <span className="mt-3 text-gray-400">
                <a
                  href="https://www.udemy.com/certificate/UC-12078122-242a-4111-a15b-cc2ebd00b262/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 ml-3 text-gray-400 hover:underline"
                >
                  Udemy (11/2023)
                </a>{" "}
              </span>
            </li>
            <a
              className="pb-5 flex flex-col"
              href="https://sudhin-devan.s3.ap-south-1.amazonaws.com/ceritifications_%26_workshops/gtec-java-sudhin.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              &#183; Basics of Java Programming
              <span className="mt-3 ml-3 text-gray-400 hover:underline">
                G-tech, Kozhikode, Kerala (06/2011)
              </span>
            </a>
            <a
              className="pb-5 flex flex-col"
              href="https://sudhin-devan.s3.ap-south-1.amazonaws.com/ceritifications_%26_workshops/img003.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              &#183; Soft Skills For Business Negotiations and Marketing
              Strategies
              <span className="mt-3 ml-3 text-gray-400 hover:underline">
                IIT Kharagpur (NPTEL - 04/2019)
              </span>
            </a>
            <li className="pb-5 flex flex-col">
              &#183; Viral Marketing and How to Craft Contagious Content
              <span className="mt-3 text-gray-400">
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/RZU84LC23MQC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 ml-3 text-gray-400 hover:underline"
                >
                  Wharton University of Pennsylvania (Coursera -12/2019)
                </a>{" "}
              </span>
            </li>
            <a
              className="pb-5 flex flex-col"
              href="https://sudhin-devan.s3.ap-south-1.amazonaws.com/ceritifications_%26_workshops/img007.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              &#183; Training on HTML5, JavaScript, CSS3, Dataspace Management
              System
              <span className="mt-3 ml-3 text-gray-400 hover:underline">
                Keltron Trivandrum (02/2018)
              </span>
            </a>
            <a
              className="pb-5 flex flex-col"
              href="https://sudhin-devan.s3.ap-south-1.amazonaws.com/ceritifications_%26_workshops/img005.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              &#183; Artificial Intelligence and Machine Learning Workshop
              <span className="mt-3 ml-3 text-gray-400 hover:underline">
                IISC Bangalore (01/2020)
              </span>
            </a>
            <a
              className="pb-5 flex flex-col"
              href="https://sudhin-devan.s3.ap-south-1.amazonaws.com/ceritifications_%26_workshops/img006.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              &#183; IISC-Pravega's Flagship event Pravega Innovation Summit
              <span className="mt-3 ml-3 text-gray-400 hover:underline">
                IISC Bangalore (02/2020)
              </span>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certification");
