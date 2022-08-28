# Basic Information about the webpage


## For Easy optimization I have divided the components in a folder structure where I put all the pages in one folder , shared page in one folder and custom hooks in another folder
### Moreover all the pages are divided into many components

# How will run the website
<P>First off all when the page will load there will be shown a loader until the full data is loaded . </p>
<p>Then There will loaded a top promotion type header which will be at the top of the page and is available at every page . so it has been put on shared folder .</p>
<p>After that there is a header where there are five routes 


</p>
<h1>Home</h1> 
<h1>About</h1> 
<h1>Shop</h1> 
<h1>Blog</h1> 
<h1>Pages</h1> 

There are three icon , if we click the <b>profile </b> icon it will move us to Authentication page where we can sign up with email password or google

if we click the <b>cart</b> icon it will move use to cart items where we can see the all items moved to cart


# HOME
<p>In this route there are banner,counter,Special Benefit , Collection , Feature product , popular products,collection ,subscription components </p>
<p>If I click the 'check now' button on every collection page it will move us to the that type category product</p>

<h1>Popular Products</h1>
<p>On popluar product the best product on the basis of rating has been shown . If we hover every product we will see a <b>Add to cart</b> button which will eventually add the item to cart . There are two more icon , one is <b>eye </b> icon by clicking this we go to the detail page of that product . Which is described in the 2nd page of figma design</p>

# Shop
<p>On the shop route we will see the all the categories . If we click any of them , we will see the products under that category .From that we can add the items to cart .  </p>



## If we come back to home route all the cart items will refreshed as we have not used any type of storage . 

# To get the cart item easily we have used contextapi at the app.js so that the value can be accessed and passed to any components




## Technology used
##### React Js
##### Tailwind CSS
##### React Router Dom
##### React Icon
##### Cogo-toast
##### React Hook Forms
##### Firebase Authentication
##### Firebase Deploy
##### React Firebase Hooks


This webpage has been hosted in Firebase and here is the link .[Click Here](https://fungshon-ecommerce.web.app/)
