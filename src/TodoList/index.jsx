import React from "react";
import './TodoList.css';

function TodoList(props){
	return (
		<section className="TodoList-container">
			{props.error && props.onError()}
			{props.loading && props.onLoading()}
			{(!props.loading && !props.totalTodos) && props.onEmpty()}
			{!props.filteredTodos.length && Boolean(props.totalTodos) && props.onNoResults()}
			
			<ul>
			{props.filteredTodos.map(props.render)}
			</ul>
		</section>
	);
};

export {TodoList};