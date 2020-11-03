import { branding } from "./components/branding.js"
import { footer } from "./components/footer.js";
import { navigation } from "./components/nav.js";
import { newsLetter } from "./components/newsLetter.js";

(function () {
    const mainDiv = document.querySelector(".main");
    const header = document.createElement("header");
    const headerContainer = document.createElement("div");
    headerContainer.classList.add('container')

    // branding
    const brandingContent = branding();

    // navigation
    const navContent = navigation();

    // content creation: is compulsory
    const content = document.createElement("div");
    content.setAttribute('id', 'content');

    // newsLetter 
    const newsLetterContent = newsLetter();

    // about main section
    const sectionMain = document.createElement("section");
    sectionMain.setAttribute('id', 'main');
    const container = document.createElement("div");
    container.classList.add('container');
    const aboutArticle = document.createElement("article");
    aboutArticle.setAttribute("id", "main-col");
    const darkDiv = document.createElement("div");
    darkDiv.classList.add('dark')
    const darkDivH1 = document.createElement("h1")
    darkDivH1.classList.add('page-title')
    darkDivH1.textContent = "About Us";
    const darkDivParagraph = document.createElement("p");
    darkDivParagraph.textContent = "Experience Yummy authentic food with us, now that your taste buds are here We offer home-made cooked meals that make you feel at home.  Everything that goes in your mouth has been highly approved by our talented team of Yummy chef's.Our dishes are comfort food for every season and with a lifetime of combinations of toppings and broth options to put into your tummy. We’re happy to be there for you.";
    

    // aside bar section
    const asideBar = document.createElement("aside");
    asideBar.setAttribute("id", "sidebar");
    const sidebarDark = document.createElement("div");
    sidebarDark.classList.add('dark');
    const asideBarH3 = document.createElement("h3");
    asideBarH3.textContent = "Our Story...";
    const asideBarParagraph = document.createElement("p");
    asideBarParagraph.textContent="Our story began in 2012 with a food truck, we couldn't have imagined being named the best home- food joint by our fans two short years later. In a town long dominated by fastfoods, we've loved introducing home-made tasty authentic meals to our customers."
    

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
    content.appendChild(sectionMain);
    sectionMain.appendChild(container);
    container.appendChild(aboutArticle);
    aboutArticle.appendChild(darkDiv);
    darkDiv.appendChild(darkDivH1);
    darkDiv.appendChild(darkDivParagraph);
    container.appendChild(asideBar);
    asideBar.appendChild(sidebarDark);
    sidebarDark.appendChild(asideBarH3);
    sidebarDark.appendChild(asideBarParagraph);

}());
 

