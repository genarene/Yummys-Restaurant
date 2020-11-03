import { branding } from "./components/branding.js";
import { footer } from "./components/footer.js";
import { navigation } from "./components/nav.js";
import {  newsLetter} from "./components/newsLetter.js";;
// home header
// function pageLoad() {
   
    (function () {
        console.log("Restaurant");

        const mainDiv = document.querySelector(".main");
        const header = document.createElement("header");
        const headerContainer = document.createElement("div");
        headerContainer.classList.add('container')

        // branding
        const brandingContent = branding();

        // navigation section
        const navContent = navigation();
  
        // content section
        const content = document.createElement("div");
        content.setAttribute('id', 'content');

        // showcase part
        const showCase = document.createElement("section");
        showCase.setAttribute("id", "showcase");
        const showCaseContainer = document.createElement("div");
        showCaseContainer.classList.add('container');
        const showCaseH4 = document.createElement("h4");
        showCaseH4.textContent = "Some Real Yummy Food";
        const showCaseParagraph = document.createElement('p');
        showCaseContainer.textContent = "life is too short for boring food..."

        // newsletter part
        const newsLetterContent = newsLetter();
    
        // boxes part
        const boxes = document.createElement("section");
        boxes.setAttribute("id", "boxes");
        const boxContainers = document.createElement("div");
        boxContainers.classList.add('box-container');

        // online booking box
        const onlineBookBox = document.createElement("div");
        onlineBookBox.classList.add("box");
        const bookingImg = document.createElement('img');
        bookingImg.src = '../img/online-booking.png';
        const bookingH3 = document.createElement('h3');
        bookingH3.textContent = "Book Online";
        const bookingParagraph = document.createElement("p");
        bookingParagraph.textContent = "You can now ";
        const bookingA = document.createElement("a");
        bookingA.textContent = "book";
        bookingA.href = "#";
   
        // events box
        const eventsBox = document.createElement("div");
        eventsBox.classList.add("box");
        const eventsImg = document.createElement('img');
        eventsImg.src = "../img/private-event.png";
        const eventsH3 = document.createElement('h3');
        eventsH3.textContent = "Private Events";
        const eventsParagraph = document.createElement("p");
        eventsParagraph.textContent = " You can now book a ";
        const eventsA = document.createElement("a");
        eventsA.textContent = "special spot";
        eventsA.href = "#";

        // gift cards 
        const giftCardBox = document.createElement("div");
        giftCardBox.classList.add("box");
        const giftCardImg = document.createElement('img');
        giftCardImg.src = "../img/gift-card.png";
        const giftCardH3 = document.createElement('h3');
        giftCardH3.textContent = "Gift Cards";
        const giftCardParagraph = document.createElement("p");
        giftCardParagraph.textContent = " to cherish your loyalty with a  ";
        const giftCardA = document.createElement("a");
        giftCardA.textContent = "Gift Card";
        giftCardA.href = "#";

        // footer section
        const footerContent = footer();

        // appending
        // appending header

        mainDiv.appendChild(header)
        header.appendChild(headerContainer);
        headerContainer.appendChild(brandingContent);
        headerContainer.appendChild(navContent);

       // appending content
        mainDiv.appendChild(content);
        
        // appending showCase
        content.appendChild(showCase);
        showCase.appendChild(showCaseContainer);
        showCaseContainer.appendChild(showCaseH4);
        showCaseContainer.appendChild(showCaseParagraph);

        // appending newsLetter
        content.appendChild(newsLetterContent);
       

        // appending boxes
        content.appendChild(boxes);
        boxes.appendChild(boxContainers);

        //online booking box
        boxContainers.appendChild(onlineBookBox);
        onlineBookBox.appendChild(bookingImg);
        onlineBookBox.appendChild(bookingH3);
        onlineBookBox.appendChild(bookingParagraph);
        bookingParagraph.appendChild(bookingA);
        // private events box
        boxContainers.appendChild(eventsBox);
        eventsBox.appendChild(eventsImg);
        eventsBox.appendChild(eventsH3);
        eventsBox.appendChild(eventsParagraph);
        eventsParagraph.appendChild(eventsA);
        // giftCard box
        boxContainers.appendChild(giftCardBox);
        giftCardBox.appendChild(giftCardImg);
        giftCardBox.appendChild(giftCardH3);
        giftCardBox.appendChild(giftCardParagraph);
        giftCardParagraph.appendChild(giftCardA);

        // appending footer
        mainDiv.appendChild(footerContent);
        

     


    })();
// };