const ImageShow = ({image,mykey}) => {
    //console.log(key);// undefined
    console.log(mykey);
  
    return (
    <img alt={image.description} src={image.urls.small}/>
  )
}

export default ImageShow