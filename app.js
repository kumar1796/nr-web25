const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "This is react heading"
);

const parent = React.createElement(
    "div",
    {id:"parent"},[
        React.createElement("div", {id:"child"},[
            React.createElement("h1", {}, "I am a h1 tag"),
            React.createElement("h2",{}, "I am a h2 tag")
        ]),
        React.createElement("div", {id:"child2"},[
            React.createElement("h1",{}, "I am a h1 tag"),
            React.createElement("h2", {}, "I am a h2 tag")
        ])
    ]
)

console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);
