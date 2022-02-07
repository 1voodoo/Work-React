const Api = async () => {
  const respons = await fetch('https://www.balldontlie.io/api/v1/players');
  const data = await respons.json();

  return data.data.map((person) => ({
    first_name: person.first_name,
    last_name: person.last_name,
    city: person.team.city,
    division: person.team.division,
    full_name: person.team.full_name,
  }));
};

export default Api;
