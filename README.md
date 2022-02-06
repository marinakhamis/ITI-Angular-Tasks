# Angular Daily Labs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Lab assignments:

1- Make a folder name it services.

2- Make a service name it ProductService inside services folder then add two functions inside it

- a. GetAllProducts() that return all the products
- b. GetProductById(prdId) that return the product with the specified id that passed as parameter.
  With the following validatations

  - If there is no product with the specified id return null;
  - If the data that are passsed not number return null;

3- In your app componemt include the product component you made before so that the product component become child
in the app component.

4- In the product component make a method name it renderValues() inside this function make a call to the ProductService functions getAllProducts()
and intialize the returned value to your properties.

5- In the app component make a button display data when click on it will call the renderValues method of the child. (viewchild)

note :- in this logic you may use ngIf structural directive to make the table f products hidden first then when click on the button from parent make its value changes

## bouns:-

Search for subject behaviour service.
-what it do?

- make a demo about it (big bouns)
