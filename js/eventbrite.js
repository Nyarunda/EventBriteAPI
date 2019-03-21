class EventBrite{
    constructor(){
        this.auth_token = 'LLM5NOHVUHXP3D6IX5BY';
        this.orderby = 'date';
    }
    // Get events from API
    async queryEventsAPI(eventName, category) {

        const eventsResponse = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${this.orderby}&categories=${category}&token=${this.auth_token}`);
        
        // Return a response as a json
        const events = await eventsResponse.json();

        return {
            events
        }
    }
    // Get the categies API
    async getCategoriesAPI() {
        // Read the API token
        const categoriesResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);
        // Hold for the response and returns as a json
        const categories = await categoriesResponse.json();
        // Return an object
        return {
            categories
        }
    }

}