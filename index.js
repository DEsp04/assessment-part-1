//1 Why does React utilize the virtual-dom?
/*
  React uses virtual-dom to render the JSX in the react component into the DOM. However, the DOM that react uses is not the same one you see on the browser. It's a virtual DOM that performs faster than the real DOM. Any time you add a content using JSX or styling JSX the virtual DOM will interpret these changes and immediately render it on the browser.
 */

 //2
 /*
  a. Data flow from parent component into children component. For example, index.js in a src folder will be the parent component of App.js and any additional components in the component folder. One way to demonstrate this flow is adding an attribute to a JSX that happens to be an imported child component inside App.js. Well you can retrieve the value from that props by going to that specific child component and console logging the value from that props.

  b. The data flow from parent component to child component because it helps programmers understand the framework, especially when working on an app project. Also, many of the programmer who uses React framework are familiar with JS and so with JS you have the same idea of data flow. Where you can used export and import function into the index file in order to get an unique output.

 */

 //3

/*
  The purpose of lifting state is for react to detect any changes done to the state variable. Each time react unload its code into the virtual-dom it will render the state variable regardless if it's updated or not. In other words, when state update itself, it will allow the component to update itself as well. State will be only updated when using functions like setSate and useState

  For example, whenever you click a button, you want to add a value to index variable. In side the anonymous function placed in the JSX buttion, you want to call the setIndex("hello") so the index state variable now has "hello" instead of an empty "", useState("").
*/

 //4

/*
React routing allows the application to become more dynamic in terms of instantly switching from one page to another. To make this dynamic happen you will install the dependencies from react-router-dom, in the index.js you would use the Router jsx and enclose the App component with it. Once you do that, in the App component you will use Switch as well as Route to add the functionality of allowing users to switch pages whenever a button or a link is clicked to redirect them into that specific page.
*/


/*
5
Yes, browser can the JSX because it has the same function as an html. However, it uses a virtual dom to render those elements




7. Props will allow users to add attributes to the JSX component and retrieve the value when you at that component. State is present in that component when using useState and you can update it when it useState function is called
*/

