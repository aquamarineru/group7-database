import React from 'react'

export default function Pagination({ page, setPage, rangeLength, maximum }) {

  console.log("maximum" , maximum);
    let pages = [];
    const offset = page < 5 ? 5 - page : 0;
    for (let i = page - 5; i <= page + 4; i++) {
      if (i + offset <= maximum / rangeLength) {
        pages.push(i + offset);
      }
  }
  return pages.map((pn) => 
    <>
        <button className="pagination-button" onClick={() => setPage(pn + 1)}>{pn + 1}</button>
    </>
    );
}