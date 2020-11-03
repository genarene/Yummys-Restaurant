

export const branding = () => {
    const branding = document.createElement("div");
    const brandingH1 = document.createElement("h1");
    brandingH1.textContent = "YUMMY'S";
    branding.setAttribute('id', 'branding');
    branding.appendChild(brandingH1);
    return branding;
}
