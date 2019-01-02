import React from 'react';

import './style.css';

import { Table, Column } from 'webj2ee-table';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <h3>基础表格</h3>
                <Table data={this.state.data}>
                    <Column dataKey={'date'} head={'日期'} width={180} />
                    <Column dataKey={'name'} head={'姓名'} width={180} />
                    <Column dataKey={'address'} head={'地址'} width={360} />
                </Table>
                <h3>带边框</h3>
                <Table data={this.state.data} border={true}>
                    <Column dataKey={'date'} head={'日期'} width={180} />
                    <Column dataKey={'name'} head={'姓名'} width={180} />
                    <Column dataKey={'address'} head={'地址'} width={360} />
                </Table>
                <h3>斑马纹</h3>
                <Table data={this.state.data} border={true} stripe={true}>
                    <Column dataKey={'date'} head={'日期'} width={180} />
                    <Column dataKey={'name'} head={'姓名'} width={180} />
                    <Column dataKey={'address'} head={'地址'} width={360} />
                </Table>
            </div>
        );
    }
}
