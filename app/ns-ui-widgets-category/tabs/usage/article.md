The `Tabs` component contains two sub-components:
- The `TabStrip` which defines and rendres the bottom bar and its `TabStripItem` components.
- Multiple `TabContentItem` components which total number should be equal to the number of the tabs (`TabStripItem` components). Each `TabContentItem` acts as a container for your tab content.

<snippet id='tabs-basics-xml'/>

> **Note:** The number of `TabStripItem` components must be equal to the number of `tabContentItem` components.