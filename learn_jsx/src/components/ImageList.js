import ImageShow from "./ImageShow"

const ImageList = ({ImageList}) => {
  
  const renderedImages = ImageList.map(image=><ImageShow image={image}/>) ;
  
  return (

    <div>{renderedImages}</div>
    
  )
}



export default ImageList
