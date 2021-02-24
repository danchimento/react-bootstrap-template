import './NavCard.scss';

export default function NavCard(props) {
    return (
        <div class="tz-nav-card">
            <div class="tz-nav-card-header">
                {props.title}
            </div>
            <div class="tz-nav-card-body">
                {props.children}
            </div>
        </div>
    )
}