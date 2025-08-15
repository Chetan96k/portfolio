import React, { useEffect, useRef } from "react";
import me5 from "../assets/me5.jpg";

import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwind.png";
import gitLogo from "../assets/git.png";
import githubLogo from "../assets/github.png";
import chatgptLogo from "../assets/chatgpt.png";
import hibernateLogo from "../assets/hibernate.svg";
import intellijLogo from "../assets/intellij.png";
import javaLogo from "../assets/java.svg";
import mongodbLogo from "../assets/mongodb.png";
import mysqlLogo from "../assets/mysql.png";
import vscodeLogo from "../assets/vscode.png";
import springLogo from "../assets/spring.png";

export default function About() {
  const logosRef = useRef(null);

  useEffect(() => {
    const logos = logosRef.current;
    if (logos && logos.parentNode) {
      const clone = logos.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      logos.parentNode.appendChild(clone);
    }
  }, []);

  return (
    <section
      id="about"
      className="min-h-[60vh] border-b-[12px] border-gray-200 dark:border-gray-800 flex flex-col md:flex-row"
    >
      {/* Left Side: Info */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-6 md:px-16 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-semibold mb-10 pb-3 pt-14 md:pt-0 text-black dark:text-white">
          About Me
        </h2>

        <div className="max-w-md text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 mb-6">
          <p>
            I write code to solve problems—real ones that matter to teams and
            users. I think good software should feel natural. It should help
            without making a fuss.
          </p>
          <p>
            Java and React are where I spend most of my time. I’m also drawn to
            tools that improve clarity: clear docs, testable logic, and
            interfaces that just make sense.
          </p>
          <p>
            Outside the code, I’m always learning. Lately, I’ve been curious
            about how AI can assist—not automate—the development process,
            helping developers focus more on the work that really matters.
          </p>
        </div>

        {/* Infinite Logo Carousel with masking on both sides */}
        <div className="mt-10 w-full overflow-hidden relative pb-6 md:pb-0">
          <div
            className="flex flex-nowrap relative 
    before:absolute before:left-0 before:h-full before:z-10 
    before:bg-gradient-to-r before:from-white before:dark:from-black before:to-transparent
    after:absolute after:right-0 after:h-full after:z-10 
    after:bg-gradient-to-l after:from-white after:dark:from-black after:to-transparent
    before:w-16 after:w-16"
          >
            <ul
              ref={logosRef}
              className="flex items-center [&_li]:mx-6 [&_img]:h-12 [&_img]:max-w-none animate-infinite-scroll"
            >
              <li>
                <img src={htmlLogo} alt="HTML" />
              </li>
              <li>
                <img src={cssLogo} alt="CSS" />
              </li>
              <li>
                <img src={jsLogo} alt="JavaScript" />
              </li>
              <li>
                <img src={reactLogo} alt="React" />
              </li>
              <li>
                <img src={tailwindLogo} alt="Tailwind CSS" />
              </li>
              <li>
                <img src={gitLogo} alt="Git" />
              </li>
              <li>
                <img src={githubLogo} alt="GitHub" />
              </li>
              <li>
                <img src={chatgptLogo} alt="ChatGPT" />
              </li>
              <li>
                <img src={javaLogo} alt="Java" />
              </li>
              <li>
                <img src={springLogo} alt="Spring" />
              </li>
              <li>
                <img src={hibernateLogo} alt="Hibernate" />
              </li>
              <li>
                <img src={mysqlLogo} alt="MySQL" />
              </li>
              <li>
                <img src={mongodbLogo} alt="MongoDB" />
              </li>
              <li>
                <img src={vscodeLogo} alt="VSCode" />
              </li>
              <li>
                <img src={intellijLogo} alt="IntelliJ" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10">
        <img
          src={me5}
          alt="Chetan Profile Picture"
          className="w-full max-h-[800px] md:max-w-[80%] rounded-xl object-cover object-bottom"
        />
      </div>
    </section>
  );
}
