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
  return <ReactJson {...reactJsonOptions} src={record[source] || {}} />;
};
