import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import EditIcon from '@mui/icons-material/Edit'
import InfoIcon from '@mui/icons-material/Info'
import '../../styles/PostCard.css'
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded'
import BookmarkAddedRoundedIcon from '@mui/icons-material/BookmarkAddedRounded'
import { usePosts } from '../../contexts/PostContextProvider'
import { useBasket } from '../../contexts/BasketContextProvider'
import { useFav } from '../../contexts/FavoriteContext'

const PostCard = ({ item }) => {
	const [favorite, setFavorite] = useState(false)

	const { deletePost } = usePosts()
	const { addPostToBasket } = useBasket()
	const { addPostToFavorite, deletePostInFavorite } = useFav()

	const navigate = useNavigate()

	return (
		<div className='card'>
			<Card style={{ boxShadow: 'none', background: 'white' }}>
				<CardMedia
					style={{ borderRadius: '1vw', background: '#000' }}
					component='img'
					alt={item.image}
					// height='140'
					image={item.image}
				/>
				<CardContent>
					<Typography
						className='post-title'
						gutterBottom
						// variant='h4'
						fontSize={'2vw'}
						component='div'
					>
						Author: {item.author}
					</Typography>
					<br />
					<Typography
						className='post-desc'
						gutterBottom
						// variant='h4'
						fontSize={'2vw'}
						component='div'
					>
						Title: {item.title}
					</Typography>
					<br />
					<Typography variant='body2' color='text.success'>
						{item.price}$
					</Typography>
					<br />
				</CardContent>
				<h2 onClick={() => setFavorite(!favorite)}>
					{favorite ? (
						<BookmarkAddedRoundedIcon
							fontSize='large'
							className='addToFavorite'
							onClick={() => deletePostInFavorite(item.id)}
						/>
					) : (
						<BookmarkRoundedIcon
							fontSize='large'
							onClick={() => addPostToFavorite(item)}
							className='addToFavorite'
						/>
					)}
				</h2>

				<div className='btn-block'>
					<Button
						className='cardBtn'
						style={{
							boxShadow: ' 0 4px 5px black',
							margin: '1vw',
						}}
						onClick={() => navigate(`/edit/${item.id}`)}
						variant='contained'
						color='warning'
						size='small'
						// endIcon={<EditIcon />}
					>
						<EditIcon />
					</Button>

					<Button
						className='cardBtn'
						style={{
							boxShadow: ' 0 4px 5px black',
							margin: '1vw',
						}}
						onClick={() => navigate(`/details/${item.id}`)}
						variant='contained'
						size='small'
						// endIcon={<InfoIcon />}
					>
						<InfoIcon />
					</Button>
					<Button
						className='cardBtn'
						style={{
							boxShadow: ' 0 4px 5px black',
							margin: '1vw',
						}}
						onClick={() => deletePost(item.id)}
						size='small'
						variant='contained'
						color='error'
						// endIcon={<DeleteIcon />}
					>
						<DeleteIcon />
					</Button>
					<Button
						className='cardBtn'
						style={{
							boxShadow: ' 0 4px 5px black',
							margin: '1vw',
						}}
						onClick={() => addPostToBasket(item)}
						size='small'
						variant='contained'
						color='success'
						// endIcon={<AddShoppingCartIcon />}
					>
						<AddShoppingCartIcon />
					</Button>
				</div>
			</Card>
		</div>
	)
}

export default PostCard
