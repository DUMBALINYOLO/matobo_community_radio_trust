import React from 'react';
import Feature from '../../public/feature/Feature';
import Contact from '../../components/LandingPage/Contact';
import Hero from '../../components/LandingPage/Banner';
// import Hero from '../../public/hero/Hero';
import ServivesOne from '../../public/services/ServicesOne';
import ServicesTwo from '../../public/services/ServicesTwo';
import Testimonials from '../../components/LandingPage/Testimonials';
import ShowCase from '../../components/LandingPage/Showcase';
import HelpSupport from '../HelpSupport';


class HomePage extends React.Component {
  render() {
    return (
      <div>
        <section id="banner">
          <Hero />
        </section>
        <section id="showcase">
          <Feature />
        </section>

        <section id="faqs">
          <HelpSupport />
        </section>

      </div>
    );
  }
}

export default HomePage;
