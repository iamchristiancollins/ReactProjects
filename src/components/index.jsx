// single selection
// multiple selection

export default function Accordian() {

    const [selected, setSelected] = useState(null)

    function handleSingleSelection(getCurrentId){
        console.log(getCurrentId);
        setSelected(getCurrentId);

    }

    function handleMultipleSelection(getCurrentId){
        let cpyMultiple = {...multiple};
        const findIndexOfCurrentId = cpyMultipleindexOf(getCurrentId);

        console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId == -1){cpyMultiple.push(getCurrentId)}
        else{cpyMultiple.splice(findIndexOfCurrentId, 1)}

        setMultiple(cpyMultiple);

    }

    console.log(selected);
    return <div className="wrapper ">
        <div className="accordian">{
            data && data.lenth > 0 ?
                data.map(dataItem => (
                    <div className="item">
                        <div onClick={handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.name}</h3>
                            <span>+</span>
                        </div>
                        {
                            selected == dataItem.id ?
                            <div className="content">{dataItem.email}</div>
                            : null
                        }
                        
                    </div>
                ))
            : <div>No data found!</div>
        }

        </div>
    </div>
}