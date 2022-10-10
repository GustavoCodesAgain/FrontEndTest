### Dependencies required

  "node": ">=6.0.0",
  "axios": "^0.22.0",
  "cors": "^2.8.5",
  "express": "^4.17.1",
  "react-rating-stars-component": "^2.2.0",
  "react-router-dom": "^6.4.2",
  "react-scripts": "^5.0.1"

## Steps to to run the APP

# Install the app

1.  Clone the repository in your enviroment via `git clone https://github.com/GustavoCodesAgain/FrontEndTest`. Alternatively you can download the source code. 

2.  Install NPM in the `root` folder via command line using the command `npm install`

3.  Install NPM in the `front` folder via command line using the command `npm install`

4.  Return to the root folder from the command line.

# Install the required dependencies 


1.Axios `npm install axios`
2.Cors `npm install cors`
3.React rating stars `npm install react-rating-stars-component`
4.React Router DOM `npm install react-router-dom`
5.React Scripts `npm install react-scripts` 


## Run the aplication

1. Execute in terminal the dev command `npm run dev` 

After completing the aboce steps a browser window will open using the CRA APP located in `http://localhost:3000/`



### Screen views

# Product Page

This is the current landing page were you can see the list of products that were consumed by the API
![product.png](https://github.com/GustavoCodesAgain/FrontEndTest/blob/main/SS/product.png?raw=true)

# Product details

Clicking in the details button opens a new view were you can see the current prices, description & info about the product. The info shown in the screen is feeded by the product API. 
![details.png](https://github.com/GustavoCodesAgain/FrontEndTest/blob/main/SS/details.png?raw=true)

# Product search

There is 2 ways to search.

Searching By ID

![Search by id.png](https://your-copied-image-address](https://github.com/GustavoCodesAgain/FrontEndTest/blob/main/SS/Search%20by%20id.png?raw=true)

The Searching by id function works with the ID's assigned in the API to the product

Searching by name

![search by name.png](https://github.com/GustavoCodesAgain/FrontEndTest/blob/main/SS/search%20by%20name.png?raw=true)

The search function filters the keywords pressed.

# Shopping cart

The number of the items in the shopping cart icon updates whenever the user adds a new item

![cart items.png](https://github.com/GustavoCodesAgain/FrontEndTest/blob/main/SS/cart%20items.png?raw=true)

When the shopping cart icon is pressed it opens a new view where it shows the current items in it. 

Empty

![empty cart.png](https://github.com/GustavoCodesAgain/FrontEndTest/blob/main/SS/empty%20cart.png?raw=true)

Full

![cart full.png](https://github.com/GustavoCodesAgain/FrontEndTest/blob/main/SS/cart%20full.png?raw=true)



If a product isn't in stock it shows a label of 'unaivalaible'  Again, the stock control is feed by the API. 

![no stock.png](https://github.com/GustavoCodesAgain/FrontEndTest/blob/main/SS/no%20stock.png?raw=true)

