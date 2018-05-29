<!-- 
    * 多条阶梯折线图
    * Created by Administrator on 2018/5/16.
 -->
<template>
    <div class="mt">
        <div id="lineId"></div>
    </div>
</template>
<script>
import { DataSet } from '@antv/data-set'
export default {
    data() {
        return {
            chart: null,
            // 模拟数据
            lineData: [
                { month: 'Jan', series2: 51, series1: 125 },
                { month: 'Feb', series2: 91, series1: 132 },
                { month: 'Mar', series2: 34, series1: 141 },
                { month: 'Apr', series2: 47, series1: 158 },
                { month: 'May', series2: 63, series1: 133 },
                { month: 'June', series2: 58, series1: 143 },
                { month: 'July', series2: 56, series1: 176 },
                { month: 'Aug', series2: 77, series1: 194 },
                { month: 'Sep', series2: 99, series1: 115 },
                { month: 'Oct', series2: 106, series1: 134 },
                { month: 'Nov', series2: 88, series1: 110 },
                { month: 'Dec', series2: 56, series1: 91 }
            ],
        }
    },
    mounted() {
        this.g2Chart(this.lineData)
    },
    methods: {
        g2Chart(datas) {
            const data = datas
            const ds = new DataSet();
            const dv = ds.createView().source(data);
                dv.transform({
                type: 'fold',
                fields: ['series1', 'series2'], // 展开字段集
                key: 'key', // key字段
                value: 'value' // value字段
            });
            
            if(!this.chart) {
                this.chart = new G2.Chart({
                    container: 'lineId',
                    // forceFit: true,
                    width: window.innerWidth - 400,
                    height: window.innerHeight-250,
                });
            }
            this.chart.source(dv, {
                month: {
                    range: [0, 1]
                }
            });
            this.chart.line().position('month*value').shape('hv').color('key');
            this.chart.render();
        }
    }
}
</script>
<style>
.mt {
    margin-top: 20px;
}
</style>
