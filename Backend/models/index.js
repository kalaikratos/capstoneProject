const mongoose = require("mongoose");
const uri = "mongodb+srv://kalai:kalai@cluster0.fx3auzt.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";

function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };