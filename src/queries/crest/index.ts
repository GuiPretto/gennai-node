import { OptionsProps, crestSchema } from "./interfaces";

import { animeSchema } from "../anime/interfaces";
import api from "../../api";
import { characterSchema } from "../character/interfaces";
import { digimentalSchema } from "../digimental/interfaces";

export const getCrests = (options?: OptionsProps) =>
  api({
    operationName: "GetCrests",
    query: `query GetCrests {  
      getCrests {
        ${crestSchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getCrestById = (id: number) =>
  api({
    operationName: "GetCrestById",
    query: `query GetCrestById($getCrestByIdId: Int!) {  
      getCrestById(id: $getCrestByIdId) {
        ${crestSchema}
        digiDestined {
          ${characterSchema}
        }
        animes {
          ${animeSchema}
        }
        digimental {
          ${digimentalSchema}
        }
      }
    }`,
    variables: {
      getCrestByIdId: id,
    },
  });

export const getCrestByName = (name: string) =>
  api({
    operationName: "GetCrestByName",
    query: `query GetCrestByName($getCrestByNameName: String!) {  
      getCrestByName(name: $getCrestByNameName) {
        ${crestSchema}
        digiDestined {
          ${characterSchema}
        }
        animes {
          ${animeSchema}
        }
        digimental {
          ${digimentalSchema}
        }
      }
    }`,
    variables: {
      getCrestByNameName: name,
    },
  });
