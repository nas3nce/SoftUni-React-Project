import { useResourceContext } from '../../../contexts/resourceContext';
import CatalogItem from './catalogItem/CatalogItem';

export default function Catalog() {
    const { resources } = useResourceContext();

    return (
        <>
            <h1 className="fs-7 mt-11 mb-4">Choose Your Next Journey!</h1>
            <div className="catalogContainer">
                {resources.map(resource => <CatalogItem key={resource._id} {...resource} />)}
            </div>
        </>
    );

}