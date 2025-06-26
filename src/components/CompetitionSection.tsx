import {
  mascotRightBottom,
  shapeLeftBottom,
  shapeLeftTop,
  shapeRightTop,
  cardMascotDesign,
  cardWebDesign,
  cardNetsim,
  cardSysadmin,
} from "../assets/LandingPage/CompetitionSection";

const CompetitionSection = () => {
  return (
    <div className="flex flex-col items-center justify-center relative bg-[#423E40] py-10 overflow-hidden">
      <img
        src={mascotRightBottom}
        alt="mascotRightBottom"
        className="absolute bottom-0 right-0 hidden sm:block sm:-right-44 lg:-bottom-40 lg:-right-14"
      />
      <img
        src={mascotRightBottom}
        alt="mascotRightBottom"
        className="absolute bottom-0 left-0 hidden sm:block sm:-left-44  scale-x-[-1] lg:hidden"
      />
      <img
        src={shapeLeftBottom}
        alt="shapeLeftBottom"
        className="absolute bottom-10 left-10 hidden lg:block "
      />
      <img
        src={shapeRightTop}
        alt="shapeRightTop"
        className="absolute top-10 right-10 hidden lg:block "
      />
      <img
        src={shapeLeftTop}
        alt="shapeLeftTop"
        className="absolute top-10 left-10 hidden lg:block "
      />
      <div className="mb-10 text-center">
        <h2 className="text-gray-100 text-2xl font-semibold">
          Daftar Lomba OSC 2025
        </h2>
        <p className="text-gray-100 ">
          Berikut adalah lomba yang akan diadakan pada OSC 2025!
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-10 md:gap-16">
        <img
          src={cardMascotDesign}
          alt="cardMascotDesign"
          draggable={false}
          className="w-52 hover:-translate-y-5 transition duration-100"
        />
        <img
          src={cardWebDesign}
          alt="cardWebDesign"
          draggable={false}
          className="w-52 hover:-translate-y-5 transition duration-100"
        />
        <img
          src={cardNetsim}
          alt="cardNetsim"
          draggable={false}
          className="w-52 hover:-translate-y-5 transition duration-100"
        />
        <img
          src={cardSysadmin}
          alt="cardSysadmin"
          draggable={false}
          className="w-52 hover:-translate-y-5 transition duration-100"
        />
      </div>
    </div>
  );
};

export default CompetitionSection;
