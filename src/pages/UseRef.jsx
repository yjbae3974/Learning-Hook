import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Typography,
    Box,
    Button,
    TextField,
    IconButton,
    Paper,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const UseRef = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const inputRef = useRef(null);
    const renderCount = useRef(0);

    useEffect(() => { // 모든 리렌더링 때마다 발생. Mount는 처음 DOM에 추가될 때 한 번만 발생!
        renderCount.current = renderCount.current + 1;
    });

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                    <IconButton onClick={() => navigate("/")} sx={{ mr: 2 }}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h4" component="h1">
                        useRef Hook
                    </Typography>
                </Box>
                <Typography variant="body1" paragraph>
                    useRef는 React의 Hook 중 하나로, DOM 요소에 직접 접근하거나
                    컴포넌트의 렌더링 사이에 값을 유지하고 싶을 때 사용합니다.
                </Typography>

                <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        useRef의 주요 특징
                    </Typography>
                    <Typography variant="body2" paragraph>
                        1. DOM 요소 접근: useRef를 사용하여 특정 DOM 요소에 직접
                        접근할 수 있습니다.
                    </Typography>
                    <Typography variant="body2" paragraph>
                        2. 값 유지: useRef로 생성된 값은 컴포넌트가
                        리렌더링되어도 그대로 유지됩니다.
                    </Typography>
                    <Typography variant="body2" paragraph>
                        3. 변경 감지 없음: useRef의 값이 변경되어도 컴포넌트가
                        리렌더링되지 않습니다.
                    </Typography>
                </Paper>

                <Box sx={{ mt: 4, mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        DOM 요소 접근 예제
                    </Typography>
                    <Typography variant="body2" paragraph>
                        아래 예제에서는 useRef를 사용하여 input 요소에 포커스를
                        맞추는 기능을 구현했습니다.
                    </Typography>
                    <TextField
                        inputRef={inputRef}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label="이름"
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <Button variant="contained" onClick={focusInput}>
                        Input에 포커스
                    </Button>
                </Box>

                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        렌더링 횟수 추적 예제
                    </Typography>
                    <Typography variant="body2" paragraph>
                        useRef는 컴포넌트의 렌더링 횟수를 추적하는데도 사용할 수
                        있습니다. useState와 달리 값이 변경되어도 리렌더링을
                        발생시키지 않습니다.
                    </Typography>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Typography>
                            컴포넌트가 렌더링된 횟수: {renderCount.current}
                        </Typography>
                    </Paper>
                </Box>
            </Box>
        </Container>
    );
};

export default UseRef;
