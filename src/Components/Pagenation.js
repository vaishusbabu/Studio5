import React, { useState, useEffect } from 'react';
import { Pagination } from 'react-bootstrap';

function Pagenation(props) {
    const pagerData = props.pager;
    console.log("pager Data", pagerData);

    const [activePage, setActivePage] = useState(pagerData.current_page);

    useEffect(() => {
        setActivePage(pagerData.current_page);
    }, [pagerData.current_page]);

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
        console.log(`active page is ${pageNumber}`);

    };

    return (
        <div>
            <Pagination
                activePage={activePage}
                itemsCountPerPage={pagerData.items_per_page}
                totalItemsCount={pagerData.count}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                prevPageText="Previous"
                nextPageText="Next"
            />
        </div>
    );
}

export default Pagenation;
