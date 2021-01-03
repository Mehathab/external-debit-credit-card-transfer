import { executeGet } from "../utils/apiUtils";

const api_key = "cce9a6ccce5a6c6df01e048354fdacb3";

export const getCardholderInfo = () =>
  // executeGet(`https://api.parser.name/?api_key=cce9a6ccce5a6c6df01e048354fdacb3&endpoint=generate&country_code=US`);
  executeGet("https://api.github.com/users");
