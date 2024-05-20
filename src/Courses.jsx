import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function Courses({ coursesProps }) {
  const [index, setIndex] = useState(0);
  const { title, price, content } = coursesProps[index];

  const checkIndex = (index) => {
    if (index < 0) {
      return coursesProps.length - 1;
    }
    if (index > coursesProps.length - 1) {
      return 0;
    }
    return index;
  };

  const prev = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const next = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const getRandomCourse = () => {
    let randomNumber = Math.floor(Math.random() * coursesProps.length);

    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkIndex(randomNumber));
  };

  return (
    <div className="coursesMainDiv">
      <div>
        <h2>Kurslarım</h2>
      </div>
      <button className="randomButton" onClick={getRandomCourse}>
        Rastgele Kurs Ata
      </button>
      <div className="coursesDiv">
        <button className="previousButton" onClick={prev}>
          <FaChevronLeft />
        </button>
        <div className="card">
          <div className="cardTitlePrice">
            <h2 className="cardTitle">{title}</h2>
            <h4 className="cardPrice">{price} TL</h4>
          </div>
          <p>{content}</p>
        </div>
        <button className="nextButton" onClick={next}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Courses;
