const submitButton = document.querySelectorAll(".submit")[0];
console.log(submitButton);

const container = document.querySelector(".companies__list");
console.log(container);

let companyDetails ='';

const companies = [
    { name: "Money 4 U", industry: "Finance", start: 1981, end: 2004 },
    { name: "The Clothes Bay", industry: "Retail", start: 1992, end: 2008 },
    { name: "Luxurious Limousines", industry: "Auto", start: 1999, end: 2007 },
    { name: "Sunglasses House", industry: "Retail", start: 1989, end: 2010 },
    { name: "Vantage Solutions", industry: "Technology", start: 2009, end: 2014 },
    { name: "Money Banking", industry: "Finance", start: 1987, end: 2010 },
    { name: "Triple Motors", industry: "Auto", start: 1986, end: 1996 },
    { name: "Mech Smart", industry: "Technology", start: 2011, end: 2016 },
    { name: "Ice-Cream Lettuce", industry: "Retail", start: 1981, end: 1989 },
  ];

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const company = companies.forEach((entry) =>{
        companyDetails = ( `
        <div class="company">
            <h1>${entry.name}</h1>
            <p>industry: ${entry.industry}</p> 
            <p>start: ${entry.start}</p> 
            <p>end: ${entry.end}</p>
        </div>
        `);
        container.innerHTML += companyDetails;
    });
});
