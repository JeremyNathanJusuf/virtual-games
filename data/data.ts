// To add JWT Password Authentication
import { State, Room, Character } from "./contracts";

export const characters: Character[] = [
  // Doyle (Updated V1)
  {
    id: "doyle",
    name: "Doyle",
    image: "src.png",
    actions: {
      move: {
        name: "Doyle moves.",
        height: 300,
        width: 300,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686756676/virtual_games/characters/movement/doyleMoving_rdhhi2.gif",
      },
    },
    room: {
      name: "Doyle's Character",
      background: {
        name: "Doyle's Character Background",
        height: 1024,
        width: 1024,
        src: `https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516074/virtual_games/rooms/doyle/doyleroombg_eocjy8.png`,
      },
      clues: {
        spaceID_card: {
          name: "Space ID Card",
          desc: "Home Station: Andromeda",
          width: 485,
          height: 318,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516227/virtual_games/rooms/doyle/id_yzk534.png",
          state: 4,
        },
        music_albums: {
          name: "Music Albums",
          desc: "Music Albums belonging to...",
          width: 485,
          height: 318,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516228/virtual_games/rooms/doyle/album_pbr2bh.png",
          state: 3,
        },
        bloodstained_towel: {
          name: "Blood-stained Towel",
          desc: "Towel stained with blood",
          width: 612,
          height: 408,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516228/virtual_games/rooms/doyle/towel_ysje7j.png",
          state: 4,
        },
      },
      dummy_objects: {
        rug: {
          name: "Blood-stained Rug",
          desc: "What did he do...?",
          width: 1632,
          height: 519,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516228/virtual_games/rooms/doyle/album_pbr2bh.png",
          state: 4,
        },
        clothes: {
          name: "Clothes",
          desc: "Ordinary looking clothes, boring.",
          width: 637,
          height: 327,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516228/virtual_games/rooms/doyle/clothes_ybv5gf.png",
          state: 2,
        },
        luggage: {
          name: "Luggage",
          desc: "Empty luggage",
          width: 398,
          height: 627,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516228/virtual_games/rooms/doyle/luggage_kwyefl.png",
          state: 4,
        },
      },
    },
  },
  // Carmen (Updated V1)
  {
    id: "carmen",
    name: "Carmen",
    image: "src.png",
    actions: {
      move: {
        name: "Carmen moves.",
        height: 300,
        width: 300,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686756674/virtual_games/characters/movement/camenMoving_ij1zy2.gif",
      },
    },
    room: {
      name: "Carmen's Character",
      background: {
        name: "Carmen's Character Background",
        height: 1024,
        width: 1024,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680853525/virtual_games/rooms/carmen/carmenbg_nk8x4n.png",
      },
      clues: {
        master_key: {
          name: "Master Key",
          desc: "Seems like the key to the Master Character",
          width: 348,
          height: 306,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680853516/virtual_games/rooms/carmen/master-key_uunebr.png",
          state: 4,
        },
        mail: {
          name: "Invitation Letter",
          desc: "Sent from Planet Earth",
          width: 348,
          height: 306,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680853517/virtual_games/rooms/carmen/mail_ks6fyi.png",
          state: 4,
        },
      },
      dummy_objects: {
        clothespin: {
          name: "Clothespin",
          desc: "Oddly familiar clothespin",
          width: 230,
          height: 219,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680853516/virtual_games/rooms/carmen/clothspin_hzfkhg.png",
          state: 4,
        },
      },
    },
  },
  // Seraphine (Updated V1)
  {
    id: "seraphine",
    name: "Seraphine",
    image: "src.png",
    actions: {
      move: {
        name: "Seraphine moves.",
        height: 300,
        width: 300,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686756675/virtual_games/characters/movement/seraphineMoving_axmd0i.gif",
      },
    },
    room: {
      name: "Seraphine Character",
      background: {
        name: "Seraphine's Character Background",
        height: 1024,
        width: 1024,
        src: `https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680527564/virtual_games/rooms/seraphine/background_s71lfy.png`,
      },
      clues: {
        lipstick: {
          name: "Seraphine's Lipstick",
          desc: "On the dressing table, looks familiar.",
          width: 225,
          height: 225,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680527556/virtual_games/rooms/seraphine/lipstick_zhpyid.png",
          state: 2,
        },
      },
      dummy_objects: {
        teddybear: {
          name: "Teddy Bear",
          desc: "Contrary to popular belief, man's best friend.",
          width: 360,
          height: 540,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680527557/virtual_games/rooms/seraphine/teddybear_owi8x6.png",
          state: 4,
        },
        camera: {
          name: "Camera",
          desc: "Wow! DSLR Camera!",
          width: 500,
          height: 500,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680527557/virtual_games/rooms/seraphine/camera_tpymff.png",
          state: 2,
        },
        jewelrybox: {
          name: "Jewelry Box",
          desc: "Looks expensive! All these precious jewelry...",
          width: 825,
          height: 590,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680527557/virtual_games/rooms/seraphine/jewelrybox_oi31xq.png",
          state: 4,
        },
      },
    },
  },
  // Cooper (Updated V1)
  {
    id: "cooper",
    name: "Cooper",
    image: "src.png",
    actions: {
      move: {
        name: "Cooper moves.",
        height: 300,
        width: 300,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686756669/virtual_games/characters/movement/cooperMoving_bd2mcd.gif",
      },
      kill: {
        name: "Cooper kills.",
        height: 300,
        width: 300,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686756229/virtual_games/characters/actions/cooperKill_i0w3x3.gif",
      },
    },
    room: {
      name: "Cooper's Character",
      background: {
        name: "Cooper's Character Background",
        height: 1024,
        width: 1024,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680860699/virtual_games/rooms/cooper/background_iqjcqz.png",
      },
      clues: {},
      dummy_objects: {
        newspaper: {
          name: "Newspaper",
          desc: "Pile of newspapers",
          width: 523,
          height: 228,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680860694/virtual_games/rooms/cooper/newspaper_nikarg.png",
          state: 4,
        },
        coffee_machine: {
          name: "Coffee Machine",
          desc: "Fine-looking coffee machine",
          width: 341,
          height: 218,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680860694/virtual_games/rooms/cooper/coffeemachine_gcwlqv.png",
          state: 3,
        },
        luggage: {
          name: "Luggage",
          desc: "Cooper's Luggage",
          width: 551,
          height: 453,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680860693/virtual_games/rooms/cooper/luggage_ek0ycq.png",
          state: 3,
        },
        spaceID_card: {
          name: "Space ID Card",
          desc: "Home Station: Earth",
          width: 608,
          height: 254,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680860693/virtual_games/rooms/cooper/id_ybs5kj.png",
          state: 4,
        },
      },
    },
  },
  // Romily (Updated V1)
  {
    id: "romily",
    name: "Romily",
    image: "src.png",
    actions: {
      move: {
        name: "Romily moves.",
        height: 300,
        width: 300,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686756676/virtual_games/characters/movement/romillyMoving_qkypcz.gif",
      },
    },
    room: {
      name: "Romily's Character",
      background: {
        name: "Romily's Character Background",
        height: 1024,
        width: 1024,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680861949/virtual_games/rooms/romily/background_zndzxj.png",
      },
      clues: {},
      dummy_objects: {
        basketball: {
          name: "Basketball",
          desc: "Galaxy Basketball",
          width: 501,
          height: 498,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680861945/virtual_games/rooms/romily/basketball_yrwg4k.png",
          state: 3,
        },
        clothes: {
          name: "Clothes",
          desc: "Pile of boring clothes",
          width: 637,
          height: 392,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680861944/virtual_games/rooms/romily/clothes_kig0x8.png",
          state: 3,
        },
        towel: {
          name: "Blood-stained Towel",
          desc: "Blood stained towel",
          width: 612,
          height: 408,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680861943/virtual_games/rooms/romily/towel_wkxqn4.png",
          state: 4,
        },
        dumbbell: {
          name: "Dumbbells",
          desc: "30kg dumbbells",
          width: 428,
          height: 584,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680861944/virtual_games/rooms/romily/dumbbell_prijmb.png",
          state: 3,
        },
        punchingbag: {
          name: "Punching Bag",
          desc: "30kg dumbbells",
          width: 325,
          height: 483,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680861944/virtual_games/rooms/romily/punching-bag_p2d8yl.png",
          state: 4,
        },
      },
    },
  },
  // Maan (Updated V1)
  {
    id: "maan",
    name: "Maan",
    image: "src.png",
    actions: {
      move: {
        name: "Maan moves.",
        height: 300,
        width: 300,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686756676/virtual_games/characters/movement/mannMoving_el5wuc.gif",
      },
    },
    room: {
      name: "Maan's Character",
      background: {
        name: "Maan's Character Background",
        height: 1024,
        width: 1024,
        src: `https://res.cloudinary.com/dbkuv7xiw/image/upload/v1681870723/virtual_games/rooms/maan/background_sbrqpu.png`,
      },
      clues: {},
      dummy_objects: {
        spacesword: {
          name: "Space Sword",
          desc: "Extra edgy sword, definitely capable of killing someone.",
          width: 459,
          height: 544,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1681870716/virtual_games/rooms/maan/spacesword_bxyqiw.png",
          state: 5,
        },
      },
    },
  },
  // Brand (Updated V1)
  {
    id: "brand",
    name: "Brand",
    image: "src.png",
    actions: {
      move: {
        name: "Brand moves.",
        height: 300,
        width: 300,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686756675/virtual_games/characters/movement/brandMoving_usbnrh.gif",
      },
    },
    room: {
      name: "Brand's Character",
      background: {
        name: "Brand's Character Background",
        height: 1024,
        width: 1024,
        src: `https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684157090/virtual_games/rooms/brand/brandbg_lq1ogi.png`,
      },
      clues: {
        galaxy_phone: {
          name: "Galaxy Phone",
          desc:
            "Message to doctor at 930pm:\n" +
            "Hey, I am feeling unwell but I can’t find you at your clinic.\n" +
            "Where are you?\n",
          width: 1024,
          height: 1024,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684157088/virtual_games/rooms/brand/galaxy-phone_xvefqp.png",
          state: 5,
        },
      },
      dummy_objects: {},
    },
  },
  // Knight (Updated V1)
  {
    id: "knight",
    name: "Knight",
    image: "src.png",
    actions: {
      move: {
        name: "Knight moves.",
        height: 300,
        width: 300,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686756676/virtual_games/characters/movement/knightMoving_ojyv3i.gif",
      },
    },
    room: {
      name: "Knight's Character",
      background: {
        name: "Maan's Character Background",
        height: 1024,
        width: 1024,
        src: `https://res.cloudinary.com/dbkuv7xiw/image/upload/v1681870723/virtual_games/rooms/maan/background_sbrqpu.png`,
      },
      clues: {},
      dummy_objects: {},
    },
  },
  // Princess White (Updated V1)
  {
    id: "princess_white",
    name: "Princess White",
    image: "src.png",
    actions: {
      move: {
        name: "Princess White moves.",
        height: 300,
        width: 300,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686756676/virtual_games/characters/movement/princessMoving_o75czo.gif",
      },
    },
    room: {
      name: "Princess White's Character",
      background: {
        name: "Princess White's Character Background",
        height: 952,
        width: 952,
        src: `https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684160197/virtual_games/rooms/princesswhite/background_ytuxli.png`,
      },
      clues: {
        map: {
          name: "Map of Infinity Stones",
          desc: "Map that contains locations of infinity stones",
          width: 605,
          height: 575,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684160196/virtual_games/rooms/princesswhite/infinity-stones-map_ho4saw.png",
          state: 2,
        },
        safe: {
          name: "Empty Safe",
          desc: "Tesseract had been stolen!",
          width: 276,
          height: 210,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684160196/virtual_games/rooms/princesswhite/empty-safe_zzcxjz.png",
          state: 2,
        },
      },
      dummy_objects: {
        door: {
          name: "Connecting Door",
          desc: "Connecting door to Dressing Room",
          width: 86,
          height: 493,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684160195/virtual_games/rooms/princesswhite/connecting-door_jjo8al.png",
          state: 2,
        },
      },
    },
  },
];

