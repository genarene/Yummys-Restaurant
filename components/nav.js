export const navigation = () => {
    const navigation = document.createElement("nav")
 
    const ul = document.createElement("ul");

    // li home
    const homeli = document.createElement("li");
    const homeA = document.createElement("a");
    homeA.textContent = "HOME";
    homeA.href = "index.html";
    homeli.setAttribute('id', 'home');
    homeli.appendChild(homeA);

    // li about
    const aboutli = document.createElement("li");
    const aboutA = document.createElement("a");
    aboutA.textContent = "About";
    aboutA.href = "about.html";
    aboutli.setAttribute('id', 'about');
    aboutli.appendChild(aboutA);

    // li menu
    const menuli = document.createElement("li");
    const menuA = document.createElement("a");
    menuA.textContent = "MENU";
    menuA.href = "menu.html";
    menuli.setAttribute('id', 'menu');
    menuli.appendChild(menuA);

    // appending
    ul.appendChild(homeli);
    ul.appendChild(aboutli);
    ul.appendChild(menuli);
    navigation.appendChild(ul);
    return navigation;
}