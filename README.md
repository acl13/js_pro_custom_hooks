# Create a Custom Hook With ReactJS

### Getting Started

Watch:

<div style="position: relative; padding-bottom: 64.98194945848375%; height: 0;"><iframe src="https://www.loom.com/embed/607507739fcc4f25a500d707b3ab9673?sid=906bf3ac-362f-4016-922e-3ec4bae687f6" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

---

```js
npm i
npm start
npm test (these will fail 😅)
```

### What are custom hooks?

---

You are probably familiar with hooks like `useState`, `useEffect` and `useCallBack` but you can create your own custom hooks as well.

Custom hooks are useful when you want to abstract or isolate some logic from the presentation of a component or consolidate shared logic.

For example, in this app we are using a `useApi` hook in the `src/hooks` folder which returns some things you expect from an API call: `isLoading, error` and accepts some parameters like `url` `method` and `onSuccess` to store the data on a successful fetch.

One little problem and I bet you already know what it is... can you guess?

Ok, I'll tell you:

**This app is broken! You will need to:**

-   Create the logic for `useApi`
-   Run tests using `npm test` and ALL tests should pass

**BONUS:**

Look up the presenter/container pattern. How could you leverage custom hooks to separate business and presentational logic?
