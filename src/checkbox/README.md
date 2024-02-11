This component generates a checkbox using the standard HTML input with a variant of `checkbox` and custom styled to add subtle animations and effects.

### Default

This, with `primary` accent color as the default color

```jsx
import React from "react";
import { Close } from "../icon";
const [checked, setChecked] = React.useState(true);
<>
  <Checkbox
    color={"#519E47"}
    checked={checked}
    onChange={(e) => setChecked(e)}
    icon={<Close />}
  />
</>;
```
