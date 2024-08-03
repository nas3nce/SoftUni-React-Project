import Button from 'react-bootstrap/Button';

export default function Details() {
    return (
        <div className="detailsContainer">
            <div className="header">
                <h2>ASDASDASDASD</h2>
                <div className="buttons">
                    <Button> asdasd</Button>
                    <Button> asdasd</Button>
                </div>
            </div>
            <div className="imageContainer">
                <img src="\public\images\background.jpg" alt="" />
                <div className="like">
                    {/* <i class="fa-solid fa-heart">22</i> */}
              

                    <span className="fa-stack">
                        <i className="fa-solid fa-heart fa-stack-2x"></i>
                        <p className="fa-stack-1x fa-stack-text fa-inverse"> 87 </p>
                    </span>


                    <Button className='likeBtn' variant="success">
                        Like
                    </Button>

                </div>
            </div>
            <p><strong>Description :</strong> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita hic quisquam aliquid maiores dolorum! Magnam voluptatum tempora accusantium pariatur nesciunt temporibus corrupti tempore, amet enim necessitatibus delectus reprehenderit assumenda error.</p>
            <p><strong>Duration :</strong> 60mins</p>
            <p><strong>Difficulty Level :</strong> Stenious</p>


        </div>
    );
}