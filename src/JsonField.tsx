import React from "react";
import ReactJson, { ReactJsonViewProps } from "react-json-view";

type Props = {
  source: string;
  record?: any;
  reactJsonOptions?: ReactJsonViewProps;
};

export const JsonField: React.FC<Props> = ({
  source,
  record = {},
  reactJsonOptions = {},
}) => {
  return <ReactJson {...reactJsonOptions} src={record[source] || {}} />;
};
