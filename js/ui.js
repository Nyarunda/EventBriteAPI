class UI {
    constructor() {
        // Initialization
        this.init();
    } 
    // method when app starts   
    init() {
        // Diplay categoies in the <select> option
        this.displayCategories();
        // Select the results
        this.result = document.getElementById('result');
    }
    // Display categories
    displayCategories() {
        const categoriesList = eventbrite.getCategoriesAPI()
            .then(categories => {
                const categoriesList = categories.categories.categories;
                const categoriesSelect = document.querySelector('select#category');
                // Insert categories into select
                categoriesList.forEach(category => {
                    // Creat the <optio>
                    const option = document.createElement('option');
                    option.value = option.id;
                    option.appendChild(document.createTextNode(category.name));
                    categoriesSelect.appendChild(option);
                })
            })
            .catch(error => console.log(error));
    } 
    // Displays eventsfrom the API
    displayEvents(events) {
        // uild the HTML Template
        let HTMLTemplate = '';
        // Loop evnts and print the result
        events.forEach(eventInfo => {
            HTMLTemplate += `
                <div class="col-md-4 mt-4">
                    <div class="card">
                        <div class="card-body">
                            <img class="img-fluid" src="${eventInfo.logo !== null ? eventInfo.logo.url : ''}">
                        </div>
                        <div class="card-body"
                            <div class="card-text">
                                <h2 class"text-canter card-title">${eventInfo.name.text}</h2>
                                <p class="lead text-info">Event Information:</p>
                                <p>${eventInfo.description.text.substring(0, 200)}...</p>
                                <span class="badge badge-primary">Capacity: ${eventInfo.capacity}</span>
                                <span class="badge badge-secondary">Date & Time: ${eventInfo.start.local}</span>

                                <a href="${eventInfo.url}" target="_blank" class="btn btn-primary btn-block mt-4">Get Tickets</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        this.result.innerHTML = HTMLTemplate;
    }
    // Print message
    printMessage(message, className) {
        // Create a div
        const div = document.createElement('div');
        div.className = className;
        // Add the text msg
        div.appendChild(document.createTextNode(message));
        // Insert into HTML
        const searchDiv = document.querySelector('#search-events')
        searchDiv.appendChild(div);

        // Remove message after 1.5 seconds
        setTimeout(() => {
            this.removeMessage();
        }, 2000);
    }
    // Remove the message
    removeMessage() {
        const alert = document.querySelector('.alert');
        if(alert) {
            alert.remove();
        }
    }
}