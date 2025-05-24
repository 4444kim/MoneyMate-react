import { useState } from 'react';

function PeriodFilter() {
  const CategoryList = ['День', 'Неделя', 'Месяц', 'Год'];
  const [activeCategory, setActiveCategory] = useState(CategoryList[0]);

  return (
    <ul className="flex justify-between items-center bg-gray-100 p-[5px] rounded-[5px]">
      {CategoryList.map((elem, index) => (
        <li
          key={index}
          className={`px-[10%] py-[5px] text-lg rounded-[5px] cursor-pointer ${
            activeCategory === elem ? 'bg-white' : ''
          }`}
          onClick={() => {
            setActiveCategory(elem);
          }}>
          {elem}
        </li>
      ))}
    </ul>
  );
}

export default PeriodFilter;
