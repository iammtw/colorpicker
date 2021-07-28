import React , {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Colors = () => {

    const [colorNames] = useState([
                    '#1abc9c','#2ecc71','#3498db','#9b59b6','#34495e',
                    '#bdc3c7','#f1c40f','#2980b9','#8e44ad','#e74c3c',
                    '#c0392b','#5f27cd','#00d2d3','#ff9ff3','#48dbfb',
                    '#40407a','#706fd3','#f7f1e3','#34ace0','#33d9b2',
                    '#2c2c54','#474787','#aaa69d','#227093','#218c74'
                ])

    const copyColor = (e) => {
        let color = e.target.innerText;
        if(navigator.clipboard){
            navigator.clipboard.writeText(color);
            navigator.clipboard.readText()
            toast.info(`You have copied ${color} value successfully`, {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }

    return (
        <div className='row'>
           { colorNames.map(color => {
               return <div className="item" key={color} style={{ background: color }} onClick={copyColor}>
                   <div>{color}</div>
               </div>
            })
           }
        </div>
    )
}

export default Colors
