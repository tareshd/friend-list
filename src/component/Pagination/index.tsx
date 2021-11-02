import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Actions from "../../store/actions";
import * as selectors from "../../store/selectors";

export const PaginationPanel: React.FC = () => {
  const pagination = useSelector(selectors.getPagination);
  const friendList = useSelector(selectors.getFriendList);
  const maxItemCountPerPage = useSelector(selectors.getMaxItemCountPerPage);
  const dispatch = useDispatch();

  const [active, setActive] = useState(pagination);
  const [pages, setPages] = useState([1]);

  useEffect(() => {
    const pageCollection = new Array(
      Math.ceil(friendList.length / maxItemCountPerPage)
    );

    for (let i = 0; i < pageCollection.length; i++) {
      pageCollection[i] = i + 1;
    }

    setPages(pageCollection);
  }, [friendList, maxItemCountPerPage]);

  const handlePagination = (index: number) => {
    setActive(index);
    dispatch({ type: Actions.CHANGE_PAGINATION, value: index });
  };

  const displayPagination = () => {
    return (
      <>
        <li
          onClick={active > 1 ? () => handlePagination(active - 1) : undefined}
        >
          &laquo;
        </li>

        {pages.map((item, index) => {
          return (
            <li
              key={index}
              className={item === active ? "active" : ""}
              onClick={() => handlePagination(index + 1)}
            >
              {item}
            </li>
          );
        })}

        <li
          onClick={
            pages.length > active
              ? () => handlePagination(active + 1)
              : undefined
          }
        >
          &raquo;
        </li>
      </>
    );
  };

  return <div className="pagination">{displayPagination()}</div>;
};
