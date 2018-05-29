<!-- 
    * 堆叠条形图
    * Created by Administrator on 2018/5/16.
 -->
 <template>
     <div>
         <div id="stackedId"></div>
     </div>
 </template>
 <script>
 import { DataSet } from '@antv/data-set'
 export default {
     data() {
         return {
             stackedData: [
                { 'State': 'WY', '小于5岁': 25635, '5至13岁': 1890, '14至17岁': 9314 },
                { 'State': 'DC', '小于5岁': 30352, '5至13岁': 20439, '14至17岁': 10225 },
                { 'State': 'VT', '小于5岁': 38253, '5至13岁': 42538, '14至17岁': 15757 },
                { 'State': 'ND', '小于5岁': 51896, '5至13岁': 67358, '14至17岁': 18794 },
                { 'State': 'AK', '小于5岁': 72083, '5至13岁': 85640, '14至17岁': 22153 }
            ],
            chart: null,
         }
     },
     mounted() {
         this.g2Chart(this.stackedData)
     },
     methods: {
         g2Chart(datas) {
            const data = datas
            const ds = new DataSet();
            const dv = ds.createView().source(data);
            dv.transform({
                type: 'fold',
                fields: ['小于5岁', '5至13岁', '14至17岁'], // 展开字段集
                key: '年龄段', // key字段
                value: '人口数量', // value字段
                retains: ['State'] // 保留字段集，默认为除fields以外的所有字段
            });
            if(!this.chart) {
                this.chart = new G2.Chart({
                    container: 'stackedId',
                    // forceFit: true,
                    width: window.innerWidth - 400,
                    height: window.innerHeight - 250,
                });
            }
            this.chart.source(dv);
            this.chart.coord().transpose();
            this.chart.axis('State', {
                label: {
                    offset: 12
                }
            });
            this.chart.intervalStack().position('State*人口数量').color('年龄段');
            this.chart.render();
         }
     }
 }
 </script>
 
 