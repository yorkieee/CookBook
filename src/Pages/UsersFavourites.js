import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useGetFavourites } from "../hooks/useGetFavourites";

export const UsersFavourites = () => {
  const favourites = useGetFavourites();

  return (
    <Container sx={{ marginTop: 8 }}>
      <Grid container spacing={4}>
        {favourites.map((recipe, id) => (
          <Grid item key={id} xs={12} md={3} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader title={recipe.title} />
              <CardMedia
                component="img"
                height="194"
                src={recipe.image}
                alt=""
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {recipe.description}
                </Typography>

                <Typography paragraph>Ingredients:</Typography>
                <Typography paragraph>{recipe.ingredients}</Typography>
                <Typography paragraph>How to cook:</Typography>
                <Typography paragraph>{recipe.instructions}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

//         <h1 key={id}>\{recipe.title}</h1>
//       ))}
//     </div>
//   );
// };
