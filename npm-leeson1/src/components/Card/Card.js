const Card = (props) => {
    const container = document.createElement("div");
    container.classList.add("card");

    const img = document.createElement("img");
    img.src = props.src;
    
    const fullName = document.createElement("p");
    fullName.innerHTML = `<span>Full name: </span>${props.fullName === null ? "unknown":props.fullName}`;

    const birth = document.createElement("p");
    birth.innerHTML = `<span>Birthday: </span>${props.birth === null ? "unknown":props.birth}`;

    const sex = document.createElement("p");
    sex.innerHTML = `<span>Sex: </span>${props.sex === null ? "unknown":props.sex}`;

    const nationality = document.createElement("p");
    nationality.innerHTML = `<span>Nationality: </span>${props.nationality === null ? "unknown":props.nationality}`;

    const aliases = document.createElement("p");
    aliases.innerHTML = `<span>Aliases: </span>${props.aliases === null ? "unknown":props.aliases}`;
    
    const race = document.createElement("p");
    race.innerHTML = `<span>Race: </span>${props.race === null ? "unknown":props.race}`;

    const subjects = document.createElement("p");
    subjects.innerHTML = `<span>Subjects: </span>${props.subjects === null ? "unknown":props.subjects}`;

    const occupations = document.createElement("p");
    occupations.innerHTML = `<span>Occupations: </span>${props.occupations === null ? "unknown":props.occupations}`;

    container.append(img, fullName, birth, sex, nationality, aliases, race, subjects, occupations);

    return container;
};

export default Card;