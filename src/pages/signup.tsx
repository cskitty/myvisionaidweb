import React from 'react';

import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';
import { AppConfig } from '../utils/AppConfig';

export default function ViewRegistrationPage() {
  return (
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header />
      <Section
        title="Thanks for joining!"
        description="VORA, a smart phone app to help the visually impaired."
      >
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <h1 className="block w-full text-center text-grey-darkest mb-6">
            Welcome to the Vora volunteer program! Users on Vora will call you
            through the number provided to ask for help.
          </h1>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
