//connect node and mongodb using mongoose

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/college1") //yaha par college1 name ka database create kr deg
  .then(() => console.log("connected successful"))
  .catch((err) => console.log(err));

//create Schema
const studentsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mno: {
    type: Number,
    required: true,
  },
  fees: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Student = mongoose.model("Student", studentsSchema); //ye do argument lega:- 1. collection name jo singular hona chahiye   2. Schema name
//model ka kaam hota h collection banana,aur usme documents ko insert krna
//isme 1st argument me hamne collection name Student diya hai lekin ye dtabase me students naam se bna dega

//how to create and insert documents in mongodb using mongoose
//1st method:- modern way
/*
const createStudent=new Student({
    name:"Kamdev",
    mno:123456789,
    fees:true
})
createStudent.save()
*/

//2nd method:- best way
const createStudents = async () => {
  try {
    /* insert one document
    const createStudent = new Student({
      name: "Sonu",
      mno: 123459,
      fees: false,
    });
    */

    //Insert multiple documents
    const createStudent1 = new Student({
      name: "SonuSingh",
      mno: 12478959,
      fees: false,
    });

    const createStudent2 = new Student({
        name: "Saurav",
        mno: 1234100059,
        fees: true,
      });

      const createStudent3 = new Student({
        name: "Prince",
        mno: 1234590000,
        fees: false,
      });
    const studentData = await Student.insertMany([createStudent1,createStudent2,createStudent3])
    console.log(studentData);
} catch (error) {
    console.log(error.message);
  }
};
//createStudents();

//How to Read or Query the documents using mongoose
const readDocuments=async()=>{
    try {
        const result=await Student.find();
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}
readDocuments()