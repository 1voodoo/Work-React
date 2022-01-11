const getBugs = async () => {
  const response = await fetch('http://acnhapi.com/v1/bugs');
  const data = await response.json();
  const arr = Object.values(data);

  return arr.map((item) => ({
    src: item.image_uri,
    name: item.name['name-EUru'],
    location: item.availability.location,
    price: item.price,
    rarity: item.availability.rarity,
    fileName: item['file-name'],
  }));
};

export default getBugs;
