// export interface Table {
//   flatten(): Array<any>;
// }

class TableHeaders {
  header;
  lookupValue;
  display;

  constructor({ header, lookupValue, display = true }) {
    this.header = header;
    this.lookupValue = lookupValue;
    this.display = display;
  }
}

export class Equipment {
  id;
  areaDetails;
  equipmentDetails;
  //   InpsectionDetails: InpsectionDetails;
  //   dbEvents: DBEvents;

  //   constructor({
  //     id,
  //     areaDetails,
  //     equipmentDetails
  //   }: {
  //     id: string;
  //     areaDetails: AreaDetails;
  //     equipmentDetails: EquipmentDetails;
  //   }) {
  //     this.id = id;
  //     this.areaDetails = areaDetails;
  //     this.equipmentDetails = equipmentDetails;
  //   }

  toObject() {
    const obj = Object.assign({});
    for (const [key, value] of Object.entries(this)) {
      if (typeof value == "object") {
        obj[key] = value.toObject();
      } else {
        obj[key] = value;
      }
    }
    return obj;
  }

  static headers() {
    const headers = [];

    // for the main one
    headers.push(
      new TableHeaders({
        header: "ID",
        lookupValue: "id",
        display: true
      })
    );

    return headers;
  }
}

// class AreaDetails {
//   tag;
//   area;
//   system;
//   description;
//   siteID;
//   pid;
//   calculation;
//   layout;

//   constructor({
//     tag,
//     area,
//     system,
//     description,
//     siteID,
//     pid,
//     calculation,
//     layout
//   }: {
//     tag: string;
//     area: string;
//     system: string;
//     description: string;
//     siteID: string;
//     pid: string;
//     calculation: string;
//     layout: string;
//   }) {
//     this.tag = tag;
//     this.area = area;
//     this.system = system;
//     this.description = description;
//     this.siteID = siteID;
//     this.pid = pid;
//     this.calculation = calculation;
//     this.layout = layout;
//   }
// }

// class EquipmentDetails {
//   make;
//   model;
//   description;
//   serialNumber;
//   protection;
//   gasGroup;
//   tempClass;
//   equipmentIP;
//   cad;
//   mdp;
//   flc;
//   designTerminals;
//   comments;
//   barriers;
//   fittings;

//   constructor({
//     make,
//     model,
//     description,
//     serialNumber,
//     protection,
//     gasGroup,
//     tempClass,
//     equipmentIP,
//     cad,
//     mdp,
//     flc,
//     designTerminals,
//     comments,
//     barriers,
//     fittings
//   }: {
//     make: string;
//     model: string;
//     description: string;
//     serialNumber: string;
//     protection: string;
//     gasGroup: string;
//     tempClass: string;
//     equipmentIP: string;
//     cad: string;
//     mdp: string;
//     flc: string;
//     designTerminals: string;
//     comments: string;
//     barriers: Array<Barrier>;
//     fittings: Array<Fitting>;
//   }) {
//     this.make = make;
//     this.model = model;
//     this.description = description;
//     this.serialNumber = serialNumber;
//     this.protection = protection;
//     this.gasGroup = gasGroup;
//     this.tempClass = tempClass;
//     this.equipmentIP = equipmentIP;
//     this.cad = cad;
//     this.mdp = mdp;
//     this.flc = flc;
//     this.designTerminals = designTerminals;
//     this.comments = comments;
//     this.barriers = barriers;
//     this.fittings = fittings;
//   }
// }

// class Fitting {}

// class Barrier {}

// class InpsectionDetails {
//   "inspectionIDs": string;
//   "defectsIDs": string;
//   "nextInspectionDue": string;
// }

export class DBEvents {
  createdAt;
  updatedAt;
  removedAt;
  renewedAt;
  lastOnline;
}

// TODO make a better formula for this
export const headers = [
  {
    header: "ID",
    value: "id",
    display: true
  },
  {
    header: "Tag",
    value: "areaDetails.tag",
    display: true
  },
  {
    header: "Area",
    value: "areaDetails.area",
    display: true
  },
  {
    header: "System",
    value: "areaDetails.system",
    display: true
  },
  {
    header: "Area Description",
    value: "areaDetails.description",
    display: true
  },
  {
    header: "Drawings",
    value: "",
    display: true
  },
  {
    header: "Make",
    value: "equipmentDetails.make",
    display: true
  },
  {
    header: "Model",
    value: "equipmentDetails.model",
    display: true
  },
  {
    header: "Serial",
    value: "equipmentDetails.serialNumber",
    display: true
  },
  {
    header: "Protection",
    value: "equipmentDetails.protection",
    display: true
  },
  {
    header: "Group",
    value: "equipmentDetails.gasGroup",
    display: true
  },
  {
    header: "Temp Class",
    value: "equipmentDetails.tempClass",
    display: true
  },
  {
    header: "IP",
    value: "equipmentDetails.equipmentIP",
    display: true
  },
  {
    header: "COC",
    value: "equipmentDetails.coc",
    display: true
  },
  {
    header: "Risk Rating",
    value: "equipmentDetails.riskRating",
    display: true
  },
  {
    header: "MDP",
    value: "equipmentDetails.mdp",
    display: true
  },
  {
    header: "Voltage",
    value: "equipmentDetails.voltage",
    display: true
  },
  {
    header: "FLC",
    value: "equipmentDetails.flc",
    display: true
  },
  {
    header: "Design Terminals",
    value: "equipmentDetails.designTerminals",
    display: true
  },
  {
    header: "Classification",
    value: "equipmentDetails.classification",
    display: true
  },
  {
    header: "Comments",
    value: "equipmentDetails.comments",
    display: true
  },
  {
    header: "Barriers",
    value: "equipmentDetails.barriers",
    display: true
  },
  {
    header: "Fittings",
    value: "equipmentDetails.fittings",
    display: true
  },
  {
    header: "Inpsections",
    value: "",
    display: true
  }
];
