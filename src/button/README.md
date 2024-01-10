This component wraps the [Material-UI Button component](https://material-ui.com/components/buttons/), with a few changes

## Variants

### Contained (default)

This, with `primary` colour, is the Sourcebae default button

```jsx
<>
  <Button>Caption</Button>

  <p>Disabled</p>

  <Button disabled>Caption</Button>
</>
```

### Styled Button

```jsx
import ThemeProvider from "../theme-provider";

const modifyTheme = (theme) => {
  theme.palette = theme.palette || {};
  theme.palette.primary = { main: "#201e5b", dark: "#161542" };

  return theme;
};

<ThemeProvider modifyTheme={modifyTheme}>
  <Button>Caption</Button>

  <p>Disabled</p>
  <Button disabled>Caption</Button>

  <p>On Dark background with color fallback</p>
  <div style={{ padding: "10px", background: "#343850", color: "#fff" }}>
    <Button hasDarkBackground>Caption</Button>
  </div>
</ThemeProvider>;
```

#### Leading icon

```jsx
import UserIcon from "@mui/icons-material/Person";

<>
  <Button startIcon={<UserIcon />}>Sign in</Button>

  <p>Disabled</p>

  <Button startIcon={<UserIcon />} disabled>
    Sign in
  </Button>
</>;
```

#### Trailing icon

```jsx
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

<>
  <Button endIcon={<ArrowForwardIcon />}>Read more</Button>

  <p>Disabled</p>

  <Button endIcon={<ArrowForwardIcon />} disabled>
    Read more
  </Button>
</>;
```

### Outlined

```jsx
<>
  <Button variant="outlined">Caption</Button>

  <p>Disabled</p>

  <Button variant="outlined" disabled>
    Caption
  </Button>
</>
```

#### Leading icon

```jsx
import UserIcon from "@mui/icons-material/Person";

<>
  <Button startIcon={<UserIcon />} variant="outlined">
    Sign in
  </Button>

  <p>Disabled</p>

  <Button startIcon={<UserIcon />} variant="outlined" disabled>
    Sign in
  </Button>
</>;
```

#### Trailing icon

```jsx
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

<>
  <Button endIcon={<ArrowForwardIcon />} variant="outlined">
    Read more
  </Button>

  <p>Disabled</p>

  <Button endIcon={<ArrowForwardIcon />} variant="outlined" disabled>
    Read more
  </Button>
</>;
```

#### On Dark Background

```jsx
<div style={{ padding: "10px", background: "#343850", color: "#fff" }}>
  <Button hasDarkBackground variant="outlined">
    Caption
  </Button>

  <p>Disabled</p>

  <Button hasDarkBackground variant="outlined" disabled>
    Caption
  </Button>
</div>
```

#### Opaque outlined

```jsx
<div style={{ padding: "10px", background: "#fafafa" }}>
  <Button variant="opaqueOutlined">Caption</Button>

  <p>Disabled</p>

  <Button variant="opaqueOutlined" disabled>
    Caption
  </Button>
</div>
```

### Flat

```jsx
<>
  <Button variant="text">Caption</Button>

  <p>Disabled</p>

  <Button variant="text" disabled>
    Caption
  </Button>
</>
```

#### On Dark Background

```jsx
<div style={{ padding: "10px", background: "#343850", color: "#fff" }}>
  <Button hasDarkBackground variant="text">
    Caption
  </Button>

  <p>Disabled</p>

  <Button hasDarkBackground variant="text" disabled>
    Caption
  </Button>
</div>
```

### Icon Button - Contained (default)

The `extra-small` and `small` buttons have a 48x48px clickable area around them.

```jsx
import UserIcon from "@mui/icons-material/Person";

<div>
  <p>Extra Small</p>
  <Button isIconButton size="extra-small">
    <UserIcon />
  </Button>
  <p>Small</p>
  <Button isIconButton size="small">
    <UserIcon />
  </Button>
  <p>Medium</p>
  <Button isIconButton size="medium">
    <UserIcon />
  </Button>
  <p>Large</p>
  <Button isIconButton size="large">
    <UserIcon />
  </Button>
  <p>Extra Large - disabled</p>
  <Button isIconButton disabled size="extra-large">
    <UserIcon />
  </Button>
</div>;
```

### Icon Button - Text

```jsx
import UserIcon from "@mui/icons-material/Person";

<div>
  <Button isIconButton variant="text">
    <UserIcon />
  </Button>
  <p>Disabled</p>
  <Button isIconButton disabled variant="text">
    <UserIcon />
  </Button>
</div>;
```

#### On Dark Background

```jsx
import UserIcon from "@mui/icons-material/Person";

<div style={{ padding: "10px", background: "#343850", color: "#fff" }}>
  <Button isIconButton hasDarkBackground variant="text">
    <UserIcon />
  </Button>
  <p>Disabled</p>
  <Button isIconButton hasDarkBackground disabled variant="text">
    <UserIcon />
  </Button>
</div>;
```

### Icon Button - Outlined

```jsx
import UserIcon from "@mui/icons-material/Person";

<div>
  <Button isIconButton variant="outlined">
    <UserIcon />
  </Button>
  <p>Disabled</p>
  <Button isIconButton disabled variant="outlined">
    <UserIcon />
  </Button>
</div>;
```

#### Opaque Outlined

```jsx
import UserIcon from "@mui/icons-material/Person";

<div>
  <Button isIconButton variant="opaqueOutlined">
    <UserIcon />
  </Button>
  <p>Disabled</p>
  <Button isIconButton disabled variant="opaqueOutlined">
    <UserIcon />
  </Button>
</div>;
```
