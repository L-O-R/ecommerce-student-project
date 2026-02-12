import DeliverySection from "../components/about/DeliverySection";
import HeroSection from "../components/about/HeroSection";
import IntroSection from "../components/about/IntroSection";
import TeamSection from "../components/about/TeamSection";
import ClientTestimonials from "../components/home/ClientTestimonials";

const About = () => {
    return (
        <div className="about-page">
            <HeroSection />
            <IntroSection />
            <DeliverySection />
            <TeamSection />
            <ClientTestimonials />
        </div>
    );
};

export default About;
