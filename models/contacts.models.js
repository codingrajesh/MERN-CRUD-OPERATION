import mongoose from "mongoose"

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required:true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  city:{
    type: String,
    required:true,
    trim: true,
  }
})

 const Contact = mongoose.model("Contact", contactSchema)

 export default Contact