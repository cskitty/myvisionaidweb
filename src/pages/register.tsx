import React from 'react';

import Link from 'next/link';

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
        title="Thanks for helping out ..."
        description="Please register your name, number to volunteer."
      >
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <h1 className="block w-full text-center text-grey-darkest mb-6">
            Sign Up
          </h1>
          <form
            className="mb-4 md:flex md:flex-wrap md:justify-between"
            action="/"
            method="post"
          >
            <div className="flex flex-col mb-4 md:w-1/2">
              <label
                className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest"
                htmlFor="first_name"
              >
                First Name
              </label>
              <input
                className="border py-2 px-3 text-grey-darkest md:mr-2"
                type="text"
                name="first_name"
                id="first_name"
              />
            </div>
            <div className="flex flex-col mb-4 md:w-1/2">
              <label
                className="mb-2 uppercase font-bold text-lg text-grey-darkest md:ml-2"
                htmlFor="last_name"
              >
                Last Name
              </label>
              <input
                className="border py-2 px-3 text-grey-darkest md:ml-2"
                type="text"
                name="last_name"
                id="last_name"
              />
            </div>
            <div className="flex flex-col mb-4 md:w-full">
              <label
                className="mb-2 uppercase font-bold text-lg text-grey-darkest"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border py-2 px-3 text-grey-darkest"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="flex flex-col mb-6 md:w-full">
              <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">
                Phone
              </label>
              <input
                className="border py-2 px-3 text-grey-darkest"
                type="email"
                name="password"
                id="password"
              />
            </div>
          </form>

          <Link href="/signup" passHref>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              type="submit"
            >
              Volunteer Sign Up
            </button>
          </Link>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
