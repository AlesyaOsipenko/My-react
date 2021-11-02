import s from './Navigation.module.css'


function Navigation(props) {
    return (

        <div className={s.navigationWrapper}>

            <div className={s.navigationItem}>

                <img className={s.navigationImg} src={props.icon} alt="navigation-img"/>
                <h3 className={s.navigationTitle}>{props.title}</h3>

            </div>

        </div>
        
    );
    }

    export default Navigation;