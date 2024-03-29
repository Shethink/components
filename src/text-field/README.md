This component generates a textarea/input using the standard HTML textarea/input depending on the value of `isMultiline` prop which is `undefined/false` by default.

## Textarea

The resizing of the textarea component can controlled using the `isResizable` prop which is again false by default.

### a) Not resizable

```jsx
import React from "react";
const [value, setValue] = React.useState("");
<>
  <TextField onChange={(e) => setValue(e)} value={value} isMultiline />
</>;
```

### b) Resizable

```jsx
import React from "react";
const [value, setValue] = React.useState("");
<>
  <TextField
    onChange={(e) => setValue(e)}
    value={value}
    isMultiline
    isResizable
  />
</>;
```

# Input

Without the `isMultiline` prop, the input component is rendered which has 6 variants:

- Outlined
- Contained
- With letter count
- With end adornment
- With start adornment
- Numeric only input

### Outlined

```jsx
import React from "react";
const [value, setValue] = React.useState("");
<>
  <TextField variant="outlined" onChange={(e) => setValue(e)} value={value} />
</>;
```

### Contained

```jsx
import React from "react";
const [value, setValue] = React.useState("");
<>
  <TextField variant="hybrid" onChange={(e) => setValue(e)} value={value} />
</>;
```

### With letter count

Keep in mind that if you want to restrict letter count, there are 2 props you
need to send: `showWordCount` and `inputProps`. With `inputProps`, `maxLength`
as a property is needed to restrict the letter count for the textfield.

```jsx
import React from "react";
const [value, setValue] = React.useState("");
<>
  <TextField
    variant="outlined"
    onChange={(e) => setValue(e)}
    value={value}
    label={"Label"}
    showWordCount
    inputProps={{ maxLength: 50 }}
  />
</>;
```

### With end adornment

```jsx
import React from "react";
import { Close } from "../icon";
const [value, setValue] = React.useState("");
<>
  <TextField
    variant="outlined"
    onChange={(e) => setValue(e)}
    value={value}
    rightAdornment={<Close fontSize={"12px"} />}
  />
</>;
```

### With start adornment

```jsx
import React from "react";
import { Close } from "../icon";
const [value, setValue] = React.useState("");
<>
  <TextField
    variant="outlined"
    onChange={(e) => setValue(e)}
    value={value}
    leftAdornment={<Close fontSize={"12px"} />}
  />
</>;
```

### Number only input

```jsx
import React from "react";
import { Close } from "../icon";
const [value, setValue] = React.useState("");
<>
  <TextField
    variant="outlined"
    onChange={(e) => setValue(e)}
    value={value}
    isNumericInput
  />
</>;
```
