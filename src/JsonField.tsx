import get from "lodash/get";
import React from "react";
import { FieldProps } from "react-admin";
import ReactJson, { ReactJsonViewProps } from "react-json-view";

type Props = {
  source: string;
  record?: any;
  jsonString?: boolean;
  reactJsonOptions?: ReactJsonViewProps;
} & FieldProps;

export const JsonField: React.FC<Props> = ({
  source,
  record = {},
  jsonString = false,
  reactJsonOptions = {},
}) => {
  let src = get(record, source);

  if (jsonString) {
    src = JSON.parse(src);
  }

  return <ReactJson {...reactJsonOptions} src={src || {}} />;
};
