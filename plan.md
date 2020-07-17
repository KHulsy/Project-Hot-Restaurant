* Create the front-end (visuals) for home page, reservation form, and reservation views.

    * Home.html

        * View tables button links to View.html

        * Make Reservation button links to Make.html

        * API Table Link makes API call that receives json with file tables data

        * API Wait List makes API call that receives json with wait list data

    * Make.html

        * View tables button links to View.html

        * Home button links to Home.html

        * Form with Name, Phone Number, Email, Unique ID, and submit button that does a post API call

    * View.html

        * Links to Make Reservation page and Home page

        * Displays the table list and the wait list

* Create a basic server using Express.JS

    * Set up the server

* Create a set of routes for displaying the HTML pages

    * Respond to get request to "/" by sending Home.html

    * Respond to get resquest at "/make" by sending Make.html

    * Respond to get resquest at "/view" by sending View.html

* Create a few array variables that will hold the data

    * Array of table data

    * Array of waitlist data

* Create a set of routes for getting and posting table data

    * GET request "/api/tables" returns JSON arary of tables

    * GET request "/api/waitlist" returns JSON array of waitlist

    * POST request "/api/tables" adds reservation to  table list or waitlist

* Use jQuery to run AJAX calls to GET and POST data from users to the Express server

    * API Tables Link makes GET request to "/api/tables"

    * API Wait List Link makes GET request to "/api/waitlist"

    * Submit button on the Make.html page makes POST request to "/api/tables"

    * View.html makes GET requests to "/api/tables" and "/api/waitlist" and populates the page with that data