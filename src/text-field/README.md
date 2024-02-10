This component generates an input using the standard HTML input with a default type of `text` with 3 variants:

- Outlined
- Contained
- With word count

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
