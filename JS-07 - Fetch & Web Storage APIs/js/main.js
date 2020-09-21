function addItem(item){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.pantone_value+'</p>\n' +
        '        <div style="background:'+item.color+';">'+item.color+'</div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

// addItem({"id":1,"name":"cerulean","year":2000,"color":"#98B2D1","pantone_value":"15-4020"});

// function fetchColorsList(){
//     // use fetch API to download full colors list from the endpoint; connect fetchColorsList with addItem function so colors list is filled and displayed in index.html
//     fetch('https://reqres.in/api/unknown')
//         .then(response => response.json())
//         .then(json => {
//             const dataArray = json.data;
//             // for each object in json.data array, call addItem function on that object to add to page
//             for (let i = 0; i < dataArray.length; i++) {
//                 addItem(dataArray[i]);
//             }
//         });       
// }

// modify fetchColorsList function so when the data is downloaded from the API, colors list is stored using the local storage.
function fetchColorsList(){
    fetch('https://reqres.in/api/unknown')
        .then(response => response.json())
        .then(json => {
            // localStorage.clear();
            // convert json.data array of objects to json string, to allow storage in localStorage
            const colours = JSON.stringify(json.data);
            if (!localStorage.getItem('colours')){
                localStorage.setItem('colours', colours);
            }
        });       
}

function loadColorsFromStorage(){
    // parse stored JSON string to convert to JS array of objects
    const storedColours = JSON.parse(localStorage.getItem('colours'));
    for (let i = 0; i < storedColours.length; i++) {
        addItem(storedColours[i]);
    }
}

fetchColorsList();
loadColorsFromStorage();

// EXTRA CHALLENGES:
// Add a clear button that removes all the elements from the list. 
// Add a load button that calls the fetchColorsList function and loads the colors again.