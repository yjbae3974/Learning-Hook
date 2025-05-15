import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./Pages/Home";
import UseState from "./Pages/UseState";
import UseEffect from "./Pages/UseEffect";
import UseRef from "./Pages/UseRef";
import UseMemo from "./Pages/UseMemo";
import UseCallback from "./Pages/UseCallback";
import UseReducer from "./Pages/UseReducer";
import UseContext from "./Pages/UseContext";
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
