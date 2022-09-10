import React from "react";
import Card from "../card/card";


const CardList = ({ monsters, searchFeild }) => {

    let filteredMonsters = [];
    if (searchFeild === '') {
        filteredMonsters = monsters
    } else {
        filteredMonsters = monsters.filter((monster) => {
            return (
                monster.name.toLowerCase().includes(searchFeild.toLowerCase()))
        })
    }


    return (
        <div>
            {filteredMonsters.map((monster) => {
                return (
                    <Card key={monster.id} id={monster.id} name={monster.name} email={monster.email} />
                )

            }
            )}
        </div>
    )
}

export default CardList;