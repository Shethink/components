A controlling container for RadioButton.

Furthermore, the title component is a label HTML element (for semantic reasons) but is styled as an "h6" heading. The reason for this is so if the user provides a string only, there is no need to write additional styling.

## Variants

### Default

```jsx
const options = [
  { label: "Option 1" },
  { label: "Option 2" },
  { label: "Option 3" },
  { label: "Option 4" },
  { label: "Option 5" },
];

<ButtonRadioGroup name="ButtonGroup1" options={options} title="Title" />;
```

### with default value

```jsx
const options = [
  { label: "Option 1" },
  { label: "Option 2" },
  { label: "Option 3" },
  { label: "Option 4" },
  { label: "Option 5" },
];

<ButtonRadioGroup
  name="ButtonGroup2"
  options={options}
  defaultValue="Option 2"
  title="Title"
/>;
```

### With disabled option

```jsx
const options = [
  { label: "Option 1", disabled: true },
  { label: "Option 2" },
  { label: "Option 3" },
  { label: "Option 4" },
  { label: "Option 5" },
];

<ButtonRadioGroup name="ButtonGroup2" options={options} title="Title" />;
```

### With disabled option as default value

```jsx
const options = [
  { label: "Option 1", disabled: true },
  { label: "Option 2" },
  { label: "Option 3" },
  { label: "Option 4" },
  { label: "Option 5" },
];

<ButtonRadioGroup
  name="ButtonGroup2"
  options={options}
  defaultValue="Option 1"
  title="Title"
/>;
```

### Disabled options at group level

```jsx
const options = [
  { label: "Option 1" },
  { label: "Option 2" },
  { label: "Option 3" },
  { label: "Option 4" },
  { label: "Option 5" },
];

<ButtonRadioGroup
  name="ButtonGroup2"
  options={options}
  disabled
  title="Title"
/>;
```

### With onChange event

```jsx
const options = [
  { label: "Facebook" },
  { label: "Instagram" },
  {
    label: "Other",
    withTextField: true,
    textFieldLabel: "Please specify",
  },
];

<ButtonRadioGroup
  name="ButtonGroup1"
  options={options}
  onChange={console.log}
  title="How did you hear about us?"
/>;
```
