This component generates a textarea/input using the standard HTML textarea/input depending on the value of `isMultiline` prop which is `undefined/false` by default.

## Textarea

The resizing of the textarea component can controlled using the `isResizable` prop which is again false by default.

### a) Not resizable

```jsx
import React from "react";
const [value, setValue] = React.useState("");
<>
  <TextField
    variant="outlined"
    onChange={(e) => setValue(e)}
    value={value}
    isMultiline
  />
</>;
```

### b) Resizable resizable

```jsx
import React from "react";
const [value, setValue] = React.useState("");
<>
  <TextField
    variant="outlined"
    onChange={(e) => setValue(e)}
    value={value}
    isMultiline
    isResizable
  />
</>;
```

# Input

Without the `isMultiline` prop, the input component is rendered which has 4 variants:

- Outlined
- Contained
- With word count
- With end adornment

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
  <TextField variant="contained" onChange={(e) => setValue(e)} value={value} />
</>;
```

### With word count

```jsx
import React from "react";
const [value, setValue] = React.useState("");
<>
  <TextField
    variant="outlined"
    onChange={(e) => setValue(e)}
    value={value}
    label={"Label"}
    maxLength={50}
    showWordCount
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
    EndIconAdornment={<Close fontSize={"12px"} />}
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
