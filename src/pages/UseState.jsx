import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Typography,
    Box,
    Button,
    TextField,
    IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const UseState = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                    <IconButton onClick={() => navigate("/")} sx={{ mr: 2 }}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h4" component="h1">
                        useState Hook
                    </Typography>
                </Box>
                <Typography variant="body1" paragraph>
                    useState는 함수형 컴포넌트에서 상태를 관리할 수 있게 해주는
                    Hook입니다.
                </Typography>

                <Box sx={{ mt: 4, mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Counter Example
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
                    <Button
                        variant="contained"
                        onClick={() => setCount(count - 1)}
                    >
                        Decrement
                    </Button>
                </Box>

                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Text Input Example
                    </Typography>
                    <TextField
                        label="Type something"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <Typography variant="body1">You typed: {text}</Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default UseState;
