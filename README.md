# giftastic
Giftastic is an application that generates popular gifs as well as searches for a gif based on the clients choice.

# Synopsis
The application uses the Gifpy api to perform ajax calls using an APIkey and queryURL to collect and generate boxes with the gif searched/selected.

# concept review/questions
1. What is JSON?
    * JSON - JavaScript Object Notation that is used to structure data between properties and their values
2. How does the client-server relationship work?
    * A distributation of workloads and allocation of resources as a request/response between front end applications and their repective backend servers
3. What is an API?
    * Application programming interface that primarily is a set of subroutines or communication bridges for information/data
4.  Explain the difference between a client-side and server-side API
    * The location of its code execution being either on the client or server before sent to its opposing side that mainly determines the differenece
5. Explain and implement HTTP GET requests and handle responses using AJAX
    * to handle GET requests on client side we must first acquire keys and queryURL the website we wish to target, (not all websites have this) and using our `$.ajax` call to specify our url we use and restful method of choice
6. Parse JSON to dynamically generate HTML
    * using jquery to help parse JSON we can use or `$("<div>")` to create elements that can be stored within a JSON object or array or objects also using a for loop to cycle through the amount of items we with to display.
7. Explain the benefits and challenges of working with asynchronous JavaScript
    * benefits are not having crashing issues if certain URL's are not found while loading pages are also faster to render. However a challenge is working with async function where certain should only work after another function is executed.
8. Explain and execute callbacks to handle asynchronous HTTP requests
    * much like how we can pass in parameters into our function parameters, we can also pass in functions to be fired after certain events

# about giftastic