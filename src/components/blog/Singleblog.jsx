import React from 'react';

import orangebundle from '../../../public/images/Product/Fruits/Oranges/Orangebundle.png';
import orangebundle2 from '../../../public/images/Product/Fruits/Oranges/Orangebundle2.png';
import Rawmango from '../../../public/images/Product/Fruits/Mango/Rawmango.png';
import Dactorimage from "../../assets/images/doctorimg.svg";
import Blogbanner from "../../../public/images/Blog/Blogbanner.png";
import fbIcon from "../../assets/icons/facebook1.svg";
import twIcon from "../../assets/icons/twitter.svg";
import ptIcon from "../../assets/icons/pinterest.svg";
import igIcon from "../../assets/icons/instagram.svg";
import linkIcon from "../../assets/icons/Link1.svg";






const Singleblog = () => {
    // i have to map social icon
    const socialLinks = [
        { src: fbIcon, alt: 'Facebook' },
        { src: twIcon, alt: 'Twitter' },
        { src: ptIcon, alt: 'Pinterest' },
        { src: igIcon, alt: 'Instagram' },
        { src: linkIcon, alt: 'Copy Link' },
    ];
    return (
        <div className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 ">

            {/* LEFT SIDE CONTENT */}
            <div className="lg:col-span-2">
                {/* Main Featured Image */}
                <div className="rounded-lg overflow-hidden mb-6 p-4 mr-3">
                    <img src={orangebundle}

                        alt="Fresh Oranges"
                        className="w-full h-auto object-cover "
                    />
                </div>

                {/* Metadata Tags */}
                <div className="flex items-center gap-4 text-sm text-gray-5 mb-4  ml-4">
                    <span className="flex items-center gap-1">📂 Food</span>
                    <span className="flex items-center gap-1">👤 By Admin</span>
                    <span className="flex items-center gap-1">💬 65 Comments</span>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight ml-3">
                    Maecenas tempor urna sed quam mollis, a placerat dui fringill Suspendisse.
                </h1>

                {/* Author & Share Bar (The purple box in your Figma) */}
                <div className="flex flex-wrap items-center justify-between  py-6 mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                            <img src={Dactorimage} alt="Author" />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900">Cameron Williamson</p>
                            <p className="text-sm text-gray-500">4 April, 2021 • 6 min read</p>
                        </div>
                    </div>

                    {/* Social Icons Placeholder */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map((icon, index) => (
                            <div
                                key={index}
                                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center 
                     hover:bg-primary transition-all duration-300 cursor-pointer group"
                            >
                                <img
                                    src={icon.src}
                                    alt={icon.alt}
                                    className="w-5 h-5 group-hover:brightness-0 group-hover:invert transition-all"
                                />
                            </div>
                        ))}
                    </div>

                </div>

                {/* Article Body */}
                <div className="prose max-w-none text-gray-600 border-t  border-gray-200  leading-relaxed">
                    <p className="mb-3 mt-7 font-medium text-gray-800">
                        Maecenas lacinia felis nec placerat dui fringill. Aliquam erat volutpat.
                        Maecenas elementum in risus sed condimentum.
                    </p>
                    <p className="mb-2">
                        Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus. Fusce malesuada sed velit ut dictum. Morbi faucibus vitae orci at euismod. Integer auctor augue in erat vehicula, quis fermentum ex finibus.
                    </p>
                    <p className="mb-5">Mauris pretium elit a dui pulvinar, in ornare sapien euismod. Nullam interdum nisl ante, id feugiat quam euismod commodo. Sed ultrices lectus ut iaculis rhoncus. Aenean non dignissim justo, at fermentum turpis. Sed molestie, ligula ut molestie ultrices, tellus ligula viverra neque, malesuada consectetur diam sapien volutpat risus.
                        Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. ur ridiculus mus.</p>

                    {/* Secondary Images Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mr-3">
                        <img src={orangebundle2} alt="Oranges" className="rounded-lg w-full h-64 object-cover" />
                        <img src={Rawmango} alt="Mango" className="rounded-lg w-full h-64 object-cover" />
                    </div>

                    <p>
                        Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate quis vehicula ut, vestibulum ut mauris. Nullam non felis varius dui rutrum rutrum in a nisi. Suspendisse elementum rutrum lorem sed luctus. Proin iaculis euismod metus non sollicitudin. Duis vel luctus lacus. Nullam faucibus iaculis convallis. In ullamcorper nibh ipsum, eget lacinia eros pulvinar a. Integer accumsan arcu nec faucibus ultricies.

                    </p>
                </div>
                {/* banner section */}
                <div className="rounded-lg overflow-hidden mt-5 p-1  ">
                    <img src={Blogbanner}

                        alt="Fresh Oranges"
                        className="w-full h-auto object-cover "
                    />
                </div>
            </div>

            {/* RIGHT SIDEBAR (Stub for layout) */}
            <div className="lg:col-span-1">
                {/* Sidebar content goes here */}
            </div>

        </div>
    );
};

export default Singleblog;