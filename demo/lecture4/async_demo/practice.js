// URL variables for the APIs
const ageHTML = document.getElementById("ageResult");
const genderHTML = document.getElementById("genderResult");
const nationalityHTML = document.getElementById("nationalityResult");

document.getElementById('nameForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
    console.log(name);
    const agifyUrl = `https://api.agify.io?name=${name}`;
    const genderizeUrl = `https://api.genderize.io?name=${name}`;
    const nationalizeUrl = `https://api.nationalize.io?name=${name}`;

    // Students will write async code here to fetch data from the APIs
    // and update the DOM with the results.
    
    // They should use Promise.all to handle the multiple fetch requests.
    
    // Error handling should also be implemented.
    const fetchAge = async () => {
      const response = await fetch(agifyUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    };

    const fetchGender = async () => {
        const response = await fetch(genderizeUrl);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return await response.json();
    }

    const fetchNational = async () => {
        const response = await fetch(nationalizeUrl);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return await response.json();
    }
    let factsList = "";
    let fetchPromises = [];

    fetchPromises.push(
        fetchAge().then((temp) => {
            factsList += `<li>Age: ${temp.age} </li>`;
        })
    )

    fetchPromises.push(
        fetchGender().then((temp) => {
            factsList += `<li>Gender: ${temp.gender} </li>`;
        })
    )

    fetchPromises.push(
        fetchNational().then((temp) => {
            factsList += `<li>Nationality: ${temp.country} </li>`;
        })
    )
    

    Promise.all(fetchPromises)
        ageHTML.innerHTML = `<p>${factsList[0]}</p>`;
        genderHTML.innerHTML = `<p>${factsList[1]}</p>`;
        nationalityHTML.innerHTML = `<p>${factsList[2]}</p>`;
    })
    .catch((error) => {
      console.error("There was a problem fetching:", error);
      catHtml.innerHTML = "Failed to fetch.";
});