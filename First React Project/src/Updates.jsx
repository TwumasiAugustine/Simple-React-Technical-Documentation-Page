function ReactUpdate(){
    return <div class="reactUpdate">
        <h1 id="update">React Updates</h1>
        <p>
          React 17.0 is the latest major release of the React library. It
          includes several new features, bugfixes, and new deprecation
          warnings to help prepare for future breaking changes. This blog
          post covers the most important changes in this release.
        </p>
        <h2>What's New?</h2>
        <p>
          This section describes the most significant improvements in this
          release. For an exhaustive list of all changes, check out the
          changelog.
        </p>
        <h3>Concurrent Mode (Experimental)</h3>
        <p>
          React 18.0 is the first release to support Concurrent Mode. This
          mode makes it possible to start rendering before you have all the
          data, and to interrupt rendering when more data arrives. This
          improves the user experience. To learn more about Concurrent Mode,
          check out the documentation.
        </p>
        <h3>React.lazy</h3>
        <p>
          React.lazy lets you render a dynamic import as a regular
          component. Before, you would have to wrap dynamic imports in a
          higher-o
        </p>
        <h3>React.memo</h3>
        <p>
          React.memo is a new way to write React components that automatically memoize themselves. This means that React will skip rendering the component, and reuse the last rendered result, when the props haven't changed. This can be helpful if you have a component that renders the same result given the same props. For example, React.memo can be used to wrap a component that renders a large list to improve performance. It's similar to <em>React.PureComponent</em>, but for function components instead of classes.
        </p>
        <h3>React Server Components</h3>
        <p>
          React Server Components allow you to render parts of your app on
          the server and parts of your app on the client. This approach can
          be helpful if you want to decrease the time to interactive (TTI)
          of your app. It can also be helpful for SEO. To learn more about
          React Server Components, check out the documentation.
        </p>
        <h3>React Test Renderer</h3>
        <p>
          React Test Renderer has been renamed to React Testing Library. This library provides light-weight helpers for testing React components. It provides a framework-agnostic set of utilities that encourage good testing practices. For example, instead of rendering a React component to a string and comparing the output, you can use the React Testing Library to interact with the component using the <strong>DOM APIs</strong>. This approach makes your tests more resilient to changes in the component implementation and also more representative of how your components are used.
        </p>
        <h3>React Fire</h3>
        <p>
          React Fire is a new experimental renderer for <strong>React DOM</strong>. It's designed for environments that support both DOM and custom renderers. This release includes a stable version of React Fire. To learn more about React Fire, check out the documentation.
        </p>
        <h3>React Flare</h3>
        <p>
          React Flare is a new experimental event system for <strong>React DOM</strong>. It's designed for environments that support both DOM and custom renderers. This release includes a stable version of React Flare. To learn more about React Flare, check out the documentation.
        </p>
        <h3>React Refresh</h3>
        <p>
          React Refresh is a new experimental hot reloading mechanism for
          React. It allows you to edit your React components in a running
          app, and see your changes without losing component state. This
          release includes a stable version of React Refresh. To learn more
          about React Refresh, check out the documentation.
        </p>
        <h3>React Profiler API</h3>
        <p>
          The React Profiler API has been renamed to React DevTools Profiler
          API. This API allows you to collect timing information about how
          long React takes to render and commit each update. This
          information can be helpful for identifying performance bottlenecks
          in your application. To learn more about the React DevTools
          Profiler API, check out the documentation.
        </p>
        <h3>React Fundamentals</h3>
        <p>
          React Fundamentals is a new course that teaches you the
          fundamentals of React. This course is designed for beginners who
          are new to React. It covers the most important topics, including
          components, props, and state. To learn more about React
          Fundamentals, check out the documentation.
        </p>
        <h3>React Hooks</h3>
        <p>
          React Hooks is a new course that teaches you how to use React
          Hooks. This course is designed for intermediate React developers
          who want to learn how to use Hooks in their applications. It
          covers the most important topics, including useState, useEffect,
          and custom Hooks. To learn more about React Hooks, check out the
          documentation.
        </p>
      </div>;
}


export default ReactUpdate;