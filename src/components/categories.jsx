import React from "react";

function Categories({value, onClickCategory}) {

  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые',];

  return (
    <div className="categories">
      <ul>
        {
          categories.map((categoryName, index) => {
            return (
              <li key={index} onClick={() => onClickCategory({id: index, name: categories[index]})}
                  className={value.id === index ? 'active' : ''}>
                {categoryName}
              </li>
            );
          })
        }
      </ul>
    </div>
  )
}

export default Categories;