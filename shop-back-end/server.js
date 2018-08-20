const express = require ("express");
const app = express();
const cors = require ("cors");
const bodyParser = require ("body-parser");
const port = 8080;

let shoppingCart = []
let messages = []

app.use(cors());
app.use(bodyParser.json());

app.post("/cart", (req, res) => {
    let newItem = req.body
    shoppingCart.push(newItem)
})

app.get("/cart", (req, res) => {
    res.send(shoppingCart)
})

app.post("/contact", (req, res) => {
    let message = req.body
    messages.push(message)
})

//just so you can see it work: http://localhost:8080
app.get("/contact", (req, res) => {
    res.send(messages)
})

app.get("/", (req, res) => {
    res.json({
        yarn: [
            {title:"Madelinetosh 'Tosh Vintage'", 
            type: "yarn",
            id:"Tosh01",
            description:"100g hank of 100% superwash merino wool.", 
            price:24.00, 
            weight:"Worsted", 
            fibre:"Merino",
            mainImage:"/images/toshVintage.jpg",
            variant: [
                {id:1001, name: "Antique Moonstone", image:"/images/toshVintageAntiqueMoonstone.jpg"},
                {id:1002, name: "Blind Love", image:"/images/toshVintageBlindLove.jpg"},
                {id:1003, name: "Brick Dust", image:"/images/toshVintageBrickDust.jpg"},
                {id:1004, name: "Daenerys", image:"/images/toshVintageDaenerys.jpg"},
                {id:1005, name: "WhiskeyBarrel", image:"/images/toshVintageWhiskeyBarrel.jpg"}
            ],
            },
            {title:"Malabrigo 'Mecha'", 
            type: "yarn",
            id:"Malabrigo01",
            description:"100g hank of single-ply 100% superwash merino wool.", 
            price:15.00, 
            weight:"Bulky", 
            fibre:"Merino",
            mainImage:"/images/malabrigoMecha.jpg",
            variant: [
                {id:2001, name: "Candombe", image:"/images/malabrigoMechaCandombe.jpg"},
                {id:2002, name: "Hojas", image:"/images/malabrigoMechaHojas.jpg"},
                {id:2003, name: "Pocion", image:"/images/malabrigoMechaPocion.jpg"},
                {id:2004, name: "Whales Road", image:"/images/malabrigoMechaWhalesRoad.jpg"},
            ],
            },
            {title:"Drops 'Lace'",
            type: "yarn",
            id: "Drops01",
            description:"50g skein of 70% alpaca and 30% mulberry silk.", 
            price:9.00, 
            weight:"Lace", 
            fibre:"Alpaca",
            mainImage:"/images/dropsLace.jpg",
            variant: [
                {id:3001, name: "Ice Blue", image:"/images/dropsLaceIceBlue.jpg"},
                {id:3002, name: "Light Grey Green", image:"/images/dropsLaceLightGreyGreen.jpg"},
                {id:3003, name: "Light Grey Mix", image:"/images/dropsLaceLightGreyMix.jpg"},
                {id:3004, name: "Royal Blue", image:"/images/dropsLaceRoyalBlue.jpg"},
            ],
            },
        ],
        needles: [
            {title: "Susan Bates 14in Needles",
            type:"needles",
            id:"Bates01",
            description: "14in metal needles, single-points",
            price: "12",
            material: "Metal",
            mainImage:"/images/susanBatesMainImage.jpg",
            variant: [
                {id:1101, name:"US10", image:"/images/susanBatesUS10.jpg"},
                {id:1102, name:"US11", image:"/images/susanBatesUS11.jpg"},
                {id:1103, name:"US13", image:"/images/susanBatesUS13.jpg"},
                {id:1104, name:"US15", image:"/images/susanBatesUS15.jpg"},
            ]},
            {title: "Knitters Pride 'Dreams' Needles",
            type:"needles",
            id:"Pride01",
            description: "Coloured wooden needles, single-points",
            price: "24",
            material: "Wood",
            mainImage:"/images/knittersPrideUS4.jpg",
            variant: [
                {id:2201, name:"US04", image:"/images/knittersPrideUS4.jpg"},
                {id:2202, name:"US05", image:"/images/knittersPrideUS5.jpg"},
                {id:2203, name:"US06", image:"/images/knittersPrideUS6.jpg"},
                {id:2204, name:"US07", image:"/images/knittersPrideUS7.jpg"},
            ]},
        ]
    })
})

app.listen(port, () => {
    console.log("Listening on port " + port)
})