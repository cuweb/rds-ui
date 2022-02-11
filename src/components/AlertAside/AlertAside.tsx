import React from 'react'
import Ublock from '../Ublock/Ublock'
import Alert from '../Alert/Alert'

export interface AlertAsideProps {
    type?: 'info' | 'error' | 'success' | 'warning'
    title: string
    content?: string
    handleClose?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

const AlertAside: React.FC<AlertAsideProps> = ({
    type = 'error',
    title,
    content,
    handleClose,
}): JSX.Element => {
    const aprops = {
        type,
        title,
        content,
        handleClose,
    }
    return (
        <Ublock>
            <div className='b-alertaside'>
                <Alert {...aprops} />
            </div>
        </Ublock>
    )
}
export default AlertAside
