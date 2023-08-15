const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
    id: 1,
    name: "Nikon D7500 DLSR",
    price: $1000,
    used:false
    },

    {id: 2,
    name: "Conaon PowerShot G7X",
    price: $700,
    used: true,
    },

    {id: 3,
    name: "FufiFlim Instax Mini",
    price: $60,
    used: true,
    },

    {id :4,
    name: "Polaroid Now Instant Film Camera Bundle",
    price: $130,
    used: false,
    },

    {id:5,
    name: "Fujifilm X-S20",
    price: $1300,
    used: true,
    },

    {id:6,
    name: "Canon EOS Rebel T7",
    price: $500,
    used: true,
    },

    {id:7,
    name: "Panasonic Lumix G7",
    price: $600,
    used: false,
    },

    {id:8,
    name: "Nikon Z FC 4K price",
    price: $1000,
    used: true,
    },

    { id:9,
    name: "Canon EOS R5 price",
    price: $3600,
    used: false,
    },

    
    {id:10,
    name: "Fujifilm X-T5",
    price: $2000,
    used: false
    }
)

const Product = mongoose.model("product", productSchema);

module.exports = Product;