#Link to Deployed Website#
If you used the stencil code, this is [https://<your GitHub username>.github.io/<name of your repository>](https://smoothtuna001.github.io/Development/)

#Goal and Value of the Application#
The goal and values of this application are to allow users to sort through books in order to pick ones they like. They can sort by price, name, and availability. They can add books to a cart and see a total price.

#Usability Principles Considered#
Some usability principles that I considered were error prevention and consistency. I tried to make it very easy for anyone to use the interface and to make it difficult to do something wrong. Additionally, I worked to make my UI clear and easy to follow, thus making the site more usable.

#Organization of Components#
I organized my App into a navigation bar and a book list. The navbar included a header, a filter card, and a cart. The book list involved multiple book items. This organization of components made it easy to filter the list of books, and to pass data easily between different components. It also simplified the structure and made the code easy to follow.

#How Data is Passed Down Through Components#
Data is passed down through components through props. The parent component has elements that are accessible to the child component by calling to the specific key. Additionally, I was able to send data from child components to parent components (like from a book component to the nav bar) by working backwards and creating helper functions that use props to pass data up the chain.

#How the User Triggers State Changes#
The user can trigger state changes in a variety of ways. They can type in a name or price, they can check the "in stock only" button, or they can adjust the quantities of books they're adding to the cart. I used UseState with react to monitor all of these changes, and update variables so they are consistently accurate.
