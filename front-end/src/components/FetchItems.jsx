import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const conrtroller = new AbortController();
    const signal = conrtroller.signal;

    // dispatch(fetchStatusActions.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.items);
        // dispatch(fetchStatusActions.markFetchDone());
        dispatch(itemsActions.addInitialItems(data.items));
        // dispatch(fetchStatusActions.markFetchingFinished());
      });

    return () => {
      conrtroller.abort();
    };
  });

  return <div></div>;
};

export default FetchItems;
