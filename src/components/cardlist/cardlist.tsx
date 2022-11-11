import { Monster } from '../../App'
import Card from "../card/card";

type CardListProps = {
    monsters: Monster[];
}


const CardList = ({ monsters }: CardListProps) => {

    return (
        <div>
            {monsters.map((monster) => {
                return (
                    <Card key={monster.id} id={monster.id} name={monster.name} email={monster.email} />
                )

            }
            )}
        </div>
    )
}

export default CardList;