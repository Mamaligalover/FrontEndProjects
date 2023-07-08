import './button.styles.scss'

const ButtonComponent =({onClik,title})=>{

 return(
     <>
         <button className='subscribe-button' type='button' onClick={onClik}>{title}</button>
     </>

 )
}

export default ButtonComponent;