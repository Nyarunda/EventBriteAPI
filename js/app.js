// Variables
const eventbrite = new EventBrite();
const ui = new UI();

// Event listener
document.getElementById('submitBtn').addEventListener('click', (e) => {
    e.preventDefault();

    // Get value from the form
    const eventName = document.getElementById('event-name').value;
    const category = document.getElementById('category').value;

    // validate the fields
    if (eventName !== '') {
        // Query the eventbrite API
        eventbrite.queryEventsAPI(eventName, category)
            .then(events => {
                // Check for events
                const eventsList = events.events.events;
                if (eventsList.length > 0) {
                    // Print the events
                    ui.displayEvents(eventsList);
                } else {
                    // If no evnts print a message
                    ui.printMessage('No Result Found', 'text-center alert alert-danger mt-4');
                }
            })
    } else {
        // Print a message
        ui.printMessage('Add an Event or city', 'text-center alert alert-danger mt-4');
    }
})