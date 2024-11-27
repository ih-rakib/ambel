import BreadCrumb from "./BreadCrumb";
import PopularCard from "./PopularCard";

const Popular = () => {
  return (
    <section className="p-2 sm:p-4 md:p-8 flex flex-col items-center">
      <div className="text-center flex flex-col gap-3">
        <h3 className="text-xl text-[#DC6803] font-semibold">Industries</h3>
        <h1 className="text-2xl font-bold">
          Popular Businesses and Practitioners <br /> who use Ambel
        </h1>
        <span className="text-sm text-gray-500">
          Our platform supports a diverse range of professionals, with popular
          industries; including: healthcare <br /> providers, medi spas, salons
          , fitness coaches, law agencies, beauty specialists, <br />{" "}
          consultants, and therapists.
        </span>

        <BreadCrumb />
      </div>

      <div className="mt-8 w-full">
        <PopularCard />
      </div>
    </section>
  );
};

export default Popular;
