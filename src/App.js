import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DjDashboard from "./components/admin/dashboard/DjDashboard";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Profile from "./components/user/Profile";
import theme from "./material-ui/theme";
import { RecoilRoot } from "recoil";
import Notification from "./components/common/Notification/Notification";
import { setUpI18n } from "./helpers/setUpHelpers";
import RequestSong from "./components/user/requestSong/RequestSong";

setUpI18n();

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Notification />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/request" element={<RequestSong />} />
            <Route path="/" element={<DjDashboard />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
