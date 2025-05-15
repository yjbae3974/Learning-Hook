import { Button, Container, Typography, Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
    const hooks = [
        { path: "/state", name: "useState" },
        { path: "/effect", name: "useEffect" },
        { path: "/ref", name: "useRef" },
        { path: "/memo", name: "useMemo" },
        { path: "/callback", name: "useCallback" },
        { path: "/reducer", name: "useReducer" },
        { path: "/context", name: "useContext" },
    ];

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 4, textAlign: "center" }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    React Hooks Practice
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                    Click on a hook to learn more about it
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    {hooks.map((hook) => (
                        <Grid item key={hook.path}>
                            <Button
                                component={Link}
                                to={hook.path}
                                variant="contained"
                                size="large"
                                sx={{ minWidth: 200 }}
                            >
                                {hook.name}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Home;
