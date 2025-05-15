import { useReducer } from "react";
import { Container, Typography, Box, Button, TextField } from "@mui/material";

const initialState = {
    count: 0,
    text: "",
};

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 };
        case "decrement":
            return { ...state, count: state.count - 1 };
        case "reset":
            return { ...state, count: 0 };
        case "setText":
            return { ...state, text: action.payload };
        default:
            throw new Error();
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    useReducer Hook
                </Typography>
                <Typography variant="body1" paragraph>
                    useReducer는 복잡한 상태 로직을 관리할 때 사용하는
                    Hook입니다.
                </Typography>

                <Box sx={{ mt: 4, mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Counter Example
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Count: {state.count}
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => dispatch({ type: "increment" })}
                        sx={{ mr: 2 }}
                    >
                        Increment
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => dispatch({ type: "decrement" })}
                        sx={{ mr: 2 }}
                    >
                        Decrement
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => dispatch({ type: "reset" })}
                    >
                        Reset
                    </Button>
                </Box>

                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Text Input Example
                    </Typography>
                    <TextField
                        label="Type something"
                        value={state.text}
                        onChange={(e) =>
                            dispatch({
                                type: "setText",
                                payload: e.target.value,
                            })
                        }
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <Typography variant="body1">
                        You typed: {state.text}
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default UseReducer;
