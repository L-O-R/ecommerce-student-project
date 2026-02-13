import React from "react";
import { Link } from "react-router-dom";

import AboutBanner from "../assets/images/about/About_banner.jpg";
import HomeIcon from "../assets/icons/home_icon.png";
import SepratorIcon from "../assets/icons/sepration_arrow.png";

import AboutIntroImg from "../assets/images/about/About_intro.png";

import AboutDeliveryImg from "../assets/images/about/About_delivery.png";
import CheckIcon from "../assets/icons/check.png";
import ArrowIcon from "../assets/icons/arrow.png";

const DELIVERY_POINTS = [
  "Sed in metus pellentesque.",
  "Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.",
  "Maecenas ut nunc fringilla erat varius.",
];

// this section contains same UI

const ABOUT_CONTENT = {
  intro: {
    title: ["100% Trusted", "Organic Food Store"],
    desc: `Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies
elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at
accumsan. Donec a eros non massa vulputate ornare. Vivamus
ornare commodo ante, at commodo felis congue vitae.`,
  },
  delivery: {
    title: ["We Delivered, You", "Enjoy Your Order."],
    desc: `Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices
consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac
mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget
elementum.`,
    points: DELIVERY_POINTS,
    buttonText: "Shop Now",
  },
};


const About = () => {
  const bannerStyle = { backgroundImage: `url(${AboutBanner})` };       //   applying the background image directly using React inline styling. 

    return (
        <main className="w-full pt-20">
            <section className="w-full h-[120px] bg-center bg-cover bg-no repeat flex items-center" style={bannerStyle}>
                <div className="layout">
                    <div className="flex items-center gap-3">
                        <Link to="/" aria-label="Go To Home">
                           <img src={HomeIcon} alt="Home" className="w-5" loading="eager" draggable="false" /> 
                        </Link>

                        <img src={SepratorIcon} alt="/" aria-hidden="true" className="w-4 h-4 object-contain" loading="eager" draggable="false" />
                        <span className="text-[var(--color-primary)] font-medium text-1xl hover:cursor-pointer">
                            About
                        </span>
                    </div>
                </div>
            </section>

            <section className="w-full bg-[var(--color-white)] py-16 px-13">
                <div className="layout">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                        <div>
                            <h2 className="text-[var(--color-gray-900)] font-bold text-4xl sm:text-5xl">
                                {ABOUT_CONTENT.intro.title[0]} <br /> {ABOUT_CONTENT.intro.title[1]}
                            </h2>

                            <p className="my-5 text-[var(--color-gray-600)] text-sm sm:text-base pb-5 leading-relaxed max-w-xl ">
                                {ABOUT_CONTENT.intro.desc}
                            </p>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <img src={AboutIntroImg} alt="About Intro" className="w-full max-w-[560px] rounded-2xl object-cover shadow-md transition-all duration-300 hover:translate-y-2 hover:shadow-xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Delivery*/}


            <section className="w-full bg-[var(--color-white)] py-16 pl-10">
                <div className="layout">
                    <div className="grid grid-cols-1 lg:grid-cols-2 item-center">
                        <div className="my-5">
                            <h2 className="text-[var(--color-gray-9)] font-extrabold leading-tight text-3xl sm:text-4xl">
                                {ABOUT_CONTENT.delivery.title[0]} <br />
                                {ABOUT_CONTENT.delivery.title[1]}
                            </h2>

                            <p className="mt-5 text-[var(--color-gray-6)] text-xs sm:text-sm leading-relaxed">
                                {ABOUT_CONTENT.delivery.desc}
                            </p>

                            <ul className="mt-5 space-y-2.5">
                                {ABOUT_CONTENT.delivery.points.map((text)=>(
                                    <li key={text} className="h-full w-full flex items-center gap-2.5">
                                        <span className="flex items-center justify-center">
                                            <img src={CheckIcon} alt="" aria-hidden="true" className="h-5 w-5 object-contain" loading="lazy" draggable="false" />
                                        </span>
                                        <span className="text-[var(--color-gray-6)] text-xs sm:text-sm">
                                            {text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button type="button" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-[var(--color-white)] text-xs font-semibold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0">
                                {ABOUT_CONTENT.delivery.buttonText}
                                <img src={ArrowIcon} alt="" aria-hidden="true" className="h-3.5 w-3.5" loading="lazy" draggable="false" />
                            </button>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <img src={AboutDeliveryImg} alt="Delivery" className="w-full max-w-[640px] object-contain" loading="lazy" draggable="false"/>
                        </div>
                    </div>
                </div>

            </section>


        </main>
    );
};

export default About;
