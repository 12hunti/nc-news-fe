import { useState } from "react"

function Collapsible ({children, contentDescriptor}){
    const [visible, setVisible] = useState(false)

    const toggleView = () => {
        setVisible(!visible)
    }
    return (
        <div>
            <button type="button" onClick={toggleView}>
                {visible ? `Hide ${contentDescriptor}` : `View ${contentDescriptor}`}
            </button>
            {visible ? children : null}
        </div>
    )
}

export default Collapsible