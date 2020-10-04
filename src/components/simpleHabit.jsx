import React, { useState, useRef, useCallback } from 'react';
import { useEffect } from 'react';
import '../app.css';

// Hook으로 바꾸기
// 장점 : this 안해도 되고 bind 안해도 되고 코드 중복을 줄일수있다.
const SimpleHabit = props => {
	const [count, setCount] = useState(0);
	// useState를 호출하면 실제의 state값(count)과 count를 업데이트할수있는 함수(setCount)를 받아온다.
	// useState의 값은 다시 호출해도 동일한 값을 받아온다.
	const spanRef = useRef();
	// useRef도 useState처럼 다시 호출해도 동일한 값을 받아온다.

	// useCallback 함수 재호출을 막아준다.
	const handleIncrement = useCallback(() => {
		setCount(count + 1);
	});

	useEffect(() => {
		console.log(`mounted & updated! : ${count}`);
	}, [count]); // count : 조건
	// 조건이 변경될때마다(count의 값이 변경될때마다) 호출
	// 조건이 없으면 state나 props가 변경될때마다 호출
	// 빈배열을 넣으면 처음에만 호출

	return (
		<li className="habit">
			<span ref={spanRef} className="habit-name">
				Reading
			</span>
			<span className="habit-count">{count}</span>
			<button className="habit-button habit-increase" onClick={handleIncrement}>
				<i className="fas fa-plus-square"></i>
			</button>
		</li>
	);
};

export default SimpleHabit;
