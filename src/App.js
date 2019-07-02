import React, { Component } from 'react';
import './App.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Label, ResponsiveContainer, Line, LineChart } from 'recharts';

const dummyData = [
    { valueA: 1000, date: '28/2/2019', valueB: 2000 },
    { valueA: 1200, date: '1/3/2019', valueB: 1650 },
    { valueA: 889, date: '2/3/2019', valueB: 2932 },
    { valueA: 25, date: '3/3/2019', valueB: 1050 },
    { valueA: 1000, date: '4/3/2019', valueB: 2420 },
    { valueA: 599, date: '5/3/2019', valueB: 2045 }
];

class App extends Component {
    render() {
        return (
            <div className="container">
                <ResponsiveContainer minHeight={580} maxHeight={580} minWidth={300} width="100%">
                    <BarChart
                        data={dummyData}
                        margin={{
                            top: 5,
                            right: 20,
                            left: 10,
                            bottom: 25
                        }}
                        maxBarSize={15}
                        onClick={data => {
                            console.log(data);
                        }}
                        ref={chart => (this.chart = chart)}
                    >
                        <XAxis tickSize={0} axisLine={false} dataKey="date" tickMargin={5} height={40} minTickGap={5} />
                        <YAxis axisLine={false} tickSize={0} tickMargin={10} tick={{ fill: 'rgba(0, 0, 0, 0.54)' }}>
                            <Label value="kWh" angle={-90} position="insideLeft" fill="rgba(0, 0, 0, 0.54)" offset={0}>
                                kWh
                            </Label>
                        </YAxis>
                        <Tooltip value="kWh" cursor={{ fill: '#4188a04f' }} isAnimationActive={false} />
                        <CartesianGrid stroke="rgba(139, 167, 171, 0.3)" vertical={false} strokeWidth={1} />
                        <Bar name="Value A" dataKey="valueA" fill="#54ced6" stackId="day" />
                        <Bar name="Value B" dataKey="valueB" fill="#000" stackId="day" />
                    </BarChart>
                </ResponsiveContainer>
                <ResponsiveContainer minHeight={580} maxHeight={580} minWidth={300} width="100%">
                    <LineChart
                        data={dummyData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip />
                        <Line yAxisId="left" type="monotone" dataKey="valueA" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line yAxisId="right" type="monotone" dataKey="valueB" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default App;
