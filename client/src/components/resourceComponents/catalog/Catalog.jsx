import { useState } from 'react';
import { useResourceContext } from '../../../contexts/resourceContext';
import CatalogItem from './catalogItem/CatalogItem';
import Pagination from 'react-bootstrap/Pagination';



export default function Catalog() {
    const { resources } = useResourceContext();
    const [currentPage, setCurrentPage] = useState(1);
    const resourcePerPage = 8;
    const lastIndex = currentPage * resourcePerPage;
    const firstIndex = lastIndex - resourcePerPage;
    const shownRecords = resources.slice(firstIndex, lastIndex);
    const lastPage = Math.ceil(resources?.length / resourcePerPage);
    const pageNumbers = [...Array(lastPage + 1).keys()].slice(1);

    const prevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1);
    };

    const nextPage = () => {
        if (currentPage !== lastPage) setCurrentPage(currentPage + 1);
    };

    const changePage = (id) => setCurrentPage(id);

    return (
        <>
            <h1 className="fs-7 mt-7 mb-3">Choose Your Next Journey!</h1>
            <div className="catalogContainer">
                {shownRecords.map(resource => <CatalogItem key={resource._id} {...resource} />)}
            </div>
            <nav>
                <ul className='pagination'>
                    <li className='pageItem' onClick={prevPage}>
                        <a href="#" className='pageLink'>{`⮜`}</a>
                    </li>
                    {
                        pageNumbers.map((num, index) => (
                            <li
                                className={`pageItem ${currentPage === num ? 'activeLink' : ''}`}
                                key={index}
                                onClick={() => changePage(num)}
                            >
                                <a href="#" className='pageLink'> {num} </a>
                            </li>
                        ))
                    }
                    <li onClick={nextPage} className='pageItem' >
                        <a href="#" className='pageLink'>{`⮞`}</a>
                    </li>
                </ul>
            </nav>
        </>
    );

};