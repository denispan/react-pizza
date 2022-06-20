import React from "react";
import Categories from "../../components/categories";
import Sort from "../../components/sort";
import PizzaSkeleton from "../../components/pizza-block/pizza-skeleton";
import PizzaBlock from "../../components/pizza-block/pizza-block";
import Pagination from "../../components/pagination/pagination";


function Main({ searchValue }) {
  const dataURL = 'https://62aad7dba62365888bcde7d2.mockapi.io/items';

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [categoryId, setCategoryId] = React.useState({id: 0, name: 'Все'});
  const [sortObj, setSortObj] = React.useState({name: 'популярности ↑', sortType: 'rating'});

  React.useEffect(() => {
    setIsLoading(true);
    const queryCategory = categoryId.id !== 0 ? `category=${categoryId.id}&` : '';
    const sortTypeReal = sortObj.sortType.replace('-', '');
    const order = sortObj.sortType.includes('-') ? 'asc' : 'desc';
    const querySort = `sortBy=${sortTypeReal}&order=${order}`;

    setIsLoading(true);

    fetch(dataURL + `?page=${currentPage}&limit=4& + ${queryCategory} + ${querySort}`)
      .then((response) => response.json())
      .then((jsonResp) => {
        setItems(jsonResp);
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
  }, [categoryId, sortObj, currentPage]);


const skeletons = [...new Array(6)].map((item, i) => {
  return <PizzaSkeleton  key={i}/>
});

  let pizzas = items.map((pizza) => {
    return <PizzaBlock {...pizza} key={pizza.id}/>
  });

if (searchValue) {
  pizzas = items.filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase())).map((pizza) => {
    return <PizzaBlock {...pizza} key={pizza.id}/>
  });
}


  return (
    <div className="wrapper">
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)}/>
            <Sort value={sortObj} onClickSort={(id) => setSortObj(id)}/>
          </div>
          <h2 className="content__title">{categoryId.name} пиццы</h2>
          <div className="content__items">
            {
              isLoading ? skeletons : pizzas
            }
          </div>
        </div>

      </div>
      <Pagination onChangePage={(page) => setCurrentPage(page)}/>
    </div>
  );
}

export default Main;

