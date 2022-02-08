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

# lab_assignments

1-In your project in the header

- make a navigation items (home , products , users , posts) ✅
- home page must navigate to the home page ✅
- products page must navigate to the products page that contain list of products ✅
- users page contain list of user in cards (name,username,email) from the api https://jsonplaceholder.typicode.com/users ✅
- posts contain list of posts in cards (id,title,body) from the following service https://jsonplaceholder.typicode.com/posts ✅

## notes:

- header and footer must be in all pages ✅
- you must use bootstrap ✅
- you must use complex types in castiong with observer (IPost , IUser) ✅
- you must handle errors in http ✅
- you must make calling of http in services ✅

## bouns:-

    - in the posts component make a button view post comments if clicked on it redirect to comments page with the
      post id and render the related comments of this post from the following service
      https://jsonplaceholder.typicode.com/posts/1/comments
      the previous called the api with the id is 1 of the post
