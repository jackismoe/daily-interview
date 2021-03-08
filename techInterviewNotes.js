/*
1- reverse a string (without using the .reverse() function)
2- find out if a given string is palindrome. kayak mom racecar (without using the .reverse() function)
    isPalindrome("racecar") = true
    isPalindrome("cat") = false
3- given an array of integers find the most repeated number
    findMostRepeated([3,4,4,4,4,4,6,6,6,1,1,4,4,4,4,4]) = 4
4- From a unsorted array, check whether there are any two numbers that will sum up to a given number
    sumFinder([6,4,3,2,1,7], 9) = true
    sumFinder([6,4,3,2,1,7], 2) = false
5- swap two numbers without using a temporary variable
antoniotari11@gmail.com


https://www.w3schools.com/jsref/jsref_map.asp
https://www.bennadel.com/blog/1796-javascript-array-methods-unshift-shift-push-and-pop.htm

COMPOSITION
favour composition over class inheritance
https://youtu.be/wfMtDGfHWpA
https://alligator.io/js/class-composition/
https://blog.ricardofilipe.com/post/javascript-composition-for-dummies

DESIGN PATTERNS
Design patterns are documented solutions to commonly occurring problems in software engineering. 
Engineers don't have to bang their heads on the problems that someone else has already solved.
https://www.telerik.com/blogs/design-patterns-in-javascript
singleton, builder, factory, observer
architectual: MVC, MVVM, MVP, ...

REACT
one way data flow (state, props)

PHASES OF COMPONENTS LIFECYCLE
Initial Rendering Phase: 
This is the phase when the component is about to start its life journey and make its way to the DOM.
Updating Phase: 
Once the component gets added to the DOM, it can potentially update and re-render only when a prop or state change occurs. That happens only in this phase.
Unmounting Phase: 
This is the final phase of a component's life cycle in which the component is destroyed and removed from the DOM.

LIFECYCLE METHODS
componentWillMount() – Executed just before rendering takes place both on the client as well as server-side.
componentDidMount() – Executed on the client side only after the first render.
componentWillReceiveProps() – Invoked as soon as the props are received from the parent class and before another render is called.
shouldComponentUpdate() – Returns true or false value based on certain conditions. If you want your component to update, return true else return false. By default, it returns false.
componentWillUpdate() – Called just before rendering takes place in the DOM.
componentDidUpdate() – Called immediately after rendering takes place.
componentWillUnmount() – Called after the component is unmounted from the DOM. It is used to clear up the memory spaces.

Higher Order Components(HOC)
Higher Order Component is an advanced way of reusing the component logic. Basically, it's a pattern that is derived from React's compositional nature. HOC are custom components which wrap another component within it. They can accept any dynamically provided child component but they won't modify or copy any behavior from their input components. You can say that HOC are 'pure' components.

HOC can be used for many tasks like:
Code reuse, logic and bootstrap abstraction
Render High jacking
State abstraction and manipulation
Props manipulation

What are Pure Components
Pure components are the simplest and fastest components which can be written. They can replace any component which only has a render(). These components enhance the simplicity of the code and performance of the application.

Three principles that Redux follows
Single source of truth: 
The state of the entire application is stored in an object/ state tree within a single store. 
The single state tree makes it easier to keep track of changes over time and debug or inspect the application.
State is read-only: 
The only way to change the state is to trigger an action. 
An action is a plain JS object describing the change. 
Just like state is the minimal representation of data, the action is the minimal representation of the change to that data. 
Changes are made with pure functions: 
In order to specify how the state tree is transformed by actions, you need pure functions. 
Pure functions are those whose return value depends solely on the values of their arguments.
*/

// swap
let a = 5
let b = 3
let temp = a
a = b
b = temp


       0123456
str = "racecar"

str[0] === str[6]
str[1] === str[5]
str[2] === str[4]

for (let i=0; i<str.lenght/2; i++) {
    if (str[i] !== str[str.lenght - i - 1]) {
        return false
    }
}
// return true

for (let i=0; i<str.lenght/2; i++) {
    let temp = str[i]
    str[i] = str[str.lenght - i - 1]
    str[str.lenght - i - 1] = temp
}


function create() {
    let counter = 0
    return {
        increment: function() {
            counter++
        },
  
        print: function() {
            console.log(counter)
        }
    }
}
var c = create()
c.increment()
c.print() // 1




class MyComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'Max',
            id: '204'
        }
    }
    render() {
        setTimeout(()=>{this.setState({name:'Antonio', id:'111'})},2000)
        return (                                 
            <div>   
            <h1>Hello {this.state.name}</h1>
            <h2>Your Id is {this.state.id}</h2>
            </div>
        );
    }
}
ReactDOM.render(<MyComponent/>, document.getElementById('content'));

/*

div {
    height: 200px;
    width: 50%;
}

%, px, pt (1pt = 1/72 inch), mm, cm, in, em, vh (1vh = 1% of viewport height), vw, pi (= 12pt), auto

*/
