import React, { useState } from "react";

const Description = ({ faq }) => {
  const [less, setLess] = useState(true);
  return faq?.planDetail?.length > 15 ? (
    less ? (
      <span className="col-span-5 break-words lg:block my-auto" style={{}}>
        {faq?.planDetail}
        {/* <span
          className="underline cursor-pointer text-blue-500"
          onClick={() => setLess(!less)}
        >
          See More
        </span> */}
      </span>
    ) : (
      <label className="col-span-5 break-words lg:block my-auto" style={{}}>
        {faq?.planDetail}
        {/* <span
          className="underline cursor-pointer text-blue-500"
          onClick={() => setLess(!less)}
        >
          See Less
        </span> */}
      </label>
    )
  ) : (
    <span
      className="col-span-5 break-words lg:block my-auto"
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
      }}
    >
      {faq?.planDetail}
    </span>
  );
};

export default Description;
