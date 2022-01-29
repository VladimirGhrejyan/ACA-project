import * as React from "react";
import {useState, useEffect} from 'react';
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./styles.module.css";
import {useNavigate} from 'react-router-dom';

export default function PostCard(props) {
  const { content, title, createdAt, id, onDelete, onLike, likesCount, authorID } = props;
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();
  const [userImage, setUserImage] = useState('') 

  const handleExpandClick = () => {
    setExpanded((prev) => !prev);
  };

  useEffect( () => {
    fetch(`http://localhost:8000/users/${authorID}`)
    .then( res => res.json() )
    .then( res => setUserImage(res.profileImage) )
  } )
  

  return (
    <Card sx={{ maxWidth: '900px', backgroundColor: 'gray', borderRadius: '25px'}}>
      <CardHeader
        avatar={
          <Avatar  aria-label="recipe"
          src={userImage} alt="img" onClick={ () => {
            navigate(`/users/${authorID}`)
          }}
          >
            
          </Avatar>
        }
        
        title={title}
        subheader={createdAt}
      />
      <CardContent sx={{maxWidth: '850px'}}>
        <Typography sx={{wordWrap: "break-word"}} variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <div className={styles.actionsDiv}>
        <IconButton className={styles.actionBtn} aria-label="add to favorites">
          <FavoriteIcon
            onClick={() => onLike(id)}
            sx={{ color: red[likesCount > 0 ? 500 : 0] }}
          />{" "}
          <span>{likesCount ? likesCount : ""}</span>
        </IconButton>
        <IconButton
          className={styles.actionBtn}
          onClick={() => onDelete(id)}
          aria-label="add to favorites"
        >
          <DeleteIcon onClick={handleExpandClick} />
        </IconButton>
      </div>
    </Card>
  );
}
