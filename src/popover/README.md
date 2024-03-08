This component wraps the mui popover component

```jsx
import Button from "../button/Button.tsx";
const [anchorEl, setAnchorEl] = React.useState(null);

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};

const open = Boolean(anchorEl);
const id = open ? "simple-popover" : undefined;

<>
  <Button aria-describedby={id} variant="contained" onClick={handleClick}>
    Open Popover
  </Button>
  <Popover
    id={id}
    open={open}
    anchorEl={anchorEl}
    onClose={handleClose}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
  >
    <p>The content of the Popover.</p>
  </Popover>
</>;
```
