import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
const SelectiveCard = ({
  title,
  description,
  subdescription,
  img,
  link,
  onClick,
}) => {
  
  return (
    <Card
      className="CCPut"
      sx={{ maxWidth: 450, width: 450 }}
      onClick={onClick}
    >
      <CardActionArea className=" h-100" href={link != null ? link : ""}>
        <CardMedia
          component="img"
          height="250"
          image={img}
          alt="green iguana"
          loading="lazy"
        />
        
        <CardContent>
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            fontSize={"16px"}
            color={"#333"}
            lineHeight={"16px"}
            fontWeight={"bold"}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="#666"
            fontSize={"12px"}
            letterSpacing={"0.05em"}
            margin={" 2em 0 0 0"}
          >
            {description}
          </Typography>
          {subdescription == null ? (
            <></>
          ) : (
            <Typography
              variant="body2"
              color="#999"
              fontSize={"10px"}
              letterSpacing={"0.05em"}
              margin={" 2em 0 0 0"}
            >
              {subdescription} Functions
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SelectiveCard;
