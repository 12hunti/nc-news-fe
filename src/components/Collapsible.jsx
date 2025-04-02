import { useState } from "react"

function Collapsible ({children, showContent, hideContent}){
    const [visible, setVisible] = useState(false)

    const toggleView = () => {
        setVisible(!visible)
    }
    return (
        <div>
            <button type="button" onClick={toggleView}>
                {visible ? `${hideContent}` : `${showContent}`}
            </button>
            {visible ? children : null}
        </div>
    )
}

export default Collapsible