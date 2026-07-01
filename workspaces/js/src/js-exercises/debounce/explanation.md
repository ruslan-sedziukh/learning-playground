## `func.apply`

The function returned by `debounce` is called on an object, so its `this` context points to that object. However, because `func` is executed inside `setTimeout` as a standalone function, its own `this` would default to `window` or `undefined` in strict mode. That is why `func.apply` must be used.
