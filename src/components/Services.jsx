import ServicesItem from "./servicesItem";

const Services = ({ scroll }) => {
  const services = [
    {
      index: "1",
      image: "/image/serviceD.png",
      title: "1. Own a Website that Works",
      description: "It must look great and you want it to work all the time. I help you by designing, building, and hosting a beautiful site that'll grow your business.",
    },
    {
      index: "2",
      image: "/image/serviceB.png",
      title: "2. Boost Your Online Presence",
      description: "I help you create a professional and engaging website that attracts visitors and drives conversions.",
    },
    {
      index: "3",
      image: "/image/serviceC.png",
      title: "3. Mobile-Friendly Designs",
      description: "Ensure your website works seamlessly on all devices, providing a great user experience.",
    },
    {
      index: "4",
      image: "/image/serviceD.png",
      title: "4. Custom Web Solutions",
      description: "Get tailored solutions to meet your unique business needs and goals.",
    },
  ];

  return (
    <>
      <section className={`service-item-container ${scroll}`}>
        <h2 className="service-center large-font">Ways I can help you</h2>
        {services.map((service, index) => (
          <ServicesItem
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
            isReverse={index % 2 !== 0} // Adjusted for 0-based index
            scroll={scroll}
          />
        ))}
      </section>
    </>
  );
};


export default Services;