import React, { Component } from 'react';
import TheHead from '../components/TheHead';
import TheNav from '../components/TheNav';
import Hero from '../components/Hero';
import JoinBody from '../components/JoinBody';
import Footer from '../components/Footer';

export default class join extends Component {
  active = 'join';
  render() {
    return (
      <div className="bvPage">
        <TheHead />
        {/* <TheNav /> */}
        <Hero heroTab={'join'} />
        <JoinBody />
        <Footer />

        <style jsx>{`
          .bvPage {
            background: url('static/media/nl.png');
            background-size: cover;
            background-position: right top;
          }
        `}</style>
      </div>
    );
  }
}
