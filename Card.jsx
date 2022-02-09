import React, { useState } from 'react'
import swal from 'sweetalert'
import CardData from './CardData'
const Card = (props) => { 
    const clicker = () => {

        swal("Do you have activation key ?",
            {
                content: "input",
            })
            .then((value) => {
                if (value == "yes") {
                    swal("Enter Activation Key ! :", {
                        content: "input",
                    })
                        .then((value) => {
                            if (value == 'vipulweb') {

                                swal({
                                    title: "Accepted",
                                    text: "Are you sure to download your file ! ",
                                    icon: "success",
                                    buttons: true,
                                    // button: "Aww yiss!",
                                    dangerMode: true,
                                })
                                    .then((willDelete) => {
                                        if (willDelete) {
                                            window.open(props.link, "_blank")
                                        } else {
                                            // window.open(props.link, "_blank");
                                            swal("Your File is not download");
                                        }
                                    });
                            }
                            else {
                                swal("Wrong!", "You Activation key is not correct!", "warning");
                            }
                            // swal(`You typed: ${value}`);
                        });
                }
                if (value == "no") {
                   swal("you don't have activation key for getting key you need to subscribe our site do you agree (yes or No) and solve it ((5*4)-15+3) format is [yes or no 3]",{
                       content:"input",
                   })
                   .then((value=>{
                    if (value == "yes 8") {
                        swal("Subscribed 😊👍❤️", "Your Activation key is - vipulweb", "success");
                    }
                    if (value === "no") {
                        // swal("Wrong", "You!", "success");
                        swal("Thank You ! Your ans is No😏")
                    }
                    else if (value == "yes" || value !== "yes 8") {
                        swal("Wrong!", "Your puzzle answer is wrong!", "error");
                        //   alert("puzzle wrong ! 👎")
                    }
                   }))
                    // let ans = prompt("you dont have activation key for gettin key you need to subscribe our site do you agree (yes or No) and solve it ((5*4)-15+3) format is [yes or no 3]")
                    // if (ans == "yes 8") {
                    //     swal("Subscribed 😊👍❤️", "Your Activation key is - vipulweb", "success");
                    // }
                    // if (ans === "no") {
                    //     // swal("Wrong", "You!", "success");
                    //     alert("Thank You ! Your ans is No😏")
                    // }
                    // else if (ans == "yes" || ans !== "yes 8") {
                    //     swal("Wrong!", "Your puzzle answer is wrong!", "error");
                    //     //   alert("puzzle wrong ! 👎")
                    // }
        
                }

            })
        // let key = prompt("Do you have activation key ?");
        // if (key == "yes") {
        //     let key1;
        //     key1 = (prompt("Enter Activation key ❤️"))
        //     if (key1 == 'vipulweb') {
        //         window.open(props.link, "_blank");
        //     }
        //     else 
        //     {
        //         swal("Wrong!", "You Activation key is not correct!", "warning");
        //     }
        // }
        // if (key == "no") {
        //    let ans=prompt("you dont have activation key for gettin key you need to subscribe our site do you agree (yes or No) and solve it ((5*4)-15+3) format is [yes or no 3]")
        //     if(ans=="yes 8")
        //     {
        //         swal("Subscribed", "Your Activation key is - vipulweb", "success");
        //         // window.alert("Thank You You have Subscribed 😊👍❤️ ");
        //         // alert("You Activation key is -vipulweb");
        //     }
        //     if(ans==="no")
        //     {
        //         // swal("Wrong", "You!", "success");
        //         alert("Thank You ! Your ans is No😏")
        //     }
        //     else if(ans=="yes" || ans!=="yes 8")
        //     {
        //         swal("Wrong!", "Your puzzle answer is wrong!", "error");
        //         //   alert("puzzle wrong ! 👎")
        //     }
           
        // }
        
    }

    return (
        <>
            
            <div className='cards'>
                <div className="card">
                    <div className='course_img_box'>
                        <img src={props.img} alt="" className="imags" />
                    </div>
                    <div className="card_content">
                    <div>
                        <h1 className="card_title">{props.title}</h1>
                        <p className="card_desp">{props.descrip}</p>
                    </div>
                    <div className='card_btn'>
                    {/* <a href="#course_section">click</a> */}
                        <button  onClick={clicker}>Download Pdf <i class="fas fa-download"></i></button>
                    </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Card
