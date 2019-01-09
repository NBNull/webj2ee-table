import React from 'react';

export function parseColumns(props) {
    const columns = [];

    React.Children.forEach(props.children, (column, index) => {
        if (!React.isValidElement(column)) {
            return;
        }

        const { dataKey, head, width, fixed } = column.props;

        columns.push({
            dataKey,
            head,
            width,
            fixed
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

/**
 * 固定列相关接口
 *
 * 注：参考自 ant-design
 */
export function isAnyColumnsFixed(columns) {
    return columns.some((column) => !!column.fixed);
}

export function isAnyColumnsLeftFixed(columns) {
    return columns.some((column) => column.fixed === 'left');
}

export function isAnyColumnsRightFixed(columns) {
    return columns.some((column) => column.fixed === 'right');
}

export function leftColumns(columns) {
    return columns.filter((column) => column.fixed === 'left');
}

export function rightColumns(columns) {
    return columns.filter((column) => column.fixed === 'right');
}
