import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Introducting the VORA App"
    description="An mobile phone application to help vision impaired people."
  >
    <VerticalFeatureRow
      title="Object Detection"
      description="We use object recognition with deep learning and text to speech technolodgy to speak out lout any objects that is in the front."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Help from Volunteers"
      description="Using Vora app, you can get also help from volunteers through Facetime."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Download VORA app"
      description="Available soon for download from app store and Google playstore."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
