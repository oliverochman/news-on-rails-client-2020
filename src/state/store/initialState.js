import { NavLink } from "react-router-dom";

const initialState = {
  currentUser: {email: undefined, role: undefined},
  authenticated: false,
  renderLoginForm: false,
}

export default initialState;