import Marquee from 'react-fast-marquee';
import { mediaLogos } from '../../assets/LandingPage/MediaPartner'; // pastikan path sesuai

const MediaPartner = () => {
  return (
    <div className="my-12">
      <h2 className="text-center text-xl font-semibold mb-4">Media Partner</h2>
      <Marquee pauseOnHover={true} gradient={false} speed={40}>
        {mediaLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Media Partner ${index + 1}`}
            className="h-16 mx-8"
            loading='eager'
          />
        ))}
      </Marquee>
    </div>
  );
};

export default MediaPartner;