export const rooms: Room[] = [
  // Hallway (Updated V1)
  {
    id: "hallway",
    name: "Hallway",
    background: {
      name: "Hallway Background",
      height: 1024,
      width: 1024,
      src: `https://res.cloudinary.com/dbkuv7xiw/image/upload/v1681871724/virtual_games/rooms/hallway/hallway-spaceship_afeimt.png`,
    },
    clues: {
      portrait: {
        name: "Portrait of Siblings",
        desc: "Interesting...",
        width: 449,
        height: 444,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1681871718/virtual_games/rooms/hallway/perspective-sibling-photo_qlwolu.png",
        state: 4,
      },
    },
    dummy_objects: {
      spacesword: {
        name: "Space Sword",
        desc: "Extra edgy sword, with extra pointy tip.",
        width: 459,
        height: 544,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1681870716/virtual_games/rooms/maan/spacesword_bxyqiw.png",
        state: 4,
      },
    },
    npc: {},
  },

  // Captain Character (Updated V1)
  {
    id: "captain",
    name: "Captain's Room",
    background: {
      name: "Captain Character's Background",
      height: 952,
      width: 952,
      src: `https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684158382/virtual_games/rooms/captain/background_pvyaxb.png`,
    },
    clues: {
      music_albums: {
        name: "Music Albums",
        desc: "Seraphine's album seems to be missing from this bunch.",
        width: 618,
        height: 404,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684158381/virtual_games/rooms/captain/musicalbums_rc95qi.png",
        state: 3,
      },
      guestbook: {
        name: "Space Guest Book",
        desc: "Contains a guest signed in as 'Sibling', what could that mean?",
        width: 690,
        height: 361,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684158380/virtual_games/rooms/captain/guestbook_l1nqfu.png",
        state: 4,
      },
      note: {
        name: "Debt Note",
        desc: "Debt Note of Princess White owing 500,000 gold",
        width: 771,
        height: 324,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684158381/virtual_games/rooms/captain/note_zjinls.png",
        state: 3,
      },
      lipstick: {
        name: "Lipstick",
        desc: "Found lying next to the dead body!",
        width: 225,
        height: 225,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684158380/virtual_games/rooms/captain/lipstick_upwiwx.png",
        state: 3,
      },
      blood_letter: {
        name: "Bloody Letters",
        desc: "Seems like blood writings... is that 'CW'?",
        width: 332,
        height: 208,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684158380/virtual_games/rooms/captain/bloodletter_ykqiff.png",
        state: 3,
      },
      broken_watch: {
        name: "Broken Digital",
        desc: "Broken digital watch stopped at 31 Dec 2022, 1 day before d-day...",
        width: 500,
        height: 500,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684158380/virtual_games/rooms/captain/brokenwatch_qm3oec.png",
        state: 3,
      },
      spaceguns: {
        name: "Space Guns",
        desc: "Space Guns owned by each of the heroes, except Seraphine..?",
        width: 600,
        height: 416,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684158381/virtual_games/rooms/captain/spaceguns_doavma.png",
        state: 3,
      },
    },
    dummy_objects: {},
    npc: {},
  },

  // Clinic (Updated V1)
  {
    id: "clinic",
    name: "Clinic",
    background: {
      name: "Clinic Background",
      height: 1024,
      width: 1024,
      src: "",
    },
    dummy_objects: {},
    clues: {},
    npc: {
      doctor: {
        name: "Doctor",
        desc: "The doctor of the ship",
        width: 493,
        height: 506,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684159430/virtual_games/rooms/clinic/doctor_gtqzu6.png",
        state: 2,
      },
    },
  },

  // Dressing Room (Updated V1)
  {
    id: "dressing_room",
    name: "Dressing Room",
    background: {
      name: "Dressing Room Background",
      height: 1024,
      width: 1024,
      src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684159872/virtual_games/rooms/dressing/background_h2vgb5.png",
    },
    clues: {
      lipstick: {
        name: "Lipstick",
        desc: "Lipstick",
        width: 225,
        height: 225,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684159870/virtual_games/rooms/dressing/lipstick_wx9myl.png",
        state: 2,
      },
      door: {
        name: "Connecting door",
        desc: "Connecting door to Princess Room",
        width: 225,
        height: 225,
        src: "",
        state: 2,
      },
    },
    dummy_objects: {},
    npc: {},
  },

  // Control Room (Updated V1)
  {
    id: "control_room",
    name: "Control Room",
    background: {
      name: "Control Room Background",
      height: 1024,
      width: 1024,
      src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754178/virtual_games/rooms/control/background_zze5kw.png",
    },
    clues: {},
    dummy_objects: {
      computer: {
        name: "Space Computer",
        desc: "Shows a footage of Doyle entering Princess White's room through the dressing room.",
        width: 113,
        height: 78,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754177/virtual_games/rooms/control/security-computer_tbe11m.png",
        state: 2,
      },
    },
    npc: {},
  },

  // Kitchen (Updated V1)
  {
    id: "kitchen",
    name: "Kitchen",
    background: {
      name: "Kitchen Background",
      height: 1024,
      width: 1024,
      src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754638/virtual_games/rooms/kitchen/background_xzed8m.png",
    },
    clues: {
      apron: {
        name: "Blood Stained Apron",
        desc: "Apron with bloody marks, I wonder what happened...?",
        width: 390,
        height: 280,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754637/virtual_games/rooms/kitchen/blood-stained-apron_sxqgkx.png",
        state: 5,
      },
      knife: {
        name: "Blood Stained Knife",
        desc: "What blood could this be.., maybe I'm just thinking too much...",
        width: 612,
        height: 408,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754636/virtual_games/rooms/kitchen/blood-stained-knife_haxjwc.png",
        state: 5,
      },
      meat: {
        name: "Blood Stained Meat",
        desc: "Poor cows...",
        width: 246,
        height: 205,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754636/virtual_games/rooms/kitchen/blood-stained-meat_r3tsx2.png",
        state: 5,
      },
    },
    dummy_objects: {},
    npc: {},
  },

  // Storage Character (Updated V1)
  {
    id: "storage_room",
    name: "Storage Room",
    background: {
      name: "Storage Character Background",
      height: 952,
      width: 952,
      src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754969/virtual_games/rooms/storage/background_notct1.png",
    },
    clues: {
      tesseract: {
        name: "Tesseract",
        desc: "Woah! It's the Tesseract that Princess White has been looking for!",
        width: 275,
        height: 183,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754968/virtual_games/rooms/storage/tesseract_offmfd.png",
        state: 5,
      },
      doctorphone: {
        name: "Doctor Galaxy Phone",
        desc: "This is the doctor's phone! Let's take a look.",
        width: 666,
        height: 375,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754967/virtual_games/rooms/storage/doctor-phone_chdhui.png",
        state: 5,
      },
      blood_clothpin: {
        name: "Blood Stained Clothpin",
        desc: "Wait... this is rather familiar..?",
        width: 230,
        height: 219,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754967/virtual_games/rooms/storage/blood-stained-clothspin_p6wpjh.png",
        state: 5,
      },
      cloth: {
        name: "Ordinary Cloth",
        desc: "Just an ordinary cloth, or is it?",
        width: 300,
        height: 249,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754967/virtual_games/rooms/storage/cloth_xwxxb4.png",
        state: 5,
      },
    },
    dummy_objects: {
      screwdriver: {
        name: "Screwdriver",
        desc: "Could be useful, I wonder what its for",
        width: 556,
        height: 448,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754968/virtual_games/rooms/storage/screwdriver_ay4app.png",
        state: 2,
      },
      mopbucket: {
        name: "Mop and Bucket",
        desc: "Its a mop and bucket, what are you expecting.",
        width: 360,
        height: 493,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754967/virtual_games/rooms/storage/mop-bucket_eolt4b.png",
        state: 2,
      },
    },
    npc: {
      dead_doctor: {
        name: "Dead Doctor",
        desc: "Holy Crap, what happened to him!",
        width: 474,
        height: 526,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754968/virtual_games/rooms/storage/dead-doctor_xhebpv.png",
        state: 5,
      },
    },
  },
];

