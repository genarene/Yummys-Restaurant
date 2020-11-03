import { branding } from "./components/branding.js"
import { navigation } from "./components/nav.js";
import { newsLetter } from "./components/newsLetter.js";
import { footer } from "./components/footer.js";
(function () { 
    const mainDiv = document.querySelector(".main");
    const header = document.createElement("header");
    const headerContainer = document.createElement("div");
    headerContainer.classList.add('container')

    // branding
    const brandingContent = branding();
     // navigation
    const navContent = navigation();
      // newsLetter 
    const newsLetterContent = newsLetter();

    // content creation: is compulsory
    const content = document.createElement("div");
    content.setAttribute('id', 'content');

    // menu section
    const menuSection = document.createElement("section");
    menuSection.setAttribute('id', 'menu-main');
    content.appendChild(menuSection);
    const menuContainer = document.createElement("div");
    menuContainer.classList.add('container');
    menuSection.appendChild(menuContainer);
    const menuImg = document.createElement("img");
    //  menuImg.src = "./img/menu.png";
    menuContainer.appendChild(menuImg);
    const menuArticle = document.createElement("article");
    menuArticle.setAttribute('id', 'main-col');
    menuContainer.appendChild(menuArticle);
    const menuDark = document.createElement("div");
    menuContainer.appendChild(menuDark);
    const menuH1 = document.createElement("h1");
    menuH1.textContent = "Menu";
    menuDark.appendChild(menuH1);
    const menuList = document.createElement("div");
    menuList.setAttribute("id", "menu-list");
    menuContainer.appendChild(menuList);

    // first ul
    const menuUlOne = document.createElement("ul");
    menuList.appendChild(menuUlOne);
    const ulOneH4 = document.createElement("h4");
    ulOneH4.textContent = "Meat lovers:";
    menuUlOne.appendChild(ulOneH4);

    const menuLiOne = document.createElement("li");
    menuLiOne.textContent = "lean pork";
    menuUlOne.appendChild(menuLiOne);

    const menuLiTwo = document.createElement("li");
    menuLiTwo.textContent = "pork belly";
    menuUlOne.appendChild(menuLiTwo);

    const menuLiThree = document.createElement("li");
    menuLiThree.textContent = "spicy ground pork";
    menuUlOne.appendChild(menuLiThree);

    const menuLiFour = document.createElement("li");
    menuLiFour.textContent="chicken"
    menuUlOne.appendChild(menuLiFour);
    
    // second ul
    const menuUlTwo = document.createElement("ul");
    menuList.appendChild(menuUlTwo);
    const ulTwoH4 = document.createElement("h4");
    ulTwoH4.textContent = "Toppings:";
    menuUlTwo.appendChild(ulTwoH4);

    const toppingsLiOne = document.createElement("li");
    toppingsLiOne.textContent = "roasted nori";
    menuUlTwo.appendChild(toppingsLiOne);

    const toppingsLiTwo = document.createElement("li");
    toppingsLiTwo.textContent = "mayu oil";
    menuUlTwo.appendChild(toppingsLiTwo);

    const toppingsLiThree = document.createElement("li");
    toppingsLiThree.textContent = "spicy ground pork";
    menuUlTwo.appendChild(toppingsLiThree);

    const toppingsLifour = document.createElement("li");
    toppingsLifour.textContent="chicken"
    menuUlTwo.appendChild(toppingsLifour);

    // third ul

    const menuUlThree = document.createElement("ul");
    menuList.appendChild(menuUlThree);

    const ulThreeH4 = document.createElement("h4");
    ulThreeH4.textContent = "Veggies:";
    menuUlThree.appendChild(ulThreeH4);

    const veggiesLiOne = document.createElement("li");
    veggiesLiOne.textContent = "mix of carrots";
    menuUlThree.appendChild(veggiesLiOne);

    const veggiesLiTwo = document.createElement("li");
    veggiesLiTwo.textContent = "mayu oil";
    menuUlThree.appendChild(veggiesLiTwo);

    const veggiesLiThree = document.createElement("li");
    veggiesLiThree.textContent = "woodear mushrooms";
    menuUlThree.appendChild(veggiesLiThree);

    const veggiesLifour = document.createElement("li");
    veggiesLifour.textContent="chicken"
    menuUlThree.appendChild(veggiesLifour);

    // fourth ul

    const menuUlFour = document.createElement("ul");
    menuList.appendChild(menuUlFour);

    const ulFourH4 = document.createElement("h4");
    ulFourH4.textContent = "Dippings:";
    menuUlFour.appendChild(ulFourH4);

    const dippingsLiOne = document.createElement("li");
    dippingsLiOne.textContent = "ground pork";
    menuUlFour.appendChild(dippingsLiOne);

    const dippingsLiTwo = document.createElement("li");
    dippingsLiTwo.textContent = "fresh garlic";
    menuUlFour.appendChild(dippingsLiTwo);

    const dippingsLiThree = document.createElement("li");
    dippingsLiThree.textContent = "lime wedge";
    menuUlFour.appendChild(dippingsLiThree);

    const dippingsLifour = document.createElement("li");
    dippingsLifour.textContent="fried onions"
    menuUlFour.appendChild(dippingsLifour);




    // footer
    const footerContent = footer();

    // appending header
    mainDiv.appendChild(header)
    header.appendChild(headerContainer);
    headerContainer.appendChild(brandingContent);
    headerContainer.appendChild(navContent);
    mainDiv.appendChild(content);
    content.appendChild(newsLetterContent);
    mainDiv.appendChild(footerContent);
}());