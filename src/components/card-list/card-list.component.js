import { Component } from "react";
import './card-list.styles.css';


class CardList extends Component {
    render() {
        console.log(this.props);
        const { monsters } = this.props;
        return (
            <div className='card-list'>
                {monsters.map((monster) => {
                    const { name, email, id } = monster;
                    return (
                        <div className='card-container' key={id}>
                            <img
                                alt={`monster ${monster.name}`}
                                src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                            <h1>{name}</h1>
                            <p>{email}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CardList;
