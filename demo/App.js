import React from 'react';

import './style.less';

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

                <hr />

                <h3>固定表头（无横滚、无竖滚）</h3>
                <Table data={this.state.data} border={true} stripe={true}>
                    <Column dataKey={'date'} head={'日期'} width={300} />
                    <Column dataKey={'name'} head={'姓名'} width={300} />
                </Table>

                <h3>固定表头（单横滚）</h3>
                <Table data={this.state.data} border={true} stripe={true}>
                    <Column dataKey={'date'} head={'日期'} width={300} />
                    <Column dataKey={'name'} head={'姓名'} width={300} />
                    <Column dataKey={'address'} head={'地址'} width={300} />
                    <Column dataKey={'sfzhm'} head={'身份证号'} width={300} />
                    <Column dataKey={'age'} head={'年龄'} width={300} />
                </Table>

                <h3>固定表头（单竖滚）</h3>
                <Table
                    data={this.state.data}
                    border={true}
                    stripe={true}
                    height={150}
                >
                    <Column dataKey={'date'} head={'日期'} width={300} />
                    <Column dataKey={'name'} head={'姓名'} width={300} />
                </Table>

                <h3>固定表头（横滚 + 竖滚）</h3>
                <Table
                    data={this.state.data}
                    border={true}
                    stripe={true}
                    height={150}
                >
                    <Column dataKey={'date'} head={'日期'} width={300} />
                    <Column dataKey={'name'} head={'姓名'} width={300} />
                    <Column dataKey={'address'} head={'地址'} width={300} />
                    <Column dataKey={'sfzhm'} head={'身份证号'} width={300} />
                    <Column dataKey={'age'} head={'年龄'} width={300} />
                </Table>

                <hr />

                <h3>列宽配置（列宽度和 小于 Table宽度）</h3>
                <h5>~剩余空间自动平分到各列</h5>
                <Table
                    data={this.state.data}
                    border={true}
                    stripe={true}
                    height={150}
                >
                    <Column dataKey={'date'} head={'日期'} width={300} />
                    <Column dataKey={'name'} head={'姓名'} width={300} />
                </Table>

                <h3>列宽配置（列宽度和 大于 Table宽度）</h3>
                <h5>~各列保持配置宽度不变</h5>
                <Table
                    data={this.state.data}
                    border={true}
                    stripe={true}
                    height={150}
                >
                    <Column dataKey={'date'} head={'日期'} width={400} />
                    <Column dataKey={'name'} head={'姓名'} width={400} />
                    <Column dataKey={'address'} head={'地址'} width={400} />
                    <Column dataKey={'sfzhm'} head={'身份证号'} width={400} />
                    <Column dataKey={'age'} head={'年龄'} width={400} />
                </Table>

                <h3>列宽拖动</h3>
                <h5>~借助react-resizable即可快速实现</h5>
                <Table
                    data={this.state.data}
                    border={true}
                    stripe={true}
                    height={150}
                >
                    <Column dataKey={'date'} head={'日期'} width={400} />
                    <Column dataKey={'name'} head={'姓名'} width={400} />
                    <Column dataKey={'address'} head={'地址'} width={400} />
                    <Column dataKey={'sfzhm'} head={'身份证号'} width={400} />
                    <Column dataKey={'age'} head={'年龄'} width={400} />
                </Table>

                <hr />
                <h3>固定列</h3>
                <Table
                    data={this.state.data}
                    border={true}
                    stripe={true}
                    height={150}
                >
                    <Column
                        dataKey={'date'}
                        head={'日期'}
                        width={400}
                        fixed={'left'}
                    />
                    <Column dataKey={'name'} head={'姓名'} width={400} />
                    <Column dataKey={'address'} head={'地址'} width={400} />
                    <Column dataKey={'sfzhm'} head={'身份证号'} width={400} />
                    <Column
                        dataKey={'age'}
                        head={'年龄'}
                        width={400}
                        fixed={'right'}
                    />
                </Table>
            </div>
        );
    }
}
