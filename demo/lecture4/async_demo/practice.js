<<<<<<< HEAD
// URL variables for the APIs
const ageHTML = document.getElementById("ageResult");
const genderHTML = document.getElementById("genderResult");
const nationalityHTML = document.getElementById("nationalityResult");

document.getElementById('nameForm').addEventListener('submit', (event) => {
=======
document.getElementById('nameForm').addEventListener('submit', async (event) => {
>>>>>>> 1a93069ac2f5cb28104bf3d74385fec9fd06abf3
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
  
    // Constructing API URLs
    //age-
    const agifyUrl = `https://api.agify.io?name=${name}`;
    //gender-
    const genderizeUrl = `https://api.genderize.io?name=${name}`;
    //nationality-
    const nationalizeUrl = `https://api.nationalize.io?name=${name}`;
<<<<<<< HEAD

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
=======
  
    //solution-
    // try {
    //   // Fetching data from all three APIs simultaneously
    //   const responses = await Promise.all([
    //     fetch(agifyUrl),
    //     fetch(genderizeUrl),
    //     fetch(nationalizeUrl)
    //   ]);
  
    //   // Parsing JSON responses
    //   const results = await Promise.all(responses.map(response => {
    //     if (!response.ok) {
    //       throw new Error(`Error with the request! Status: ${response.status}`);
    //     }
    //     return response.json();
    //   }));
  
    //   // Updating the DOM with the fetched data
    //   document.getElementById('ageResult').textContent = `Predicted Age: ${results[0].age}`;
    //   document.getElementById('genderResult').textContent = `Predicted Gender: ${results[1].gender}`;
    //   document.getElementById('nationalityResult').textContent = `Top Predicted Nationality: ${results[2].country[0]?.country_id || 'Unknown'}`;
    // } catch (error) {
    //   console.error("There was a problem fetching the data:", error);
    //   // Update the DOM to show the error message
    //   document.getElementById('ageResult').textContent = 'Error fetching data';
    //   document.getElementById('genderResult').textContent = 'Error fetching data';
    //   document.getElementById('nationalityResult').textContent = 'Error fetching data';
    // }
  });
  
>>>>>>> 1a93069ac2f5cb28104bf3d74385fec9fd06abf3
