import React from "react";

// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ContactUs = () => {
    return (
        <motion.div
            variants={pageAnimation}
            exit="exit"
            initial="hidden"
            animate="show"
            style={{ background: "#fff" }}
        >
            <p>Contact</p>
        </motion.div>
    );
};

export default ContactUs;
