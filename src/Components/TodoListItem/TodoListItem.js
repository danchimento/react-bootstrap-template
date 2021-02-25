import "./TodoListItem.scss";

export default function TodoListItem(props) {
    return (
        <div className="tz-todo-list-item d-flex flex-row">
            <div className="tz-todo-list-item-number rounded bg-info text-white p-1 me-3 mb-2">
                <span>{props.number}</span>
            </div>
            <div className="tz-todo-list-item-title text-muted p-1">{props.item.title}</div>
        </div>
    )
}