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
              Visual Object Recognition Aid
            </span>
          </>
        }
        description="Helping the visually impaired."
        button={
          <Link href="/register">
            <a>
              <Button xl>Register as a Volunteer</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
