import React, { useEffect, useRef, useState } from 'react';
import styles from './mobileProducts.module.scss';
import { FiChevronDown } from 'react-icons/fi';
import { OurProductsHome } from '../../../../shared/utils/arrayData';

const MobileProducts = () => {
  const [data, setData] = useState(OurProductsHome);
  const itemsRef = useRef([]);
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleIndexes((prevIndexes) => {
          const newIndexes = [...prevIndexes];
          entries.forEach((entry) => {
            const index = itemsRef.current.indexOf(entry.target);
            if (entry.isIntersecting) {
              if (!newIndexes.includes(index)) newIndexes.push(index);
            } else {
              const indexToRemove = newIndexes.indexOf(index);
              if (indexToRemove !== -1) newIndexes.splice(indexToRemove, 1);
            }
          });
          return newIndexes;
        });
      },
      { threshold: 0.3 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleClick = (item) => {
    const updatedData = data.map((e) => ({
      ...e,
      isOpen: e.id === item.id ? !e.isOpen : false, // Close others
    }));
    setData(updatedData);
  };

  return (
    <div className={styles.container}>
      {data.map((e, index) => (
        <div
          key={e.id}
          ref={(el) => (itemsRef.current[index] = el)}
          className={`${styles.question} ${
            visibleIndexes.includes(index)
              ? index % 2 === 0
                ? styles.slideIn
                : styles.slideInReverse
              : styles.hidden
          }`}
          onClick={() => handleClick(e)}
        >
          <div className={styles.questionIcon}>
            <div className={styles.questionCount}>
              <div className={styles.questionText}>{e.projectName}</div>
            </div>
            <div className={e.isOpen ? styles.icondownUp : styles.icondown}>
              <FiChevronDown color='rgba(10, 49, 97, 1)' />
            </div>
          </div>
          <div className={`${styles.answer} ${e.isOpen ? styles.expandedContent : ''}`}>
            {e.isOpen && (
              <>
                <p>{e.description}</p>
                <img src={e.img} alt={e.projectName} />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileProducts;
