import { Card, CardMedia, CardContent, Typography, CardActions, Button, Skeleton } from '@mui/material';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PageLayout from '../../components/PageLayout/PageLayout';
import PlaceTypeIcon from '../../components/PlaceTypeIcon/PlaceTypeIcon';
import DateFormat from '../../constants/DateFormant';
import { RootState } from '../../store';
import { dislikePlace, getPlaceDetails, likePlace } from '../../store/PlaceDetails/ActionCreators';
import formatCapacity from '../../utils/formatCapacity';
import formatDate from '../../utils/formatDate';
import styles from './PlaceDetails.module.scss';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import NotFound from '../NotFound/NotFound';


const PlaceDetails:FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const placeDetails = useSelector((state: RootState) => state.placesDetails);


  useEffect (() => {
    dispatch(getPlaceDetails(id!))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const {
    address,
    capacity,
    createdAt,
    description,
    imageSrc,
    type,
    likes,
    isLiked,

  } = placeDetails[id!] || {};

  const isLoading = placeDetails[id!] === undefined;

  if(placeDetails[id!] === null) {
    return (
      <div>
        <NotFound/>
        </div>
    )
  }

  const handleLikeClick = () => {
    dispatch(likePlace(id!));
  }

  const handleDisLikeClick = () => {
    dispatch(dislikePlace(id!))
  }

  return (
    <PageLayout>
      <div>
          <Card>
            {isLoading && <Skeleton variant='rectangular' height={140} />}
          {imageSrc && <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={imageSrc}
          />}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {address}
              {isLoading && <Skeleton variant='text' width='33%' />}
            </Typography>
          <Typography variant="body2" color="text.secondary">
              {description &&<ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>}
              {isLoading && <Skeleton variant='text' />}
              {isLoading && <Skeleton variant='text' />}
              {isLoading && <Skeleton variant='text' />}
          </Typography>
            <Typography className={styles.subtitle} variant="subtitle2" color="text.secondary">
                {type && <PlaceTypeIcon type={type} />}
                {capacity !== undefined && <p>{formatCapacity(capacity)}</p>}
                {createdAt && formatDate(createdAt, DateFormat.LongDate)}
                {isLoading && <Skeleton variant='text' width='33%' />}
            </Typography>
          </CardContent>
          <CardActions>
            {!isLiked && <Button onClick={handleLikeClick} disabled={isLoading} size="small">{likes} Like</Button>}
            {isLiked && <Button onClick={handleDisLikeClick} disabled={isLoading} size="small" color='error'>{likes} DisLike</Button>}
          </CardActions>
        </Card>
      </div>
    </PageLayout>
  )
}
export default PlaceDetails;