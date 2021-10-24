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
          <Link href="/register">
            <a>Volunteer</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="text-primary-500">
              Vision Object Recoginition Aid
            </span>
          </>
        }
        description="Helping vision impaired people."
        button={
          <Link href="/register">
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
