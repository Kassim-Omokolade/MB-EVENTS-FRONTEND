import React from 'react'
import category1 from "../../assets/category1.png"
import category2 from "../../assets/category2.png"
import category3 from "../../assets/category3.png";
import SectionHeading from '../SectionHeading';
import { Link } from 'react-router-dom';

const EventCategories = () => {
    const categories = [
      {
        id: 1,
        image: category1,
        category: "Concert",
      },
      {
        id: 2,
        image: category2,
        category: "Education",
      },
      {
        id: 3,
        image: category3,
        category: "Party",
      },
    ];
  return (
    <div className='container my-3'>
           <SectionHeading content="Event category" />
           <div className='d-flex justify-content-between align-items-center my-2 flex-wrap'>
            {
                categories.map((c)=>{
                    return <div key="c.id" className='category-item position-relative mx-auto mx-xl-0 my-2'>
                        <img src={c.image} alt="category" />
                           <div className="overlay"></div>
                       <button className="btn btn-dark category-btn">
                           <Link to="/events" className="text-white text-decoration-none">
                                 {c.category}
                            </Link>
                        </button>
            </div>

                   

                }
                )
            }
           </div>
           
    </div>
  )
}

export default EventCategories
