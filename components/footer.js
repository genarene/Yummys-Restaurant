export const footer = () => {
    const footer = document.createElement("footer");
    const footerParagraph = document.createElement("p");
    const footerH4 = document.createElement("h4");
    footerH4.textContent = "Coded by: Nazarene Gena, Copyright &copy; 2020";
    // appending
    footer.appendChild(footerParagraph);
    footerParagraph.appendChild(footerH4);

    return footer;
}