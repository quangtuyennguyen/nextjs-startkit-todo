
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'
import useTranslation from '../../hooks/useTranslation'
import LocaleSwitcher from '../LocaleSwitcher'
import TodoHeading from '../TodoHeading'
import TodoItem from '../TodoItem'

export default () => {
	const { t } = useTranslation();
	const initialState = [
		{
			id: 'vnode',
			text: 'A simple initial todo',
			completed: false,
		},
	]
	const [todos, setTodos] = useState(initialState)
	const [text, setText] = useState('')

	const addTodo = (text) => {
		const todo = {
			id: Math.random().toString(36).substring(2),
			text,
			completed: false,
		}
		setTodos([...todos, todo])
	}

	const removeTodo = (todo) => {
		const filteredTodos = todos.filter((v) => v !== todo)
		setTodos(filteredTodos)
	}

	const updateTodo = (todo) => {
		const updatedTodos = todos.map((v) => (v.id === todo.id ? todo : v))
		setTodos(updatedTodos)
	}

	const completedTodos = todos.filter((todo) => todo.completed)

	const handleAddTodo = (e) => {
		e.preventDefault()
		const trimmedText = text.trim()

		trimmedText && addTodo(trimmedText)
		setText('')
	}

	const handleTextChange = (e) => {
		setText(e.target.value)
	}

	return (
		<>
			<div className="wrapper">
				<header>
					<img
						src="/static/img/android-chrome-192x192.png"
						alt="Logo"
						width="192"
						height="192"
					/>
				</header>
				<LocaleSwitcher />
				<TodoHeading />
				<Paper component="main" elevation={3}>
					<form onSubmit={handleAddTodo} >
						<TextField
							fullWidth
							value={text}
							margin="normal"
							label={t('inputPlaceholder')}
							onChange={handleTextChange}
							inputProps={{ 'aria-label': 'What must be done?' }}
						/>
						{!!todos.length && (
							<Grid container justify="space-between">
								<Grid item>{`${t('total')}: ${todos.length}`}</Grid>
								<Grid item>{`${t('complete')}: ${completedTodos.length}`}</Grid>
							</Grid>
						)}
					</form>
					<ul>
						{todos.map((todo, i) => (
							<TodoItem
								key={i}
								todo={todo}
								updateTodo={updateTodo}
								removeTodo={removeTodo}
							/>
						))}
					</ul>
				</Paper>
			</div>
			<style>
				{`
				
				.wrapper {
					max-width: 400px;
					margin: auto;
					margin-top: 40px;
					text-align: center;
				}

				form {
					padding: 16px;
				}

				ul {
					list-style: none;
					padding: 0;
					margin-bottom: 0;
					border-radius: 0 0 4px 4px;
				}
					`}
			</style>
		</>
	)
}
