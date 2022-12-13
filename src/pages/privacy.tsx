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
        title="Privacy Policy"
        description="VORA AID, a smart phone app to help the visually impaired."
      >
        <div className="w-full bg-white rounded shadow-lg p-8 m-4   md:mx-auto">
          <p>
            VORA Studio built the VORA AID app as a free app. This app is
            provided by VORA Studio at no cost and is intended for use as is.
          </p>{' '}
          <p>
            This page is used to inform visitors regarding our policies with the
            collection, use, and disclosure of Personal Information if anyone
            decided to use our Service.
          </p>{' '}
          <br></br>
          <p>
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which are accessible at VORA AID unless
            otherwise defined in this Privacy Policy.
          </p>{' '}
          <br></br>
          <p>
            <strong>Information Collection and Use</strong>
          </p>{' '}
          <br></br>
          <p>
            While using our app, we do not collect any personally identifiable
            information.
          </p>
          <p>
            <br></br>
            <strong>Children’s Privacy</strong>
          </p>{' '}
          <div>
            <p>
              We do not knowingly collect personally identifiable information
              from children. We encourage all children to never submit any
              personally identifiable information through the Application and/or
              Services. We encourage parents and legal guardians to monitor
              their children&#39s Internet usage and to help enforce this Policy
              by instructing their children never to provide personally
              identifiable information through the Application and/or Services
              without their permission. If you have reason to believe that a
              child has provided personally identifiable information to us
              through the Application and/or Services, please contact us. You
              must also be at least 16 years of age to consent to the processing
              of your personally identifiable information in your country (in
              some countries we may allow your parent or guardian to do so on
              your behalf).
            </p>
          </div>{' '}
          <p>
            <br></br>
            <strong>Changes to This Privacy Policy</strong>
          </p>{' '}
          <p>
            We may update our Privacy Policy from time to time. Thus, you are
            advised to review this page periodically for any changes. We will
            notify you of any changes by posting the new Privacy Policy on this
            page.
          </p>{' '}
          <br></br>
          <p>This policy is effective as of 2022-12-12</p>{' '}
          <p>
            <br></br>
            <strong>Contact Us</strong>
          </p>{' '}
          <p>
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us at voraaidapp@gmail.com.
          </p>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
