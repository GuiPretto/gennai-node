import { OptionsProps, digimentalSchema } from "./interfaces";

import api from "../../api";
import { characterSchema } from "../character/interfaces";
import { crestSchema } from "../crest/interfaces";
import { digimonSchema } from "../digimon/interfaces";

export const getDigimentals = (options?: OptionsProps) =>
  api({
    operationName: "GetDigimentals",
    query: `query GetDigimentals {  
      getDigimentals {
        ${digimentalSchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getDigimentalById = (id: number) =>
  api({
    operationName: "GetDigimentalById",
    query: `query GetDigimentalById($getDigimentalByIdId: Int!) {  
      getDigimentalById(id: $getDigimentalByIdId) {
        ${digimentalSchema}
        digiDestined {
          ${characterSchema}
        }
        digimons {
          ${digimonSchema}
        }
        crest {
          ${crestSchema}
        }
      }
    }`,
    variables: {
      getDigimentalByIdId: id,
    },
  });

export const getDigimentalByName = (name: string) =>
  api({
    operationName: "GetDigimentalByName",
    query: `query GetDigimentalByName($getDigimentalByNameName: String!) {  
      getDigimentalByName(name: $getDigimentalByNameName) {
        ${digimentalSchema}
        digiDestined {
          ${characterSchema}
        }
        digimons {
          ${digimonSchema}
        }
        crest {
          ${crestSchema}
        }
      }
    }`,
    variables: {
      getDigimentalByNameName: name,
    },
  });
