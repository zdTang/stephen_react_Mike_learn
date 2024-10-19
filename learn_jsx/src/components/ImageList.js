import ImageShow from "./ImageShow"

const ImageList = ({ImageList}) => {
  
  const renderedImages = ImageList.map(image=><ImageShow key={image.id} image={image}/>) ;
  
  return (

    <div>{renderedImages}</div>
    
  )
}



export default ImageList
