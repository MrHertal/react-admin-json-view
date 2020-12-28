import get from "lodash/get";
import React from "react";
import { FieldProps } from "react-admin";
import ReactJson, { ReactJsonViewProps } from "react-json-view";

type Props = {
  source: string;
  record?: any;
  reactJsonOptions?: ReactJsonViewProps;
} & FieldProps;

export const JsonField: React.FC<Props> = ({
  source,
  record = {},
  reactJsonOptions = {},
}) => {
  const value = get(record, source);

  return <ReactJson {...reactJsonOptions} src={value || {}} />;
};
