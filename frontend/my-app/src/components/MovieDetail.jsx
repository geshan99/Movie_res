import React, {useEffect, useState} from "react";
import '../style/MovieDetail.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from "axios";
import {useParams} from "react-router-dom";
import {CDropdownDivider} from "@coreui/react";
import Checkout from './Checkout';
import { NavLink } from "react-router-dom";



export default function MovieDetail(props) {

    const [selectedTheater,setSelectedTheater]=useState('');
    const [showtime,setShowtime]=useState('');

    const[input,setInput] = useState(0);

    let [MovieName,setMovieName] = useState("");
    const[TicketPrice,setTicketPrice] = useState("");
    const[TheaterLocation,setTheaterLocation] = useState("");
    const[SeatNumbers,setSeatNumbers] = useState("");
    const[MovieShowTimes,setMovieShowTimes] = useState("");
    const[ResDate,setResDate] = useState("");

   
    

    const { id } = useParams();
    const [data, setData] = useState([]);
    const [theater, setTheater] = useState('');

    useEffect(() => {
        function getPackage() {
            axios.get(`http://localhost:8000/movie/Movies/${id}`).then((res) => {
                setData(res.data.post);
                //console.log(res.data);
            }).catch((err) => {
                console.log(err);
            })
        }
        function getTheater() {
            axios.get("http://localhost:8002/the/Theaters").then((res) => {
                setTheater(res.data.data.data);
                console.log(res.data);
                console.log(theater);
            }).catch((err) => {
                console.log(err);
            })
        }

        getTheater();
        getPackage();
    }, [])

    function sendData(e) {
        e.preventDefault();
        const newCart = {
            MovieName,
            TicketPrice,
            TheaterLocation,
            SeatNumbers,
            MovieShowTimes,
            ResDate
        }

        axios.post("http://localhost:8004/cart/AddCart", newCart).then(() => {
            console.log(newCart);
            alert("Cart Added");
        }).catch((err) => {
            alert(err);
        });
    }

    const handleSelect=(e)=>{
        console.log(e);
        setSelectedTheater(e)
    }
    const handleSelectShowTime=(e)=>{
        console.log(e);
        setShowtime(e)
    }

    const handleInputChange=(e)=>{
        setInput(e.target.valueAsNumber || e.target.value);
    }

    console.log(MovieName);
    const {Movie,onAdd} = props;
    return(
        <div className="moviedetails">
            <div className="details">
                <div className="image">
                    <img src={data.img} alt="" />
                    <div id="movie-sub-info" class="row">
                       <div id="synopsis" class="col-sm-10 col-md-13 col-lg-12">
                           <h3>Plot summary</h3>
                              <p class="hidden-sm hidden-md hidden-lg">In New York, the arrogant Dr. Stephen Strange is a talented neurosurgeon with a huge ego. After a car accident, Dr. Strange damages his fingers and loses control of his hands. The surgeon, Christine Palmer, who was his lover, tries to help him.
                               But Dr. Strange unsuccessfully spends his savings searching for an experimental treatment for his fingers. When Dr. Strange learns that the paraplegic Jonathan Pangborn walked again, he seeks him out and is told he was healed in Kamar-Taj. Dr. Strange travels to Katmandu where 
                               he meets the sorcerer Mordo and is introduced to The Ancient One. She discloses the astral plan and other dimensions to him and explains that Earth is protected in the mystical plan by three Sanctums (in New York, London, and Hong Kong). However, her former protégé, Kaecilius, 
                               has contacted the powerful demon Dormammu in the Dark Dimension and wants to destroy the three Sanctums with his minions to let the Dark Dimension, where time does not exist and anyone can live forever, to rule the world. Will The Ancient One, Dr. Strange and Mordo save the world? </p>





        </div></div>
                    </div>
                <div className="box">
                    <div className="row">
                        <h1>{data.MovieName}</h1>
                    </div>

                    <div className="content1">
                        <p>{data.MovieDescription}</p>
                    </div>
                    <div className="App container">

                        <DropdownButton
                            alignRight
                            title="Select Theater"
                            id="dropdown-menu-align-right"
                            onSelect={handleSelect}
                        >
                            <Dropdown.Item eventKey="Liberty">Liberty</Dropdown.Item>
                            <Dropdown.Item eventKey="Sky Lite">Sky Lite</Dropdown.Item>
                            <Dropdown.Item eventKey="Savoy">Savoy</Dropdown.Item>

                        </DropdownButton>
                        <CDropdownDivider/>
                        <h4 style={{color:"black"}}>You selected {selectedTheater}</h4>
                    </div>

                    <div className="App container">

                        <DropdownButton
                            alignRight
                            title="Select ShowTime"
                            id="dropdown-menu-align-right"
                            onSelect={handleSelectShowTime}
                        >
                            <Dropdown.Item eventKey="10.30">10.30</Dropdown.Item>
                            <Dropdown.Item eventKey="2.30">2.30</Dropdown.Item>
                            <Dropdown.Item eventKey="6.30">6.30</Dropdown.Item>

                        </DropdownButton>
                        <CDropdownDivider/>
                        <h4 style={{color:"black"}}>You selected {showtime}</h4>
                    </div>

                    <div>
                        <label style={{color:"black"}}>Number of seats</label>
                        <br/>
                        <input min={0} style={{color:"black"}} type="number" value={input} onChange={handleInputChange} placeholder="sheet count"/>
                        <br/><br/>
                        <label style={{color:"black"}}>Price : {input*500} </label>
                        <br/><br/>
                        <label style={{color:"black"}}>Date</label>
                        <br/>
                        <input min={0} style={{color:"black"}} type="date" placeholder="sheet count"/>
                        <br/><br/>
                    </div>
                    <button className="cart" >Add to Cart</button>
                    <br />
                    <NavLink to="/Checkout" className="btn btn-primary">Checkout</NavLink>
                </div>
            </div>
        </div>
    )
}