const heading = React.createElement("h1", {id: "heading"}, "Hello World From React JS"); 

console.log(heading); //Object - React

const root = ReactDOM.createRoot(document.getElementById("root"));

 //Convert React Object into HTML and Render into the React

const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    React.createElement(
        "div", 
        {id: "child"}, 
        [React.createElement("h1", {}, "Hello World"), 
        React.createElement("h2", {}, "Hello World two")]
    ));

console.log(parent);
root.render(parent);