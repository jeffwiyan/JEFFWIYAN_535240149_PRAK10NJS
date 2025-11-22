"use client";
import React from "react";
import Image from "next/image";

// Components
import HeroSection from "../components/herosection";
import WorkSection from "../components/worksection";
import ServiceSection from "../components/servicesection";
import ContactSection from "../components/contactsection";

// Bootstrap
import { Container, Row, Col } from "react-bootstrap";

// MUI
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <main id="home">
      <HeroSection />

      {/* About Section Manual di Page */}
      <Container id="about" className="py-5">
        <Row className="my-4">
          <Col md={6} className="align-self-center mb-3">
            <h2>About Us</h2>
            <h6>What We Do?</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus assumenda, necessitatibus veniam vitae deleniti, quos nulla obcaecati eligendi nihil hic cum ex. Dolor ab eum dolore earum magni aut quis.
            </p>
            <Button variant="contained">Learn More</Button>
          </Col>
          <Col md={6}>
            <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
                <Image 
                  src="/images/about.jpg" 
                  alt="About Us" 
                  width={500}
                  height={500}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
            </div>
          </Col>
        </Row>
      </Container>

      <section id="work" className="bg-dark text-light py-5">
        <WorkSection />
      </section>

      <section className="py-5">
        <ServiceSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}