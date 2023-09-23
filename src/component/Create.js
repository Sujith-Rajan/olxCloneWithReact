import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import Navbar from "./Navbar";
import { FirebaseContext } from "../store/Context";
import { AuthContext } from "../store/Context";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [textarea, setTextArea] = useState("");
    const [image, setImage] = useState("");
    const {firebaseApp} = useContext(FirebaseContext);
    const {user} =useContext(AuthContext);
    
    const date = new Date()
    const navigate = useNavigate()

    
    const onHandleCreate=(e)=>{
      e.preventDefault()
      firebaseApp.storage().ref(`/image/${image.name}`).put(image).then((snapshot)=>{
        snapshot.ref.getDownloadURL().then((url)=>{
        // console.log('put')
        firebaseApp.firestore().collection('products').add({
          item_id:user.uid,
          item_name:name,
          item_price:price,
          item_catogory:category,
          item_desc:textarea,
          image:url,
          create_date:date.toDateString()
        }).then(()=>{
         navigate('/')
         
        })
        })
      })
     
    }

    return (
        <Fragment>
            <Navbar />
            <card>
                <div className="centerDiv">
                    <form > 
                        <br />
                        <input
                            className="input"
                            type="text"
                            id="fname"
                            name="Name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <br />

                        <br />
                        <input
                            className="input"
                            type="text"
                            id="fname"
                            name="category"
                            placeholder="Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                        <br />

                        <br />
                        <input
                            className="input"
                            type="number"
                            id="fname"
                            name="Price"
                            placeholder="Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <br />
                        <textarea
                            placeholder="description"
                            value={textarea}
                            onChange={(e) => setTextArea(e.target.value)}
                        ></textarea>
                    </form>
                    <br />
                    <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ""}></img>
                    <form>
                        <br />
                        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                        <br />
                        <button onClick={onHandleCreate} className="uploadBtn" >upload and Submit</button>
                    </form>
                </div>
            </card>
        </Fragment>
    );
};

export default Create;
