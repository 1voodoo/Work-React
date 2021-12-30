const  getBugs = async() => {
  try{
    const response = await fetch("http://acnhapi.com/v1/bugs");
  
    const data = await response.json();
    const arr = Object.values(data);

    return arr.map((item) => {
      
      return {
        src: item.image_uri,
        name: item.name["name-EUru"],
        location: item.availability.location,
        price: item.price,
        rarity: item.availability.rarity,
        fileName: item["file-name"],    
      };

    });

  }

  catch(error){
    alert("Oops something went wrong");
  };

};

export default getBugs;

       

      
