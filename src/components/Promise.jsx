import PromiseItem from "./PromiseItem";


const Promise = () => {
    const promise = [
        {
            image: "/image/projectA.png",
            name:"lorem",
            detail:"Get tailored solutions to meet your unique business needs and goals.",
        },
        {
            image: "/image/projectA.png",
            name:"lorem",
            detail:"Get tailored solutions to meet your unique business needs and goals.",
        },
        {
            image: "/image/projectA.png",
            name:"lorem",
            detail:"Get tailored solutions to meet your unique business needs and goals.",
        },
        {
            image: "/image/projectA.png",
            name:"lorem",
            detail:"Get tailored solutions to meet your unique business needs and goals.",
        },
        {
            image: "/image/projectA.png",
            name:"lorem",
            detail:"Get tailored solutions to meet your unique business needs and goals.",
        },
        
    ];
    return(
        <>
        <section className="promise-container">
            <h2>Projects</h2>
            <div className="promise-item">
            {promise.map((pro, index ) =>(
               <PromiseItem
               key={index}
               image={pro.image}
               name={pro.name}
               detail={pro.detail}
               ></PromiseItem> 
            ))}
            </div>
        </section>
        </>
    );
};
export default Promise;