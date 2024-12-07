
const ToolCard = (props) => {
    console.log(props);
    return <div className="techstack">
        <div className="techstack-item">
            <img src={props.message.image} alt="" />
        </div>
        <h4>{props.message.label}</h4>
    </div>
};

export default ToolCard;