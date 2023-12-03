import React from 'react';
import './JsonDataPane.scss';

export interface JsonData {
  [key: string]: any;
}

interface Props {
  jsonData: JsonData;
  getJsonData: (data: {
    parentKey: string | null;
    nestedKey: string;
    parentValue: any | null;
    nestedValue: any;
    position: number | null;
  }) => void;
}

export const JsonDataPane: React.FC<Props> = ({ jsonData, getJsonData }) => {
  const handleKeyClick = (
    parentKey: string | null,
    nestedKey: string,
    parentValue: any | null,
    nestedValue: any,
    position: number | null
  ) => {
    getJsonData({ parentKey, nestedKey, parentValue, nestedValue, position });
  };

  const renderValue = (
    value: any,
    parentKey: string | null = null,
    topLevel = true,
    position: number | null = null,
    parentValue: any | null = null
  ): React.ReactNode => {
    if (typeof value === 'object' && value !== null) {
      if (Array.isArray(value)) {
        return (
          <span className="json-array">
            [
            {value.map((item, index) => (
              <span key={index}>
                {renderValue(item, parentKey, false, index, value)}
                {index < value.length - 1 ? ', ' : ''}
              </span>
            ))}
            ]
          </span>
        );
      } else {
        return (
          <div className={topLevel ? 'json-object-top' : 'json-object'}>
            {Object.keys(value).map((key) => (
              <div key={key} className="json-object-entry">
                <span
                  className={`key${key === 'fields' ? ' unclickable' : ''}`}
                  onClick={key !== 'fields' ? () => handleKeyClick(parentKey, key, parentValue, value[key], position) : undefined}
                  style={{ cursor: key !== 'fields' ? 'pointer' : 'default' }}
                >{`${key}`}</span>
                : {key === 'fields' ? renderFields(value[key], key, false) : renderValue(value[key], key, false, null, value)}
              </div>
            ))}
          </div>
        );
      }
    } else {
      if (typeof value === 'string') {
        return <span className="string">{`'${value}'`}</span>;
      } else if (typeof value === 'number') {
        return <span className="number">{value}</span>;
      } else {
        return <span className="value">{JSON.stringify(value)}</span>;
      }
    }
  };

  const renderFields = (fieldsArray: any[], parentKey: string, topLevel: boolean): React.ReactNode => {
    return (
      <span className="json-array">
        [
        {fieldsArray.map((field, index) => (
          <div key={index} className="json-object-entry">
            <span className="json-object-brace">{'{'}</span>
            {Object.keys(field).map((key) => (
              <div key={key} className="json-object-entry">
                <span
                  className="key"
                  onClick={() => handleKeyClick('fields', key, null, field[key], index)}
                  style={{ cursor: 'pointer' }}
                >{`${key}`}</span>
                : {renderValue(field[key], key, false, index, field)}
              </div>
            ))}
            <span className="json-object-brace">{'}'}</span>
            {index < fieldsArray.length - 1 ? ', ' : ''}
          </div>
        ))}
        ]
      </span>
    );
  };

  return <div className="json-container">{renderValue(jsonData)}</div>;
};
