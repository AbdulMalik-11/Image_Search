import './render.css'
const Showimage = ({ image }) => {
    return (
        <img src={image.urls.small} key={image.id} alt={image.alt_description} />
    );
} 
function showimg({ images }) {
    const renderimages = images.map((image) => {
        return (
            <div>
                <Showimage image={image} />
            </div>
        );
    })
    return (
        <div id="individual">{renderimages}</div>
    );
}
export default showimg;