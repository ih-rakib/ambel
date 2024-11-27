import { useState } from "react";
import {
  MdCalendarMonth,
  MdCallMissedOutgoing,
  MdOutlineVideocam,
  MdBlurLinear,
  MdTouchApp,
  MdOutlineNotifications,
  MdListAlt,
  MdAutoGraph,
  MdAllInbox,
} from "react-icons/md";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  isSelected,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={`${
      isSelected ? "border border-1 border-white rounded-lg" : ""
    } bg-[#25646C] px-4 py-6 rounded-lg flex flex-col gap-3`}
  >
    <div className="flex justify-between items-center">
      <Icon className="text-white text-3xl" />
      <MdCallMissedOutgoing className="text-white text-3xl" />
    </div>
    <h3 className="font-semibold text-xl">{title}</h3>
    <span className="text-sm text-gray-300">{description}</span>
  </div>
);

const Features = () => {
  const [selected, setSelected] = useState(null);

  const features = [
    {
      icon: MdCalendarMonth,
      title: "Schedule & Booking",
      description:
        "Create, schedule and send your clients to your Ambel booking page, where they can book on any device.",
    },
    {
      icon: MdOutlineVideocam,
      title: "Live Consultant",
      description:
        "Integrate meet, zoom and loom to   communicate with your customers or clients in via video conference.",
    },
    {
      icon: MdBlurLinear,
      title: "Payments",
      description:
        "Send custom invoices, take POS and cash payment also accept credit or debit card payment from anywhere.",
    },
    {
      icon: MdTouchApp,
      title: "Customer Tracking",
      description:
        "Manage customer, send marketing email and message, create, records and track via note, case study.",
    },
    {
      icon: MdOutlineNotifications,
      title: "Notification",
      description:
        "Automatically notify your clients and practitioners with reminder vis SMS and email by single setup.",
    },
    {
      icon: MdListAlt,
      title: "Website Builder",
      description:
        "Get a free website, design and customize your booking website for your business without any code.",
    },
    {
      icon: MdAutoGraph,
      title: "Reports",
      description:
        "Powerful data and graphs at your fingertips to monitor day to day activities and generate reports.",
    },
    {
      icon: MdAllInbox,
      title: "Resources",
      description:
        "Create and share resources like Prescriptions, Documentations, Medical Charts and Videos.",
    },
  ];

  return (
    <section className="bg-[#19525A] py-10">
      <div className="p-4 flex flex-col items-center gap-3 text-white">
        <h3 className="text-xl text-[#FDB022] font-semibold">Features</h3>
        <h1 className="text-2xl font-bold text-center mb-4">
          Solve all your needs with a single software solution
        </h1>
        <span className="text-sm text-center mb-6">
          This platform streamlines the entire customer management process,
          saving <br /> businesses time and increasing efficiency. Trusted by
          over 60+ businesses.
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-[1200px]">
          {features.map((feature, index) => (
            <div key={index}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                isSelected={selected === index}
                onClick={() => setSelected(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
