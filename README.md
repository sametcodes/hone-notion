# h-one ― notion-like editor

> This repository was prepared for a task. I'll think on keep developing and maintaining.

The purpose of the editor is having a notion-like flow and functionality. It uses [`contenteditable`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable) parameter on elements to display texts as wanted. 

## Components

### Editor

Holds the input refs and modal status in a state.

Returns `Flow` and `Modal`.

### Flow

Renders multiple inputs, create new ones or delete according to user's actions. Also it handles focusing on inputs properly if user clicks out of input or input container.

This component interacts with `Modal` components` to change the type of current focused div.

Returns an array of `Input` component.

### Modal

Renders the given nodes in the configuration props of `Editor` components and filter them out according to the value of user's focused input.

Returns an absoluted div element.

### Input

Displays contenteditable div elements by rendering a Textarea, which is a styled component. It uses [`as` polymorphic prop](https://styled-components.com/docs/api#as-polymorphic-prop) to render the content in different type of elements, such as h1, h2, etc. The input inside is uncontrolled, and the component re-renders only if the value of the reference object has changed.

Handles `onKeyDown` and `onKeyUp` events to trigger creating new input in case of user presses on `enter` key, or deleting the current input in case of user presses `backspace` key.

## Future ideas

- There is no icon support on the current version, having an icon set and using them would help to improve UI
- More element support such as image, links, and callouts would make the editor more useful
- Navigating with arrow keys on the elements of modal would make easier to change the element type of the current input
- Defining the styled components into seperated files, currently the all defined in one file
- Rendering images, callout boxes, quotes, alerts as elements
- Testing for all the components
- Providing a way for developers to manipulate the default render functions of elements, such as image and links
- Releasing the editor component as a package after removing the current dependencies on the page

## Known Bugs

- The editor doesn't work properly if user pastes some copied HTML texts from another page. The content comes with additional wrapped `span` or `p` tags. This can be solved by listening `paste` event in the *useEffect* function of `Input` component.
- If user removes the current line, the cursor jumps to the previous line, but to the beginning of the previous line. It should jump to the end of the line.
