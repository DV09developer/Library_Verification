<template>
    <div class="componentbg">
        <div class="barcodeinput">
            <!-- Focus on the input to get barcode data from barcode reader -->
            <input id="barcode-scanner" type="text" v-model="barcodeData" @keyup.enter="processBarcode"
                placeholder="Enter AccessionNo">
                <!-- Onclick data will be shown in below table -->
            <button class="curser" @click="Getbookdata">Get Book Data</button>
        </div>
        <!-- <img v-if="loading" :src="assets/Iphone-spinner-2.gif" /> -->
        <div class="showdata">
            <!-- Book data will display in this section -->
            <div class="bookdatas">
                <h5>AccessionNo:</h5>
                <p>{{loading ? "loading..." : resultList.AccessionNo }}</p>
            </div>
            <div class="bookdatas">
                <h5>Status:</h5>
                <p>{{loading ? "loading..." : resultList.Status }}</p>
            </div>
            <div class="bookdatas">
                <h5>BookNo:</h5>
                <p>{{loading ? "loading..." : resultList.BookNo }}</p>
            </div>
            <div class="bookdatas">
                <h5>CopyNo:</h5>
                <p>{{loading ? "loading..." : resultList.CopyNo }}</p>
            </div>
            <div class="bookdatas">
                <h5>Author:</h5>
                <p>{{loading ? "loading..." : resultList.Author }}</p>
            </div>
            <div class="bookdatas">
                <h5>CollectionType:</h5>
                <p>{{loading ? "loading..." : resultList.CollectionType }}</p>
            </div>
            <div class="bookdatas">
                <h5>Department:</h5>
                <p>{{loading ? "loading..." : resultList.Department }}</p>
            </div>
            <div class="bookdatas">
                <h5>Edition:</h5>
                <p>{{loading ? "loading..." : resultList.Edition }}</p>
            </div>
            <div class="bookdatas">
                <h5>RecID:</h5>
                <p>{{loading ? "loading..." : resultList.RecID }}</p>
            </div>
            <div class="bookdatas">
                <h5>Title:</h5>
                <p>{{loading ? "loading..." : resultList.Title }}</p>
            </div>
            <div class="bookdatas">
                <h5>Availability:</h5>
                <p>{{loading ? "loading..." : resultList.Availability }}</p>
            </div>
        </div>
        <div class="flex">
            <div class="updatebutton">
                <!-- This button will Update data in database. -->
                <button class="curser" @click="availablebook">Book Available</button>
            </div>
            <div class="updatebutton">
                <!-- This button will Update data in database. -->
                <button class="curser" @click="missingbook">Book Missing</button>
            </div>
            <div class="updatebutton">
                <!-- This button will Update data in database. -->
                <button class="curser" @click="issuedbook">Book Issued</button>
            </div>
        </div>
    </div>

</template>

<script>
import pb from '../db.js';
export default {
    name: 'scannform',
    components: {
    },
    data() {
        return {
            // Variables used in the template
            barcodeData: '',
            scannedBarcode: '',
            resultList: [],
            bookAvailability: '',
            bookStatus: false,
            loading: false,
        }
    },
    mounted() {
        // To take the input of barcode entries
        document.addEventListener('input', this.onBarcodeDetected)
    },
    methods: {
        // Function to take the input of barcode entries
        onBarcodeDetected(InputEvent) {
            if (InputEvent.target.tagName === 'INPUT') {
                console.log(this.barcodeData);
            }
            this.scannedBarcode = this.barcodeData
            this.scannedBarcode.toString();
            console.log(this.scannedBarcode.toString());
        },
        // Function to get the book data from database
        async Getbookdata() {
            try{
                // Data will be get from the match of AccessionNo.
                this.loading = true;
                const record = await pb.collection('Library').getFirstListItem(`AccessionNo = '${this.scannedBarcode}'`);
                this.resultList = record;
                this.barcodeData = '';
            } catch (error) {
                alert(`AccessionNo '${this.scannedBarcode}' Is Not Available In Database`);
            } finally{
                this.loading = false;
            }
        },
        // Function to update the book data in database
        async updatedata() {
            try {
                this.loading = true;
                this.resultList.Status = this.bookStatus; //change data in local page
                this.resultList.Availability = this.bookAvailability;//change data in local page
                await pb.collection('Library').update(`${this.resultList.id}`, this.resultList);//change data in database
                console.log(`The id updated is ${this.resultList.id}`)
            } catch (error) {
                console.error('Error updating item:', error);
            } finally{
                this.loading = false;
            }
        },
        // Function to update the book data available in database
        availablebook(){
            this.bookAvailability = 'Available';
            this.bookStatus = true;
            this.updatedata();
        },
        // Function to update the book data missing in database
        missingbook() {
            this.bookAvailability = 'Missing';
            this.bookStatus = false;
            this.updatedata();
        },
        // Function to update the book data issued in database
        issuedbook() {
            this.bookAvailability = 'Issued';
            this.bookStatus = true;
            this.updatedata();
        },
    }
}
//http://127.0.0.1:8090/api/collections/test/records
// axios.get(`http://127.0.0.1:8090/api/collections/test/records`)
// .then(({data}) => {
//     this.resultList = data.items;
// })
// console.log(resultList);
</script>

<style scoped>
.barcodeinput {
    text-align: center;
}

input , button {
    border: solid 1px black;
    height: 40px;
    margin: 12px;
    font-size: 16px;
    border-radius: 4px;
}

input{width: 40%;}

h5 {
    width: 130px;
    background-color: rgb(207, 233, 255);
    padding: 8px;
}

.updatebutton{
    text-align: center;
}

.flex{
    display: flex;
    /* text-align: center; */
    justify-content: center;
    flex-wrap: wrap;
}

</style>