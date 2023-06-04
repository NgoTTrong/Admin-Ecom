# E-commerce Website Admin Dashboard, Product Display Page and Order Page

This is a simple E-commerce website that includes an admin dashboard for managing products and displaying orders. The website is built using NextJS for the frontend, while Nodejs, Supabase is used as the backend and API.

## Tech Stack

**Front-end:** Nextjs

**Back-end:** Nodejs, Supabase

## Features
- Login Page
    • Using admin account to log in page:
        ◦ username: admin
        ◦ password: admin
    • After inputting the data, click log in button to go to main page
- Admin Dashboard Page

Add Products

This section enables the admin to manage products by adding new product.

    • On the product page, the admin can click to "Insert a product" to add product to database, data in the following fields:
        ◦ Product name
        ◦ Product description
        ◦ Main Image
        ◦ Base Price (the original price)
        ◦ Promotional Price
    • After inputting the data, the admin can then save the product or cancel it.

View List of Products

    • This page simply displays the product list in a table format, showing the product name, description, main thumbnail image, price, and promotional price, and delete product button.

Display Orders

This pages shows a table of all orders made on the order page. It lists:

    • Customer Name
    • Customer Number
    • Customer Email
    • Payment Address
    • Order ID

- Product Page

The product display page is where shoppers can view all the products available for purchase. The page lists the following details for each product:

    • Product name
    • Product description
    • Main thumbnail image
    • Original price
    • Promotional price (if product is currently on promotion)

- Order Page

Admin can click on the manages orders button on the left of page to start the orders manage, which begins with a form that collects the following customer information:

    • Name
    • Phone Number (validated)
    • Email Address (validated)
    • Total paid
    • Product Id
    • Address

## Run Locally

Clone the project

```bash
  git clone https://github.com/NgoTTrong/Admin-Ecom.git
```

Go to the project directory

```bash
  cd Admin-Ecom
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file

`NEXT_PUBLIC_HOST`

## Demo

https://amin-page.vercel.app/

## Deployment

To deploy this project run this command in the CLI

```bash
  vercel
```

If you haven't installed vercel yet. Install the Vercel CLI by running

```bash
  npm install -g vercel
```

## Documentation

[Nextjs](https://nextjs.org/docs)

[Supabase](https://supabase.com/docs)

## Support

For support, email trongngo08082002@gmail.com
