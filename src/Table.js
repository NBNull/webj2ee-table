import React from 'react';
import PropTypes from 'prop-types';

import { parseColumns } from './_utils';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        data: PropTypes.array
    };

    render() {
        // 取得列定义
        const columns = parseColumns(this.props);

        // 取数据
        const { data } = this.props;

        return (
            <div className={'webj2ee-table'}>
                <div className={'webj2ee-table-header'}>
                    <table>
                        {columns.map(({ width }) => {
                            return <col style={{ width }} />;
                        })}
                        <thead className={'webj2ee-table-thead'}>
                            <tr>
                                {columns.map(({ head }) => {
                                    return <th>{head}</th>;
                                })}
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className={'webj2ee-table-body'}>
                    <table>
                        {columns.map(({ width }) => {
                            return <col style={{ width }} />;
                        })}
                        <tbody className={'webj2ee-table-tbody'}>
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
