import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {BottomNavigationAction} from '@mui/material'

const Button2 = (props) => {
  return (
    <button>
      <ShoppingCartIcon/>
      {props.number}
    </button>
  )
}

export default Button2