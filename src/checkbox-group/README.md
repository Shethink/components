This component generates a checkbox using the MUI Checkbox and renders it as a controlling container.

## Variants

### Default

This, with `primary` accent color as the default color and with no default checked items

```jsx
import React from "react";
import { Close } from "../icon";
const [checked, setChecked] = React.useState([]);
<>
  <CheckboxGroup
    options={[
      { label: "First", disabled: false },
      { label: "Second", disabled: false },
    ]}
    title={"Test"}
  />
</>;
```

## With default value

```jsx
import React from "react";
import { Close } from "../icon";
const [checked, setChecked] = React.useState(["First"]);
<>
  <CheckboxGroup
    options={[
      { label: "First", disabled: false },
      { label: "Second", disabled: false },
    ]}
    title={"Test"}
    defaultChecked={checked}
  />
</>;
```

## With disabled options

```jsx
import React from "react";
import { Close } from "../icon";
const [checked, setChecked] = React.useState([]);
<>
  <CheckboxGroup
    options={[
      { label: "First", disabled: false },
      { label: "Second", disabled: true },
    ]}
    title={"Test"}
  />
</>;
```

## With a separate checkbox color

```jsx
import React from "react";
import { Close } from "../icon";
const [checked, setChecked] = React.useState([]);
<>
  <CheckboxGroup
    options={[
      { label: "First", disabled: false },
      { label: "Second", disabled: true },
    ]}
    title={"Test"}
    color="red"
  />
</>;
```
