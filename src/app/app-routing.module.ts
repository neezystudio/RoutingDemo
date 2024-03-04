// The RouterModule is an Angular module that provides
//  the necessary directives, services, and functionality 
//  for implementing routing in an application.


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { ProductOfferComponent } from './product-offer/product-offer.component';
import { ProductUpdatesComponent } from './product-updates/product-updates.component';
import { ProductComponent } from './product/product.component';
import { RatingComponent } from './rating/rating.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  { path: 'home', component: HomeComponent },
  {
    path: 'product/:id', component: ProductComponent,
    children: [
      {path: '', redirectTo:'updates', pathMatch:'full'},
      { path: 'offers', component: ProductOfferComponent },
      { path: 'updates', component: ProductUpdatesComponent }
    ]
  },

//   Line No. 13:

// To define a default route in Angular, you can use an empty path ‘ ’ as the route path in the Routes array configuration. When the empty path is accessed, Angular will render the component associated with that route.

// To redirect to a different route when the default route is accessed, you can use the redirectTo property with a target route path. Additionally, the pathMatch property can be used to define the matching strategy for the route.

// Line 15 to 22:

// To create a route with an id parameter for displaying product details, you can modify the routing configuration in Angular as follows:

// path: 'product/:id', component: ProductComponent
// In this example, we’ve added a route with the path ‘product/:id’ to represent the product details page. The :id part indicates a dynamic parameter that can be accessed in the ProductComponent.


  { path: 'about', component: AboutComponent, 
    children: [
      {path: 'rating', outlet:'rate', component:RatingComponent},
      {path: 'feedback', outlet:'feed', component:FeedbackComponent}
    ]
  },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Finally, @NgModule({...}): This is a decorator used for Angular modules. It imports the RouterModule with the provided routes configuration using 
// RouterModule.forRoot(routes), making these routes available throughout the application, and then exports the 
// RouterModule to make it accessible to other parts of the application.





// const routes: Routes = [...]: This declares a constant variable routes of type Routes. Routes is a type provided by Angular for defining route configurations.

// Inside the routes array, route configurations are defined using objects. Each object represents a route configuration with properties like path, component, and children.

// { path: '', redirectTo: 'home', pathMatch: 'full' }: This is a default route configuration. It redirects any empty path to the 'home' path.

// { path: 'home', component: HomeComponent }: This sets up a route for the path '/home' which will render the HomeComponent.

// { path: 'product/:id', component: ProductComponent, children: [ {path: '', redirectTo:'updates', pathMatch:'full'}, { path: 'offers', component: ProductOfferComponent }, { path: 'updates', component: ProductUpdatesComponent } ] }: This configures a route for paths like '/product/:id', where ':id' is a route parameter representing the product ID. It renders the ProductComponent as the main component. It also defines child routes for '/product/:id' which include redirection to 'updates' path if no child path is provided, and paths for 'offers' and 'updates' which will render ProductOfferComponent and ProductUpdatesComponent respectively.

// { path: 'about', component: AboutComponent, children: [ {path: 'rating', outlet:'rate', component:RatingComponent}, {path: 'feedback', outlet:'feed', component:FeedbackComponent} ] }: This configures a route for '/about' path which renders the AboutComponent. It also defines named outlets 'rate' and 'feed' for child routes 'rating' and 'feedback' respectively, which will render RatingComponent and FeedbackComponent.

// { path: 'contact', component: ContactComponent }: This sets up a route for the path '/contact' which renders the ContactComponent.

// { path: '**', component: HomeComponent }: This is a wildcard route configuration. It matches any URL that doesn't match any defined routes. In this case, it renders the HomeComponent.