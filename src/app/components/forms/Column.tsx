import { ItemInterface, ReactSortable } from "react-sortablejs";
import { CardType } from "../Board";
import { SetStateAction } from "react";

type ColumnProps = {
  id: string;
  name: string;
  cards: CardType[];
  setCards: SetStateAction<any>;
};

export default function Columns({ id, name, cards, setCards }: ColumnProps) {
  function setCardsForCol(sortedCards: CardType[], newColumnId: string) {
    // console.log(cards, newColumnId);
    const sortedCardsIds = sortedCards.map((c) => c.id);

    //changing columns
    setCards((prevCards: any) => {
      const newCards = [...prevCards];
      sortedCards.forEach((c: CardType, NewIndex: number) => {
        const foundCard = newCards.find((newCard) => newCard.id === c.id);
        if (foundCard) {
          foundCard.index = NewIndex;
          foundCard.columnId = newColumnId;
        }
      });
      return newCards;
    });
  }
  return (
    <>
      <div className="rounded-md p-2 bg-gray-200 shadow-custom-card w-48 ">
        <h3>{name} </h3>
        <ReactSortable
          list={cards}
          setList={(cards) => setCardsForCol(cards, id)}
          group="cards"
          className="min-h-20"
          ghostClass="ghost"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="shadow-custom-card-inset my-2 p-2 rounded-lg border-2  "
            >
              <span>{card.name}</span>
            </div>
          ))}
        </ReactSortable>
      </div>
    </>
  );
}
