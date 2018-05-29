<!--
    * 分块热力图
    * Created by Administrator on 2018/5/22.
-->
<template>
    <div style="margin-top: 40px">
        <div id="pieceHotId"></div>
    </div>
</template>

<script>
    import {
        DataSet
    } from '@antv/data-set'

    export default {
        data() {
            return {
                chart: null,
                pieceHotData: [{
                        "name": 14513,
                        "carat": 1.35,
                        "cut": "Ideal",
                        "color": "J",
                        "clarity": "VS2",
                        "depth": 61.4,
                        "table": 57,
                        "price": 5862,
                        "x": 7.1,
                        "y": 7.13,
                        "z": 4.37
                    },
                    {
                        "name": 28685,
                        "carat": 0.3,
                        "cut": "Good",
                        "color": "G",
                        "clarity": "VVS1",
                        "depth": 64,
                        "table": 57,
                        "price": 678,
                        "x": 4.23,
                        "y": 4.27,
                        "z": 2.72
                    },
                    {
                        "name": 50368,
                        "carat": 0.75,
                        "cut": "Ideal",
                        "color": "F",
                        "clarity": "SI2",
                        "depth": 59.2,
                        "table": 60,
                        "price": 2248,
                        "x": 5.87,
                        "y": 5.92,
                        "z": 3.49
                    },
                    {
                        "name": 7721,
                        "carat": 0.26,
                        "cut": "Ideal",
                        "color": "F",
                        "clarity": "VS1",
                        "depth": 60.9,
                        "table": 57,
                        "price": 580,
                        "x": 4.13,
                        "y": 4.11,
                        "z": 2.51
                    },
                    {
                        "name": 31082,
                        "carat": 0.33,
                        "cut": "Premium",
                        "color": "H",
                        "clarity": "VVS1",
                        "depth": 61.4,
                        "table": 59,
                        "price": 752,
                        "x": 4.42,
                        "y": 4.44,
                        "z": 2.72
                    },
                    {
                        "name": 26429,
                        "carat": 1.52,
                        "cut": "Ideal",
                        "color": "G",
                        "clarity": "VVS1",
                        "depth": 62.4,
                        "table": 55,
                        "price": 15959,
                        "x": 7.3,
                        "y": 7.39,
                        "z": 4.58
                    },
                    {
                        "name": 35900,
                        "carat": 0.32,
                        "cut": "Ideal",
                        "color": "G",
                        "clarity": "IF",
                        "depth": 61.3,
                        "table": 54,
                        "price": 918,
                        "x": 4.41,
                        "y": 4.47,
                        "z": 2.72
                    },
                    {
                        "name": 27015,
                        "carat": 2.25,
                        "cut": "Ideal",
                        "color": "I",
                        "clarity": "SI2",
                        "depth": 62.4,
                        "table": 57,
                        "price": 17143,
                        "x": 8.39,
                        "y": 8.32,
                        "z": 5.21
                    },
                    {
                        "name": 30760,
                        "carat": 0.25,
                        "cut": "Premium",
                        "color": "E",
                        "clarity": "VVS2",
                        "depth": 62.5,
                        "table": 59,
                        "price": 740,
                        "x": 4.04,
                        "y": 4.02,
                        "z": 2.52
                    },
                    {
                        "name": 2205,
                        "carat": 1.02,
                        "cut": "Premium",
                        "color": "H",
                        "clarity": "I1",
                        "depth": 62.5,
                        "table": 60,
                        "price": 3141,
                        "x": 6.39,
                        "y": 6.41,
                        "z": 4
                    },
                    {
                        "name": 25584,
                        "carat": 2.01,
                        "cut": "Very-Good",
                        "color": "H",
                        "clarity": "SI2",
                        "depth": 62.9,
                        "table": 55,
                        "price": 14426,
                        "x": 8.03,
                        "y": 8.09,
                        "z": 5.07
                    },
                    {
                        "name": 16788,
                        "carat": 0.9,
                        "cut": "Ideal",
                        "color": "D",
                        "clarity": "VS2",
                        "depth": 61.2,
                        "table": 56,
                        "price": 6689,
                        "x": 6.2,
                        "y": 6.26,
                        "z": 3.81
                    },
                    {
                        "name": 2468,
                        "carat": 0.71,
                        "cut": "Ideal",
                        "color": "D",
                        "clarity": "VS1",
                        "depth": 62.2,
                        "table": 55,
                        "price": 3192,
                        "x": 5.71,
                        "y": 5.74,
                        "z": 3.56
                    },
                    {
                        "name": 6508,
                        "carat": 1.01,
                        "cut": "Very-Good",
                        "color": "G",
                        "clarity": "SI1",
                        "depth": 62.3,
                        "table": 59,
                        "price": 4064,
                        "x": 6.34,
                        "y": 6.37,
                        "z": 3.96
                    },
                    {
                        "name": 44895,
                        "carat": 0.5,
                        "cut": "Very-Good",
                        "color": "E",
                        "clarity": "VS2",
                        "depth": 63.4,
                        "table": 58,
                        "price": 1629,
                        "x": 5.06,
                        "y": 5.04,
                        "z": 3.2
                    },
                    {
                        "name": 20653,
                        "carat": 1.26,
                        "cut": "Ideal",
                        "color": "H",
                        "clarity": "VVS2",
                        "depth": 61.8,
                        "table": 56,
                        "price": 8941,
                        "x": 6.9,
                        "y": 6.93,
                        "z": 4.28
                    },
                    {
                        "name": 38210,
                        "carat": 0.43,
                        "cut": "Ideal",
                        "color": "F",
                        "clarity": "SI1",
                        "depth": 61.7,
                        "table": 54,
                        "price": 1016,
                        "x": 4.9,
                        "y": 4.86,
                        "z": 3.01
                    },
                    {
                        "name": 13359,
                        "carat": 0.24,
                        "cut": "Very-Good",
                        "color": "E",
                        "clarity": "VS2",
                        "depth": 62.1,
                        "table": 59,
                        "price": 419,
                        "x": 3.98,
                        "y": 4.01,
                        "z": 2.48
                    },
                    {
                        "name": 3260,
                        "carat": 0.7,
                        "cut": "Very-Good",
                        "color": "E",
                        "clarity": "VS1",
                        "depth": 60.7,
                        "table": 57,
                        "price": 3358,
                        "x": 5.72,
                        "y": 5.75,
                        "z": 3.48
                    },
                    {
                        "name": 46272,
                        "carat": 0.54,
                        "cut": "Ideal",
                        "color": "G",
                        "clarity": "VS1",
                        "depth": 61.8,
                        "table": 54,
                        "price": 1754,
                        "x": 5.22,
                        "y": 5.24,
                        "z": 3.23
                    },
                    {
                        "name": 23875,
                        "carat": 2.03,
                        "cut": "Very-Good",
                        "color": "J",
                        "clarity": "SI2",
                        "depth": 61.7,
                        "table": 61,
                        "price": 11968,
                        "x": 8.04,
                        "y": 8.18,
                        "z": 5
                    },
                    {
                        "name": 17434,
                        "carat": 1.41,
                        "cut": "Premium",
                        "color": "D",
                        "clarity": "SI2",
                        "depth": 61.1,
                        "table": 56,
                        "price": 6988,
                        "x": 7.19,
                        "y": 7.15,
                        "z": 4.38
                    },
                    {
                        "name": 25,
                        "carat": 0.31,
                        "cut": "Very-Good",
                        "color": "J",
                        "clarity": "SI1",
                        "depth": 58.1,
                        "table": 62,
                        "price": 353,
                        "x": 4.44,
                        "y": 4.47,
                        "z": 2.59
                    },
                    {
                        "name": 22130,
                        "carat": 1.5,
                        "cut": "Very-Good",
                        "color": "I",
                        "clarity": "VS1",
                        "depth": 62.2,
                        "table": 59,
                        "price": 10164,
                        "x": 7.27,
                        "y": 7.3,
                        "z": 4.53
                    },
                    {
                        "name": 53295,
                        "carat": 0.3,
                        "cut": "Very-Good",
                        "color": "I",
                        "clarity": "VVS1",
                        "depth": 60.5,
                        "table": 60,
                        "price": 552,
                        "x": 4.32,
                        "y": 4.34,
                        "z": 2.62
                    },
                    {
                        "name": 44404,
                        "carat": 0.55,
                        "cut": "Ideal",
                        "color": "H",
                        "clarity": "SI1",
                        "depth": 61.4,
                        "table": 56,
                        "price": 1584,
                        "x": 5.28,
                        "y": 5.31,
                        "z": 3.25
                    },
                    {
                        "name": 40387,
                        "carat": 0.42,
                        "cut": "Ideal",
                        "color": "D",
                        "clarity": "VVS2",
                        "depth": 61.7,
                        "table": 57,
                        "price": 1132,
                        "x": 4.8,
                        "y": 4.82,
                        "z": 2.97
                    },
                    {
                        "name": 11416,
                        "carat": 1.5,
                        "cut": "Fair",
                        "color": "H",
                        "clarity": "SI2",
                        "depth": 66,
                        "table": 64,
                        "price": 5000,
                        "x": 7.1,
                        "y": 6.97,
                        "z": 4.64
                    },
                    {
                        "name": 47315,
                        "carat": 0.23,
                        "cut": "Very-Good",
                        "color": "E",
                        "clarity": "VVS2",
                        "depth": 61.5,
                        "table": 59,
                        "price": 530,
                        "x": 3.95,
                        "y": 3.98,
                        "z": 2.44
                    },
                    {
                        "name": 5724,
                        "carat": 0.25,
                        "cut": "Very-Good",
                        "color": "E",
                        "clarity": "VVS2",
                        "depth": 63,
                        "table": 55,
                        "price": 575,
                        "x": 4,
                        "y": 4.03,
                        "z": 2.53
                    },
                    {
                        "name": 30624,
                        "carat": 0.3,
                        "cut": "Premium",
                        "color": "D",
                        "clarity": "SI2",
                        "depth": 60.2,
                        "table": 60,
                        "price": 447,
                        "x": 4.32,
                        "y": 4.35,
                        "z": 2.61
                    },
                    {
                        "name": 9803,
                        "carat": 0.9,
                        "cut": "Very-Good",
                        "color": "D",
                        "clarity": "VS2",
                        "depth": 63,
                        "table": 62,
                        "price": 4668,
                        "x": 6.06,
                        "y": 6.13,
                        "z": 3.84
                    },
                    {
                        "name": 46497,
                        "carat": 0.5,
                        "cut": "Very-Good",
                        "color": "F",
                        "clarity": "VVS2",
                        "depth": 60.4,
                        "table": 61,
                        "price": 1778,
                        "x": 5.12,
                        "y": 5.14,
                        "z": 3.1
                    },
                    {
                        "name": 45329,
                        "carat": 0.32,
                        "cut": "Premium",
                        "color": "E",
                        "clarity": "SI1",
                        "depth": 61.2,
                        "table": 58,
                        "price": 524,
                        "x": 4.37,
                        "y": 4.42,
                        "z": 2.69
                    },
                    {
                        "name": 22424,
                        "carat": 1.57,
                        "cut": "Very-Good",
                        "color": "H",
                        "clarity": "SI1",
                        "depth": 59.6,
                        "table": 58,
                        "price": 10447,
                        "x": 7.61,
                        "y": 7.65,
                        "z": 4.55
                    },
                    {
                        "name": 3143,
                        "carat": 0.7,
                        "cut": "Ideal",
                        "color": "E",
                        "clarity": "SI1",
                        "depth": 61.6,
                        "table": 56,
                        "price": 3330,
                        "x": 5.7,
                        "y": 5.72,
                        "z": 3.52
                    },
                    {
                        "name": 6815,
                        "carat": 1.01,
                        "cut": "Fair",
                        "color": "E",
                        "clarity": "SI2",
                        "depth": 64.7,
                        "table": 55,
                        "price": 4118,
                        "x": 6.37,
                        "y": 6.3,
                        "z": 4.1
                    },
                    {
                        "name": 5947,
                        "carat": 0.72,
                        "cut": "Ideal",
                        "color": "E",
                        "clarity": "VS1",
                        "depth": 61.1,
                        "table": 57,
                        "price": 3947,
                        "x": 5.78,
                        "y": 5.81,
                        "z": 3.54
                    },
                    {
                        "name": 9084,
                        "carat": 1.07,
                        "cut": "Premium",
                        "color": "G",
                        "clarity": "SI2",
                        "depth": 62,
                        "table": 59,
                        "price": 4523,
                        "x": 6.54,
                        "y": 6.5,
                        "z": 4.04
                    },
                    {
                        "name": 36793,
                        "carat": 0.34,
                        "cut": "Ideal",
                        "color": "E",
                        "clarity": "VS2",
                        "depth": 62.6,
                        "table": 57,
                        "price": 956,
                        "x": 4.47,
                        "y": 4.45,
                        "z": 2.79
                    },
                    {
                        "name": 4943,
                        "carat": 0.76,
                        "cut": "Ideal",
                        "color": "D",
                        "clarity": "SI1",
                        "depth": 62.3,
                        "table": 55,
                        "price": 3732,
                        "x": 5.81,
                        "y": 5.84,
                        "z": 3.63
                    },
                    {
                        "name": 52525,
                        "carat": 0.8,
                        "cut": "Ideal",
                        "color": "F",
                        "clarity": "SI2",
                        "depth": 62.4,
                        "table": 57,
                        "price": 2529,
                        "x": 5.92,
                        "y": 5.97,
                        "z": 3.71
                    },
                    {
                        "name": 46417,
                        "carat": 0.55,
                        "cut": "Ideal",
                        "color": "D",
                        "clarity": "VS2",
                        "depth": 61,
                        "table": 56,
                        "price": 1768,
                        "x": 5.31,
                        "y": 5.28,
                        "z": 3.23
                    },
                    {
                        "name": 35997,
                        "carat": 0.42,
                        "cut": "Very-Good",
                        "color": "G",
                        "clarity": "VS1",
                        "depth": 59.4,
                        "table": 59,
                        "price": 921,
                        "x": 4.86,
                        "y": 4.9,
                        "z": 2.9
                    },
                    {
                        "name": 25539,
                        "carat": 1.5,
                        "cut": "Very-Good",
                        "color": "G",
                        "clarity": "VVS1",
                        "depth": 63.1,
                        "table": 62,
                        "price": 14361,
                        "x": 7.25,
                        "y": 7.23,
                        "z": 4.57
                    },
                    {
                        "name": 2361,
                        "carat": 0.9,
                        "cut": "Ideal",
                        "color": "J",
                        "clarity": "VS1",
                        "depth": 62.5,
                        "table": 55,
                        "price": 3175,
                        "x": 6.18,
                        "y": 6.14,
                        "z": 3.85
                    },
                    {
                        "name": 23147,
                        "carat": 1.02,
                        "cut": "Premium",
                        "color": "E",
                        "clarity": "VVS1",
                        "depth": 61.5,
                        "table": 59,
                        "price": 11163,
                        "x": 6.46,
                        "y": 6.41,
                        "z": 3.96
                    },
                    {
                        "name": 39674,
                        "carat": 0.42,
                        "cut": "Ideal",
                        "color": "G",
                        "clarity": "VS2",
                        "depth": 62.1,
                        "table": 56,
                        "price": 1087,
                        "x": 4.84,
                        "y": 4.79,
                        "z": 2.99
                    },
                    {
                        "name": 42947,
                        "carat": 0.3,
                        "cut": "Very-Good",
                        "color": "F",
                        "clarity": "SI2",
                        "depth": 63.4,
                        "table": 56,
                        "price": 506,
                        "x": 4.29,
                        "y": 4.26,
                        "z": 2.71
                    },
                    {
                        "name": 23762,
                        "carat": 1.51,
                        "cut": "Premium",
                        "color": "F",
                        "clarity": "SI1",
                        "depth": 61.4,
                        "table": 58,
                        "price": 11817,
                        "x": 7.43,
                        "y": 7.35,
                        "z": 4.54
                    },
                    {
                        "name": 47355,
                        "carat": 0.5,
                        "cut": "Ideal",
                        "color": "E",
                        "clarity": "VS2",
                        "depth": 63.8,
                        "table": 54,
                        "price": 1845,
                        "x": 5.07,
                        "y": 5.05,
                        "z": 3.23
                    },
                    {
                        "name": 35598,
                        "carat": 0.31,
                        "cut": "Ideal",
                        "color": "H",
                        "clarity": "VVS1",
                        "depth": 62.7,
                        "table": 54,
                        "price": 907,
                        "x": 4.38,
                        "y": 4.33,
                        "z": 2.73
                    },
                    {
                        "name": 43086,
                        "carat": 0.61,
                        "cut": "Ideal",
                        "color": "I",
                        "clarity": "VS2",
                        "depth": 62,
                        "table": 54,
                        "price": 1380,
                        "x": 5.44,
                        "y": 5.49,
                        "z": 3.39
                    },
                    {
                        "name": 15471,
                        "carat": 1.58,
                        "cut": "Premium",
                        "color": "F",
                        "clarity": "SI2",
                        "depth": 59.1,
                        "table": 59,
                        "price": 6194,
                        "x": 7.68,
                        "y": 7.59,
                        "z": 4.51
                    },
                    {
                        "name": 29072,
                        "carat": 0.34,
                        "cut": "Premium",
                        "color": "D",
                        "clarity": "VS2",
                        "depth": 59.3,
                        "table": 59,
                        "price": 687,
                        "x": 4.55,
                        "y": 4.59,
                        "z": 2.71
                    },
                    {
                        "name": 20868,
                        "carat": 1.27,
                        "cut": "Premium",
                        "color": "E",
                        "clarity": "VS2",
                        "depth": 61.2,
                        "table": 59,
                        "price": 9086,
                        "x": 7.02,
                        "y": 6.97,
                        "z": 4.28
                    },
                    {
                        "name": 51424,
                        "carat": 0.85,
                        "cut": "Good",
                        "color": "J",
                        "clarity": "VS1",
                        "depth": 63.6,
                        "table": 57,
                        "price": 2372,
                        "x": 6.01,
                        "y": 5.94,
                        "z": 3.8
                    },
                    {
                        "name": 27320,
                        "carat": 2.18,
                        "cut": "Premium",
                        "color": "G",
                        "clarity": "SI2",
                        "depth": 61.9,
                        "table": 60,
                        "price": 17841,
                        "x": 8.24,
                        "y": 8.29,
                        "z": 5.12
                    },
                    {
                        "name": 1128,
                        "carat": 0.73,
                        "cut": "Premium",
                        "color": "G",
                        "clarity": "VVS2",
                        "depth": 62.2,
                        "table": 56,
                        "price": 2919,
                        "x": 5.79,
                        "y": 5.75,
                        "z": 3.59
                    },
                    {
                        "name": 18182,
                        "carat": 1.2,
                        "cut": "Very-Good",
                        "color": "G",
                        "clarity": "VS2",
                        "depth": 63.1,
                        "table": 57,
                        "price": 7371,
                        "x": 6.69,
                        "y": 6.74,
                        "z": 4.24
                    },
                    {
                        "name": 669,
                        "carat": 0.77,
                        "cut": "Premium",
                        "color": "E",
                        "clarity": "SI1",
                        "depth": 62.9,
                        "table": 59,
                        "price": 2846,
                        "x": 5.84,
                        "y": 5.79,
                        "z": 3.66
                    },
                    {
                        "name": 47240,
                        "carat": 0.51,
                        "cut": "Ideal",
                        "color": "E",
                        "clarity": "VS1",
                        "depth": 62,
                        "table": 57,
                        "price": 1841,
                        "x": 5.11,
                        "y": 5.15,
                        "z": 3.18
                    },
                ]
            }
        },
        mounted() {
            this.g2Chrt(this.pieceHotData)
        },
        methods: {
            g2Chrt(datas) {
                // https://antv.alipay.com/assets/data/diamond.json
                // antv G2 提供的数据
                
                var _DataSet = DataSet,
                    DataView = _DataSet.DataView;

                let data = datas
                var dv = new DataView();
                dv.source(data).transform({
                    type: 'bin.rectangle',
                    fields: ['carat', 'price']
                });
                if (!this.chart) {
                    this.chart = new G2.Chart({
                        id: 'pieceHotId',
                        // forceFit: true,
                        width: window.innerWidth - 350,
                        height: window.innerHeight - 250,
                        padding: [20, 80, 120, 85]
                    });
                }
                this.chart.source(dv);
                this.chart.tooltip({
                    showTitle: false
                });
                this.chart.polygon().position('x*y').color('count', ['#BAE7FF', '#1890FF', '#0050B3']);
                this.chart.render();
            }
        }
    }
</script>
