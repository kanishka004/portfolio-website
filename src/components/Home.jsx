import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";

const Home = ({ ratio }) => {

    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            },
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            },
        },
    };
    return (
        <div id="home">
            <section>
                <div>
                    <motion.h1 {...animations.h1}>
                        Hi, I Am <br /> Kanishka Adhikari
                    </motion.h1>

                    <Typewriter
                        options={{
                            strings: ["A Developer", "A Designer", "A Creator"],
                            autoStart: true,
                            loop: true,
                            cursor: "",
                            wrapperClassName: "typewriterpara",
                        }}
                    />

                    <div>
<<<<<<< HEAD
                        <a href="mailto:adhikarikanishka13@gmail.com">Hire Me</a>
=======
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adhikarikanishka13@gmail.com"
                            target="_blank" rel="noopener">
                            Hire Me
                        </a>
>>>>>>> ccbd8eb (Initial commit)
                        <a href="#work">
                            Projects <BsArrowUpRight />
                        </a>
                    </div>

                    <article>
                        <p>
                            15+
                        </p>
                        <span>Technologies & Tools</span>
                    </article>

                    <aside>
                        <article>
                            <p>
                                8+
                            </p>
                            <span>Web Development Projects</span>
                        </article>

                        <article data-special>
                            <p>Contact</p>
                            <span>adhikarikanishka13@gmail.com</span>
                        </article>
                    </aside>
                </div>
            </section>
            <section>
                <img src={me} alt="Kanishka" />
            </section>
            <BsChevronDown id="arrow" />
        </div>
    );
};

export default Home;
