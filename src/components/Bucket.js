import React, { useEffect } from "react";
import SingleBucket from "./SingleBucket";
import "../styles/buckets.css";
import { useState } from "react";
const Bucket = ({ buckets, filterBucket, addInBucket }) => {
  const [allhistory, setAllHistory] = useState([]);
  const [allbuckets, setAllBuckets] = useState([]);
  // const allbuckets = [];

  const processTime = (time) => {
    var sec_num = parseInt(time, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - hours * 3600) / 60);
    var seconds = sec_num - hours * 3600 - minutes * 60;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    return hours + ":" + minutes + ":" + seconds;
  };

  const handleHistory = (newHistory) => {
    setAllHistory((prev) => {
      const newArr = [...prev, newHistory];
      return newArr;
    });
  };

  const keygen = () => {
    return Math.random().toString();
  };

  useEffect(() => {
    // setAllBuckets(allbuckets.push(buckets[bucket]));
    setAllBuckets(() => {
      const newArr = [];
      for (let bucket in buckets) {
        newArr.push(buckets[bucket]);
      }
      return newArr;
    });
  }, [buckets]);

  // console.log(allbuckets);
  console.log(allhistory);
  return (
    <div>
      <div className="buckets">
        {allbuckets.map((singleBucket, index) => (
          <SingleBucket
            key={keygen()}
            singleBucket={singleBucket}
            filterBucket={filterBucket}
            handleHistory={handleHistory}
            addInBucket={addInBucket}
          />
        ))}
      </div>

      <div className="historytable">
        {allhistory.map((item, index) => (
          <>
            <div key={index} className="historyitem">
              <p className="title">title:{item.name}</p>
              <p className="type">type:{item.type}</p>
              <p className="timeplayed">Time player:{processTime(item.time)}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Bucket;
