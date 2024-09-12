import BannerImage from '../assets/banner.png';

const Banner = () => {
  return (
    <section className="bg-gray-100">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <img
            src={BannerImage}
            alt="Banner Image"
            className="w-full h-auto object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;