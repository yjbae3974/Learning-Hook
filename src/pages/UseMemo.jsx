import { useState, useMemo } from "react";
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

const UseMemo = () => {
    const navigate = useNavigate();
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    // Expensive calculation
    const expensiveCalculation = (num, isMemoized) => {
        if (isMemoized) {
            console.log("🔄 [useMemo] 계산 중... (메모이제이션된 계산)");
        } else {
            console.log("🔄 [일반] 계산 중... (매 렌더링마다 실행)");
        }
        let result = 0;
        for (let i = 0; i < 1000000; i++) {
            result += num;
        }
        return result;
    };

    // Without useMemo
    const doubleNumber = expensiveCalculation(number, false);

    // With useMemo
    const memoizedDoubleNumber = useMemo(() => {
        return expensiveCalculation(number, true);
    }, [number]);

    const themeStyle = {
        backgroundColor: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#333",
        padding: "2rem",
        margin: "2rem 0",
        borderRadius: "10px",
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                    <IconButton onClick={() => navigate("/")} sx={{ mr: 2 }}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h4" component="h1">
                        useMemo Hook
                    </Typography>
                </Box>
                <Typography variant="body1" paragraph>
                    useMemo는 계산 비용이 높은 연산의 결과를 메모이제이션하여
                    성능을 최적화하는 Hook입니다. React 컴포넌트에서 불필요한
                    재계산을 방지하고, 애플리케이션의 성능을 향상시키는데
                    사용됩니다.
                </Typography>

                <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        비용이 높은 계산(Expensive Calculation)이란?
                    </Typography>
                    <Typography variant="body2" paragraph>
                        이 예제에서 사용하는 비용이 높은 계산은 다음과 같은
                        특징을 가집니다:
                    </Typography>
                    <Typography variant="body2" paragraph>
                        1. 1,000,000번의 반복문 실행
                    </Typography>
                    <Typography variant="body2" paragraph>
                        2. 각 반복마다 숫자를 더하는 연산 수행
                    </Typography>
                    <Typography variant="body2" paragraph>
                        3. 콘솔에 로그를 출력하여 계산이 실행되는 시점을 확인
                    </Typography>
                    <Typography variant="body2" paragraph>
                        실제 애플리케이션에서는 다음과 같은 경우가 비용이 높은
                        계산에 해당합니다:
                    </Typography>
                    <Typography variant="body2" paragraph>
                        - 대량의 데이터 정렬 - 복잡한 수학적 계산 - 큰 배열의
                        필터링/매핑 - API 응답 데이터의 가공
                    </Typography>
                </Paper>

                <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        useMemo의 주요 특징
                    </Typography>
                    <Typography variant="body2" paragraph>
                        1. 메모이제이션: 계산 결과를 캐시하여 동일한 입력에 대해
                        재계산을 방지합니다.
                    </Typography>
                    <Typography variant="body2" paragraph>
                        2. 의존성 배열: 지정된 의존성 값이 변경될 때만 재계산을
                        수행합니다.
                    </Typography>
                    <Typography variant="body2" paragraph>
                        3. 성능 최적화: 불필요한 재계산을 방지하여
                        애플리케이션의 성능을 향상시킵니다.
                    </Typography>
                </Paper>

                <Box sx={{ mt: 4, mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        예제 설명
                    </Typography>
                    <Typography variant="body2" paragraph>
                        이 예제에서는 두 가지 버전의 계산을 보여줍니다:
                    </Typography>
                    <Typography variant="body2" paragraph>
                        1. useMemo를 사용하지 않은 경우: 컴포넌트가 리렌더링될
                        때마다 계산이 다시 수행됩니다. 콘솔에서 "[일반] 계산
                        중..." 메시지를 확인할 수 있습니다.
                    </Typography>
                    <Typography variant="body2" paragraph>
                        2. useMemo를 사용한 경우: number 값이 변경될 때만 계산이
                        다시 수행됩니다. 콘솔에서 "[useMemo] 계산 중..."
                        메시지를 확인할 수 있습니다.
                    </Typography>
                    <Typography variant="body2" paragraph>
                        아래에서 숫자를 입력하고 테마를 토글해보세요. 테마를
                        토글할 때는 number 값이 변경되지 않으므로, useMemo를
                        사용한 계산은 재실행되지 않습니다.
                    </Typography>
                </Box>

                <Box sx={{ mt: 4, mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Number Input
                    </Typography>
                    <TextField
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(parseInt(e.target.value))}
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <Button
                        variant="contained"
                        onClick={() => setDark((prevDark) => !prevDark)}
                        sx={{ mb: 2 }}
                    >
                        Toggle Theme
                    </Button>
                </Box>

                <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
                    <Typography variant="h6" gutterBottom>
                        Without useMemo
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Double Number: {doubleNumber}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        이 값은 매 렌더링마다 재계산됩니다. 테마를 토글할 때도
                        계산이 다시 실행되는 것을 콘솔에서 확인할 수 있습니다.
                        콘솔에서 "[일반] 계산 중..." 메시지가 표시됩니다.
                    </Typography>
                </Paper>

                <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                        With useMemo
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Memoized Double Number: {memoizedDoubleNumber}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        이 값은 number가 변경될 때만 재계산됩니다. 테마를 토글할
                        때는 계산이 다시 실행되지 않습니다. 콘솔에서 "[useMemo]
                        계산 중..." 메시지가 표시됩니다.
                    </Typography>
                </Paper>

                <Paper elevation={3} sx={{ p: 2, mt: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        useMemo 사용 시 주의사항
                    </Typography>
                    <Typography variant="body2" paragraph>
                        1. 모든 계산에 useMemo를 사용할 필요는 없습니다. 실제로
                        성능에 영향을 미치는 계산에만 사용하세요.
                    </Typography>
                    <Typography variant="body2" paragraph>
                        2. useMemo는 메모리를 사용하여 결과를 캐시합니다. 너무
                        많은 값을 메모이제이션하면 메모리 사용량이 증가할 수
                        있습니다.
                    </Typography>
                    <Typography variant="body2" paragraph>
                        3. 의존성 배열을 정확하게 지정해야 합니다. 필요한
                        의존성을 누락하면 오래된 값을 사용할 수 있습니다.
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
};

export default UseMemo;
