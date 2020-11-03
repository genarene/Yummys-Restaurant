export const newsLetter = () => {
    const newsLetter = document.createElement("section");
    newsLetter.setAttribute("id", "newsletter");
    const newsLetterContainer = document.createElement("div");
    newsLetterContainer.classList.add('container');
    const newsLetterH1 = document.createElement("h1");
    newsLetterH1.textContent = "Subscribe to our Newsletter"
    const newsLetterForm = document.createElement("form");
    const formInput = document.createElement("input");
    formInput.setAttribute("type", "email");
    formInput.setAttribute("placeholder", "Enter Email...");
    const formBtn = document.createElement("button");
    formBtn.classList.add("form_btn");
    formBtn.setAttribute("type", "submit");
    formBtn.textContent = "Subscribe";

    // appending
    newsLetter.appendChild(newsLetterContainer);
    newsLetterContainer.appendChild(newsLetterH1);
    newsLetterContainer.appendChild(newsLetterForm);
    newsLetterForm.appendChild(formInput);
    newsLetterForm.appendChild(formBtn);

    return  newsLetter;

}