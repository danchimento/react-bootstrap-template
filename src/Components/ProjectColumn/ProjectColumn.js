import './ProjectColumn.scss';

export default function ProjectColumn(props) {
    let className = "tz-project-column pt-2 rounded border overflow-hidden ";
    if (!props.canAdd) className += "pb-2 "
    if (props.className) className += props.className;

    return (
        <div className={className}>
            <div className="text-muted font-weight-semi-bold mb-3 ms-2">{props.title}</div>
            
            <div className="mx-1">
                {props.children}
            </div>

            {props.canAdd ? 
            <div className="fz-xxlarge text-info text-center mt-3 bg-white font-weight-light border-top">+</div> : ""}
        </div>
    )
}