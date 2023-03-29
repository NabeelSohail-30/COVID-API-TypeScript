"use strict";
console.log('hello world');
fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(data => {
    const countries = data.Countries;
    console.log(countries);
    // Create the table element
    const table = document.createElement('table');
    // Add the header row
    const rowHeader = document.createElement('tr');
    const headerCountry = document.createElement('th');
    headerCountry.textContent = 'Country';
    rowHeader.appendChild(headerCountry);
    const headerCountryCode = document.createElement('th');
    headerCountryCode.textContent = 'Country Code';
    rowHeader.appendChild(headerCountryCode);
    const headerDate = document.createElement('th');
    headerDate.textContent = 'Date';
    rowHeader.appendChild(headerDate);
    const headerNewCases = document.createElement('th');
    headerNewCases.textContent = 'New Cases';
    rowHeader.appendChild(headerNewCases);
    const headerNewDeaths = document.createElement('th');
    headerNewDeaths.textContent = 'New Deaths';
    rowHeader.appendChild(headerNewDeaths);
    const headerNewRecovered = document.createElement('th');
    headerNewRecovered.textContent = 'New Recovered';
    rowHeader.appendChild(headerNewRecovered);
    const headerSlug = document.createElement('th');
    headerSlug.textContent = 'Slug';
    rowHeader.appendChild(headerSlug);
    const headerTotalCases = document.createElement('th');
    headerTotalCases.textContent = 'Total Cases';
    rowHeader.appendChild(headerTotalCases);
    const headerTotalDeaths = document.createElement('th');
    headerTotalDeaths.textContent = 'Total Deaths';
    rowHeader.appendChild(headerTotalDeaths);
    const headerTotalRecovered = document.createElement('th');
    headerTotalRecovered.textContent = 'Total Recovered';
    rowHeader.appendChild(headerTotalRecovered);
    table.appendChild(rowHeader);
    // Add the data rows
    countries.forEach((country) => {
        const row = document.createElement('tr');
        const countryCell = document.createElement('td');
        countryCell.textContent = country.Country;
        row.appendChild(countryCell);
        const countryCodeCell = document.createElement('td');
        countryCodeCell.textContent = country.CountryCode;
        row.appendChild(countryCodeCell);
        const dateCell = document.createElement('td');
        dateCell.textContent = country.Date.toString();
        row.appendChild(dateCell);
        const newCasesCell = document.createElement('td');
        newCasesCell.textContent = country.NewConfirmed.toString();
        row.appendChild(newCasesCell);
        const newDeathsCell = document.createElement('td');
        newDeathsCell.textContent = country.NewDeaths.toString();
        row.appendChild(newDeathsCell);
        const newRecoveredCell = document.createElement('td');
        newRecoveredCell.textContent = country.NewRecovered.toString();
        row.appendChild(newRecoveredCell);
        const slugCell = document.createElement('td');
        slugCell.textContent = country.Slug;
        row.appendChild(slugCell);
        const totalCasesCell = document.createElement('td');
        totalCasesCell.textContent = country.TotalConfirmed.toString();
        row.appendChild(totalCasesCell);
        const totalDeathsCell = document.createElement('td');
        totalDeathsCell.textContent = country.TotalDeaths.toString();
        row.appendChild(totalDeathsCell);
        const totalRecoveredCell = document.createElement('td');
        totalRecoveredCell.textContent = country.TotalRecovered.toString();
        row.appendChild(totalRecoveredCell);
        table.appendChild(row);
    });
    // Append the table to the DOM
    document.body.appendChild(table);
})
    .catch(error => {
    console.error('Error fetching data:', error);
});
//# sourceMappingURL=index.js.map