export const scenes = [
  // Group 1 (To Update)
  {
    id: "group1",
    name: "Group 1",
    // Start Scene
    start: {
      time: "10:00p.m.",
      context: {
        text: "",
      },
      narrations: [
        {
          id: "",
          text: "",
        },
        {
          id: "",
          text: "",
        },
      ],
    },
  },

  // Group 2 (To Update)
  {
    id: "group2",
    name: "Group 2",
    // Start Scene
    start: {
      time: "10:00p.m.",
      context: {
        text: "",
      },
      narrations: [
        {
          id: "",
          text: "",
        },
        {
          id: "",
          text: "",
        },
      ],
    },
  },

  // Knight's Death
  {
    id: "knight_death",
    name: "Knight's Death",
    // Start Scene
    start: {
      time: "8:00p.m.",
      context: {
        text: "The 7 heroes headed over to the Knight’s room to find out more from the knight.",
      },
      narrations: [
        {
          id: "brand",
          text: "There is 1 more person on this spaceship whom we have not interrogated, the Knight!",
        },
        {
          id: "mann",
          text: "Yes, he is an important person in the spaceship as he holds the master key to Princess White’s room as well.",
        },
      ],
      interactions: [
        {
          scream: {
            text: " ... ",
            src: "src",
          },
        },
      ],
    },
    // Knight Character Scene
    knight_room: {
      time: "8:15p.m.",
      context: {
        text: "Upon reaching the knight’s room, the heroes were shocked by the sight in front of them! Click on items in the room to collect hints.",
        hints: "You have collected all the hints from the knight’s room.",
        end_text:
          "The 4 heroes started looking up and down for the lost master key.",
      },
      narration: [
        {
          id: "seraphine",
          text: "I looked everywhere, but I can't seem to find knight’s master key.",
        },
        {
          id: "mann",
          text: "I couldn’t find it too, where can it be?",
        },
        {
          id: "cooper",
          text: "Let’s look for it around the spaceship.",
        },
      ],
    },
    // Carmen Character Scene
    carmen_room: {
      time: "9:00p.m.",
      context: {
        text: "NA",
      },
      narration: [
        {
          id: "seraphine",
          text: "We found the master key!",
        },
        {
          id: "cooper",
          text: "Well, Carmen, this seems suspicious….",
        },
        {
          id: "mann",
          text: "Hmm, whose hairpin is that?",
        },
      ],
    },
  },

  // Doctor's Death(To Update)
  {
    id: "doctor_death",
    name: "Doctor's Death",
    // Start Scene
    start: {
      time: "10:00p.m.",
      context: {
        text: "",
      },
      narrations: [
        {
          id: "",
          text: "",
        },
        {
          id: "",
          text: "",
        },
      ],
    },
  },
];

