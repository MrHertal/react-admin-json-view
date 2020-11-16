import React from "react";
import { Labeled } from "react-admin";
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
  return (
    <Labeled source={source}>
      <ReactJson {...reactJsonOptions} src={record[source] || {}} />
    </Labeled>
  );
};
