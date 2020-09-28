import styles from './../style/commonStyle'
const translateProps=props=>{
    let _styles;

    if(props.enable){
        _styles={...styles.default}
    }
    else{
        _styles={...styles.disable} 
    }

    const newProps={...props,style:_styles}

    return newProps;

}

// Higher order component 
export default WrappedComponent =>{
    return function wrappedRender(args){
        return WrappedComponent(translateProps(args))
    }
    
}