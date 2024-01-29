import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CoffeePackImage from '../images/opencoffeepack.png';
import Button from "@mui/material/Button";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useEffect } from "react";


function BeanPage() {
	const [displayedIndex, setDisplayedIndex] = React.useState(0);
  const [numberOfCards, setNumberOfCards] = React.useState(1);

	const CoffeeData = [
		{
			img: '../images/coffee1.png',
			name: 'Espresse Classico',
			description: 'A staple in Italian coffee culture, Espresso Classico is a rich, full-bodied shot of pure coffee bliss. Sourced from premium Arabica beans, it delivers a smooth yet robust flavor with a delicate crema on top, embodying the essence traditional Italian espresso.'
		},
		{
			img: '../images/coffee2.png',
			name: 'Caffe Crema Dolce',
			description: 'This milder Italian favorite features a velvety, golden crema and a balanced taste. Caffè Crema Dolce is a smooth, aromatic long coffee that combines the gentle sweetness of the bean with a subtle hint of nutty undertones, perfect for a leisurely morning.'
		},
		{
			img: '../images/coffee3.png',
			name: 'Ristretto Intenso',
			description: 'Bold and intense, Ristretto Intenso packs a punch in a small package. Made with a carefully selected blend of Arabica and Robusta beans, it offers a concentrated, darkly roasted flavor with spicy notes, ideal for those who love a strong, assertive coffee.'
		},
		{
			img: '../images/coffee1.png',
			name: 'Decaf Delight',
			description: 'For those who enjoy the rich flavor of coffee without the caffeine, Decaf Delight is the perfect choice. Sourced from high-quality decaffeinated beans, it offers a smooth and balanced taste without compromising on the coffee experience.'
		},
		{
			img: '../images/coffee1.png',
			name: 'Vanilla Dream',
			description: 'Indulge in the sweet and aromatic Vanilla Dream. This flavored coffee combines the richness of premium beans with a hint of vanilla, creating a delightful and comforting beverage that can be enjoyed at any time of the day.'
		}
	];

	const displayNextItem = () => {
		const newIndex = (displayedIndex + 1) % CoffeeData.length;
		setDisplayedIndex(newIndex);
	};
	const displayPreviousItem = () => {
		const newIndex = (displayedIndex - 1 + CoffeeData.length) % CoffeeData.length;
		setDisplayedIndex(newIndex);
	};
  const updateNumberOfCards = () => {
    if (window.innerWidth >= 1280) {
      setNumberOfCards(3);
    } else {
      setNumberOfCards(1);
    }
  };

  useEffect(() => {
    updateNumberOfCards();
    window.addEventListener("resize", updateNumberOfCards);

    return () => {
      window.removeEventListener("resize", updateNumberOfCards);
    };
  }, []); 
	const getCarouselItems = () => {
    const items = [];
    for (let i = 0; i < numberOfCards; i++) {
      const index = (displayedIndex + i) % CoffeeData.length;
      items.push(
        <Grid item key={CoffeeData[index].name} sm={12} md={12} lg={3}>
          <Card sx={{ border: 'none', backgroundColor: '#FFFCE4' }}>
            <CardMedia
              component="img"
              sx={{flex: 1, height: 404, width: 379, objectFit: 'cover', borderRadius: '10px'}}
              src={CoffeeData[index].img}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify'}}>
                <strong>{CoffeeData[index].name}</strong> - {CoffeeData[index].description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      );
    }
    return items;
  };

  return (
    <div style={{ backgroundColor: '#FFFCE4', padding: '20px' }}>
      <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{ marginRight: '20px' }}>
          <h1>OUR CHOICE OF BEANS</h1>
        </div>
        <div>
          <img
            src={CoffeePackImage}
            alt='Coffee Pack'
            style={{ maxWidth: '4vh', height: 'auto', borderRadius: '10px' }}
          />
        </div>
      </Container>
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item sm={12} md={12} lg={1}>
            <ArrowCircleLeftIcon
              color="primary"
              style={{fontSize: 40,width: 90,height: 90,color: '#FFA500'}}
              onClick={displayPreviousItem}
            />
          </Grid>
          {getCarouselItems()}
          <Grid item sm={12} md={12} lg={1}>
            <ArrowCircleRightIcon
              color="primary"
              style={{fontSize: 40,width: 90,height: 90,color: '#FFA500'}}
              onClick={displayNextItem}
            />
          </Grid>
        </Grid>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button
            variant="outlined"
            sx={{border: '2px solid #FFA500',color: '#FFA500'}}>
            View Menu
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default BeanPage;
