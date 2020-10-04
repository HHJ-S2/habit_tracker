import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
	handleIncrement = habit => {
		this.props.onIncrement(habit);
	};

	handleDecrement = habit => {
		this.props.onDecrement(habit);
	};

	handleDelete = habit => {
		this.props.onDelete(habit);
	};

	handleAdd = name => {
		this.props.onAdd(name);
	};

	render() {
		return (
			<>
				<HabitAddForm onAdd={this.handleAdd} />
				<ul>
					{
						this.props.habits.map(habit => (
							<Habit
								habit={habit}
								key={habit.id}
								onIncrement={this.props.onIncrement}
								onDecrement={this.props.onDecrement}
								onDelete={this.props.onDelete}
							/>
						)) // 바로 리턴할때는 중괄호 -> 소괄호 (arrow fun 문법)
					}
				</ul>
				<button className="habits-reset" onClick={this.props.onReset}>
					Reset All
				</button>
			</>
		);
	}
}

export default Habits;
