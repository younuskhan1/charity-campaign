import "./Donation.css"
import { useLoaderData } from 'react-router-dom';
import { getStoredItemsFromLocalStorage } from '../LocalStorage/LocalStorage';
import { useEffect, useState } from 'react';
import SelectedDonations from '../SelectedDonations/SelectedDonations';

const Donation = () => {

   const [selectedElements, setSelectedElements] = useState([]);
   const donations = useLoaderData();
//    console.log(donations);
   
    // console.log(selectedDonations);

    useEffect(()=>{
        if(donations.length>0){

            const cardIds = getStoredItemsFromLocalStorage();
            let selectedDataNewArray =[];

            for(let cardId of cardIds){
                const selectedData = donations?.find((item)=> item.card_id === cardId);
                if(selectedData){
                selectedDataNewArray.push(selectedData);
                }
            }
        setSelectedElements(selectedDataNewArray);
        }
    },[donations]);


    return (
        <div>
            <div className='selectedElementsParent'>
           {
            selectedElements?.map((element,index)=><SelectedDonations key={index} element={element}></SelectedDonations>)
           }
        </div>
            <div className="show-all-button-parent"><button className="show-all-button">Show All</button></div>
        </div>
    );
};



export default Donation;