export const transitions = [
  // Prologue
  {
    id: "prologue",
    name: "Prologue",
    bg: "src.png",
    narrations: [
      {
        id: "",
        text: "",
      },
      {
        id: "",
        text: "",
      },
      {
        id: "",
        text: "",
      },
    ],
    animations: {
      shake: {
        src: "src",
        text: "...",
      },
    },
  },

  // Start
  {
    id: "starting",
    name: "Starting Scene",
    bg: "src.png",
    narrations: [
      {
        id: "",
        text: "",
      },
      {
        id: "",
        text: "",
      },
      {
        id: "",
        text: "",
      },
    ],
    animations: {
      shake: {
        src: "src",
        text: "...",
      },
    },
  },

  // Ending
  {
    id: "ending",
    name: "Ending Scene",
    bg: "src.png",
    narrations: [
      {
        id: "",
        text: "",
      },
      {
        id: "",
        text: "",
      },
      {
        id: "",
        text: "",
      },
    ],
    animations: {
      shake: {
        src: "src",
        text: "...",
      },
    },
  },
];
export const states: State[] = [
  {
    stateID: 1,
    name: "introduction",
    currentTime: "2023-01-01T19:00:00Z",
  },
  {
    stateID: 2,
    name: "investigation",
    currentTime: "2023-01-01T19:30:00Z",
  },
  {
    stateID: 3,
    name: "captain",
    currentTime: "2023-01-01T20:00:00Z",
  },
  {
    stateID: 4,
    name: "suspicions",
    currentTime: "2023-01-01T21:00:00Z",
  },
  {
    stateID: 5,
    name: "deadDoctor",
    currentTime: "2023-01-01T22:00:00Z",
  },
  {
    stateID: 6,
    name: "confrontation",
    currentTime: "2023-01-01T22:30:00Z",
  },
  {
    stateID: 7,
    name: "guess",
    currentTime: "2023-01-01T23:00:00Z",
  },
  {
    stateID: 8,
    name: "ending",
    currentTime: "2023-01-02T00:00:00Z",
  },
];