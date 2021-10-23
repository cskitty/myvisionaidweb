import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Volunteer your free time to help\n'}
            <span className="text-primary-500">My Vision Aid</span>
          </>
        }
        description="Help vision impaired people to lead more independent lives."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button xl>Register As Volunteer</Button>
            </a>
          </Link>
        }
        button2={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button xl>Register As Volunteer</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
