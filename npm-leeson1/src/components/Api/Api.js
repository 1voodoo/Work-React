const getWantedPeople = async () => {
  const response = await fetch('https://api.fbi.gov/wanted/v1/list');
  const data = await response.json();

  return data.items.map((item) => ({
    src: item.images[0].original,
    fullName: item.title,
    birth: item.dates_of_birth_used,
    sex: item.sex,
    nationality: item.nationality,
    aliases: item.aliases,
    race: item.race,
    subjects: item.subjects[0],
    occupations: item.occupations,
  }));
};

export default getWantedPeople;
