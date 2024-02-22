// tilt used for tilting effect for the cards
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)} // the parameters are - direction, type, delay, duration
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px] text-justify"
      >
        My name is Sudhin Devan. I am an Electronics and Communication Engineer
        from TKM College of Engineering, Kerala. After college, I started out as
        a procurement associate in a construction company. This experience
        taught me valuable skills in planning and leadership. However, my true
        passion lay in building web applications and building Logic. Driven by
        this passion, I searched for opportunities and landed a position as a
        front-end developer at Desvutrip Travel Solutions LLP. During my time at
        Desvutrip Travel Solutions LLP, I built several applications for the
        company and its partner firms. Unfortunately, the company dissolved,
        prompting me to seek new opportunities. Instead of solely focusing on
        front-end development, I decided to expand my skill set by learning
        back-end development as well which would allow me to pursue a career as
        a full-stack developer. With this goal in mind, I enrolled in a bootcamp
        where I build 2major projects and several mini projects, which helped me
        upskill and become a full-stack developer. I am now seeking exciting
        opportunities as a Full Stack MERN Developer. Thank you for getting to
        know me.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
