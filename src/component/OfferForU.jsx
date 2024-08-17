import React, { useEffect, useState } from 'react'
import BookShelf from './BookShelf'
import useFetch from '../customHooks/useFetch';

export default function OfferForU() {
    const [offerForUData, setOfferForu] = useState(null);
    const { data, loading } = useFetch('https://freetestapi.com/api/v1/books?limit=14')

    useEffect(() => {
    
        if(data){
            setOfferForu(data)
        }
    }, [data])
    
    return (
        <div>
            <BookShelf title={'Offer for you'} books={offerForUData}/>
        </div>
    )
}
