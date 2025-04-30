What this example is proving? 

That using microtasks for batching state operations is not an option because state is not updated in a macrotask that is calling `setState`. For now it is not known when exactly state update is happening. It can be planed as a macrotask, or it even can be planed in `requestAnimationFrame`.  

In conclusion, tools, such as React, which have complex logic for handling different things like state, should provide their own ways of working with those things. This is needed to encapsulate implementation details from the user and to be able to change this logic in the future without affecting the work of applications that use it. So users will not rely on the current implementation to work with those things and will not be affected when the implementation changes. 

