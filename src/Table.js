import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import { parseColumns } from './_utils';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        data: PropTypes.array,
        border: PropTypes.bool,
        stripe: PropTypes.bool
    };

    static defaultProps = {
        prefixCls: 'webj2ee-table'
    };

    render() {
        const { prefixCls } = this.props;

        // 取得列定义
        const columns = parseColumns(this.props);

        // 取数据
        const { data, border, stripe } = this.props;

        // 边框样式控制
        const cls = classnames({
            [`${prefixCls}`]: true,
            [`${prefixCls}-bordered`]: border,
            [`${prefixCls}-stripe`]: stripe
        });

        return (
            <div className={cls}>
                <div className={`${prefixCls}-header`}>
                    <table>
                        {columns.map(({ width }) => {
                            return <col style={{ width }} />;
                        })}
                        <thead>
                            <tr>
                                {columns.map(({ head }) => {
                                    return <th>{head}</th>;
                                })}
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className={`${prefixCls}-body`}>
                    <table>
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
