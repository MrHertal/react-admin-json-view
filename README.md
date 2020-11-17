# React Admin JSON view ![GitHub release (latest by date)](https://img.shields.io/github/v/release/MrHertal/react-admin-json-view) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/MrHertal/react-admin-json-view/Node.js%20CI)

JSON field and input for [react-admin](https://github.com/marmelab/react-admin).
Built with [react-json-view](https://github.com/mac-s-g/react-json-view).

Field:

![JSON show](docs/images/json-show.png)

Input:

![JSON edit](docs/images/json-edit.png)

## Installation

```sh
npm install react-admin-json-view
```

## Usage

```jsx
import { JsonField, JsonInput } from "react-admin-json-view";

// ...

export const ExampleShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <JsonField
        source="example"
        addLabel={true}
        reactJsonOptions={{
          // Props passed to react-json-view
          name: null,
          collapsed: true,
          enableClipboard: false,
          displayDataTypes: false,
        }}
      />
    </SimpleShowLayout>
  </Show>
);

export const ExampleEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <JsonInput
        source="example"
        validate={[required()]}
        reactJsonOptions={{
          // Props passed to react-json-view
          name: null,
          collapsed: true,
          enableClipboard: false,
          displayDataTypes: false,
        }}
      />
    </SimpleForm>
  </Edit>
);
```
