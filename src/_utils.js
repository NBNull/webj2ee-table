import React from 'react';

export function parseColumns(props) {
    const columns = [];

    React.Children.forEach(props.children, (column, index) => {
        if (!React.isValidElement(column)) {
            return;
        }

        const { dataKey, head, width } = column.props;

        columns.push({
            dataKey,
            head,
            width
        });
    });

    return columns;
}
