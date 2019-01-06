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

export function getScrollBarWidth() {
    const dom = document.createElement('div');
    const body = document.body;

    dom.style.visibility = 'hidden';
    dom.style.width = '100px';
    dom.style.position = 'absolute';
    dom.style.top = '-9999px';
    dom.style.overflow = 'scroll';

    body.appendChild(dom);

    const totalWidth = dom.offsetWidth;
    const widthWithoutScroll = dom.clientWidth;

    body.removeChild(dom);

    return totalWidth - widthWithoutScroll;
}
