import "./card.css";

const Card = (props) => {
    return(
        <div className="github-profile">
            <img src={props.avatar_url} alt="GitHub user"/>
            <div className="info">
                <div className="user-name">{props.name}</div>
                <div className="company">{props.company}</div>
            </div>
        </div>
    );
}

export default Card;
