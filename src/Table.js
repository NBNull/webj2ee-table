import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import { Resizable } from 'react-resizable';

import {
    parseColumns,
    isAnyColumnsLeftFixed,
    isAnyColumnsRightFixed,
    leftColumns,
    rightColumns
} from './_utils';

export default class Table extends React.Component {
    constructor(props) {
        super(props);

        this.headerRef = React.createRef();
        this.bodyRef = React.createRef();
        this.bodyTableRef = React.createRef();

        this.state = {
            height: this.props.height,
            scrollY: false,
            columns: parseColumns(this.props)
        };
    }

    static propTypes = {
        data: PropTypes.array,
        border: PropTypes.bool,
        stripe: PropTypes.bool,
        height: PropTypes.number
    };

    static defaultProps = {
        prefixCls: 'webj2ee-table'
    };

    componentDidMount() {
        this.updateScrollY();
    }

    syncScroll = () => {
        const headerDom = this.headerRef.current;
        const bodyDom = this.bodyRef.current;

        headerDom.scrollLeft = bodyDom.scrollLeft;
    };

    // judge if has scroll-Y bar
    updateScrollY() {
        const height = this.state.height;
        const bodyTableDom = this.bodyTableRef.current;

        const scrollY = bodyTableDom.offsetHeight > height;

        this.setState({
            scrollY
        });
    }

    handleResize = (index) => (e, { size }) => {
        this.setState(({ columns }) => {
            const nextColumns = [...columns];
            nextColumns[index] = {
                ...nextColumns[index],
                width: size.width
            };
            return { columns: nextColumns };
        });
    };

    renderLeftFixedTable = () => {
        const { prefixCls } = this.props;
        const { columns } = this.state;

        return (
            <div className={`${prefixCls}-fixed-left`}>
                {this.renderTable({
                    columns: leftColumns(columns),
                    fixed: 'left'
                })}
            </div>
        );
    };

    renderRightFixedTable = () => {
        const { prefixCls } = this.props;
        const { columns } = this.state;

        return (
            <div className={`${prefixCls}-fixed-right`}>
                {this.renderTable({
                    columns: rightColumns(columns),
                    fixed: 'right'
                })}
            </div>
        );
    };

    renderTable(options) {
        const { prefixCls } = this.props;
        const { columns } = options;
        return (
            <div className={`${prefixCls}-header-wrapper`}>
                {this.state.scrollY && <div className={'gutter'} />}
                <div className={`header`} ref={this.headerRef}>
                    <table>
                        {columns.map(({ width, dataKey }) => {
                            return <col key={dataKey} style={{ width }} />;
                        })}
                        <thead>
                            <tr>
                                {columns.map(
                                    ({ head, dataKey, width }, index) => {
                                        return (
                                            <Resizable
                                                width={width}
                                                height={0}
                                                onResize={this.handleResize(
                                                    index
                                                )}
                                            >
                                                <th key={dataKey}>{head}</th>
                                            </Resizable>
                                        );
                                    }
                                )}
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        );
    }

    render() {
        const { prefixCls } = this.props;

        // 取得列定义
        const { columns } = this.state;

        // 取数据
        const { data, border, stripe, height } = this.props;

        // 边框样式控制
        const cls = classnames({
            [`${prefixCls}`]: true,
            [`${prefixCls}-bordered`]: border,
            [`${prefixCls}-stripe`]: stripe
        });

        return (
            <div className={cls}>
                <div>
                    <div className={`${prefixCls}-header-wrapper`}>
                        {this.state.scrollY && <div className={'gutter'} />}
                        <div className={`header`} ref={this.headerRef}>
                            <table>
                                {columns.map(({ width, dataKey }) => {
                                    return (
                                        <col key={dataKey} style={{ width }} />
                                    );
                                })}
                                <thead>
                                    <tr>
                                        {columns.map(
                                            (
                                                { head, dataKey, width },
                                                index
                                            ) => {
                                                return (
                                                    <Resizable
                                                        width={width}
                                                        height={0}
                                                        onResize={this.handleResize(
                                                            index
                                                        )}
                                                    >
                                                        <th key={dataKey}>
                                                            {head}
                                                        </th>
                                                    </Resizable>
                                                );
                                            }
                                        )}
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div
                        className={`${prefixCls}-body`}
                        onScroll={this.syncScroll}
                        ref={this.bodyRef}
                        style={height ? { height } : null}
                    >
                        <table ref={this.bodyTableRef}>
                            {columns.map(({ width }) => {
                                return <col style={{ width }} />;
                            })}
                            <tbody>
                                {data.map((record) => {
                                    return (
                                        <tr>
                                            {columns.map(({ dataKey }) => {
                                                return (
                                                    <td>{record[dataKey]}</td>
                                                );
                                            })}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {isAnyColumnsLeftFixed(columns) && this.renderLeftFixedTable()}
                {isAnyColumnsRightFixed(columns) &&
                    this.renderRightFixedTable()}
            </div>
        );
    }
}
