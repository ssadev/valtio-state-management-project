import { proxy } from "valtio";
const state = proxy({
  email: null,
  password: null,
  agreed: false,
  formSubmited: false,
});
export { state };
