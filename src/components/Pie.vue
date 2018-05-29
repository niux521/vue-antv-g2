<!--
    * 饼图
    * Created by Administrator on 2018/5/17.
-->
<template>
    <div>
        <div id="pieId"></div>
    </div>
</template>
<script>
import { DataSet } from '@antv/data-set'
export default {
    data() {
        return {
            chart: null,
            pieData: [
                { value: 251, type: '大事例一', name: '子事例一' },
                { value: 1048, type: '大事例一', name: '子事例二' },
                { value: 610, type: '大事例二', name: '子事例三' },
                { value: 434, type: '大事例二', name: '子事例四' },
                { value: 335, type: '大事例三', name: '子事例五' },
                { value: 250, type: '大事例三', name: '子事例六' }
            ]
        }
    },
    mounted() {
        this.g2Chrt(this.pieData)
    },
    methods: {
        g2Chrt(datas) {
            var _DataSet = DataSet,
                DataView = _DataSet.DataView;

            var dv = new DataView();
            dv.source(this.pieData).transform({
                type: 'percent',
                field: 'value',
                dimension: 'type',
                as: 'percent'
            });
            if (!this.chart) {
                this.chart = new G2.Chart({
                    container: 'pieId',
                    // forceFit: true,
                    width: window.innerWidth - 250,
                    height: window.innerHeight - 250,
                    padding: 0
                });
            }
            this.chart.source(dv, {
                percent: {
                    formatter: function formatter(val) {
                    val = (val * 100).toFixed(2) + '%';
                    return val;
                    }
            }
            });
            this.chart.coord('theta', {
                radius: 0.5
            });
            this.chart.tooltip({
                showTitle: false,
                itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
            });
            this.chart.legend(false);
            this.chart.intervalStack().position('percent').color('type').label('type', {
                offset: -10
            }).tooltip('name*percent', function (item, percent) {
                percent = (percent * 100).toFixed(2) + '%';
                return {
                    name: item,
                    value: percent
            };
            }).select(false).style({
                lineWidth: 1,
                stroke: '#fff'
            });

            var outterView = this.chart.view();
            var dv1 = new DataView();
            dv1.source(this.pieData).transform({
                type: 'percent',
                field: 'value',
                dimension: 'name',
                as: 'percent'
            });
            outterView.source(dv1, {
            percent: {
                formatter: function formatter(val) {
                val = (val * 100).toFixed(2) + '%';
                return val;
                }
            }
            });
            outterView.coord('theta', {
                innerRadius: 0.5 / 0.75,
                radius: 0.75
            });
            outterView.intervalStack().position('percent').color('name', ['#BAE7FF', '#7FC9FE', '#71E3E3', '#ABF5F5', '#8EE0A1', '#BAF5C4']).label('name').tooltip('name*percent', function (item, percent) {
            percent = (percent * 100).toFixed(2) + '%';
                return {
                    name: item,
                    value: percent
                };
            }).select(false).style({
                lineWidth: 1,
                stroke: '#fff'
            });

            this.chart.render();
        }
    }
}
</script>
