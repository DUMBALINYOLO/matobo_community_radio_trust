import React from 'react';
import Feature from '../../public/feature/Feature';
import Contact from '../../components/LandingPage/Contact';
import Hero from '../../public/hero/Hero';
import ServivesOne from '../../public/services/ServicesOne';
import ServicesTwo from '../../public/services/ServicesTwo';


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

        <section id="testicles">
          <ServivesOne />
        </section>
        <section id="luka">
          <ServicesTwo />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    );
  }
}

export default HomePage;
