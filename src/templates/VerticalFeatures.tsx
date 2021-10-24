import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Introducting the VORA App"
    description="A mobile phone app that connects the visually impaired to smart object detection and a system of connected volunteers."
  >
    <VerticalFeatureRow
      title="Offline Object Detection"
      description="To protect user privacy, we use offline algorithms for object recognition with deep learning and offline voice recognition to communicate with our users. Anytime, anywhere. No internet needed to use our app, no user data stored."
      image="/assets/images/vora1.png"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Help from Volunteers"
      description="Using Vora, you can get also help from volunteers through Facetime. Volunteers can sign up through this website, where we'll connect them whenever our app users need assistance from a real person."
      image="/assets/images/vora2.png"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Download the VORA app"
      description="Coming soon for download on the App Store and Google Playstore."
      image="/assets/images/vora3.png"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
