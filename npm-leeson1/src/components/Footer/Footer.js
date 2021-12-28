const Footer = async () =>{
    const footer = document.createElement("div");
    footer.classList.add("footer");

    const logoCar = document.createElement("img");
    logoCar.classList.add("car");
    logoCar.src = "https://img.icons8.com/emoji/48/000000/oncoming-police-car.png";

    const logoPhone = document.createElement("img");
    logoPhone.classList.add("phone");
    logoPhone.src = "https://img.icons8.com/ios/50/000000/phone.png";

    const p  = document.createElement("p");
    p.classList.add("p");
    p.innerText = "911";

    footer.innerText = "If you have information about the criminals, please call";

    footer.append(p,logoPhone,logoCar);
   

    return footer
}
export default Footer;