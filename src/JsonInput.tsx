import { FormHelperText } from "@material-ui/core";
import React from "react";
import { InputHelperText, InputProps, Labeled, useInput } from "react-admin";
import ReactJson, {
  InteractionProps,
  ReactJsonViewProps,
} from "react-json-view";

type Props = {
  source: string;
  helperText?: string;
  jsonString?: boolean;
  reactJsonOptions?: ReactJsonViewProps;
} & InputProps;

export const JsonInput: React.FC<Props> = (props) => {
  const {
    input: { value, onChange },
    meta: { touched, error },
    isRequired,
  } = useInput(props);

  const { source, helperText, jsonString = false, reactJsonOptions } = props;

  function change(updatedSrc: any) {
    let updatedValue = updatedSrc;

    if (jsonString) {
      updatedValue =
        Object.keys(updatedSrc).length === 0
          ? null
          : JSON.stringify(updatedSrc);
    }

    onChange(updatedValue);
  }

  function onEdit(edit: InteractionProps) {
    change(edit.updated_src);

    if (reactJsonOptions?.onEdit) {
      reactJsonOptions.onEdit(edit);
    }
  }

  function onAdd(add: InteractionProps) {
    change(add.updated_src);

    if (reactJsonOptions?.onAdd) {
      reactJsonOptions.onAdd(add);
    }
  }

  function onDelete(del: InteractionProps) {
    change(del.updated_src);

    if (reactJsonOptions?.onDelete) {
      reactJsonOptions.onDelete(del);
    }
  }

  let src = value;

  if (jsonString) {
    src = value ? JSON.parse(value) : value;
  }

  return (
    <div>
      <Labeled source={source} isRequired={isRequired}>
        <ReactJson
          {...reactJsonOptions}
          src={src || {}}
          onEdit={onEdit}
          onAdd={onAdd}
          onDelete={onDelete}
        />
      </Labeled>
      <FormHelperText error={!!(touched && error)}>
        <InputHelperText
          touched={!!touched}
          error={error}
          helperText={helperText}
        />
      </FormHelperText>
    </div>
  );
};
