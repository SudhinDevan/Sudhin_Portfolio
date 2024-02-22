import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Certifications = () => {
  return (
    <>
      <div className="px-6 md:px-48 cursor-default pt-10">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>My Previous</p>
          <h2 className={`${styles.sectionHeadText}`}>Certifications</h2>
        </motion.div>
        <div className="pt-6">
          <ul className="text-lg">
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
            <li className="pb-5 flex flex-col">
              &#183; Basics of Java Programming
              <span className="mt-3 ml-3 text-gray-400">
                G-tech, Kozhikode, Kerala (06/2011)
              </span>
            </li>
            <li className="pb-5 flex flex-col">
              &#183; Soft Skills For Business Negotiations and Marketing
              Strategies
              <span className="mt-3 ml-3 text-gray-400">
                IIT Kharagpur (NPTEL - 04/2019)
              </span>
            </li>
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
            <li className="pb-5 flex flex-col">
              &#183; Training on HTML5, JavaScript, CSS3, Dataspace Management
              System
              <span className="mt-3 ml-3 text-gray-400">
                Keltron Trivandrum (02/2018)
              </span>
            </li>
            <li className="pb-5 flex flex-col">
              &#183; Artificial Intelligence and Machine Learning Workshop
              <span className="mt-3 ml-3 text-gray-400">
                IISC Bangalore (01/2020)
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Certifications;
