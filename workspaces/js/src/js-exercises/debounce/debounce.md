## Debounce overview

Debouncing is a technique used to control how often a function executes during rapidly triggered events. It ensures better performance by delaying execution until user activity has stopped for a defined time.

- Limits function calls during frequent events like typing, scrolling, or resizing.
- Delays execution so the function runs only after a specific pause.
- Prevents performance overload by avoiding unnecessary repeated executions.

Working of debouncing:
- Debouncing starts working when an event is triggered.
- The function does not execute immediately; it waits for a specified delay.
- If the event triggers again before the delay ends, the previous call is canceled.
- The timer resets with each new event trigger.
- The function executes only after the events stop for the defined period.

Use cases for debouncing in JavaScript: 
- Search Input Field: In the search bar, the user types characters one after another due to which for each key press an API request is triggered. Debouncing makes sure that the API request is only sent when the user has finished typing.
- Window Resizing: When we resize the window browser, in a short interval of time the resize event gets fired multiple times. Debouncing can be used in handling this event.
- Scroll Events: When the user scrolls the webpage the scroll event is triggered multiple times per second. By debouncing the event, the scroll handler function is executed only after the user has stopped scrolling for a specific duration.
- Form Validation: If in real-time we are validating a form as the user types, debouncing can be used to ensure that for every keystroke the validation function is not repeatedly triggered.

Benefits of debouncing:
- Improved Performance: Debouncing helps in optimizing the performance by reducing the number of function executions, especially when handling frequent events like typing. This reduces unnecessary resource usage.
- Better User Experience: When the events are rapidly triggered then also the application remains responsive with debouncing.
- Prevents Redundant API Calls: Debouncing ensures that the API requests are only sent when the user stops interacting with the page for a specific time. This helps the server from crashing with repeated requests.

When to use debouncing:
- When we are dealing with operations like API calls then we can prevent unnecessary network requests to optimize the performance.
- We can prevent the lags or delays due to repeated function execution to improve the user experience.
- We can limit the function calls triggered by frequent user actions such as typing, and scrolling.
