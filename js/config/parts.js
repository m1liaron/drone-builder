import { Images } from "../../common/images/images";

const DroneParts = {
    frames: [
        { name: "Mark 4 7\"", price: 12, compatibility: "7\"", image: Images.Frame1 },
        { name: "Mark 4 v2 10\"", price: 20, compatibility: "10\"", image: Images.Frame2}
    ],
    motors: [
        {
            name: "FlashHobby 2807 1300kv + Props HQProp 7x4x3",
            price: 55,
            compatibility: "7\"",
            image: Images.Motor1
        },
        {
            name: "EMAX 2807 1300kv + Props HQProp 7x4x3",
            price: 45,
            compatibility: "7\"",
            image: Images.Motor1
        },
        {
            name: "ReadyToSky 3115 900kv + Props HQ MacroQuad Prop 10x5x3",
            price: 70,
            compatibility: "10\"",
            image: Images.Motor2
        },
        {
            name: "BrotherHobby Tornado 3115 900kv + Props HQ MacroQuad Prop 10x5x3",
            price: 110,
            compatibility: "10\"",
            image: Images.Motor2
        }
    ],
    batteries: [
        { name: "6s2p 8000mAh", price: 60, compatibility: "7\" and 10\"", image: Images.Battery1 },
        { name: "6s3p 12000mAh", price: 90, compatibility: "7\" and 10\"", image: Images.Battery2 }
    ],
    flightControllers: [
        { name: "SpeedyBee V4 55A", price: 50, compatibility: "7\" and 10\"", image: Images.Controller },
        { name: "Mamba F405 MK2", price: 70, compatibility: "7\" and 10\"", image: Images.Controller }
    ],
    cameras: [
        { name: "Caddx Ratel Pro", price: 30, compatibility: "7\" and 10\"", image: Images.Camera  },
        { name: "Foxeer Night Cat 3", price: 40, compatibility: "7\" and 10\"", image: Images.Camera  }
    ],
    videoAntennas: [
        { name: "Rush Cherry 2", price: 10, compatibility: "7\" and 10\"", image: Images.VideoAntenna },
        { name: "SkyZone MushRoom", price: 8, compatibility: "7\" and 10\"", image: Images.VideoAntenna }
    ],
    radioModules: [
        { name: "Bayck ELRS 915mhz", price: 10, compatibility: "7\" and 10\"", image: Images.RadioModule  },
        { name: "HappyModel RX 915mhz", price: 15, compatibility: "7\" and 10\"", image: Images.RadioModule  }
    ]
};


export { DroneParts };