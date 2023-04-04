import React from "react";

export const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, fecha, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{fecha}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};
