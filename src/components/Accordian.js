import React,{useState} from 'react'

function Accordian({items}) {

    const [activeIndex, setactiveIndex] = useState(null)
    
    const renderedItems=items.map((item,index) => {

        const active= index ===activeIndex ? 'active' : ''; 
        const onTitleClicked = (index) =>{
            setactiveIndex(index);
        };





        return(
        <React.Fragment key={item.title}>
            <div className={`title ${active}`} onClick={()=>onTitleClicked(index)}>
                <i className="dropdown icon">
                </i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    )
    }) 

return (
    <div className="ui styled accordion">{renderedItems}
    </div>
  )
}

export default Accordian