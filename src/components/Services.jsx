import ServicesItem from "./ServicesItem";

const Services = () => {
    const services = [
        {
            image: "/image/serviceD.png",
            title: "1. Own a Website that Works",
            description: "It must look great and you want it to work all the time. I help you by designing, building, and hosting a beautiful site that'll grow your business.",
          },
          {
            image: "/image/serviceB.png",
            title: "2. Boost Your Online Presence",
            description: "I help you create a professional and engaging website that attracts visitors and drives conversions.",
          },
          {
            image: "/image/serviceC.png",
            title: "3. Mobile-Friendly Designs",
            description: "Ensure your website works seamlessly on all devices, providing a great user experience.",
          },
          {
            image: "/image/serviceD.png",
            title: "4. Custom Web Solutions",
            description: "Get tailored solutions to meet your unique business needs and goals.",
          },
    ];
    return (
        <>
            <section className="service-item-container">
                <h2 className="service-center large-font">Ways I can help you</h2>
                {services.map((service, index) => (
                    <ServicesItem
                    key={index}
                    image={service.image}
                    title={service.title}
                    description={service.description}
                    isReverse={service.index % 2 !== 0}
                    />
                ))}
                
            </section>
        </>
    );
}

export default Services;