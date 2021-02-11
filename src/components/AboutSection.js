import React from "react";
import home1 from "../img/home1.png";

// Import Style from 'styled-components'
import { About, Description, Image, Hide } from "../styles";

// Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {
    // const titleAnimate = {
    //     hidden: { opacity: 0 },
    //     show: { opacity: 1, transition: { duration: 2 } },
    // };
    // const container = {
    //     hidden: { x: 100 },
    //     show: {
    //         x: 0,
    //         transition: {
    //             duration: 0.75,
    //             ease: "easeOut",
    //             staggerChildren: 1,
    //             when: "afterChildren",
    //         },
    //     },
    // };

    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>
                            your <span>dreams</span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>true.</motion.h2>
                    </Hide>
                </motion.div>
                <p>
                    Contact us for any photography or videography ideas that you
                    have. We have professionals with amazing skills
                </p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="camera guy" />
            </Image>
        </About>
    );
};

export default AboutSection;
