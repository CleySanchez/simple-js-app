Pokédex 1st Generation Modal

A simple web application that displays a list of Pokémon and allows users to view their details in a modal. The application uses the PokéAPI to fetch data about the Pokémon.

Getting Started
To get started with the application, simply open the index.html file in your web browser.

////

HTML Structure
The HTML structure of the application is built using Bootstrap. The main elements of the HTML structure are:

header: The header section contains a logo, a navigation bar, a search bar, and login/signup buttons.

main: The main section contains a list of Pokémon, a button to launch the demo modal, and the modal itself.

script: The script section contains references to the required JavaScript files, including the main scripts.min.js file.

////

CSS Styles
The CSS styles for the application are defined in the styles.css file. The main styles defined in the file are:

body: 

The body element is styled with a default font family, margin, and padding.

.pokemon-list: The list of Pokémon is styled with a width, padding, text alignment, and display properties.

.poketitle: The title of the Pokémon list is styled with text alignment, font size, and color.

.poke: The Pokémon items are styled with a display, width, and margin properties.

.pokemon-button: The buttons for each Pokémon are styled with text alignment, width, border radius, margin, and cursor 
properties. The hover state is also defined.

.modal-container: The modal container is styled with display, align-items, justify-content, position, top, left, width, height, and background-color properties.

.modal: The modal element is styled with background-color, border-radius, padding, and box-shadow properties.

.modal-close: The close button for the modal is styled with position, top, right, border, background, font-size, and cursor properties.

.modal-content: The content of the modal is styled with text alignment.

////

JavaScript Code

The JavaScript code for the application is defined in the scripts.min.js file. The main functions defined in the file are:

showModal: This function displays the modal with the specified title and content.

hideModal: This function hides the modal.

showType: This function displays the type(s) of a Pokémon.

assignButtonColors: This function assigns colors to the buttons based on the type of the Pokémon.

pokemonRepository: This object contains functions to fetch data about the Pokémon from the PokéAPI and display them in 
the application. 

The main functions defined in the object are:

add: This function adds a Pokémon to the repository.

getAll: This function returns all the Pokémon in the repository.

loadDetails: This function loads the details of a Pokémon from the PokéAPI.

addListItem: This function adds a Pokémon to the list of Pokémon in the application.

loadList: This function loads the list of Pokémon from the PokéAPI.

showDetails: This function displays the details of a Pokémon in the modal.


Conclusion : 

The Pokémon Modal application is a simple web application that demonstrates how to fetch data from an API and display it in a user-friendly way. The application uses Bootstrap for the HTML structure, custom CSS styles for the design, and JavaScript to fetch and display the data. The application can be further enhanced by adding more features, such as pagination, filtering, and sorting.