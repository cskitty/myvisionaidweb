import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="My Smart Vision Aid"
    description="An mobile phone application to help vision impaired people to lead more independent lives"
  >
    <VerticalFeatureRow
      title="Object Detection"
      description="We use object recognition with deep learning and text to speech technolodgy to speak out lout any objects that is in the front."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Help from Volunteers"
      description="In case AI object recoginition is not enough, my Vision Aid will call volunteers for help through Facetime."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Download My Vision Aid"
      description="My Vision Aid is available for download from iOS app store and Google playstore."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
