import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./pages/Home";
import UseState from "./pages/UseState";
import UseEffect from "./pages/UseEffect";
import UseRef from "./pages/UseRef";
import UseMemo from "./pages/UseMemo";
import UseCallback from "./pages/UseCallback";
import UseReducer from "./pages/UseReducer";
import UseContext from "./pages/UseContext";
import { useState } from "react";

function App() {
    const [mode, setMode] = useState("dark");

    const theme = createTheme({
        palette: {
            mode: mode,
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/state" element={<UseState />} />
                    <Route
                        path="/effect"
                        element={<UseEffect setThemeMode={setMode} />}
                    />
                    <Route path="/ref" element={<UseRef />} />
                    <Route path="/memo" element={<UseMemo />} />
                    <Route path="/callback" element={<UseCallback />} />
                    <Route path="/reducer" element={<UseReducer />} />
                    <Route path="/context" element={<UseContext />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
