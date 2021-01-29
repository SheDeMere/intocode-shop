
import Card from "./Card";

function Content(props) {
    const newData = props.database.map(item => {
        return  <Card product={item} setBought={props.setBought} id={props.setBought.id}/>
    })
    return (
        <div className={'content'}>
            {newData}
        </div>

    );
    }


export default Content;