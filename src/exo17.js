const Component = {
  name: "generic-component",
  tag: "div",
  render() {
    this.elm = document.createElement(this.tag);
    this.elm.className = this.name;
    document.body.appendChild(this.elm);
  }
};

const Clickable = {
  listenToClickEvents(elm) {
    elm.addEventListener("click", (event) => this.onClick(event));
  },
  onClick(event) {
    console.log("click event", event);
  }
};

const Focusable = {
  listenToFocusEvents(elm) {
    elm.addEventListener("focus", (event) => this.onFocus(event));
    elm.addEventListener("blur", (event) => this.onBlur(event));
  },
  onFocus(event) {
    console.log("focus event", event);
  },
  onBlur(event) {
    console.log("blur event", event);
  }
};

const Editable = {
  listenToKeyboardEvents(elm) {
    elm.addEventListener("keyup", (event) => this.onKey(event));
  },
  onKey(event) {
    console.log("key pressed", event);
  }
};

const Button = {
  text: "Button",
  tag: "button",
  name: "button",
  // clickable: { ...Clickable },
  // focusable: { ...Focusable },
  render() {
    super.render();
    this.elm.textContent = this.text;
    // TODO: listen for focus and click events
    this.listenToClickEvents(this.elm);
    this.listenToFocusEvents(this.elm);
    return this.elm;
  }
};

const Input = {
  value: null,
  tag: "input",
  // focusable: { ...Focusable },
  // editable: { ...Editable },
  render() {
    super.render();
    this.elm.value = this.value;
    // TODO: listen for focus and keyup events
    this.listenToKeyboardEvents(this.elm);
    this.listenToFocusEvents(this.elm);
    return this.elm;
  },
  ...Focusable,
  ...Editable
};

const TextInput = {
  name: "text-input",
  onKey(event) {
    this.value = event.target.value;
  }
};

//TODO: define and implement the relations between all these objects:
// delegation, composition or encapsulation ?

// Button, Input et TextInput délégation à Component
// TextInput delegue à Input
// Button compose Clickable et Focusable
// Input compose Focusable et Editable

Object.setPrototypeOf(Button, Component);
Object.setPrototypeOf(Input, Component);

Object.setPrototypeOf(TextInput, Input);

Object.assign(Button, Clickable, Focusable);
// Object.assign(Input, Editable, Focusable);

/**
 * Example of use
 * Open index.html in Browser view to test
 */

let text = Object.create(TextInput);
text.value = "Bob";
text.render();

let btn = Object.create(Button);
btn.text = "Hello !";
btn.onClick = () => alert(`Hello ${text.value} !`);
btn.render();
