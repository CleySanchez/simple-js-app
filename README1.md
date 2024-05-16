Pokedex - Simple JS App 

A simple web application that allows users to search for Pokemon and view their details in a modal. The application uses the PokeAPI to fetch data about the Pokemon.

Project Dependencies
JavaScript version: ES6 or later
Bootstrap: v4.3.1
jQuery: v3.3.1
Popper.js: v1.14.7
API Used
The project uses the PokeAPI to fetch data about the Pokemon. The API provides a RESTful interface to access data about Pokemon, including their names, types, abilities, moves, and images. The API is free to use and does not require any authentication. The API endpoint used in the project is https://pokeapi.co/api/v2/pokemon/?limit=151, which returns data about the first 151 Pokemon.

Project Structure
The project has the following structure:


dist/
  |- scripts.min.js
  |- styles-prefixed.min.css
img/
  |- favicon.ico
  |- pokeball.svg
index.html

The dist/ directory contains the minified and prefixed CSS and JavaScript files. The img/ directory contains the images used in the application. The index.html file is the main HTML file for the application.

HTML Structure
The HTML structure of the application is built using Bootstrap. The main elements of the HTML structure are:

nav: The navigation bar contains a logo, a search bar, and a scroll-to-top button.

div.container: The main container contains a row of Pokemon cards.

div.modal: The modal contains the details of the selected Pokemon.

CSS Styles

The CSS styles for the application are defined in the styles-prefixed.min.css file. The main styles defined in the file are:

body: The body element is styled with a default font family, font size, background color, and text color.
.pokemon-div: The Pokemon cards are styled with opacity, transition, and visibility properties.
.pokemon-button: The buttons for each Pokemon card are styled with font size, font weight, border, padding, margin, width, and height properties.
.pokemon-image: The images for each Pokemon card are styled with height, object-fit, and padding properties.
#scrollToTopButton: The scroll-to-top button is styled with display, position, bottom, right, z-index, border, outline, background-color, color, padding, border-radius, and font-size properties.
.image-background: The background image for the modal is styled with display and justify-content properties.
.modal-image: The image for the selected Pokemon in the modal is styled with width and max-height properties.

JavaScript Code

The JavaScript code for the application is defined in the scripts.min.js file. The main functions defined in the file are:

pokemonRepository: This object contains functions to fetch data about the Pokemon from the PokeAPI and display them in the application. 

The main functions defined in the object are:

add: This function adds a Pokemon to the repository.

getAll: This function returns all the Pokemon in the repository.

loadList: This function loads the list of Pokemon from the PokeAPI.

loadDetails: This function loads the details of a Pokemon from the PokeAPI.

addListItem: This function adds a Pokemon to the list of Pokemon in the application.

showDetails: This function displays the details of a Pokemon in the modal.

searchBar: This function adds an event listener to the search bar to filter the list of Pokemon based on the user's input.

scrollToTopButton: This function adds an event listener to the scroll-to-top button to scroll to the top of the page when the button is clicked. It also adds an event listener to the window to show or hide the button based on the user's scroll position.


Conclusion
The Pokedex - Simple JS App is a simple web application that demonstrates how to fetch data from an API and display it in a user-friendly way. The application uses Bootstrap for the HTML structure, custom CSS styles for the design, and JavaScript to fetch and display the data. The application can be further enhanced by adding more features, such as pagination, filtering, and sorting.