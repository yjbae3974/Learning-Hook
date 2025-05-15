import { useState, useCallback, memo } from "react";
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

// Child component that receives a callback function
const ChildComponent = memo(({ onClick, name }) => {
    console.log(`👶 [${name}] 자식 컴포넌트 렌더링됨`);
    return (
        <Button variant="contained" onClick={onClick} sx={{ mr: 2 }}>
            {name}
        </Button>
    );
});

const ExpensiveComponent = memo(({ onClick, count, name }) => {
    console.log(`💰 [${name}] 비용이 높은 컴포넌트 렌더링됨`);
    return (
        <Box sx={{ mt: 2 }}>
            <Button variant="contained" onClick={onClick}>
                Increment Count
            </Button>
            <Typography variant="body1" sx={{ mt: 1 }}>
                Count: {count}
            </Typography>
        </Box>
    );
});

const UseCallback = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(0);

    console.log("🏠 부모 컴포넌트 렌더링됨");

    // Regular function (recreated on every render)
    const incrementCount = () => {
        console.log("🔄 [일반] 함수 호출됨");
        setCount((c) => c + 1);
    };

    // Memoized function with useCallback
    const memoizedIncrementCount = useCallback(() => {
        console.log("🔄 [useCallback] 메모이제이션된 함수 호출됨");
        setCount((c) => c + 1);
    }, []);

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                    <IconButton onClick={() => navigate("/")} sx={{ mr: 2 }}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h4" component="h1">
                        useCallback Hook
                    </Typography>
                </Box>
                <Typography variant="body1" paragraph>
                    useCallback은 함수를 메모이제이션하여 불필요한 재생성을
                    방지하는 Hook입니다. 주로 자식 컴포넌트에 함수를 전달할 때
                    사용됩니다.
                </Typography>

                <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        비용이 높은 컴포넌트(Expensive Component)란?
                    </Typography>
                    <Typography variant="body2" paragraph>
                        이 예제에서 사용하는 비용이 높은 컴포넌트는 다음과 같은
                        특징을 가집니다:
                    </Typography>
                    <Typography variant="body2" paragraph>
                        1. memo로 래핑되어 있어 props가 변경될 때만 리렌더링됨
                    </Typography>
                    <Typography variant="body2" paragraph>
                        2. 콘솔에 로그를 출력하여 렌더링되는 시점을 확인
                    </Typography>
                    <Typography variant="body2" paragraph>
                        3. 실제 애플리케이션에서는 다음과 같은 경우가 비용이
                        높은 컴포넌트에 해당합니다:
                    </Typography>
                    <Typography variant="body2" paragraph>
                        - 복잡한 UI를 가진 컴포넌트 - 많은 자식 컴포넌트를 가진
                        컴포넌트 - 무거운 계산을 수행하는 컴포넌트 - 자주
                        업데이트되는 데이터를 표시하는 컴포넌트
                    </Typography>
                </Paper>

                <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        useCallback의 주요 특징
                    </Typography>
                    <Typography variant="body2" paragraph>
                        1. 함수 메모이제이션: 동일한 함수를 재사용하여 불필요한
                        재생성을 방지합니다.
                    </Typography>
                    <Typography variant="body2" paragraph>
                        2. 의존성 배열: 지정된 의존성 값이 변경될 때만 새로운
                        함수를 생성합니다.
                    </Typography>
                    <Typography variant="body2" paragraph>
                        3. 성능 최적화: 자식 컴포넌트의 불필요한 리렌더링을
                        방지합니다.
                    </Typography>
                </Paper>

                <Box sx={{ mt: 4, mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        예제 설명
                    </Typography>
                    <Typography variant="body2" paragraph>
                        이 예제에서는 두 가지 버전의 카운터를 보여줍니다:
                    </Typography>
                    <Typography variant="body2" paragraph>
                        1. 일반 함수를 사용하는 경우: 부모 컴포넌트가 리렌더링될
                        때마다 함수가 재생성되어 자식 컴포넌트도 리렌더링됩니다.
                        콘솔에서 "[일반] 함수 호출됨" 메시지와 함께 자식
                        컴포넌트의 렌더링 로그를 확인할 수 있습니다.
                    </Typography>
                    <Typography variant="body2" paragraph>
                        2. useCallback을 사용하는 경우: 함수가 메모이제이션되어
                        불필요한 리렌더링을 방지합니다. 콘솔에서 "[useCallback]
                        메모이제이션된 함수 호출됨" 메시지를 확인할 수 있습니다.
                    </Typography>
                </Box>

                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Other State (to trigger re-renders)
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => setOtherState((s) => s + 1)}
                        sx={{ mb: 2 }}
                    >
                        Change Other State
                    </Button>
                    <Typography variant="body2" color="text.secondary">
                        Other State: {otherState}
                    </Typography>
                </Box>

                <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
                    <Typography variant="h6" gutterBottom>
                        Without useCallback
                    </Typography>
                    <ExpensiveComponent
                        onClick={incrementCount}
                        count={count}
                        name="일반 함수"
                    />
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 1 }}
                    >
                        이 컴포넌트는 매 렌더링마다 리렌더링됩니다. 콘솔에서
                        "[일반] 함수 호출됨" 메시지와 함께 컴포넌트의 렌더링
                        로그를 확인할 수 있습니다.
                    </Typography>
                </Paper>

                <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                        With useCallback
                    </Typography>
                    <ExpensiveComponent
                        onClick={memoizedIncrementCount}
                        count={count}
                        name="메모이제이션된 함수"
                    />
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 1 }}
                    >
                        이 컴포넌트는 count가 변경될 때만 리렌더링됩니다.
                        콘솔에서 "[useCallback] 메모이제이션된 함수 호출됨"
                        메시지를 확인할 수 있습니다.
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
};

export default UseCallback;
