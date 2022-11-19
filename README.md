# h-one ― notion-like editor

This repository was prepared for a task on Upwork.

## Components

- Editor

Holds the input refs and modal status in a state.

Returns Flow and Modal.

- Flow

Renders multiple inputs, create new ones or delete according to user's actions. Also it handles focusing on inputs properly if user clicks out of input or input container.

This component interacts with `Modal` components` to change the type of current focused div.

Returns an array of `Input` component.

- Modal

Renders the given nodes in the configuration props of `Editor` components and filter them out according to the value of user's focused input.

Returns an absoluted div element.


- Input

Displays contenteditable div elements by rendering a Textarea, which is a styled component. It uses [`as` polymorphic prop](https://styled-components.com/docs/api#as-polymorphic-prop) to render the content in different type of elements, such as h1, h2, etc.

Handles `onKeyDown` and `onKeyUp` events to trigger creating new input in case of user presses on `enter` key, or deleting the current input in case of user presses `backspace` key.

## Ideas

- There is no icon support on the current version, having an icon set and using them would help to improve UI
- More element support such as image, links, and callouts would make the editor more useful
- Navigating with arrow keys on the elements of modal would make easier to change the element type of the current input
- Rendering images, callout boxes, quotes, alerts as elements
- Providing a better development environment for developers to manipulate the default render functions of elements, such as image and links

## Known Bugs

- The editor doesn't work properly if user pastes some copied HTML texts from another page. The content comes with additional wrapped `span` or `p` tags. This can be solved by listening `paste` event in the *useEffect* function of `Input` component.
