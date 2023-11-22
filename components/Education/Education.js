/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";
import { Fade, Zoom } from "react-reveal";
import { Howl } from "howler";
import Button from "../Button/Button";
import styles from "./Education.module.scss";
import { MENULINKS, EDUCATION } from "../../constants";

const Education = ({ clientWidth }) => {
  const [checked, setChecked] = useState(new Array(EDUCATION.length).fill(false));
  const [isActive, setIsActive] = useState(false);
  const [gunStyle, setGunStyle] = useState({});
  const [mockupStyle, setMockupStyle] = useState({});
  const [macTopStyle, setMacTopStyle] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [reveal, setReveal] = useState(0);
  const targetSection = useRef(null);
  const inputRef = useRef(null);
  const macRef = useRef(null);
  const companyCard = useRef(null);
  const heightRef = useRef(null);
  const videoRef = useRef(null);

  const options = {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.1,
    gyroscope: false,
  };

  const checkedSound = new Howl({
    src: ["/sounds/pop-down.mp3"],
    volume: 0.7,
  });

  const getHeight = (position) => heightRef.current + 53 * position;

  const handleChange = (position) => {
    const height = getHeight(position);

    setChecked(() =>
      checked.map((item, index) => {
        if (index === position) return true;
        else return item;
      })
    );

    setGunStyle({
      transform: "translateY(" + height + "px)",
      visibility: "visible",
    });
    setIsActive(true);

    setChecked(() =>
      checked.map((item, index) => {
        if (index === position) return false;
        else return item;
      })
    );

    setTimeout(() => {
      checkedSound.play();
      setMockupStyle({
        transform: "translate3d(0, 0, 0) rotateX(-90deg)",
        transition: "1s",
      });
      setMacTopStyle({
        transform: "translate3d(0, 0, 0) rotateX(-90deg)",
        transition: "1s",
      });
    }, 1500);

    setTimeout(() => {
      setIsActive(false);
      macRef.current.scrollIntoView({
        behavior: "smooth",
      });
      setGunStyle({
        transform: "translateY(500px)",
        visibility: "hidden",
      });
      setMockupStyle({
        transform: "translate3d(0, 0, 0) rotateX(0deg)",
        transition: "500ms",
      });
      setMacTopStyle({
        transform: "translate3d(0, 0, 0) rotateX(0deg)",
        transition: "500ms",
      });
      videoRef.current?.load();
    }, 3000);
  };

  useEffect(() => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".work-wrapper"),
      start: "100px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
    });
  }, [targetSection, isActive]);

  useEffect(() => {
    VanillaTilt.init(companyCard.current, options);
  }, [companyCard.current]);

  useEffect(() => {
    if (inputRef.current) {
      const handlePosition = () => {
        const { top } = inputRef.current.getBoundingClientRect();
        const scrollTop = document.documentElement.scrollTop;
        const clientTop = document.documentElement.clientTop;
        const output = Math.floor((top + scrollTop - clientTop) / 100) + 60;
        heightRef.current = output;
      };
      // setReveal(1);
      handlePosition();
      window.addEventListener("resize", handlePosition);
      window.addEventListener("scroll", handlePosition);
    }

    return () => {
      window.removeEventListener("resize", handlePosition);
      window.removeEventListener("scroll", handlePosition);
    };
  }, [inputRef.current]);

  return (
    <section
      className="w-full relative select-none xs:mt-40 sm:mt-0 mb-20"
      id={MENULINKS[3].ref}
      ref={targetSection}
    >
        <img
          src="/right-pattern.svg"
          alt=""
          className="absolute hidden right-0 bottom-1/4 w-1/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
      <div className="section-container py-16 flex flex-col justify-center">
        <div className="flex flex-col work-wrapper">
          <div className="flex flex-col">
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit seq">
              Education
            </h1>
          </div>
        </div>
          
          <div className="flex flex-col">
            {EDUCATION.map((job, index) => {
                  return(
              <div className="pt-10 col-span-12 flex flex-col min-h-full seq">
                <Fade spy={reveal} right distance="4rem">
                  <div className="bg-gray-dark-4 rounded-2xl px-10 py-10 w-50 h-full mx-16">
                    <p className="font-bold mb-2 text-2xl">
                      {job.course}
                    </p>
                    <p className="mb-1 text-lg">{job.univ}</p>
                    <p className="italic text-sm font-thin">
                      {job.range}
                    </p>
                    <ul className="text-base mt-6 list-disc ml-2 z-30">
                      {job.gpa}
                    </ul>
                  </div>
                </Fade>
              </div>);
              })}
            </div>
      </div>
    </section>
  );
};

export default Education;
