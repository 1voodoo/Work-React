import './Card.scss';

const Card = (props) => {
  const container = document.createElement('div');
  container.classList.add('card');

  const firstName = document.createElement('p');
  firstName.innerHTML = `<span>Name: </span>${props.first_name === undefined ? 'unknown' : props.first_name}`;

  const lastName = document.createElement('p');
  lastName.innerHTML = `<span>Last Name: </span>${props.last_name === undefined ? 'unknown' : props.last_name}`;

  const team = document.createElement('p');
  team.innerHTML = `<span>Team City: </span>${props.city === undefined ? 'unknown' : props.city}`;

  const division = document.createElement('p');
  division.innerHTML = `<span>Team Division: </span>${props.division === undefined ? 'unknown' : props.division}`;

  const teamName = document.createElement('p');
  teamName.innerHTML = `<span>Team Name: </span>${props.full_name === undefined ? 'unknown' : props.full_name}`;

  if (teamName.innerText.includes('New York Knicks')) {
    container.classList.add('knicks');
  } else if (teamName.innerText.includes(' Memphis Grizzlies')) {
    container.classList.add('grizzlies');
  } else if (teamName.innerText.includes('Indiana Pacers')) {
    container.classList.add('indiana');
  } else if (teamName.innerText.includes('Boston Celtics')) {
    container.classList.add('boston');
  } else if (teamName.innerText.includes('Toronto Raptors')) {
    container.classList.add('Toronto');
  } else if (teamName.innerText.includes('Oklahoma City Thunder')) {
    container.classList.add('Oklahoma');
  } else if (teamName.innerText.includes('Detroit Pistons')) {
    container.classList.add('Detroit');
  } else if (teamName.innerText.includes('LA Clippers')) {
    container.classList.add('Clippers');
  } else if (teamName.innerText.includes('Golden State Warriors')) {
    container.classList.add('Golden');
  } else if (teamName.innerText.includes('Philadelphia 76ers')) {
    container.classList.add('Philadelphia');
  } else if (teamName.innerText.includes('Utah Jazz')) {
    container.classList.add('Utah');
  } else if (teamName.innerText.includes('Sacramento Kings')) {
    container.classList.add('Sacramento');
  } else if (teamName.innerText.includes('Cleveland Cavaliers')) {
    container.classList.add('Cleveland');
  } else if (teamName.innerText.includes('Houston Rockets')) {
    container.classList.add('Houston');
  } else if (teamName.innerText.includes('Portland Trail Blazers')) {
    container.classList.add('Portland');
  } else if (teamName.innerText.includes('Atlanta Hawks')) {
    container.classList.add('Atlanta');
  } else if (teamName.innerText.includes('Orlando Magic')) {
    container.classList.add('Orlando');
  }

  container.append(firstName, lastName, team, division, teamName);

  return container;
};

export default Card;
