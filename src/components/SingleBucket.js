import React from "react";
import SingleItem from "./SingleItem";
import "../styles/singleBucket.css";
import { useState } from "react";
import { useEffect } from "react";
const SingleBucket = ({
  singleBucket,
  filterBucket,
  handleHistory,
  addInBucket,
}) => {
  // console.log(singleBucket);
  const [mainbucket, setmainBucket] = useState([singleBucket]);

  useEffect(() => {
    setmainBucket(singleBucket);
  }, [singleBucket]);

  const filterMainBucket = (id, type) => {
    // setmainBucket(mainbucket.filter((item) => item.id !== id));
    filterBucket(id, type);
  };

  const keygen = () => {
    return Math.random().toString();
  };

  const editBucket = (id, newValues) => {
    filterMainBucket(id, newValues.type);
    addInBucket(newValues);
  };

  const editItem = (id, newValues) => {
    console.log(id);
    console.log(newValues);
    editBucket(id, newValues);
  };

  console.log(mainbucket);

  return (
    <>
      {mainbucket.length > 0 ? (
        <div className="single__bucket">
          <h2 className="buket__name">{mainbucket[0].type}</h2>
          <div className="bucket">
            {mainbucket.map((item) => {
              return (
                <SingleItem
                  key={keygen()}
                  editItem={editItem}
                  filterMainBucket={filterMainBucket}
                  item={item}
                  handleHistory={handleHistory}
                />
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SingleBucket;
