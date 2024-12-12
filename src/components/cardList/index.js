import Card from "../card";

const CardList = (props) => {
    return(
        <div>
            {props.profiles.map(profile => <Card {...profile}/>)}
        </div>
    );
}

export default CardList;
