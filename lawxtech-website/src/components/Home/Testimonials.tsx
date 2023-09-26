import { Typography, Container } from "@mui/material";





export const Testimonials = () => {
    return(
        <>
            <section className="testimonials">
                    <Container maxWidth="xl">
                        <Typography
                            variant="h4"
                            align="center"
                            sx={{
                            color: "#133167",
                            fontWeight: "bold",
                            fontSize: "1.8rem",
                            marginTop: 6,
                            marginBottom: 3,
                            }}
                        >
                            Testimonials
                        </Typography>
                    </Container>
           
            </section>
        </>
    )
}