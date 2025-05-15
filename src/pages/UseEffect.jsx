import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Typography,
    Box,
    Button,
    IconButton,
    Paper,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const UseEffect = ({ setThemeMode }) => {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        console.log("Component mounted or count changed");
        document.title = `Count: ${count}`;

        return () => {
            console.log("Cleanup function called");
        };
    }, [count]);

    useEffect(() => {
        if (isDark) {
            setThemeMode("dark");
        } else {
            setThemeMode("light");
        }
    }, [isDark]);

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                    <IconButton onClick={() => navigate("/")} sx={{ mr: 2 }}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h4" component="h1">
                        useEffect Hook
                    </Typography>
                </Box>
                <Typography variant="body1" paragraph>
                    useEffect는 컴포넌트의 부수 효과(side effects)를 처리하는
                    Hook입니다.
                </Typography>

                <Box sx={{ mt: 4, mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Count Example (with document.title update)
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Current Count: {count}
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => setCount(count + 1)}
                        sx={{ mr: 2 }}
                    >
                        Increment
                    </Button>
                </Box>

                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Theme Toggle Example
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => setIsDark(!isDark)}
                    >
                        Toggle Theme
                    </Button>
                    <Paper
                        elevation={3}
                        sx={{
                            mt: 2,
                            p: 2,
                            bgcolor: "background.paper",
                        }}
                    >
                        <Typography>
                            This box changes color based on the theme state
                        </Typography>
                    </Paper>
                </Box>
            </Box>
        </Container>
    );
};

export default UseEffect;
