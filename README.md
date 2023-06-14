# cart-app

I encountered an interesting question during a techincal interview to which my explaination was not accurate.

Question: Assuming you have a eCommerce website where the end-user is able to access without any authentication / authrorization methods required. You would want the end-user to still be able to retain the items added to his cart. How can this be done?

Answer: My intial statement was that it has something to do with session cookies but I was unable to provide further detials on the technical requirements / explanation regarding this.

Post Interview, I got to work, to understand how can this be implemented and learned that in the given case scenario, the best method would be to use the localStorage API to store the cart data locally on the end-users device.

- when the user adds the items to the cart, the data can be saved in the localStorage.
- when the user revisits the website, a check can be done to determien if there is any stored cart data in the localStorage and retrieve it to populate the cart.

I have implemented a small project to showcase this specific functionality
