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
  reactJsonOptions?: ReactJsonViewProps;
} & InputProps;

export const JsonInput: React.FC<Props> = (props) => {
  const {
    input: { value, onChange },
    meta: { touched, error },
    isRequired,
  } = useInput(props);

  const { source, helperText, reactJsonOptions } = props;

  function onEdit(edit: InteractionProps) {
    onChange(edit.updated_src);

    if (reactJsonOptions?.onEdit) {
      reactJsonOptions.onEdit(edit);
    }
  }

  function onAdd(add: InteractionProps) {
    onChange(add.updated_src);

    if (reactJsonOptions?.onAdd) {
      reactJsonOptions.onAdd(add);
    }
  }

  function onDelete(del: InteractionProps) {
    onChange(del.updated_src);

    if (reactJsonOptions?.onDelete) {
      reactJsonOptions.onDelete(del);
    }
  }

  return (
    <div>
      <Labeled source={source} isRequired={isRequired}>
        <ReactJson
          {...reactJsonOptions}
          src={value || {}}
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
