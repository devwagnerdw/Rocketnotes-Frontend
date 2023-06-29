import {FiPlus, FiX} from 'react-icons/fi';


import { Container } from './style';


export function NoteItem({isNew, value, onClick, ...rest}){

  return(
    <Container isNew={isNew}>
     <input
       type='texto'
       value={value}
       readOnly={!isNew}
       {...rest}
      />

      <button
       type="button"
       onClick={onClick}
       className={isNew ? 'button-add': 'button-delete'}
       >
        { isNew ? <FiPlus/> : <FiX/>}

      </button>
       

    </Container>
  )
}