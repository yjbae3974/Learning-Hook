import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Typography,
    Box,
    Button,
    IconButton,
    Paper,
    ThemeProvider,
    createTheme,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// 1. Context 생성
const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => {},
});

// 2. Context를 사용하는 자식 컴포넌트들
const ThemeDisplay = () => {
    const { theme } = useContext(ThemeContext);
    useEffect(() => {
        console.log("🎨 ThemeDisplay 컴포넌트 렌더링됨");
    }, [theme]);

    return (
        <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6" gutterBottom>
                현재 테마: {theme}
            </Typography>
            <Typography variant="body2">
                이 컴포넌트는 Context를 통해 테마 정보를 직접 가져옵니다. Props
                drilling 없이도 테마 정보에 접근할 수 있습니다.
            </Typography>
        </Paper>
    );
};

const ThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    useEffect(() => {
        console.log("🔘 ThemeButton 컴포넌트 렌더링됨");
    }, [theme]);

    return (
        <Button
            variant="contained"
            onClick={toggleTheme}
            startIcon={
                theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
            }
        >
            테마 전환
        </Button>
    );
};

const ThemedBox = () => {
    const { theme } = useContext(ThemeContext);
    useEffect(() => {
        console.log("📦 ThemedBox 컴포넌트 렌더링됨");
    }, [theme]);

    return (
        <Paper
            elevation={3}
            sx={{
                p: 3,
                backgroundColor: theme === "dark" ? "#333" : "#fff",
                color: theme === "dark" ? "#fff" : "#000",
                transition: "all 0.3s ease",
            }}
        >
            <Typography variant="body1">
                이 박스는 Context의 테마 값에 따라 스타일이 변경됩니다. 테마가
                변경될 때마다 자동으로 업데이트됩니다.
            </Typography>
        </Paper>
    );
};

const UseContext = () => {
    const navigate = useNavigate();
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        console.log("🏠 부모 컴포넌트 렌더링됨");
    }, []);

    const toggleTheme = () => {
        console.log("🔄 테마 전환 함수 호출됨");
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    // Material-UI 테마 설정
    const muiTheme = createTheme({
        palette: {
            mode: theme,
        },
    });

    return (
        <ThemeProvider theme={muiTheme}>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <Container maxWidth="md">
                    <Box sx={{ mt: 4 }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: 4,
                            }}
                        >
                            <IconButton
                                onClick={() => navigate("/")}
                                sx={{ mr: 2 }}
                            >
                                <ArrowBackIcon />
                            </IconButton>
                            <Typography variant="h4" component="h1">
                                useContext Hook
                            </Typography>
                        </Box>

                        <Typography variant="body1" paragraph>
                            useContext는 React의 Context API를 사용하여 컴포넌트
                            트리 전체에 데이터를 전달할 수 있게 해주는
                            Hook입니다. Props drilling을 방지하고 전역 상태를
                            관리하는 데 유용합니다.
                        </Typography>

                        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
                            <Typography variant="h6" gutterBottom>
                                useContext의 주요 특징
                            </Typography>
                            <Typography variant="body2" paragraph>
                                1. Props Drilling 방지: 중간 컴포넌트들을 거치지
                                않고 필요한 데이터에 직접 접근할 수 있습니다.
                            </Typography>
                            <Typography variant="body2" paragraph>
                                2. 전역 상태 관리: 여러 컴포넌트에서 공유해야
                                하는 상태를 효율적으로 관리할 수 있습니다.
                            </Typography>
                            <Typography variant="body2" paragraph>
                                3. 성능 최적화: Context가 변경될 때만 관련
                                컴포넌트가 리렌더링됩니다.
                            </Typography>
                        </Paper>

                        <Box sx={{ mt: 4, mb: 4 }}>
                            <Typography variant="h6" gutterBottom>
                                예제 설명
                            </Typography>
                            <Typography variant="body2" paragraph>
                                이 예제에서는 테마를 Context로 관리하는 방법을
                                보여줍니다:
                            </Typography>
                            <Typography variant="body2" paragraph>
                                1. ThemeContext 생성: 테마 상태와 전환 함수를
                                제공
                            </Typography>
                            <Typography variant="body2" paragraph>
                                2. Context.Provider로 감싸기: 하위 컴포넌트들이
                                Context에 접근할 수 있도록 함
                            </Typography>
                            <Typography variant="body2" paragraph>
                                3. useContext 사용: 자식 컴포넌트에서 Context
                                값에 직접 접근
                            </Typography>
                        </Box>

                        <Box sx={{ mt: 4 }}>
                            <ThemeButton />
                            <ThemeDisplay />
                            <ThemedBox />
                        </Box>
                    </Box>
                </Container>
            </ThemeContext.Provider>
        </ThemeProvider>
    );
};

export default UseContext;
