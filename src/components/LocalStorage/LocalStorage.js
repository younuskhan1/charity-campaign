const getStoredItemsFromLocalStorage =()=>{
  return localStorage.getItem("myDonations")?
  JSON.parse(localStorage.getItem("myDonations")):[];
}

const addDonationsToLocalStorage =(id)=>{
    const previousStoredItems = getStoredItemsFromLocalStorage();
    const presentStoredElements = [...previousStoredItems, id];
    localStorage.setItem("myDonations", JSON.stringify(presentStoredElements));
}

export {addDonationsToLocalStorage, getStoredItemsFromLocalStorage};