function ReactIntro () {
    return (
    <div className="content">
        <h1 id="about">Introduction to React</h1>
        <p>
          React is a JavaScript library for building user interfaces. React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. React has a few different kinds of components, but we’ll start with <em>React.Component</em> subclasses:
        </p>
        <h2>What is JSX?</h2>
        <p>
          JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript. JSX gets compiled to <em>React.createElement()</em> calls which return plain JavaScript objects called “React elements”. To get a basic introduction to JSX you can check out the <a href="https://reactjs.org/docs/introducing-jsx.html">Introducing JSX</a> page. You can also play with JSX online.
        </p>

        <h2>Why JSX?</h2>
        <p>
          React embraces the fact that rendering logic is inherently coupled
          with other UI logic: how events are handled, how the state changes
          over time, and how the data is prepared for display. Instead of
          artificially separating technologies by putting markup and logic
          in separate files, React separates concerns with loosely coupled
          units called “components” that contain both. We will come back to
          components in a further section, but if you’re not yet comfortable
          putting markup in JS, this talk might convince you otherwise.
        </p>
        <h2>Embedding Expressions in JSX</h2>
        <p>
          In the example below, we declare a variable called name and then
          use it inside JSX by wrapping it in curly braces:
        </p>
        <pre>
          <code>
            const name = 'Josh Perez';<br />
            const element = &lt;h1&gt;Hello, {name}&lt;/h1&gt;;<br />
            ReactDOM.render(<br />
            element,<br />
            document.getElementById('root')<br />
            );<br />
          </code>
        </pre>
        <p>
          You can put any valid JavaScript expression inside the curly
          braces in JSX. For example, 2 + 2, user.firstName, or
          formatName(user) are all valid JavaScript expressions.
        </p>
      </div>
)}

export default ReactIntro;