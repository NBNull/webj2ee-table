import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import { parseColumns, getScrollBarWidth } from './_utils';

export default class Table extends React.Component {
    constructor(props) {
        super(props);

        this.headerRef = React.createRef();
        this.bodyRef = React.createRef();
        this.bodyTableRef = React.createRef();

        this.state = {
            height: this.props.height,
            scrollY: false
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

    render() {
        const { prefixCls } = this.props;

        // 取得列定义
        const columns = parseColumns(this.props);

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
                <div className={`${prefixCls}-header-wrapper`}>
                    {this.state.scrollY && <div className={'gutter'} />}
                    <div className={`header`} ref={this.headerRef}>
                        <table>
                            {columns.map(({ width, dataKey }) => {
                                return <col key={dataKey} style={{ width }} />;
                            })}
                            <thead>
                                <tr>
                                    {columns.map(({ head, dataKey }) => {
                                        return <th key={dataKey}>{head}</th>;
                                    })}
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
                                            return <td>{record[dataKey]}</td>;
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
