<template>
    <div class="report">
        <p>This button will genrate the report From datbase from latest available data.</p>
        <button class="curser" @click="generatePDF">Generate PDF</button>
    </div>
    <div class="loader" v-if="loading">
      <img :src="gif"  alt="">
      <!-- <p>hello</p> -->
    </div>
    <div v-else class="charts">
      <GChart 
      class="gchart"
      
      type="PieChart"
      :data="chartData"
      :options="chartOptions"
      />
    </div>
</template>

<script>
import { GChart } from 'vue-google-charts';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import gif from '../assets/Iphone-spinner-2.gif';

export default {
  // extends: Pie,
  // mixins: [mixins.reactiveData],
  data() {
    return {
      loading: false,
      gif: gif,
      availableBooks : 0,Books : 0, notavailableBooks : 0,
      chartData: [
        ['Availability', 'Books'],
        ['Available', this.availableBooks],
        ['Missing', this.missingBooks],
        ['Issued', this.issuedBooks],
      ],
      chartOptions: {
        title: 'Books Available',
        style:"width: 500px; height: 500px;",
        is3D: true,
      },
        tableData: [], // Data fetched from the database
    };
  },
  components: {
    GChart,
  },
  methods: {
    async fetchDataFromDatabase() {
      // Make API call to fetch data from your database
      // Replace this with your actual API endpoint
      try {
        this.loading = true;
        const dt = await pb.collection(`Library`).getFullList(
          {filter: 'Availability = "Available"'},
        );
        const dt1 = await pb.collection(`Library`).getFullList(
          {filter: 'Availability = "Missing"'},
        );
        const dt2 = await pb.collection(`Library`).getFullList(
          {filter: 'Availability = "Issued"'},
        );
        console.log(dt.length);
        this.availableBooks = dt.length;
        this.missingBooks = dt1.length;
        this.issuedBooks = dt2.length;
        console.log(this.availableBooks , this.issuedBooks , this.missingBooks);
        // this.notavailableBooks = this.Books - this.availableBooks;
        // console.log(this.notavailableBooks);
        this.chartData = [
          ['Availability', 'Books'],
          ['Available', this.availableBooks],
          ['Missing', this.missingBooks],
          ['Issued', this.issuedBooks],
        ]
      } catch (error) {
        alert("You Have The Error" + error);
      } finally {
        this.loading = false;
      }
    },
    // async chartdatas(){
      
    // },
    async generatePDF() {
      try {
        
      const doc = new jsPDF();
      let i = 1;

      
      // Set title for the PDF
      doc.setFontSize(12);
      doc.text("NOTE: if status is NA then book is note avilable & if status is AV then book is avilable", 10, 10);


      // Define columns and rows for the table
      const columns = ['SR.No.','AccessionNo', 'Availability', 'Reason']; // Replace with actual column names
      console.log(columns);
      const tableData = await pb.collection('Library').getFullList();

      let rows =[]
      await tableData.map(record =>{
        console.log(record)
        rows.push([i++ , record.AccessionNo, record.Availability , ""])}
       ); // Replace field1, field2, field3 with actual field names
      // Add table to PDF
      doc.autoTable({ head: [columns], body: rows });

      // Save PDF
      doc.save('table.pdf');
      } catch (error) {
       alert(error); 
      }
    },
  },
  created() {
    this.fetchDataFromDatabase(); // Fetch data when component is created
    // this.chartdatas(); // Fetch data when component is created
  },
};
import pb from '../db';
</script>

<style scoped>
button {
  border: solid 1px black;
    height: 40px;
    margin: 12px;
    font-size: 16px;
    border-radius: 4px;
}

p{
    font-size: larger;
}

.report , .loader{
  text-align: center;
}

.gchart{
  height: 300px;
  width: 400px;
}

.charts{
  display: flex;
  padding: 10px;
  justify-content: center;
}

</style>
