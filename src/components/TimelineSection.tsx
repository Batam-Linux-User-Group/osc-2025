import {
  LinebawahKanan,
  LinebawahKiri,
  MaskotTimeline,
  Timeline,
  topline,
} from "../assets/LandingPage/TimelineSection";
const TimelineSection = () => {
  return (
    <div className="px-3 py-10 relative">
      <div className="flex justify-center">
        <img src={topline} alt="Topline" className=" md:w-1/4" />
      </div>
      <h2 className="pt-3 underline font-bold text-2xl text-center">
        TIMELINE
      </h2>

      <div className="hidden md:block">
        <img src={Timeline} alt="Timeline" className="h-auto mx-auto pt-5" />
        <img
          src={MaskotTimeline}
          alt="mascot"
          className="absolute top-1/4 left-0 scale-x-[1]"
        />

        <img
          src={LinebawahKanan}
          alt="linebawahkanan"
          className="absolute bottom-10 right-10"
        />
        <img
          src={LinebawahKiri}
          alt="linebawahkanan"
          className="absolute bottom-10 left-10 w-1/6"
        />

        <div className="pt-3 absolute top-32 md:right-40 lg:right-100">
          <p>10Juli - 15 Agustus 2025</p>
          <h5 className="font-bold text-2xl">Pendaftaran</h5>
        </div>
        <div className="pt-3 absolute top-80 text-end md:left-40 lg:left-100">
          <p>12 Agustus 2025</p>
          <h5 className="font-bold text-2xl">Teknikal Meeting</h5>
        </div>
        <div className="absolute top-140 md:right-40 lg:right-100">
          <p>16 Agustus - 17 Agustus 2025</p>
          <h5 className="font-bold text-2xl">Pelaksanaan lomba</h5>
        </div>
        <div className="absolute textend top-200 md:left-40 lg:left-100">
          <p>19 Agustus 2025</p>
          <h5 className="font-bold text-2xl">Pengumuman Juara </h5>
        </div>
        <div className="absolute top-250 md:right-40 lg:right-100">
          <p>20 Agustus 2025</p>
          <h5 className="font-bold text-2xl">Penyerahan Hadiah</h5>
        </div>
      </div>

      {/* MOBILE */}
      <div className="flex ps-3 pt-8 space-x-5 md:hidden">
        <img src={Timeline} alt="" className="w-1/4" />
        <div className="space-y-32">
          <div className="pt-3">
            <p>10Juli - 15 Agustus 2025</p>
            <h5 className="font-bold text-2xl">Pendaftaran</h5>
          </div>
          <div className="pt-3">
            <p>12 Agustus 2025</p>
            <h5 className="font-bold text-2xl">Teknikal Meeting</h5>
          </div>
          <div className="">
            <p>16 Agustus - 17 Agustus 2025</p>
            <h5 className="font-bold text-2xl">Pelaksanaan lomba</h5>
          </div>
          <div className="">
            <p>19 Agustus 2025</p>
            <h5 className="font-bold text-2xl">Pengumuman Juara </h5>
          </div>
          <div className="pt-3">
            <p>20 Agustus 2025</p>
            <h5 className="font-bold text-2xl">Penyerahan Hadiah</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
