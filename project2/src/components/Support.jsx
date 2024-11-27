import faq from "../assets/faq.png";
import { FaBookDead, FaRegHeart } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";
import { GiInfinity, GiWaterRecycling } from "react-icons/gi";
import { MdBlock } from "react-icons/md";

const supportData = [
  {
    icon: <FaRegHeart />,
    title: "Is there a free trial available?",
    desc: "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
  },
  {
    icon: <TbRefresh />,
    title: "Can I change my plan later?",
    desc: "Of course, you can change your plan anytime you want. You can also upgrade or downgrade your plan.",
  },
  {
    icon: <FaBookDead />,
    title:
      "May I need to pay full amount while I update plan in the middle of the month?",
    desc: "No you don’t need to pay the full amount if you update the practitioner number. Just pay for available days from the next renew.",
  },
  {
    icon: <GiWaterRecycling />,
    title: "Can I disable the auto renew?",
    desc: "You can disable and enable auto renew anytime also you can choose auto renew from different options.",
  },
  {
    icon: <MdBlock />,
    title: "What is your cancellation policy?",
    desc: "We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.",
  },
  {
    icon: <GiInfinity />,
    title: "Can I run my business Pay As You Go for lifetime",
    desc: "Yes, you can run your business lifetime with Pay As You Go. No additional charges will taken for your plan.",
  },
];

const Support = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-24 xl:px-32 py-10">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <h4 className="text-lg text-[#19525A]">Support</h4>
        <h1 className="text-3xl font-semibold">Frequently Asked Questions</h1>
        <span className="text-sm text-[#475467]">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please{" "}
          <span className="underline">chat to our friendly team.</span>
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 mt-10">
        <div className="flex flex-col lg:w-2/3 gap-8">
          {supportData.map((support, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="text-[#19525A] text-lg bg-[#EBFFEB] p-2 rounded-full">
                {support.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl text-[#101828] font-semibold">
                  {support.title}
                </h3>
                <span className="text-sm text-[#475467]">{support.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center lg:w-1/3">
          <img
            src={faq}
            alt="FAQ"
            className="object-cover h-80 w-full rounded-lg lg:h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Support;
