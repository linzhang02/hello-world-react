import React from 'react';

function KeyboardHelp() {
  return (
    <div className="keyboard-help">
      <h1>Keyboard Navigation Help</h1>

      <ul>
        <li><strong>Tab</strong>: Move forward through all focusable elements (links, buttons, etc.)</li>
        <li><strong>Shift + Tab</strong>: Move backward through focusable elements</li>
        <li><strong>Enter</strong>: Activate a link or button</li>
        <li><strong>Arrow Left / Right</strong>: Navigate between navigation links</li>
        <li><strong>Arrow Left / Right</strong> on the Home page: Move between hobbies and the sort button</li>
      </ul>

      <h2>Accessibility & Usability Goals</h2>
      <ul>
        <li><strong>Predictable Movement</strong>: Arrow keys move logically through lists and navigation bar</li>
        <li><strong>Consistent Behavior</strong>: Same keys work the same way on all pages</li>
        <li><strong>Feedback</strong>: Focused elements are clearly outlined</li>
      </ul>
    </div>
  );
}

export default KeyboardHelp;
