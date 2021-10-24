import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Introducting the VORA App"
    description="An mobile phone application to help vision impaired people."
  >
    <VerticalFeatureRow
      title="Object Detection"
      description="We use object recognition with deep learning and text to speech technology to say out loud what objects are in front of our user."
      image="/assets/images/vora1.png"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Help from Volunteers"
      description="Using the Vora app, you can get also help from volunteers through Facetime. "
      image="/assets/images/vora2.png"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Download VORA app"
      description="Available soon for download from App Store and Google Playstore."
      image="/assets/images/vora3.png"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
