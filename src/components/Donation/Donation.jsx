import "./Donation.css"
import { useLoaderData } from 'react-router-dom';
import { getStoredItemsFromLocalStorage } from '../LocalStorage/LocalStorage';
import { useEffect, useState } from 'react';
import SelectedDonations from '../SelectedDonations/SelectedDonations';
import NoDonationsSelected from "../NoDonationsSelected/NoDonationsSelected";


const Donation = () => {

   const [selectedElements, setSelectedElements] = useState([]);
   const [isShowAll, setIsShowAll] = useState(false);
   const donations = useLoaderData();
    // console.log(donations);

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
            {
                selectedElements?.length === 0 ? <NoDonationsSelected></NoDonationsSelected> :
                <div>
                    <div className='selectedElementsParent'>
                        {     
                            isShowAll ? selectedElements?.map((element,index)=><SelectedDonations key={index} element={element}></SelectedDonations>) : 
                            selectedElements?.slice(0, 4).map((element,index)=><SelectedDonations key={index} element={element}></SelectedDonations>)
                        }
                    </div>
                    {selectedElements?.length > 4 ? <div className = "show-all-button-parent"><button className={`show-all-button ${isShowAll && "show-all-button-hidden"}`} onClick={()=>setIsShowAll(!isShowAll)}>See All</button></div> : ""}
                </div>
            }   
        </div>
    );
};



export default Donation;