
# A full-featured Online Shop

## Basic User Functionality

- User friendly interface.
- Responsive design.
- Secure and reliable shopping.
- Pleasurable browsing of categorized products.
- Directly buy goods without intermediary service.
- Receive email about order status.
- Checking for most reliable goods rated by other consumers.
- Adding review for products.
- Adding and managing products in cart.
- Searching by name.
- Filter by rates, date, sales, top reviews, reviews count, price.
- Getting related products.
- Scrolling via infinity scroll.
- Following favorite products for discount.
- Receiving email for every change.
- Managing your account.
- Adding profile picture for reviews.
- Automatic image cropping.
- Restoring forgotten password by email.
- Indexing in database for fast search

## Basic Administrator Functionality

- User friendly admin panel.
- Adding super categories, categories, subcategories and specifiactions.
- Creating and editing products.
- Automatic image cropping.
- Adding discounts for certain products .
- User management and moderators.
- Managing reviews.

## Used technologies


- Front-end by HTML, CSS and JS.
- Libraries: Bootstrap, JQuery, Font Awesome.


## Design patterns

- Front and Back-end division.
- Singletons, autoloader.

## Documentation

- The first registered user is Administrator - Role 3 in the database.
- Adminsitrator can change other users into moderators - from role 1 to role 2.
- Moderators can only manage products and orders.
- Every other user is with role 1.
- Administrator can block users.
- Administrators and Moderators can delete reviews.
- Administrators can delete supercategories, categories and subcategories, but doing that deletes
all child categories and sets products subcategory to null which makes them invisible for users.
- Profile editing on optional fields, including profile picture.
- Redirection to address field on checking out without filled address.
- Login redirection on checking out without being logged.
- The forgotten password system uses tokken verification.
- Tokken expires after 10 minutes.
- Email notification for checking out, changing order status and promotions for users who added the
promoted product in favourites.
- Uploaded images must be below 5MB and one of these types - jpg, jpeg, gif, png. 
- Friendly user validation for type and size of image.
- Error 400 Bad Request for adding/editing invalid product image for Admin/Moderators.
- Adding new product, 3 images must be defined.
- Editing product, 3 images must be defined or none.
- You must first create Super category, Category, Subcategory and specifications
before creating new product.
- Have to create specifications for subcategory, before adding product.
- After adding product in certain subcategory, you can not add new specifications for it.
- You can create product for category without specifications for it.
- Responsive design - flexslider goes to simpler slider on lower resolution.
- In stock or not functionality when quantity is 0.
- Most sold filter is by products that have order status 3 (Completed), multiplied by the quantity of
ordered products.
- Restricted directory browsing by .htaccess. 
- Can not add promotion to invisible product.


# Database Schema
<img src="https://i.ibb.co/8XZmbXp/Untitled-Diagram-1.jpg"/>
