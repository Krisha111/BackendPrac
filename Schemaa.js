import mongoose from 'mongoose'

const Cluster=new mongoose.Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,
        unique:true
    }
})
export default mongoose.model("Cluster",Cluster)
