//1 Why does React utilize the virtual-dom?
/*
  React uses virtual-dom to render the JSX in the react component into the DOM. However, the DOM that react uses is not the same one you see on the browser. It's a virtual DOM that performs faster than the real DOM. Any time you add a content using JSX or styling JSX the virtual DOM will interpret these changes and immediately render it on the browser.
 */

 //